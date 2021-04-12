---
title: Recording a log
description: Basic step-by-step instructions for recording a log with the Fiddler Jam extension
slug: fj-recording-logs
tags: record Fiddler Jam log, Fiddler Jam logs, Fiddler Jam capturing, Fiddler Jam recording, capture traffic with Jam, Fiddler Jam HTTPS traffic 
publish: true
position: 20
---


# Recording a Log

Log recording is the core functionality provided by Fiddler Jam. A **Log** in Fiddler Jam's context is a collection of captured HTTP(S) sessions, screenshots, console logs, and other information recorded by the user. To record the network traffic of the focused browser tab, follow these steps:

1. Launch **Fiddler Jam** by clicking on the extension icon ![Extension main icon](../images/ext/ext-icons/small-logo.png).

1. (Optional) Expand [**Advanced Options**]({%slug fj-capture-options%}) and choose the preferred settings. By default, all advanced options are enabled.

1. Click **Start Capture** to start recording. Fiddler Jam will record all network activity in your current browser tab. Click anywhere in the browser tab to hide the Fiddler Jam window and continue recording. To show the Fiddler Jam window back, click the extension's icon.

   ![Start capture screen with the Advanced Options expanded](../images/ext/ext-images/extension-start-capturing-extended.png)

   >important Chrome displays an informational banner: **"Fiddler Jam" started debugging this browser**. Closing the notification or clicking **Cancel** won't stop the capturing session. Use the **Stop Capture** button (see the next step) to cancel an ongoing recording.
   ![Chrome warning banner](../images/ext/ext-images/extension-chrome-notification.png)

1. Click  **Stop Capture** to end the recording.

   ![Stop capturing screen](../images/ext/ext-images/extension-stop-capturing.png)

1. Before submitting the recorded log, you can review it by clicking on the **Capture Successful** line. The **Capture Details** screen will load with a list of the captured sessions, screenshots, console logs, etc. Go back to the previous screen to generate a link and submit the log to the cloud portal.

   ![Stop capturing screen](../images/ext/ext-images/extension-link-options-show-sessions.png)

1. At this point, the captured traffic is recorded as a log but is not yet saved anywhere. Choose the appropriate [**Sharing Options**]({%slug fj-link-options%}), use the **Get Link** button and proceed with [submitting the recorded log to the JAM portal]({%slug fj-submitting-logs%}#submit-via-link).

   ![Generate Link](../images/ext/ext-images/extension-link-options-password.png)

## Additional Recording Options

During log recording, Fiddler Jam could capture not only the HTTP/HTTPS traffic but also:

- **Screenshots**: If the **_Take screenshots while capturing_** switch is enabled, a screenshot will be recorded every time you click on the loaded page.

- **Console logs**: If the **_Capture console_** switch is enabled, the log will contain all console logs executed from the source code.

>tip To reset the Fiddler Jam extension and start a new capturing session, use the **Capture Again** button.

Additionally, Fiddler Jam provides switches for masking cookies, post data and for disabling the cache from [the Advanced options]({%slug fj-capture-options%}).

## Next Steps

Learn more about:

- [The available sharing options and password-protection of recoreded logs.]({%slug fj-link-options%})
- How to [submit the log I have just recored]({%slug fj-submitting-logs%}).
- What is the [Fiddler Jam portal]({%slug fj-portal%}).
- What is a [Fiddler Jam portal user]({%slug fj-users%}#portal-users) and how to become one.
- How to [work with submitted logs in the Fiddler Jam portal]({%slug fj-portal-logs%}).
- How to [organize received logs into portal workspaces]({%slug fj-workspaces%})
- How to [use the Fiddler Everywhere desktop application for deep-dive investigation of Jam logs]({%slug fj-advanced-analysis%}).
