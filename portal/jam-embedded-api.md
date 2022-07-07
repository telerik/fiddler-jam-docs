---
title: Jam Embedded API
description: "Learn how to use the Fiddler Jam API to embed the Fiddler Jam log service into your webpage."
slug: fj-embed-api
publish: false
position: 56
---

# Fiddler Jam Embedded

Fiddler Jam Embedded is a JavaScript library that provides an API to integrate the capture and share functionalities into your page while using your UI. 

## Integrate Fiddler Jam into Your App

Follow the steps below to include and use the Fiddler Jam Embedded library in your webpage:

1. Obtain your unique Fiddler Jam Embedded API key. [Learn more on how to generate your Fiddler Jam API key here...](#generating-api-key)

1. Import the Fiddler Jam API script into your HTML page from the following CDN link: https://downloads.getfiddler.com/jam-embedded/fiddler-jam-embedded.js.

1. Initialize the Fiddler Jam Embedded object with your Fiddler Jam API key. The Fiddler Jam Embedded object is attached to the [`window`](https://www.w3schools.com/jsref/obj_window.asp) object of the page as a property called `_fiddlerJamEmbedded`. Use the `load` event of the Fiddler Jam Embedded object to initialize the Jam API and to add your custom implementation.

    ```JavaScript
    <html lang="en">
        <head>
            <meta charset='utf-8'>
            <meta name='viewport' content='width=device-width,initial-scale=1'>
        
            <title>Fiddler Jam Embedded</title>

            <script src="https://downloads.getfiddler.com/jam-embedded/fiddler-jam-embedded.js" id="jamEmbeddedScript" async></script>
            <script>
                const jamEmbeddedScript = document.getElementById('jamEmbeddedScript');
                jamEmbeddedScript.crossOrigin = 'anonymous';  // set crossOrigin to enable CORS (and to be able to use the load event below)
                jamEmbeddedScript.addEventListener('load', () => {
                    const jam = window['_fiddlerJamEmbedded'];
                    jam.init({
                        apiKey: 'API_KEY'
                    });

                    // custom implementation follows here
                });
            </script>
        </head>
    </html>        
    ```

    >important The Fiddler Jam API key is unique per organization and grants access to your organizational workspaces.

1. Create a `service-worker.js` file and import the service worker script from the following CDN link: https://downloads.getfiddler.com/jam-embedded/fje-service-worker.js.

    By default, the `service-worker.js` file is expected to be on the same level as the HTML page that contains the `fiddler-jam-embedded.js` CDN script. You can change the default path of the worker file through the `InitOptions` object and its `serviceWorkerPath` property. Below is an example of importing the service worker from the Fiddler CDN.
    
    ```JavaScript
    self.importScripts(`https://downloads.getfiddler.com/jam-embedded/fje-service-worker.js`);
    ```

## Fiddler Jam API

The Fiddler Jam Embedded object (`_fiddlerJamEmbedded`) is attached to [the `window` DOM object](https://www.w3schools.com/jsref/obj_window.asp). 

### Properties

The Fiddler Jam Embedded object provides the following properties:


| Property Name       | Type               | Description                 |
| ---------------     | ------------       | ------------                |
| `state`             | `CaptureState`       | Indicates the current process state (enumeration with the following string values : `"ready"`, `"initialized"`, `"registered"`, `"starting"`, `"started"`, `"stopped"` `"sharing"`, `"shared"`).    |
| `options`           | `StartOptions`       | An object used during the Fiddler Jam Embedded startup. Indicates which capturing options will be turned on. The default values are  `captureScreenshots = true, captureConsole = true, captureStorage = true, captureVideo = true, captureDom = true, openNewTab = false, reloadPage = false`  |


### Methods

The Fiddler Jam Embedded object provides the following methods:

| Method Name       |   Accepted Arguments   | Description    |
| ---------------     |  ---------- | ------------  | -----------                                       |
| `init(options: InitOptions)`| `InitOptions` is an object of type `{ apiKey: string, serviceWorkerPath:string }` | Initialize the Fiddler Jam Embedded process with an unique API key through the `apiKey` argument. The `serviceWorkerPath` is not a mandatory argument and if omitted will default to `./service-worker.js`. |
| `start(options: StartOptions)` |  `StartOptions` is an object of type `{ captureScreenshots: boolean,  captureConsole: boolean,  captureStorage: boolean, captureVideo: boolean, captureDom: boolean, openNewTab: boolean, reloadPage: boolean }` | An asynchronous method that starts the capturing with the explicitly activated start options. |
| `startVideoCapturing()` |  n/a |  An asynchronous method that starts the video recording on non-Chromium browsers like Firefox and Safari. |
| `stop()` | n/a | An asynchronous method that stops the capturing and sets the state property to `"stopped"`. |
| `share(options: ShareOptions)` |  `ShareOptions` is an object of type `{ workspaceId: string, submittedBy: string, password: string }` | An asynchronous method that returns a string with the generated Fiddler Jam Log share URL. The `ShareOptions` argument is optional and if omitted, the log will be automatically uploaded to the default organizational workspace. |
| `reset()` |  n/a | Stops and completely resets the capturing, its state, and its properties. |
| `addErrorEventListener(handler)` |  `ErrorEventHandler` of type `(error => void)` | An event listener to detect errors during the capturing processes. |
| `addStateChangedEventListener(handler)` |  `StateChangedEventHandler` of type `(state) => void)` | An event listener to detect changes in the `state` property of the Fiddler Jam Embedded object. |


### ShareOptions Specifics

The `share` method accepts an optional argument of the `ShareOptions` object type:

```JavaScript
let shareOptions = {
    workspaceId: "<the-unique-workspace-id>",
    submittedBy: "niliev-page-admin",
    password: "custom-password-here"
};
```

To obtain the `<the-unique-workspace-id>`, open https://jam.getfiddler.com/ and navigate to the desired workspace. Then, extract the workspace ID from the browser address bar by copying the last API endpoint. For example, the following URL https://jam.getfiddler.com/spaces/0d6694d0-88c5-4112-a5c4-0788f9b25dd0 loads a workspace with ID `0d6694d0-88c5-4112-a5c4-0788f9b25dd0`. 

The shared log will be encrypted if a password is set. The password must be at least eight characters.

Alternatively, you can use the `share` method without the optional `ShareOptions` argument. In that case, the log won't be encrypted and will be uploaded to the default organizational workspace.


## Basic Implementation

The following code snippets demonstrate a basic Fiddler Jam Embedded implementation.

- Service worker file (for example, a file called `./service-worker.js`).

    When no file path is provided through the `serviceWorkerPath` argument, then the `service-worker.js` file must be on the same level as the `index.html` file.

    ```JavaScript
    // the file service-worker.js must be on the same level as the index.html file and contains the import to the Jam service worker
    self.importScripts(`https://downloads.getfiddler.com/jam-embedded/fje-service-worker.js`);
    ```

- The main HTML page (for example, a file called `./index.html`).

    The HTML page must contain script reference to the main Jam Embedded source file and your own Jam Embedded implementation.

    ```HTML
    <html lang="en">
        <head>
            <meta charset='utf-8'>
            <meta name='viewport' content='width=device-width,initial-scale=1'>
        
            <title>Fiddler Jam Embedded</title>

            <!-- Loading the main Fiddler Jam Embedded source file asynchronously -->
            <script src="https://downloads.getfiddler.com/jam-embedded/fiddler-jam-embedded.js" id="jamEmbeddedScript" async></script>
            <script>
                const jamEmbeddedScript = document.getElementById('jamEmbeddedScript');
                jamEmbeddedScript.crossOrigin = 'anonymous'; // set crossOrigin to enable CORS (and to be able to use the load event below)
                jamEmbeddedScript.addEventListener('load', () => {
                    // Adding the custom implmenetaion
                    const implementationScript = window.document.createElement('script');
                    implementationScript.src = './local-jam-embedded-implementation.js';
                
                    document.head.appendChild(implementationScript);
                });
            </script>
        </head>
        
        <body>
            <h1>Fiddler Jam Embedded Demo</h1>
            <div>
                <div>
                    <div>
                        <input type="checkbox" id="captureDom" name="captureDom" />
                        <label for="captureDom">Capture DOM</label><br />
                        <label>With <b>captureDom = true</b>, and <b>captureVideo = true</b> (default values), you can start capturing with video recording (iframes are not recorded) without any user interaction (no explicit permission required).</label><br />
                        <label>With <b>captureDom = false</b>, and <b>captureVideo = true</b>, you can start capturing with pixel-percet video recording (captures iframes), but also requires an explcit permission from the user.</label>
                    </div>
                    <br />
                    <div>
                        <input type="checkbox" id="captureVideo" name="captureVideo" />
                        <label for="captureVideo">Capture Video</label><br />
                        <label>Use this option alongside captureDom to enable different video recording options.</label>
                    </div><br />
                    <div>
                        <input type="checkbox" id="captureScreenshots" name="captureScreenshots" />
                        <label for="captureScreenshots">Capture Screenshots</label>
                    </div>
                    <div>
                        <input type="checkbox" id="captureStorage" name="captureStorage" />
                        <label for="captureStorage">Capture Storage</label>
                    </div>
                    <div>
                        <input type="checkbox" id="captureLogs" name="captureLogs" />
                        <label for="captureLogs">Capture Logs</label>
                    </div>
                </div><br />
                <div>
                    <button id="btn-start" onclick="start()">Start Capture</button>
                    <button id="btn-start-video" onclick="startVideo()" hidden>Start Video</button>
                    <button id="btn-stop" onclick="stop()" disabled>Stop Capture</button>
                    <button id="btn-share" onclick="share()" disabled>Share</button>
                </div>
                <button id="btn-reset" onclick="reset()">Reset Capture</button>
                <div id="capture-info"></div>
                <div id="jam-share-url"></div>
                <div id="last-error-info"></div>
                <div id="last-error"></div> 
            </div>
        </body>
    </html>
    ```

- The Jam Embedded local script implementation (for example, a file `./local-jam-embedded-implementation.js`).

    Note that you must replace `<API_KEY>` with your actual Fiddler Jam Embedded API key.

    ```JavaScript
    // The Fiddler Jam Embedded object attached to the DOM window object through _fiddlerJamEmbedded.
    const jam = window['_fiddlerJamEmbedded'];

    // Checkbox elements from the UI in index.html
    const captureDomCheckbox = document.getElementById('captureDom');
    const captureVideoCheckbox = document.getElementById('captureVideo');
    const captureScreenshotsCheckbox = document.getElementById('captureScreenshots');
    const captureStorageCheckbox = document.getElementById('captureStorage');
    const captureLogsCheckbox = document.getElementById('captureLogs');

    let captureInfo = '';

    // Setting the default capture options
    let captureOptions = {
        captureScreenshots: false,
        captureConsole: true,
        captureStorage: true,
        captureVideo: true,
        captureDom: true,
        openNewTab: false,
        reloadPage: false
    };

    // Use the error event listener to catch possible issues
    jam.addErrorEventListener(e => {
        document.getElementById('last-error').innerHTML = 'Error: ' + e;
        console.error(e);

        if (e.name === 'CaptureDisplayError') {
            document.getElementById('last-error-info').innerHTML = 'Started without video (e.g. Permission Denied). You need to start video recording manually (use "Start Video") or continue the capturing without video recording (Use "Stop Recording" when the capturing is complete.)';
            document.getElementById('btn-start-video').hidden = false;
        }
    });

    // Initialization of the Jam Embedded process. 
    // Additionally, the serviceWorkerPath can be passed with an alternative worker path.
    jam.init({
        apiKey: '<API_KEY>',
        serviceWorkerPath: 'service-worker.js',
    });

    initSettingsEvents();
    updateUI();

    jam.addStateChangedEventListener(newState => {
        updateUI();
    });

    function updateUI() {
        if (jam.options) {
            captureOptions = jam.options;
        }

        captureDomCheckbox.checked = captureOptions.captureDom;
        captureVideoCheckbox.checked = captureOptions.captureVideo;
        captureScreenshotsCheckbox.checked = captureOptions.captureScreenshots;
        captureStorageCheckbox.checked = captureOptions.captureStorage;
        captureLogsCheckbox.checked = captureOptions.captureConsole;

        if (jam.state === 'started') {
            document.getElementById('btn-stop').disabled = false;
        }
    }

    function initSettingsEvents() {
        captureDomCheckbox.addEventListener('change', (e) => {
            captureOptions.captureDom = e.target.checked;
        });

        captureVideoCheckbox.addEventListener('change', (e) => {
            captureOptions.captureVideo = e.target.checked;
        });

        captureStorageCheckbox.addEventListener('change', (e) => {
            captureOptions.captureScreenshots = e.target.checked;
        });

        captureStorageCheckbox.addEventListener('change', (e) => {
            captureOptions.captureStorage = e.target.checked;
        });

        captureLogsCheckbox.addEventListener('change', (e) => {
            captureOptions.captureConsole = e.target.checked;
        });
    }

    // Start capture (async method)
    async function start() {
        await jam.start(captureOptions);

        document.getElementById('btn-start').disabled = true;
        document.getElementById('btn-stop').disabled = false;
        document.getElementById('btn-share').disabled = false;
        document.getElementById('capture-info').innerHTML = 'Started successfully! (jam.state = ' + jam.state + ')';
    }

    // Starts pixel-perfect video recording (async method).
    // This method needs to be explicitly called with the user interaction for a non-Chromium browser.
    async function startVideo() {
        await jam.startVideoCapturing();

        document.getElementById('btn-start').disabled = true;
        document.getElementById('btn-stop').disabled = false;
        document.getElementById('btn-share').disabled = false;
        document.getElementById('capture-info').innerHTML = 'Started successfully! (jam.state = ' + jam.state + ')';
    }

    // Stop capture (async method).
    async function stop() {
        await jam.stop();

        document.getElementById('btn-start').disabled = true;
        document.getElementById('btn-stop').disabled = true;
        document.getElementById('btn-share').disabled = false;
        document.getElementById('capture-info').innerHTML = 'Capturing Stopped! (jam.state = ' + jam.state + ')';
        document.getElementById('last-error').innerHTML = '';
        document.getElementById('last-error-info').innerHTML = '';
    }

    // Generates and uploads a Fiddler Jam log share URL (async method). 
    // The logs are automatically added to the default organizational workspace in the Fiddler Jam portal.
    async function share() {
        document.getElementById('capture-info').innerHTML = 'Processing generated log! (jam.state = ' + jam.state + ')';
        document.getElementById('jam-share-url').innerHTML = 'Please wait! Uploading the log and generating share URL ...';

        // The jam.share() method accepts argument of type { workspaceId: string, submittedBy: string, password: string }
        const jamShareUrl = await jam.share(); // when the ShareOptions are omitted, the is uploaded to the default organization workspace without encryption protection.
        document.getElementById('capture-info').innerHTML = 'Log generation completed! (jam.state = ' + jam.state + ')';
        document.getElementById('jam-share-url').innerHTML = 'Share URL: ' +  '<a href="' + jamShareUrl + '" target="_blank">'+ jamShareUrl +'</a>';
        document.getElementById('last-error').innerHTML = '';
        document.getElementById('last-error-info').innerHTML = '';

        await navigator.clipboard.writeText(jamShareUrl);
    }

    async function reset() {
        document.getElementById('btn-start').disabled = false;
        document.getElementById('btn-start-video').hidden = true;
        document.getElementById('btn-stop').disabled = true;
        document.getElementById('btn-share').disabled = true;

        await jam.reset();

        document.getElementById('capture-info').innerHTML = 'Fiddler Jam Embedded reset and ready for new capture! (jam.state = ' + jam.state + ')';
        document.getElementById('jam-share-url').innerHTML = '';
        document.getElementById('last-error').innerHTML = '';
        document.getElementById('last-error-info').innerHTML = '';
    }
    ```

The above snippets create a basic HTML page that utilizes most Fiddler Jam Embedded functionalities. Different browsers, like Edge, Chrome, Brave, and other non-Chromium browsers such as Firefox and Safari, may show behavioral differences.

## Generating API Key

You need a unique API key to use the Fiddler Jam Embedded API. The API key will allow you to initialize the Jam Embedded script, upload recorded logs to your organizational workspaces, and generate public or protected share links. Only licensed portal users can request Fiddler Jam quota and thus render their unique organizational API key. Follow these steps to generate your Fiddler Jame Embedded API key:

- Contact us and request your Fiddler Jam Embedded quota. Proceed to the next step only once your organizational quota is set.

- Login into the [Fiddler Jam portal](https://jam.getfiddler.com).

- Navigate to the Fiddler Jam Portal menu (top-right corner) and follow the **Settings > Embedded** (the option is available only after the organizational quota is set).

- Click on **API Key: Generate** link.

- Copy your Fiddler Jam Embedded API key.

If you want to regenerate the key, please contact us at [support@getfiddler.com](mailto:support@getfiddler.com).

## Limitations and Browser Specifics

While incorporating your own Fiddler Jam Embedded tool into your website, note that some specifics are related to different browsers and the core functionalities.

1. You can **record a DOM video** while setting  `captureDom: true` and `captureVideo: true` (default values). The DOM video recording is not pixel-perfect, and won't contain recordings from iframes. This method for video recording **does not require explicit confirmation** from the user.

1. You can **record a pixel-perfect video** through while setting `captureDom: false` and `captureVideo: true`. The video recording is pixel perfect and will contain recordings from iframes. This method for video recording **requires explicit confirmation** from the user (refer to points 6 and 7 below).

1. To capture a pixel-perfect video recording without reloading a page, you can call the `start()` method (through `reloadPage: false`, `captureDom: false` and `captureVideo: true`) on all browsers.

1. You can entirely turn off the video recording while setting `captureDom: false` and `captureVideo: false`. The log will still contain the network capture, and other exlicitly enabled data like console logs, screenshots, etc.

1. (Firefox only) To record a pixel-perfect video recording with reload of a page (through `reloadPage: true`, `captureDom: false`, and `captureVideo: true`), you need an explicit user interaction that calls the `startVideoCapturing()` once the page is fully reloaded. Chromium browsers are less strict and will allow video recording on a reloaded page without secondary user interaction.

1. (Safari only) Pixel-perfect video recording (`captureDom: false` and `captureVideo: true`) is **not** currently supported on Safari (macOS).

1. When capturing a pixel-perfect video recording, a Chromium-based browser (like Chrome, Edge, Brave, Vivaldi, and similar) pops a native window once the `start()` method is called. The window provides multiple recording options to record the current tab, a new tab, a whole OS window, or the entire screen. It would be best if you used the Fiddler Jam reporting within the current browser instance, so it is strongly recommended to continuously guide your users to select the **This Tab** option.

    ![Use "This Tab" to record the Fiddler Jam portal](../images/portal/report/fj-report-share.png)

1. When capturing a pixel-perfect video recording, the Firefox browser pops a native window once the `start()` method is called, where the user is explicitly asked to allow `<your-page-url-here>` to see the selected screen. The window provides multiple recording options (from all active OS windows plus the opportunity to record the entire OS window). You have to use the Fiddler Jam reporting within the current browser instance, so it is strongly recommended to continuously guide your users to select the **_<your-page-name-here> - Mozzila Firefox_** window.

    ![Choosing the Fiddler Jam Portal window in Firefox as a recording option](../images/portal/report/fj-report-firefox-allow.png)

1. Browser cookies are not recorded and won't be contained in the generated Fiddler Jam log.
