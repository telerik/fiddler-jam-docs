---
title: Recording a log
slug: fj-recording-logs
tags: record Fiddler Jam log, Fiddler Jam logs, Fiddler Jam capturing, Fiddler Jam recording, capture traffic with Jam, Fiddler Jam HTTPS traffic 
publish: true
position: 20
---


# Recording a Log

Recording the captured traffic is the core action provided by Fiddler Jam. A **Log** in the context of Fiddler Jam is a collection of sessions captured, screenshots, and other information after the extension user has recorded. The record the ongoing traffic (in the focused browser tab) follow these steps:

1. Launch **Fiddler Jam** by clicking on the extension icon ![Extension main icon](../images/ext/ext-icons/small-logo.png)
2. Expand the [**_Capture Options_**]({%slug fj-capture-options%}) and choose the preferred settings. For example, you could enable screenshots by enabling the **_Take screenshots while capturing_** switch. Refer to the [**_Capture Options_** documentation section]({%slug fj-capture-options%}) for full details on each option.
3. Click on **_Start Capture_** to begin recording. Fiddler Jam will start recording all network activity in your current browser tab.
4. The Google Chrome browser will inform you via a cancelable prompt that states **_“’Fiddler Jam’ started debugging the browser”_.** To proceed with capturing, close the notification. Note that clicking on **_Cancel_** will reset the Fiddler Jam state, effectively stopping the capturing session.
5. If you had enabled the **_Take screenshots while capturing_** switch, a screenshot will be recorded every time you perform an activity on the browser page.
6. Click on the extension icon anytime to bring it back from hiding.
7. Click on **_Capturing…_** to see details of your ongoing recording.
8. Click on **_Stop Capture_** to end the recording.

At this point, the captured traffic is recorded as a log but is not yet saved anywhere. Proceed with [submitting the recorded log to the JAM portal]({%slug fj-submitting-logs%}#submit-via-link) or by [saving the log as a file]({%slug fj-submitting-logs%}#save-as-file).

>tip To reset the Fiddler Jam extension and start a new capturing, use the **Capture Again** button.
