---
title: Using Predefined Link
description: "Learn how to use a predefined link to reproduce and capture logs with the Fiddler Jam extension easily."
slug: fj-predefined-link
publish: true
position: 70
---

# Using Predefined Link

This three-step tutorial describes how to use a Fiddler Jam predefined link to record a captured traffic session:

1. You will install the lightweight Fiddler Jam Extension.

1. You'll use the received Jam predefined link to record a network request.

1. You will submit the issue to the Fiddler Jam Portal cloud space, where the predefined link creator can further investigate your case.  


## Recording a Log

The following steps demonstrate how to record a captured traffic session so that you can isolate a network issue and then be able to share it with the engineering teams for further analysis.  

1. Open the predefined Jam link shared with you by your collaborator (support agent, developer, etc.).

    ![predefined link initial screen](../images/ext/prerecorded/prerecorded-000.png)


1. Open the Fiddler Jam extension.

    At this point, if you expand [**Advanced Options**]({%slug fj-capture-options%}), you'll see that some of the settings are enabled or disabled by default. Let's not change any of them for this guide and work with the default ones.

1. Click **Start Capture** to start recording.

    As a result, Fiddler Jam initiates the recording of all network activity in the current browser tab, and a notification appears informing you that Fiddler Jam has started debugging. Close the notification or click **Cancel**&mdash;this won't stop the capturing. Hide the Fiddler Jam window by clicking anywhere in the browser tab, and continue recording. Try not to exceed the 100MB maximum size of a recorded session.

    ![Start capture](../images/ext/prerecorded/prerecorded-001.png)

1. Enter the URL in the browser address bar. If the creator of the predefined link has set a default URL, it will be loaded automatically.

1. When the issue has been captured, click **Stop Capture** to end the recording.

    ![Stop capture](../images/ext/prerecorded/prerecorded-002.png)

1. Let's now preview the recorded log&mdash;click the **Preview** button. The captured session loads as a local preview in a new browser tab. This preview can't be shared.

1. After reviewing the record, go back to the extension.

1. Click **Submit Logs** to immediately share the recorded logs with the Fiddler Jam Portal user that created the predefined link.

    All submitted logs are private and accessible for Fiddler Jam Portal users with the proper access rights. Additionally, each record can use password-protection before its submission.

    ![Suubmit logs](../images/ext/prerecorded/prerecorded-003.png)

That was it! Now your logs are submitted in the Jam cloud space, and your Fiddler Jam portal agent can start deep-diving into its details.