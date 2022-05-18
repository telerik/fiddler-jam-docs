---
title: Jam Embedded API
description: "Learn how to use the Fiddler Jam API to embed the log service into your webpage."
slug: fj-embed-api
publish: false
position: 56
---

# Fiddler Jam Embedded

Fiddler Jam provides an API to integrate the capturing and sharing functionalities into your page while using your UI. The following requirements are needed to utilize the Fiddler Jam API:


1. You can use Fiddler Jam Embedded only with a pre-set list of domains. Send a comma-separated allowlist of the domains (that will be used alongside Fiddler Jam Embedded) to support@getfiddler.com.

    ```CSV
    getfiddler.com, telerik.com, *.example.com
    ```

1. Obtain and store your unique Fiddler Jam Embedded API key. The API key will be received shortly after the allowlist of domains is sent (see the previous step).

1. Import the Fiddler Jam API script into your HTML page from the following CDN link: https://downloads.getfiddler.be/jam-embedded/fiddler-jam-embedded.js

1. Initialize the Fiddler Jam Embedded object with your Fiddler Jam API key. The Fiddler Jam Embedded object is attached to the page's [`window`](https://www.w3schools.com/jsref/obj_window.asp) object as a property called `_fiddlerJamEmbedded`.

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
                    apiKey: '<your-unique-Fiddler-Jam-API-key-here>'
                });
                // .. custom implementation follows here
            </script>
        </head>
    </html>        
    ```

    >important The Fiddler Jam API key is unique per each organization and grants access to your workspaces.

1. Create a file called _service-worker.js_ and import the service worker script from the following CDN link: https://downloads.getfiddler.be/jam-embedded/fje-service-worker.js

    By default, the _service-worker.js_ file is expected to be on the same level as the HTML page that contains the _fiddler-jam-embedded.js_ CDN script. You can change the default path of the worker file through the `InitOptions` object and its `serviceWorkerPath` property. Below you can find an example for importing the service worker from the Fiddler CDN.
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

| Method Name       |  Execution Type | Accepted Arguments   | Description    |
| ---------------     |  ---------- | ------------  | -----------                                       |
| `init(options:InitOptions)`| sync | `InitOptions` is an object of type { apiKey: string, serviceWorkerPath?:string; } | Initialize the Fiddler Jam Embedded process with an unique API key throught the `apiKey` argument. The `serviceWorkerPath` is not mandatory argument and if omitted will default to _./service-worker.js_  |
| `start(options:StartOptions)` | async | `StartOptions` is an object of type { captureVideo: boolean, captureScreenshots: boolean, captureStorage: boolean, captureConsole: boolean, reloadPage: boolean } | Asynchonious method that starts the capturing with the explicitly actived start options. |
| `stop()` | async | n/a | Asynchonious method that stops the capturing and sets the state property to "stopped". |
| `share(options:ShareOptions)` | async | `ShareOptions` is an object of type { description:string, workspaceId:string, submittedBy:string } | Asynchonious method that returns a string with the generated Fiddler Jam Log share URL. The `ShareOptions` argument is optional and if omitted the log will be automatically uploaded to the default organizational workspace. |
| `reset()` | sync | n/a | Stops and completely resets the capturing, its state, and its properties. |
| `addStateChangedEventListener()` | sync | n/a | An event listener to detect changes in the `state` property of the Fiddler Jam Embedded object. |


### ShareOptions Specifics

The `share` method accepts an optional argument of the type `ShareOptions` object (refer to the example below).

```JavaScript
let shareOptions = {
    description: "...your custom description of the share case",
    workspaceId: "<the-unique-workspace-id>",
    submittedBy: "niliev-page-admin"
};
```

To obtain the **<the-unique-workspace-id>** open https://jam.getfiddler.com/ and navigate to the desired workspace. Then extract the workspace ID from the browser address bar by copying the last API endpoint. For example, the following URL https://jam.getfiddler.com/spaces/0d6694d0-88c5-4112-a5c4-0788f9b25dd0 loads a workspace with ID **0d6694d0-88c5-4112-a5c4-0788f9b25dd0**. 

Alternatively, you can use the `share` method without the optional argument `ShareOptions`. In that case, the log will be uploaded to the default organizational workspace.



### Basic Example

The below code snippets demonstrate a basic Fiddler Jam Embedded implementation that you can run through a test localhost server.

If no file path is provided through the `serviceWorkerPath` argument, then the _service-worker.js_ file must be on the same level as the _index.html_ file below.
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
            // used as argument in the start method
            let startOptions = {
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
                    startOptions = jam.options;
                }
                document.getElementById('captureVideo').checked = startOptions.captureVideo;
                document.getElementById('captureScreenshots').checked = startOptions.captureScreenshots;
                document.getElementById('captureStorage').checked = startOptions.captureStorage;
                document.getElementById('captureLogs').checked = startOptions.captureConsole;
            }

            function initSettingsEvents() {
                document.getElementById('captureVideo').addEventListener('change', (e) => {
                    startOptions.captureVideo = e.target.checked;
                });
                document.getElementById('captureScreenshots').addEventListener('change', (e) => {
                    startOptions.captureScreenshots = e.target.checked;
                });
                document.getElementById('captureStorage').addEventListener('change', (e) => {
                    startOptions.captureStorage = e.target.checked;
                });
                document.getElementById('captureLogs').addEventListener('change', (e) => {
                    startOptions.captureConsole = e.target.checked;
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
                await jam.start(startOptions);
            }

            // Stop capturing (async method)
            async function stop() {
                await jam.stop();
            }

            // Generating a Fiddler Jam log share URL (async method). 
            // The logs are automatically added to the default organizational workspace in the Fiddler Jam portal.
            async function share() {

                // optional share options
                // if omitted, the log will be uploaded to the default organizational workspace
                // without description and from an anonimious user
                let shareOptions = {
                    description: "...your custom description of the share case",
                    workspaceId: "<the-unique-workspace-id>", // Note place your workspace ID here
                    submittedBy: "niliev-page-admin"
                };

                const jamShareUrl = await jam.share(shareOptions);
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