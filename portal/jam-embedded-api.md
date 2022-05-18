---
title: Jam Embedded API
description: "Learn how to use the Fiddler Jam API to embed the log service into your webpage."
slug: fj-embed-api
publish: false
position: 56
---

# Fiddler Jam Embedded

Fiddler Jam provides an API to integrate the capturing and sharing functionalities into your page while using your UI. The following requirements are needed to utilize the Fiddler Jam API:

1. Import the Fiddler Jam API script into your HTML page from the following CDN link: https://downloads.getfiddler.be/jam-embedded/fiddler-jam-embedded.js

2. Initialize the Fiddler Jam Embedded object with your unique API key. The Fiddler Jam Embedded object is attached to the page's [`window`](https://www.w3schools.com/jsref/obj_window.asp) object as a property called `_fiddlerJamEmbedded`.

    ```JavaScript
    <html lang="en">
        <head>
            <meta charset='utf-8'>
            <meta name='viewport' content='width=device-width,initial-scale=1'>
        
            <title>Fiddler Jam Embedded</title>
            <script src="https://downloads.getfiddler.be/jam-embedded/fiddler-jam-embedded.js"></script>
            <script>
                const jam = window._fiddlerJamEmbedded;
                jam.init({
                    apiKey: '<your-unique-fiddler-jam-api-key-here>'
                });
                // .. custom implementation follows here
            </script>
        </head>
    </html>        
    ```

    >tip Contact us at support@getfiddler.com for more information about obtaining a unique APi key for your organization and workspace.

3. Create a file called _service-worker.js_ and import the service worker script from the following CDN link: https://downloads.getfiddler.be/jam-embedded/fje-service-worker.js

    By default, the _service-worker.js_ file is expected to be on the same level as the HTML page that contains the _fiddler-jam-embedded.js_ CDN script. You can the default path of the worker file through the `InitOptions` object and its `serviceWorkerPath` property. Below you can find an example for importing the service worker from the Fiddler CDN.
    ```JavaScript
    self.importScripts(`https://downloads.getfiddler.be/jam-embedded/fje-service-worker.js`);
    ```

## Fiddler Jam API

`_fiddlerJamEmbedded` - The Fiddler Jam Embedded object is attached to [the DOM `window` object](https://www.w3schools.com/jsref/obj_window.asp) (you need to import the _\_fiddler-jam-embedded.js_ from the CDN). The Fiddler Jam Embedded object has the following properties and methods.

### Properties


| Property Name       | Type               | Description                 |
| ---------------     | ------------       | ------------                |
| `state`             | `CaptureState`       | Indicates the current process state (enumaration with the following string values : "ready", "initialized", "starting", "started", "sharing", "shared")    |
| `serviceWorkerPath` | string             | Indicates the path to the service-worker.js file. When omitted, the default file location is _./service-worker.js_)                                                      |
| `options`           | `StartOptions`       | An object used during the Fiddler Jam Embedded startup. Indicates which capturing options should be turned on (default values: captureScreenshots = true, captureConsole = true, captureStorage = true, captureVideo = true, openNewTab = true, reloadPage = false)                          |



### Methods

| Method Name       |  Execution Type | Accepted Arguments                                                  | Description                                       |
| ---------------     |  ---------- | ------------                                                        | -----------                                       |
| `init(options:InitOptions)`|  | `InitOptions` of type { apiKey: string, serviceWorkerPath?:string; } | Initialize the Fiddler Jam Embedded process with an unique API key throught the `apiKey` argument. The `serviceWorkerPath` is not mandatory argument and if omitted will default to _./service-worker.js_  |
| `start(options:StartOptions)` | async | `StartOptions` of type { captureVideo: boolean, captureScreenshots: boolean, captureStorage: boolean, captureConsole: boolean, reloadPage: boolean } | Asynchonious method that starts the capturing with the explicitly actived start options. |
| `stop()` | async |n/a | Asynchonious method that stops the capturing and sets the state property to "stopped". |
| `share( )` | async | n/a | Asynchonious method that returns a string with the generated Fiddler Jam Log share URL. The generated log is automatically added to the default organizational workspace. |
| `reset()` | | n/a | Stops and completely resets the capturing, its state, and its properties. |
| `addStateChangedEventListener()` |  | n/a | An event listener to detect changes in the `state` property of the Fiddler Jam Embedded object. |



### Basic Example

The below code snippets demonstrate a basic Fiddler Jam Embedded implementation that you can run through a test localhost server.

If no file path is provided through the `serviceWorkerPath` argument then the _service-worker.js_ file must be on the same level as the _index.html_ file below.
```JavaScript
self.importScripts(`https://downloads.getfiddler.be/jam-embedded/fiddler-jam-embedded.js`);
```

Sample _index.html_ page. Note that you will have to replace `<your-unique-fiddler-jam-api-key-here>` with your actual Fiddler Jam Embedded API key.
```HTML
<html lang="en">
    <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width,initial-scale=1'>
    
        <title>Fiddler Jam Embedded</title>
        <script src="https://downloads.getfiddler.be/jam-embedded/fiddler-jam-embedded.js"></script>
        <script>
            // the Fiddler Jam Embedded object attached to the DOM window object through _fiddlerJamEmbedded
            const jam = window._fiddlerJamEmbedded;

            // Initialization of the Jam Embedded process. 
            // Additionally the serviceWorkerPath can be passed with an alternative worker path.
            jam.init({
                apiKey: '<your-unique-fiddler-jam-api-key-here>'
            });
            let captureInfo = '';

            // Setting default capture options
            let captureOptions = {
                captureVideo: true,
                captureScreenshots: true,
                captureStorage: true,
                captureConsole: true,
                reloadPage: true
            };

            function getCaptureInfo(jamState) {
                switch (jamState) {
                    case 'ready':
                    case 'initialized':
                        return 'Ready to capture..';
                    case 'starting':
                        return 'Starting..';
                    case 'started':
                        return 'Started..';
                    case 'stopped':
                        return 'Stopped..';
                    case 'sharing':
                        return 'Sharing..';
                    case 'shared':
                        return 'Sharing complete! Jam Session Url copied to clipboard.';
                    default:
                        return '';
                }
            }

            function updateCaptureInfo() {
                captureInfo = getCaptureInfo(jam.state);
                document.getElementById('capture-info').innerHTML = captureInfo;
                if (jam.options) {
                    captureOptions = jam.options;
                }
                document.getElementById('captureVideo').checked = captureOptions.captureVideo;
                document.getElementById('captureScreenshots').checked = captureOptions.captureScreenshots;
                document.getElementById('captureStorage').checked = captureOptions.captureStorage;
                document.getElementById('captureLogs').checked = captureOptions.captureConsole;
            }

            function initSettingsEvents() {
                document.getElementById('captureVideo').addEventListener('change', (e) => {
                    captureOptions.captureVideo = e.target.checked;
                });
                document.getElementById('captureScreenshots').addEventListener('change', (e) => {
                    captureOptions.captureScreenshots = e.target.checked;
                });
                document.getElementById('captureStorage').addEventListener('change', (e) => {
                    captureOptions.captureStorage = e.target.checked;
                });
                document.getElementById('captureLogs').addEventListener('change', (e) => {
                    captureOptions.captureConsole = e.target.checked;
                });
            }

            window.addEventListener('load', () => {
                updateCaptureInfo();
                jam.addStateChangedEventListener(newState => {
                    updateCaptureInfo();
                });
                initSettingsEvents();
            });

            // Start capturing (async method)
            async function start() {
                await jam.start(captureOptions);
            }

            // Stop capturing (async method)
            async function stop() {
                await jam.stop();
            }

            // Generaring a Fiddler Jam log share URL (async method). 
            // The logs are automatically added to the default organizational workspace in the Fiddler Jam portal.
            async function share() {
                const jamShareUrl = await jam.share();
                document.getElementById('jam-share-url').innerHTML = jamShareUrl;
                await navigator.clipboard.writeText(jamShareUrl);
            }
        </script>
    </head>
    <body>
        <h1>Fiddler Jam Embedded</h1>
        <div>
            <div>
                <div>
                    <input type="checkbox" id="captureVideo" name="captureVideo" />
                    <label for="captureVideo">Capture Video</label>
                </div>
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
                <button onclick="start()">Start Capture</button>
                <button onclick="stop()">Stop Capture</button>
                <button onclick="share()">Share</button>
            </div> 
            <div id="capture-info"></div>
            <div id="jam-share-url"></div>
        </div>
    </body>
</html>

```