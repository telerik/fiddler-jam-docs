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
    captureDom: false,
    openNewTab: false,
    reloadPage: false
};

// Use the error event listener to catch possible issues.
// For example: Firefox and Safari users needs to explicitly allow video recording through user interaction.
// The error listener is used to load custom UI that calls the startVideo() method.
jam.addErrorEventListener(e => {
    document.getElementById('last-error').innerHTML = 'Error: ' + e;
    if (e.name === 'CaptureDisplayError') {
        document.getElementById('last-error-info').innerHTML = 'Started without video (e.g. Permission Denied). You need to start video recording manually (use "Start Video") or continue the capturing without video recording (Use "Stop Recording" when the capturing is complete.)';
        document.getElementById('btn-start-video').hidden = false;
    }
});

// Initialization of the Jam Embedded process. 
// Additionally, the serviceWorkerPath can be passed with an alternative worker path.
jam.init({
    apiKey: '6f8755689fed37d944b8aea62d4e78d6a16515126b8433244a6145187603c930d857ea4c14e01b46b08ff2fb1add8895',
    serviceWorkerPath: 'service-worker.js',
});

initSettingsEvents();
updateUI();

jam.addStateChangedEventListener(newState => {
    updateUI();

    console.log(captureOptions);
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

    const jamShareUrl = await jam.share();
    document.getElementById('capture-info').innerHTML = 'Log generation completed! (jam.state = ' + jam.state + ')';
    document.getElementById('jam-share-url').innerHTML = 'Share URL: ' +  '<a href="' + jamShareUrl + '">'+ jamShareUrl +'</a>';
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