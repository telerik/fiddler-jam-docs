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

    ```html
        <html lang="en">
            <head>
                <meta charset='utf-8'>
                <meta name='viewport' content='width=device-width,initial-scale=1'>
            
                <title>Fiddler Jam Embedded</title>

                <script src="https://downloads.getfiddler.com/jam-embedded/fiddler-jam-embedded.js" id="jamEmbeddedScript" crossorigin="anonymous" async></script>
                <script>
                    const jamEmbeddedScript = document.getElementById('jamEmbeddedScript');
                    jamEmbeddedScript.addEventListener('load', () => {
                        const jam = window['_fiddlerJamEmbedded'];
                        jam.init({
                            apiKey: 'API_KEY'
                        });

                        // Custom implementation follows here
                    });
                </script>
            </head>
        </html>        
    ```

    >important The Fiddler Jam API key is unique per organization and grants access to your organizational workspaces.

1. Create a `service-worker.js` file and import the service worker script from the following CDN link: https://downloads.getfiddler.com/jam-embedded/fje-service-worker.js.

    By default, the `service-worker.js` file must be on the same level as the HTML page containing the `fiddler-jam-embedded.js` CDN script. You can change the default path of the worker file through the `InitOptions` object and its `serviceWorkerPath` property. Below is an example of importing the service worker from the Fiddler CDN.
    
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
| `options`           | `StartOptions`       | An object used during the Fiddler Jam Embedded startup. Indicates which capturing options will be turned on. The default values are  `captureScreenshots = true, captureConsole = true, captureStorage = true, captureVideo = true, videoFormat = "dom" | "pixel-perfect", openNewTab = false, reloadPage = false, maskSensitiveData = true`  |


### Methods

The Fiddler Jam Embedded object provides the following methods:

| Method Name       |   Accepted Arguments   | Description    |
| ---------------     |  ---------- | ------------  | -----------                                       |
| `init(options: InitOptions)`| `InitOptions` is an object of type `{ apiKey: string, serviceWorkerPath:string }` | Initialize the Fiddler Jam Embedded process with an unique API key through the `apiKey` argument. The `serviceWorkerPath` is not a mandatory argument and if omitted will default to `./service-worker.js`. |
| `start(options: StartOptions)` |  `StartOptions` is an object of type `{ captureScreenshots: boolean,  captureConsole: boolean,  captureStorage: boolean, captureVideo: boolean, videoFormat: string; openNewTab: boolean, reloadPage: boolean, maskSensitiveData: boolean, maskSelector: string }` | An asynchronous method that starts the capturing with the explicitly activated start options. |
| `startVideoCapturing()` |  n/a |  An asynchronous method that explicitly ask for user permission to start video recording (pixel-peffect video only) |
| `stop()` | n/a | An asynchronous method that stops the capturing and sets the state property to `"stopped"`. |
| `share(options: ShareOptions)` |  `ShareOptions` is an object of type `{ workspaceId: string, submittedBy: string, password: string }` | An asynchronous method that returns a string with the generated Fiddler Jam Log share URL. The `ShareOptions` argument is optional and if omitted, the log will be automatically uploaded to the default organizational workspace. |
| `reset()` |  n/a | Stops and completely resets the capturing, its state, and its properties. |
| `addErrorEventListener(handler)` |  `ErrorEventHandler` of type `(error => void)` | An event listener to detect errors during the capturing processes. |
| `addStateChangedEventListener(handler)` |  `StateChangedEventHandler` of type `(state) => void)` | An event listener to detect changes in the `state` property of the Fiddler Jam Embedded object. |


### StartOptions Specifics

Fiddler Jam Embedded can capture additional information apart from the HTTP/HTTPS traffic. Use the `StartOptions` to specify the information the recorded Jam log should include.

The `start` method requires a mandatory argument of the `StartOptions` object type:

```JavaScript
let startOptions =  {
    captureScreenshots: true, // adds or removes screenshots of user interactions
    captureConsole: true, // adds or removes developers logs
    captureStorage: true, // adds or removes local storage information
    captureVideo: true, // enables or disable video recording
    videoFormat: "dom", // sets the video recording to "dom" or "pixel-perfect" video formats
    openNewTab: false, // when set to true will explcitly start the log recording in a new browser tab
    reloadPage: false, // when set to true will explicitly reload the page prior to the klog recording start
    maskSensitiveData: true, // enalbes or disables sensitive data masking in video recording (DOM format only)
    maskSelector: null // accepts comma-separated list of selectors for masking (for example: ".my-class, #custom-id")
};
```

All settings are optional, with default values shown in the example above. The following rules apply:

- The `captureVideo` enables or disables video capturing with the default format "dom".
- When `maskSensitiveData` is enabled, but the `maskSelector` is omitted, the masking will use a built-in list of selectors commonly used in payment and transaction forms.
- When custom selectors are added through the `maskSelector` string property, the built-in list of selectors will be dismissed.


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

The shared log will be encrypted if a password is set. The password requires you to consider that it has to:

- Be at least eight characters long.
- Contain both lowercase and uppercase letters.
- Contain at least a single number.

Alternatively, you can use the `share` method without the optional `ShareOptions` argument. In that case, the log won't be encrypted and will be uploaded to the default organizational workspace.


### DOM versus Pixel-Perfect Video Recording

Apart from the HTTPS capturing, a Fiddler Jam log might contain a video recording when the `captureVideo` option is set to `true`. By default, the recorded video will be of DOM type. Still, you can control the type of the video recording by explicitly setting the `videoFormat` option to one of the following string values:

- **"dom":** The DOM video recording is supported on all major browsers (Chrome, Edge, Safari, Firefox, Brave, etc.) and produces a video that records all user activity except one from iframes. The main benefits of this recording type are the excellent browser compatibility, it supports masking sensitive data, and it doesn't require explicit permission from the user (the video recording starts immediately after calling the start() method).

- **"pixel-perfect"**: The pixel-perfect video uses native recording options but is currently supported only on Chromium-based browsers (Chrome, Edge, Brave, Vivaldi). It produces a video that records all user activities and can be set to record different tabs, the whole screen, etc. It will also record video from nested iframes. The pixel-perfect recording requires explicit permission from the end-user (through a series of native popups).


### Masking Sensitive Data

The DOM video recording supports automatic masking of sensitive data through the `maskingSensitiveData` boolean property and the `maskSelector` string property. By default, the sensitive data masking is enabled (even if the `maskingSensitiveData` is omitted) and uses a built-in list of selectors commonly used in payment forms. To overwrite the built-in selectors, you can use the `maskSelector` string property and provide a comma-separated list of selectors.

Example usage of `maskSelector` with custom list of selectors

```javascript
maskSensitiveData: true,
masSelector: '[autocomplete="cc-number"],form[action*="oppwa.com"],[name="addCreditCardNumber"],[name^="credit_card"],#checkout,.card-num,.card-number'
```


## Basic Implementation

The following code snippets demonstrate a basic Fiddler Jam Embedded implementation.

- Service worker file (for example, a file called `./service-worker.js`).

    When no file path is provided through the `serviceWorkerPath` argument, then the `service-worker.js` file must be on the same level as the `index.html` file.

```javascript
self.importScripts(`https://downloads.getfiddler.com/jam-embedded/fje-service-worker.js`);
```

- The main HTML page (for example, a file called `./index.html`).

    The HTML page must contain script reference to the main Jam Embedded source file and your own Jam Embedded implementation.

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width,initial-scale=1'>
    
        <title>Fiddler Jam Embedded</title>

        <!-- Loading the main Fiddler Jam Embedded source file asynchronously -->
        <script src="https://downloads.getfiddler.com/jam-embedded/fiddler-jam-embedded.js" 
                id="jamEmbeddedScript" crossorigin="anonymous" async>
        </script>
        <script>
            const jamEmbeddedScript = document.getElementById('jamEmbeddedScript');
            jamEmbeddedScript.addEventListener('load', () => {
                // Loading the custom implementation from an external file (local-jam-embedded-implementation.js)
                // Alternatively, you could directly add the implementation code
                const implementationScript = window.document.createElement('script');
                implementationScript.src = './local-jam-embedded-implementation.js';
                document.head.appendChild(implementationScript);
            });
        </script>
        <style>
            .my-class {color:green;background-color: lightgray;}
        </style>
    </head>
    
    <body>
        <h1>Fiddler Jam Embedded Demo</h1>
        <div>
            <div>
                <div>
                    <input type="checkbox" id="captureVideo" name="captureVideo" />
                    <label for="captureVideo">Capture Video</label><br/>
                    <form name="myForm">
                        <input type="radio" name="myRadios" id="dom" value="dom" />
                        <label for="dom">videoFormat: "dom"</label><br/>
                        <input type="radio" name="myRadios" id="pixel" value="pixel-perfect" />
                        <label for="pixel" id="pixel-lbl">videoFormat: "pixel-perfect"</label>
                    </form>
                    <div class="my-class">
                        <label>Set <b>captureVideo</b> to <b>true</b> and use <b>videoFormat</b> to enable different video recording options.</label><br/>
                        <label>The <b>videoFormat</b> option accepts <b>"dom"</b> and <b>"pixel-perfect"</b> string values. When omitted, the default recording type will be <b>"dom"</b></label>
                    </div>
                    </div><br/> 
                <div>
                    <input type="checkbox" id="maskSensitiveData" name="maskSensitiveData" />
                    <label for="maskSensitiveData">Mask Sensitive Data</label><br/>
                    <label for="maskSelector">Selectors to mask (comma-separated):</label>
                    <input type="text" id="maskSelector" class="test" name="maskSelector" value=".my-class"><br/>
                    <div class="my-class">
                        <label id="mask-test-lbl">Use selector .my-class to test masking of data in video recordings</label>
                    </div>
                </div><br/>
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
            </div><br/>
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
const captureVideoCheckbox = document.getElementById('captureVideo');
const domRadioInput = document.getElementById('dom');
const pixelRadioInput = document.getElementById('pixel');
const maskSensitiveDataCheckbox = document.getElementById('maskSensitiveData');
const maskSelectorField = document.getElementById('maskSelector');
const captureScreenshotsCheckbox = document.getElementById('captureScreenshots');
const captureStorageCheckbox = document.getElementById('captureStorage');
const captureLogsCheckbox = document.getElementById('captureLogs');
const reloadPageCheckbox = document.getElementById('reloadPage');

let captureInfo = '';

// Setting the default capture options
let captureOptions = {
    captureScreenshots: false,
    captureConsole: true,
    captureStorage: true,
    captureVideo: true,
    videoFormat: "dom", // "dom" or "pixel-perfect"
    openNewTab: false,
    reloadPage: false,
    maskSensitiveData: true,
    maskSelector: ".my-class" // Note that adding your own custom selectors overwrites the built-in Jam Embedded masking selectors
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

// Initialization of the Jam Embedded process. The serviceWorkerPath can be used to set alternative worker path.
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
    if (jam.options) captureOptions = jam.options;

    captureVideoCheckbox.checked = captureOptions.captureVideo;
    captureOptions.videoFormat === "dom" ? domRadioInput.checked = true : domRadioInput.checked = false;
    captureOptions.videoFormat === "dom" ? pixelRadioInput.checked = false : pixelRadioInput.checked = true;
    maskSensitiveDataCheckbox.checked = captureOptions.maskSensitiveData;
    captureScreenshotsCheckbox.checked = captureOptions.captureScreenshots;
    captureStorageCheckbox.checked = captureOptions.captureStorage;
    captureLogsCheckbox.checked = captureOptions.captureConsole;

    jam.state === 'started' ? document.getElementById('btn-stop').disabled = false : document.getElementById('btn-stop').disabled = true; 
}

function initSettingsEvents() {
    captureVideoCheckbox.addEventListener('change', (e) => {
        captureOptions.captureVideo = e.target.checked;
    });

    const userAgentString = navigator.userAgent;
    let safariAgent = userAgentString.toLowerCase().indexOf('safari') > -1;
    let chromeAgent = userAgentString.toLowerCase().indexOf('chrome') > -1;
    let firefoxAgent = userAgentString.toLowerCase().indexOf('firefox') > -1;
    if ((chromeAgent) && (safariAgent)) safariAgent = false;
    if (firefoxAgent || safariAgent) {
        pixelRadioInput.disabled = true;
        document.getElementById('pixel-lbl').innerHTML = 'videoFormat: "pixel-perfect" not available for Firefox and Safari';
   }

    const rad = document.myForm.myRadios;
    for (var i = 0; i < rad.length; i++) {
        rad[i].addEventListener('change', function() {
            captureOptions.videoFormat = this.value; // "dom" | "pixel-perfect"

            captureOptions.videoFormat === "pixel-perfect" ? maskSensitiveDataCheckbox.disabled = true : maskSensitiveDataCheckbox.disabled = false;
            captureOptions.videoFormat === "pixel-perfect" ? maskSelectorField.disabled = true : maskSelectorField.disabled  = false;
            captureOptions.videoFormat === "pixel-perfect" ? document.getElementById("mask-test-lbl").innerHTML = "Video masking is not currently supported for pixel-perfect videos!" : document.getElementById("mask-test-lbl").innerHTML = "Use selector .my-class to test masking of data in video recordings"
        });
    }

    maskSensitiveDataCheckbox.addEventListener('change', (e) => {
        captureOptions.maskSensitiveData = e.target.checked;
    });

    maskSelectorField.addEventListener('input', (e) => {
        console.log("The video reocrding will mask the following selectors: " + e.target.value);
        captureOptions.maskSelector = e.target.value;
    });

    captureScreenshotsCheckbox.addEventListener('change', (e) => {
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
    document.getElementById('capture-info').innerHTML = 'Started successfully!<br/>jam.state = ' + jam.state + ';<br/>captureVideo = ' + captureOptions.captureVideo +';<br/>videoFormat = "'+ captureOptions.videoFormat +'";<br/>captureScreenshots = ' + captureOptions.captureScreenshots +';<br/>captureConsole = ' + captureOptions.captureConsole +';<br/>captureStorage = ' + captureOptions.captureStorage +';';
}

// Starts pixel-perfect video recording (async method)
// Use this method when explicit permissoin is required to start video recording (for example, the user denied permission after calling start())
async function startVideo() {
    await jam.startVideoCapturing();

    document.getElementById('btn-start').disabled = true;
    document.getElementById('btn-stop').disabled = false;
    document.getElementById('btn-share').disabled = false;
    document.getElementById('capture-info').innerHTML = 'Started successfully! (jam.state = ' + jam.state + ')';
}

// Stop capture (async method)
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
async function share() {
    document.getElementById('capture-info').innerHTML = 'Processing generated log! (jam.state = ' + jam.state + ')';
    document.getElementById('jam-share-url').innerHTML = 'Please wait! Uploading the log and generating share URL ...';

    // The jam.share() method accepts argument of type { workspaceId: string, submittedBy: string, password: string }
    const jamShareUrl = await jam.share(); // when the ShareOptions are omitted, the is uploaded to the default organization workspace without encryption protection.
    document.getElementById('capture-info').innerHTML = 'Log generation completed! (jam.state = ' + jam.state + ')';
    document.getElementById('jam-share-url').innerHTML = 'Share URL: ' +  '<a href="' + jamShareUrl + '" target="_blank">'+ jamShareUrl +'</a>';
    document.getElementById('last-error').innerHTML = 'Use "Reset Capture" to clean and prepare Jam Embedded for new capture';
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

If you want to regenerate the key, please get in touch with us at [support@getfiddler.com](mailto:support@getfiddler.com).

## Limitations and Log Specifics

While incorporating your own Fiddler Jam Embedded tool into your website, note that some specifics are related to different browsers and the core Fiddler Jam Embedded functionalities.

1. A generated Fiddler Jam Log contains captured HTTP/HTTPS traffic, and (depending on the pre-set `StartOptions`) screenshots, storage information, video recording, and development console logs. Consider informing your end-users about the possibility of revealing sensitive data when a log is shared.

1. You can **record a DOM video** while setting  `captureVideo: true` and `videoFormat: 'dom'` (default values). The DOM video recording is not pixel-perfect, and does not contain recordings from iframes. This method for video recording **does not require explicit confirmation** from the user.

1. DOM video recordings are supported on Firefox, Safari, and on all Chromium-based browsers. 

1. The DOM video recording starts without explicit permission from the end-user, so consider warning your users about the possibility of revealing sensitive data.

1. Masking of sensitive data is supported only for DOM video recording.

1. You can **record a pixel-perfect video** through while setting `captureVideo: true` and `videoFormat: 'pixel-perfect'` . The video recording is pixel perfect and contains recordings from iframes. This method for video recording **requires explicit confirmation** from the user (refer to points below).

1. Pixel-perfect video is currently supported only on Chromium-based browsers (like Chrome, Edge, Brave, etc.). 

1. Pixel-perfect video recordings are **not** supported on Firefox and Safari.

1. To capture a pixel-perfect video recording without reloading a page, you can call the `start()` method (through `reloadPage: false`, `captureVideo: true`, and `videoFormat: 'pixel-perfect'`).

1. You can turn off the video recording while setting `captureVideo: false`. The log will still contain the network capture and other explicitly enabled data like console logs, screenshots, etc.

1. When capturing a pixel-perfect video recording, a Chromium-based browser (like Chrome, Edge, Brave, Vivaldi, and similar) pops a native window once the `start()` method is called. The window provides multiple recording options to record the current tab, a new tab, a whole OS window, or the entire screen. It would be best if you used the Fiddler Jam reporting within the current browser instance, so it is strongly recommended to continuously guide your users to select the **This Tab** option.

1. Browser cookies are not recorded and won't be contained in the generated Fiddler Jam log.
