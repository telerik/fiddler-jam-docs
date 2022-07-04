// The Fiddler Jam Embedded object attached to the DOM window object through _fiddlerJamEmbedded.
const jam = window['_fiddlerJamEmbedded'];

let captureInfo = '';

// Setting the default capture options
let captureOptions = {
    captureScreenshots: false,
    captureConsole: true,
    captureStorage: true,
    captureVideo: true,
    captureDom: false,
    openNewTab: false,
    reloadPage: false
};

// Use the error event listener to catch possible issues.
// For example: Firefox and Safari users needs to explicitly allow video recording through user interaction.
// The error listener is used to load custom UI that calls the startVideo() method.
jam.addErrorEventListener(e => {
    document.getElementById('last-error').innerHTML = e;
    if (e.name === 'CaptureDisplayError') {
        document.getElementById('capture-info').innerHTML = 'Started without video. You need to start video recording manually.';
        document.getElementById('btn-start-video').hidden = false;
    }
});

// Initialization of the Jam Embedded process. 
// Additionally, the serviceWorkerPath can be passed with an alternative worker path.
jam.init({
    apiKey: '6f8755689fed37d944b8aea62d4e78d6a16515126b8433244a6145187603c930d857ea4c14e01b46b08ff2fb1add8895',
    serviceWorkerPath: 'service-worker.js',
});

updateCaptureInfo();

jam.addStateChangedEventListener(newState => {
    updateCaptureInfo();
});

initSettingsEvents();


function getCaptureInfo(jamState) {
    switch (jamState) {
        case 'ready':
        case 'initialized':
            return 'Ready to capture..';
        case 'registered':
            return 'Registered..';
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
    console.log('updateCaptureInfo +++++++++++++++++++++');

    captureInfo = getCaptureInfo(jam.state);
    document.getElementById('capture-info').innerHTML = captureInfo;

    if (jam.options) {
        captureOptions = jam.options;
    }

    document.getElementById('captureVideo').checked = captureOptions.captureVideo;
    document.getElementById('captureScreenshots').checked = captureOptions.captureScreenshots;
    document.getElementById('captureStorage').checked = captureOptions.captureStorage;
    document.getElementById('captureLogs').checked = captureOptions.captureConsole;

    if (captureInfo === "shared") {
        reset();
    }
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

// Start capture (async method)
async function start() {
    document.getElementById('btn-start').disabled = true;
    document.getElementById('btn-start-video').hidden = true;
    document.getElementById('btn-stop').disabled = false;
    document.getElementById('btn-share').disabled = false;
    document.getElementById('capture-info').innerHTML = 'Started successfully!';

    await jam.start(captureOptions);
}

// Start video recording (async method).
// This method needs to be explicitly called with the user interaction for a non-Chromium browser.
async function startVideo() {
    document.getElementById('btn-start').disabled = true;
    document.getElementById('btn-stop').disabled = false;
    document.getElementById('btn-share').disabled = false;
    document.getElementById('capture-info').innerHTML = 'Started successfully!';

    await jam.startVideoCapturing();
}

// Stop capture (async method).
async function stop() {
    document.getElementById('btn-stop').disabled = true;
    document.getElementById('capture-info').innerHTML = 'Capturing Stopped!';

    await jam.stop();
}

// Generates and uploads a Fiddler Jam log share URL (async method). 
// The logs are automatically added to the default organizational workspace in the Fiddler Jam portal.
async function share() {
    document.getElementById('capture-info').innerHTML = 'Processing generated log!';
    document.getElementById('jam-share-url').innerHTML = 'Please wait! Uploading the log and generating share URL ...';


    const jamShareUrl = await jam.share();
    document.getElementById('capture-info').innerHTML = 'Log generation completed!';
    document.getElementById('jam-share-url').innerHTML = 'Share URL: ' +  '<a href="' + jamShareUrl + '">'+ jamShareUrl +'</a>';
    document.getElementById('last-error').innerHTML = '';

    await navigator.clipboard.writeText(jamShareUrl);
}

async function reset() {
    document.getElementById('btn-start').disabled = false;
    document.getElementById('btn-start-video').hidden = true;
    document.getElementById('btn-stop').disabled = true;
    document.getElementById('btn-share').disabled = true;

    // hard reset on any state as jam.reset() currently reset only on "stopped" and "shared" states
    // if (jam.state !== "stopped" && jam.state !== "shared") {
    //     jam.updateState("initialized");
    // }
    await jam.reset();

    document.getElementById('capture-info').innerHTML = 'Fiddler Jam Embedded reset and ready for new capture!';
    document.getElementById('jam-share-url').innerHTML = '';
    document.getElementById('last-error').innerHTML = '';
}