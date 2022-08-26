---
title: Jam Embedded API
description: "Learn how to use the Fiddler Jam Embedded API to directly embed the Fiddler Jam log HTTPS capturing, video recording, and other services into your webpage."
slug: fj-embed-api
publish: true
position: 80
previous_url: /portal/jam-embedded-api
---

# Fiddler Jam Embedded

Fiddler Jam Embedded is a JavaScript library that provides an API to implement and embed the HTTPS capturing, video recording, and all other Jam extension functionalities on your page. The tool can be integrated while [using custom UI](#integrate-jam-embedded-with-custom-ui) or the [default layout](#integrate-jam-embedded-with-the-default-layout) as provided by the tool. 

## Integrate Jam Embedded with custom UI

Follow the steps below to include and use the Fiddler Jam Embedded library in your webpage:

* Obtain your unique Fiddler Jam Embedded API key. [Learn more on how to generate your Fiddler Jam API key here...](#generating-api-key)

* Import the Fiddler Jam API script into your HTML page from the following CDN link: https://downloads.getfiddler.com/jam-embedded/fiddler-jam-embedded.js.

* Initialize the Fiddler Jam Embedded object with your Fiddler Jam API key. The Fiddler Jam Embedded object is attached to the [`window`](https://www.w3schools.com/jsref/obj_window.asp) object of the page as a property called `_fiddlerJamEmbedded`. Use the `load` event of the Fiddler Jam Embedded object to initialize the Jam API and to add your custom implementation.

```html
    <html lang="en">
        <head>
            <meta charset='utf-8'>
            <meta name='viewport' content='width=device-width,initial-scale=1'>
        
            <title>Fiddler Jam Embedded</title>

            <script src="https://downloads.getfiddler.com/jam-embedded/fiddler-jam-embedded.js" 
                    id="jamEmbeddedScript" crossorigin="anonymous" async>
            </script>
            <script>
                const jamEmbeddedScript = document.getElementById('jamEmbeddedScript');
                jamEmbeddedScript.addEventListener('load', () => {
                    const jam = window['_fiddlerJamEmbedded'];
                    jam.init({
                        apiKey: '<API_KEY>'
                    });

                    /* Custom Fiddler Jam Embedded implementation follows here... */
                });
            </script>
        </head>
        <body>
            <!-- Create a custom user interface for Fiddler Jam Embedded -->
        <body>
    </html>        
```

>important The Fiddler Jam API key is unique per organization and grants access to your organizational workspaces.

* Create a `service-worker.js` file and import the service worker script from the following CDN link: https://downloads.getfiddler.com/jam-embedded/fje-service-worker.js. The `service-worker.js` file must be on the same level as the HTML page containing the `fiddler-jam-embedded.js` CDN script. You can change the default path of the worker file through the `InitOptions` object and its `serviceWorkerPath` property. Below is an example of importing the service worker from the Fiddler CDN. 
    
```JavaScript
self.importScripts(`https://downloads.getfiddler.com/jam-embedded/fje-service-worker.js`); // minified script for production
```

>tip Instead of coding your own user interface, you can directly use [the Fiddler Jam Embedded API default layout](#integrate-jam-embedded-with-the-default-layout). The default layout provides a pre-built minimalistic user interface ready for embedding into your websites.


## Integrate Jam Embedded with the Default Layout

Fiddler Jam Embedded provides an option to directly use the tool's default layout and skip the creation of a custom user interface. Follow the steps below to use the Fiddler Jam Embedded in your page through the default layout:

* Obtain your unique Fiddler Jam Embedded API key. [Learn more on how to generate your Fiddler Jam API key here...](#generating-api-key)

* Import the Fiddler Jam API script into your HTML page from the following CDN link: https://downloads.getfiddler.com/jam-embedded/fiddler-jam-embedded.js.

* Initialize the Fiddler Jam Embedded object with your Fiddler Jam API key. The Fiddler Jam Embedded object is attached to the [`window`](https://www.w3schools.com/jsref/obj_window.asp) object of the page as a property called `_fiddlerJamEmbedded`. Use the `load` event of the Fiddler Jam Embedded object to initialize the Jam API and to add your custom implementation.


```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width,initial-scale=1'>
        <title>Fiddler Jam Embedded</title>

        <script src="https://downloads.getfiddler.be/jam-embedded/fiddler-jam-embedded.js" 
                id="jamEmbeddedScript"
                crossorigin="anonymous" async></script>
        <script>
            const jam = window._fiddlerJamEmbedded;
            jam.init({
                apiKey: '<API_KEY>',
                defaultLayout: {
                    enabled: true,
                    containerId: 'fje-container' /* (optional, the 'fje-container' value is set by default) */

                    /* startOptions are optional, when omitted will default to the following values */
                    // startOptions: {
                    //   captureConsole: true,
                    //   captureStorage: true,
                    //   captureVideo: true,
                    //   videoFormat: 'dom',
                    //   openNewTab: false,
                    //   reloadPage: false,
                    //   maskSensitiveData: true,
                    //   maskSelector: ''
                    // }, 

                    /* shareOptions optional, when omitted will default to the following values */
                    // shareOptions: {
                    //     workspaceId: "", // Uploads to default workspace (as no workspace ID is explicitly provided).
                    //     submittedBy: "",
                    //     password: "",
                    //     sessionDurationInSeconds: null // Null by default and will upload the whole DOM capturing.
                    // } 
                }
            });
        </script>
    </head>
    <body>
        <div id="fje-container"></div> <!-- Use this container to load the Jam Embedded default layout -->
    </body>
</html>
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
| `init(options: InitOptions)`| `InitOptions` is an object of type `{ defaultLayout: DefaultLayout, apiKey: string, serviceWorkerPath:string }` | Initialize the Fiddler Jam Embedded process with an unique API key through the `apiKey` argument. The `serviceWorkerPath` is not a mandatory argument and, if omitted, will default to `./service-worker.js`. |
| `start(options: StartOptions)` |  `StartOptions` is an object of type `{ captureScreenshots: boolean,  captureConsole: boolean,  captureStorage: boolean, captureVideo: boolean, videoFormat: string; openNewTab: boolean, reloadPage: boolean, maskSensitiveData: boolean, maskSelector: string }` | An asynchronous method that starts the capturing with the explicitly activated start options. |
| `startVideoCapturing()` |  n/a |  An asynchronous method that explicitly ask for user permission to start video recording (pixel-perfect video only) |
| `stop()` | n/a | An asynchronous method that stops the capturing and sets the state property to `"stopped"`. |
| `share(options: ShareOptions)` |  `ShareOptions` is an object of type `{ workspaceId: string, submittedBy: string, password: string, sessionDurationInSeconds: number }` | An asynchronous method that returns a string with the generated Fiddler Jam Log share URL. The `ShareOptions` argument is optional; if omitted, the log automatically uploads to the default organizational workspace. |
| `reset()` |  n/a | Stops and completely resets the capturing, its state, and its properties. |
| `addErrorEventListener(handler)` |  `ErrorEventHandler` of type `(error => void)` | An event listener to detect errors during the capturing processes. |
| `addStateChangedEventListener(handler)` |  `StateChangedEventHandler` of type `(state) => void)` | An event listener to detect changes in the `state` property of the Fiddler Jam Embedded object. |


### InitOption Specifics

Use the `InitOptions` to specify the required initialization options, such as the unique API key, to change the default path where the service worker file resides, and to enable/disable the usage of the default layout.

```JavaScript
let initOption = {
    /* 
        (optional) Use only when embedding the default layout provided by the library. 
        Whem ommited, the user must provide custom UI corresponding the API functionalities.
        Learn more about the Fiddler Jam Embedded default layout object [here](#defaultlayout-object-specifics)
    */
    defaultLayout: DefaultLayout,

    /*
        (required) Expects the unique API key as generated from the Fiddler Jam portal.
    */
    apiKey: string, 

    /* 
        (optional) Allows changing the default path to the service worker (by default: './service-worker.js').
    */
    serviceWorkerPath:string
}
```


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
    openNewTab: false, // when set to true will explicitly start the log recording in a new browser tab
    reloadPage: false, // when set to true will explicitly reload the page prior to the log recording start
    maskSensitiveData: true, // enables or disables sensitive data masking in video recording (DOM format only)
    maskSelector: null // accepts comma-separated list of selectors for masking (for example: ".my-class, #custom-id")
};
```

All settings are optional, with default values shown in the example above. The following rules apply:

- The `captureVideo` enables or disables video capturing with the default format "pixel-perfect". Use `videoFormat` to explicitly change the format to "dom".
- When "pixel-perfect" is selected as the video recording format, the captured video is uploaded in its entity. When "dom" is selected as the video recording format, you can submit only a portion of the video using the `sessionDurationInSeconds` from the 'ShareOptions' object.
- When `maskSensitiveData` is enabled, but the `maskSelector` is omitted, the masking will use a built-in list of selectors commonly used in payment and transaction forms.
- When custom selectors are added through the `maskSelector` string property, the built-in list of selectors will be dismissed.


### ShareOptions Specifics

The `share` method accepts an optional argument of the `ShareOptions` object type:

```JavaScript
let shareOptions = {
    workspaceId: "<unique-workspace-id>",
    submittedBy: "<username>",
    password: "<custom-password-here>",
    sessionDurationInSeconds: 42 // set a portion of capturing (from its end) that will be uploaded. Works only with DOM video recording ON.
};
```

To obtain the `<unique-workspace-id>`, open https://jam.getfiddler.com/ and navigate to the desired workspace. Then, extract the workspace ID from the browser address bar by copying the last API endpoint. For example, the following URL https://jam.getfiddler.com/spaces/0d6694d0-88c5-4112-a5c4-0788f9b25dd0 loads a workspace with ID `0d6694d0-88c5-4112-a5c4-0788f9b25dd0`. 

The shared log will be encrypted if a password is set. The password requires you to consider that it has to:
- Be at least eight characters long.
- Contain both lowercase and uppercase letters.
- Contain at least a single number.

If the DOM video capturing is enabled, you could use the `sessionDurationInSeconds` to upload only a portion of the captured log. Omitting the `sessionDurationInSeconds` key (or the whole `ShareOptions` argument) will result in the whole DOM recording to upload.

Alternatively, you can use the `share` method without the optional `ShareOptions` argument. In that case, the log won't be encrypted and will be uploaded to the default organizational workspace.


### DefaultLayout Object Specifics

The `DefaultLayout` is an **optional** key from the `InitOptions` object. When passed, it allows you to enable and use[ the built-in default Fiddler Jam layout](#integrate-jam-embedded-with-the-default-layout) without any need to handle the creation of a custom user interface. When omitted, the user must create [custom user interface that corresponds to the Fiddler Jam Embedded API functionalities](#integrate-jam-embedded-with-custom-ui). 

The `DefaultLayout` comes with the following default values:

```JavaScript
let defaultLayoutObj =  {
    enabled: true, /* enables the default layout */
    containerId: 'fje-container', /* optional, the value 'fje-container' is set by default. Use this ID within your HTML to render the default layout */
    startOptions: { /* optional, defaults to the following values */
        captureConsole: true,
        captureStorage: true,
        captureVideo: true,
        videoFormat: 'dom',
        openNewTab: false,
        reloadPage: false,
        maskSensitiveData: true,
        maskSelector: ''
    },
    shareOptions: { /* optional, defaults to the following values */
        /* 
            Note: To obtain workspaceId, open https://jam.getfiddler.com/ and navigate to a workspace. 
            Then, extract the workspace ID from the address bar by copying the last part of the API endpoint. 
            For example "abcd1234-3333-ffff-bbbb-aaaa4444dddd" extracted from https://jam.getfiddler.com/spaces/abcd1234-3333-ffff-bbbb-aaaa4444dddd
        */
        workspaceId: "", 
        submittedBy: "",
        password: "",
        sessionDurationInSeconds: null // In case no numerical value is passed (or the key is entirely omitted), the whole DOM recording uploads.
    }
}
```


### DOM versus Pixel-Perfect Video Recording

Apart from the HTTPS capturing, a Fiddler Jam log might contain a video recording when the `captureVideo` option is set to `true`. By default, the recorded video will be of DOM type. Still, you can control the type of the video recording by explicitly setting the `videoFormat` option to one of the following string values:

- **"dom":** The DOM video recording is supported on all major browsers (Chrome, Edge, Safari, Firefox, Brave, etc.) and produces a video that records all user activity except one from iframes. The main benefits of this recording type are the excellent browser compatibility, it supports masking sensitive data, and it doesn't require explicit permission from the user (the video recording starts immediately after calling the `start()` method). When DOM video recording is enabled, the user can choose and submit only a portion of the captured log ([through the `sessionDurationInSeconds`](#shareoptions-specifics)) so that you won't have to submit lengthy videos to your workspace or to protect sensitive data.

- **"pixel-perfect"**: The pixel-perfect video uses native recording options but is currently supported only on Chromium-based browsers (Chrome, Edge, Brave, Vivaldi). It produces a video that records all user activities and can be set to record different tabs, the whole screen, etc. It will also record videos from nested iframes. The pixel-perfect recording requires explicit permission from the end-user (through a series of native popups). The pixel-perfect capturing is always shared in its whole (does not support portioning through `sessionDurationInSeconds`).


### Masking Sensitive Data

The DOM video recording supports the automatic masking of sensitive data through the `maskingSensitiveData` boolean property and the `maskSelector` string property. By default, the sensitive data masking is enabled (even if the `maskingSensitiveData` is omitted) and uses a built-in list of selectors commonly used in payment forms. To overwrite the built-in selectors, you can use the `maskSelector` string property and provide a comma-separated list of selectors.

Example usage of `maskSelector` with a custom list of selectors

```javascript
maskSensitiveData: true,
maskSelector: '[autocomplete="cc-number"],form[action*="oppwa.com"],[name="addCreditCardNumber"],[name^="credit_card"],#checkout,.card-num,.card-number'
```


## Basic Implementation

The code snippets below demonstrate a basic Fiddler Jam Embedded implementation (contains the following files - **service-worker.js**, **index.html**, and **local-jam-embedded-implementation.js**).

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

        <script src="https://downloads.getfiddler.com/jam-embedded/fiddler-jam-embedded.js" id="jamEmbeddedScript" crossorigin="anonymous" async></script>
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
            .my-class {color:green;background-color: lightgray;}  /* Test class to demonstrate video masking capabilities */
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
                        <label>The <b>videoFormat</b> option accepts <b>"dom"</b> and <b>"pixel-perfect"</b> string values. When ommited, the default recording type will be <b>"dom"</b></label>
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
// The Fiddler Jam Embedded object is attached to the DOM window object through _fiddlerJamEmbedded.
const jam = window['_fiddlerJamEmbedded'];

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

// inputs (HTML elements from the UI in index.html)
const captureVideoCheckbox = document.getElementById('captureVideo');
const domRadioInput = document.getElementById('dom');
const pixelRadioInput = document.getElementById('pixel');
const maskSensitiveDataCheckbox = document.getElementById('maskSensitiveData');
const maskSelectorField = document.getElementById('maskSelector');
const captureScreenshotsCheckbox = document.getElementById('captureScreenshots');
const captureStorageCheckbox = document.getElementById('captureStorage');
const captureLogsCheckbox = document.getElementById('captureLogs');
const reloadPageCheckbox = document.getElementById('reloadPage');
// Buttons (HTML elements from the UI in index.html)
const startButton = document.getElementById('btn-start');
const startVideoButton = document.getElementById('btn-start-video');
const stopButton = document.getElementById('btn-stop');
const shareButton = document.getElementById('btn-share');
const resetButton = document.getElementById('btn-reset');
// DIVs and Labels (HTML elements from the UI in index.html)
const captureInfoDiv = document.getElementById('capture-info');
const jamShareUrlDiv = document.getElementById('jam-share-url');
const lastErrorDiv = document.getElementById('last-error');
const lastErrorInfoDiv = document.getElementById('last-error-info');
const maskTestLbl = document.getElementById("mask-test-lbl");
const pixellbl = document.getElementById('pixel-lbl');
// Ui notifications (index.html)
let jamShareUrl = "";
let captureInfo = '';

// Use the error event listener to catch possible issues
jam.addErrorEventListener((e) => {
    lastErrorDiv.innerHTML = 'Error: ' + e;

    if (e.name === 'CaptureDisplayError') {
        lastErrorInfoDiv.innerHTML = 'Capturing started without video (e.g. Permission Denied). '
                                    +'<br/>You need to start video recording manually (use "Start Video") '
                                    +'<br/>or continue the capturing without video recording.'
                                    +'Use "Stop Recording" when the capturing is complete.)';
        startVideoButton.hidden = false;
    }
});

// Initialization of the Jam Embedded process. The serviceWorkerPath can be used to set alternative worker path.
jam.init({
    apiKey: '<API-KEY>',
    serviceWorkerPath: 'service-worker.js',
});

initSettingsEvents();
updateUI(jam.state);

jam.addStateChangedEventListener(newState => {
    updateUI(newState);
});

async function start() {
    await jam.start(captureOptions);
}

// Starts pixel-perfect video recording (async method)
// Use this method only when explicit permission is required to start video recording (for example, the user denied permission after calling start())
async function startVideo() {
    await jam.startVideoCapturing();

    startButton.disabled = true;
    stopButton.disabled = false;
    shareButton.disabled = false;
    captureInfoDiv.innerHTML = 'Started successfully! (jam.state = ' + jam.state + ')';
}

async function stop() {
    await jam.stop();
}

// Generates and uploads a Fiddler Jam log share URL (async method).
async function share() {
    /* 
        The jam.share() method accepts an argument of type:
        { 
            workspaceId: string,                // The unique ID of your workspace.
            submittedBy: string,                // Free-form text.
            password: string,                   // Min 8 characters, contain lowercase and uppercase letters, and contain a number.
            sessionDurationInSeconds: number    // (with DOM recording only) Crops a portion of the capturing (from its end) and uploads only that part.
    */

    /*  Example for shareOptions for workspace with ID 0d96e1b7-f94e-4fb1-9bbc-de674119ebcf. 
        Note that you need to pass your unique workspace ID to access the shared log. 
        In the below options (and if DOM recording is enabled), only the last 16 seconds of the captured log will be submitted (as set through sessionDurationInSeconds).
    */
    let shareOptions = {workspaceId:"0d96e1b7-f94e-4fb1-9bbc-de674119ebcf", submittedBy: "site-admin", password: "Qw123456", sessionDurationInSeconds: 16};

    jamShareUrl = await jam.share(shareOptions); // If the ShareOptions are omitted, the is uploaded to the default organization workspace without encryption protection. 
    jamShareUrlDiv.innerHTML = 'Share URL: ' +  '<a href="' + jamShareUrl + '" target="_blank">'+ jamShareUrl +'</a>';

    await navigator.clipboard.writeText(jamShareUrl);
}

async function reset() {
    await jam.reset();
}

function updateUI(newState) {
    if (jam.options) captureOptions = jam.options;

    captureVideoCheckbox.checked = captureOptions.captureVideo;
    captureOptions.videoFormat === "dom" ? domRadioInput.checked = true : domRadioInput.checked = false;
    captureOptions.videoFormat === "dom" ? pixelRadioInput.checked = false : pixelRadioInput.checked = true;
    maskSensitiveDataCheckbox.checked = captureOptions.maskSensitiveData;
    captureScreenshotsCheckbox.checked = captureOptions.captureScreenshots;
    captureStorageCheckbox.checked = captureOptions.captureStorage;
    captureLogsCheckbox.checked = captureOptions.captureConsole;

    switch (newState) {
        case 'started':
            startButton.disabled = true;
            stopButton.disabled = false;
            shareButton.disabled = true;
            resetButton.disabled = true;
            captureInfoDiv.innerHTML = 'Started successfully!<br/>' 
                                    + 'jam.state = ' + newState + ';<br/>'
                                    + 'captureVideo = ' + captureOptions.captureVideo + ';<br/>' 
                                    + 'videoFormat = "'+ captureOptions.videoFormat + ';<br/>'
                                    + 'captureScreenshots = ' + captureOptions.captureScreenshots + '";<br/>'
                                    + 'captureConsole = ' + captureOptions.captureConsole + '<br/>'
                                    + 'captureStorage = ' + captureOptions.captureStorage +';';
            break;
        case 'stopped': 
            startButton.disabled = true;
            stopButton.disabled = true;
            shareButton.disabled = false;
            resetButton.disabled = false;
            captureInfoDiv.innerHTML = 'Capturing Stopped! (jam.state = ' + newState + ').<br/>'
                                    +'Use "Share" to upload the log and generate the share URL.<br/>'
                                    +'Use "Reset Capture" to clean and prepare Jam Embedded for new capture';
            lastErrorDiv.innerHTML = '';
            lastErrorInfoDiv.innerHTML = '';
            break;
        case 'sharing':
            resetButton.disabled = true;
            captureInfoDiv.innerHTML = 'Processing generated log! (jam.state = ' + newState + ')';
            jamShareUrlDiv.innerHTML = 'Please wait! Uploading the log and generating share URL ...';
            break;
        case 'shared':
            resetButton.disabled = false;
            captureInfoDiv.innerHTML = 'Log generation completed! (jam.state = ' + newState + ')';
            lastErrorDiv.innerHTML = 'Use "Reset Capture" to clean and prepare Jam Embedded for new capture';
            lastErrorInfoDiv.innerHTML = '';
            break;
        case 'initialized':
            startButton.disabled = false;
            startVideoButton.hidden = true;
            stopButton.disabled = true;
            shareButton.disabled = true;
            captureInfoDiv.innerHTML = 'Fiddler Jam Embedded reset and ready for new capture! (jam.state = ' + newState + ')';
            jamShareUrlDiv.innerHTML = '';
            lastErrorDiv.innerHTML = '';
            lastErrorInfoDiv.innerHTML = '';
            break;
        default:
            break;
    }
}

function initSettingsEvents() {
    captureVideoCheckbox.addEventListener('change', (args) => {
        captureOptions.captureVideo = args.target.checked;
    });

    maskSensitiveDataCheckbox.addEventListener('change', (args) => {
        captureOptions.maskSensitiveData = args.target.checked;
    });

    maskSelectorField.addEventListener('input', (args) => {
        console.log("The video reocrding will mask the following selectors: " + args.target.value);
        captureOptions.maskSelector = args.target.value;
    });

    captureScreenshotsCheckbox.addEventListener('change', (args) => {
        captureOptions.captureScreenshots = args.target.checked;
    });

    captureStorageCheckbox.addEventListener('change', (args) => {
        captureOptions.captureStorage = args.target.checked;
    });

    captureLogsCheckbox.addEventListener('change', (args) => {
        captureOptions.captureConsole = args.target.checked;
    });

    let safariAgent = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    let chromeAgent = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    let firefoxAgent = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    if ((chromeAgent) && (safariAgent)) safariAgent = false; // ensure Safari agent
    if (firefoxAgent || safariAgent) {
        pixelRadioInput.disabled = true;
        pixellbl.innerHTML = 'videoFormat: "pixel-perfect" is not supported on Firefox and Safari';
    }

    const rad = document.myForm.myRadios;
    for (var i = 0; i < rad.length; i++) {
        rad[i].addEventListener('change', (args) => {
            captureOptions.videoFormat = args.target.value; // "dom" | "pixel-perfect"

            captureOptions.videoFormat === "pixel-perfect" ? maskSensitiveDataCheckbox.disabled = true : maskSensitiveDataCheckbox.disabled = false;
            captureOptions.videoFormat === "pixel-perfect" ? maskSelectorField.disabled = true : maskSelectorField.disabled  = false;
            captureOptions.videoFormat === "pixel-perfect" ? maskTestLbl.innerHTML = "Video masking is not currently supported for pixel-perfect videos!" : maskTestLbl.innerHTML = "Use selector .my-class to test masking of data in video recordings"
        });
    }
}
```

The above snippets create a basic HTML page that utilizes most Fiddler Jam Embedded functionalities. Different browsers, like Edge, Chrome, Brave, and other non-Chromium browsers, such as Firefox and Safari, may show behavioral differences.

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

* A generated Fiddler Jam Log contains captured HTTP/HTTPS traffic and (depending on the pre-set `StartOptions`) screenshots, storage information, video recording, and development console logs. Consider informing end-users about the possibility of revealing sensitive data when a log is shared.

* You can **record a DOM video** while setting  `captureVideo: true` and `videoFormat: 'dom'` (default values). The DOM video recording is not pixel-perfect, and does not contain recordings from iframes. This method for video recording **does not require explicit confirmation** from the user.

* DOM video recordings are supported on Firefox, Safari, and all Chromium-based browsers. 

* The DOM video recording starts without explicit permission from the end-user, so consider warning your users about the possibility of revealing sensitive data.

* Submitting only a portion of a log through `sessionDurationInSeconds` is supported only alongside active DOM recording.

* The `sessionDurationInSeconds` is not supported for logs that use `videoFormat: 'pixel-perfect'` or for logs that do not use video recording.

* When omitting the `sessionDurationInSeconds` (or the whole `ShareOptions` argument), the entire DOM capturing uploads (upon sharing a log).

* Masking of sensitive data is supported only for DOM video recording.

* The screenshot capturing option is available for all Chromium-based browsers (Google Chrome, Edge, Brave, etc.) and Firefox. Screenshot capturing is currently unavailable for Safari (macOS).

* Masking of sensitive data is **not** supported for screenshots.

* Submitting only a specific portion of the captured data is possible only when using DOM video recording. Refer to [ShareOptions](#shareoptions-specifics) for more details on how to portion a log.

* You can **record a pixel-perfect video** through while setting `captureVideo: true` and `videoFormat: 'pixel-perfect'` . The video recording is pixel perfect and contains recordings from iframes. This method for video recording **requires explicit confirmation** from the user (refer to points below).

* Pixel-perfect video is currently supported only on Chromium-based browsers (like Chrome, Edge, Brave, etc.). 

* Pixel-perfect video recordings are **not** supported on Firefox and Safari.

* To capture a pixel-perfect video recording without reloading a page, you can call the `start()` method (through `reloadPage: false`, `captureVideo: true`, and `videoFormat: 'pixel-perfect'`).

* You can turn off the video recording while setting `captureVideo: false`. The log will still contain the network capture and other explicitly enabled data like console logs, screenshots, etc.

* When capturing a pixel-perfect video recording, a Chromium-based browser (like Chrome, Edge, Brave, Vivaldi, and similar) pops a native window once the `start()` method is called. The window provides multiple recording options to record the current tab, a new tab, a whole OS window, or the entire screen. It would be best if you used the Fiddler Jam reporting within the current browser instance, so it is strongly recommended to continuously guide your users to select the **This Tab** option.

* Browser cookies are not recorded and won't be contained in the generated Fiddler Jam log.

* Enabling screenshot capturing on larger applications might cause performance issues on some clients' devices (as numerous screenshots might be rendered during the log generation).