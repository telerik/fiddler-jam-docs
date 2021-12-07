---
title: Advanced Capturing Options
description: "Learn how to set the Fiddler Jam Chrome Extension advanced capturing and recording options."
slug: fj-capture-options
publish: true
position: 40
previous_url: /extension/capture-options, /get-started/capture-options
---

# Advanced Capturing Options

The Fiddler Jam Chrome Extension provides a number of advanced settings for capturing logs, which enable you to modify the recorded output.

Some of these advanced capturing options are enabled or disabled by default.

The **Advanced Options** menu includes the following settings:

- [Capture video](#capturing-videos)
- [Capture screenshots](#capturing-screenshots)
- [Capture console](#capturing-console-logs)
- [Capture storage info](#capturing-storage-information)
- [Mask cookies](#masking-cookies)
- [Disable cache](#disabling-the-cache)
- [Clear cookies, cache and storage on start](#clear-cookies-cache-and-storage-on-start)

![Fiddler Jam Advanced Options](../images/ext/ext-images/extension-start-capturing-extended-002.png)

## Capturing Videos

The **Capture video** option allows you to capture video recordings from the inspected Google Chrome tab. Note that only the tab from which the Fiddler Jam log recording has started will be recorded, and subsequently opened tabs won't be present in the video recording.

The submitted videos are accessible for Fiddler Jam Portal users only. A recorded log, exported as an HAR file or opened directly in [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere), won't contain the video recording.

By default, the **Capture video** option is enabled.

>important The video recordings may contain and display sensitive input data, for example, data entered in forms, fields, and so on. Be careful when submitting sensitive data such as credit card information and passwords, and make sure you share them with trusted parties only.

## Capturing Screenshots

The **Capture screenshots** option allows you to take a screenshot of a user activity that occurred during the capturing process. Each screenshot is added to the ongoing recording as a PNG file. The user activities that trigger a screenshot are clickable actions (buttons, links), interactions with forms, and so on.

The submitted screenshots are accessible for Fiddler Jam Portal users only. A recorded log, exported as an HAR file or opened directly in [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere), won't contain the screenshots.

By default, the **Capture screenshots** option is enabled.

>important The screenshots may contain and display sensitive input data, for example, data entered in forms, fields, and so on. Be careful when submitting sensitive data such as credit card information and passwords, and make sure you share them with trusted parties only.

## Capturing Console Logs

The **Capture console** option enables you to capture the output in the developer console, including the log and the available stack traces.

The submitted console logs are accessible for Fiddler Jam Portal users only. A recorded log, exported as an HAR file or opened directly in [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere), won't contain the console logs.

By default, the **Capture console** option is enabled.

## Capturing Storage Information

The **Capture storage info** option enables you to capture local or session storage data from each inspected Chrome tab.

The submitted storage information is accessible for Fiddler Jam Portal users only.

By default, the **Capture storage info** option is enabled.

>important The storage information may contain and display sensitive input data, for example, data entered in forms, fields, and so on. Be careful when submitting sensitive data such as credit card information and passwords, and make sure you share them with trusted parties only.

## Masking Cookies

The **Mask cookies** option masks any cookies that are part of the captured requests and responses. The masking option hides all cookie values while the cookie key names remain visible.

By default, the **Mask cookies** option is enabled.

## Disabling the Cache

The **Disable cache** option enables the Fiddler Jam Chrome Extension to set the value of the `Cache-Control` and `Prasgma` headers to `no-cache` on each network request.

By default, the **Disable cache** option is enabled.

## Clear cookies, cache and storage on start

The **Clear cookies, cache and storage on start** option will effectively remove cookies, cache, and storage data from the starting page at the moment when the capture starts.

The **Clear cookies, cache and storage on start** option is disabled by default.