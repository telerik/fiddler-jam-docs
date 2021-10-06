---
title: Advanced Options
description: Fiddler Jam extension advanced capturing and recording options.
slug: fj-capture-options
publish: true
position: 40
previous_url: /extension/capture-options
---


# Advanced Options

The Fiddler Jam Chrome Extension provides a number of advanced settings for capturing logs, which enable you to modify the recorded output.

The **Advanced Options** menu includes the following settings:

- [Capture video](#capturing-videos)
- [Capture screenshots](#capturing-screenshots)
- [Capture console](#capturing-console-logs)
- [Capture storage info](#capturing-storage-information)
- [Mask cookies](#masking-cookies)
- [Mask all post data](#masking-all-post-data)
- [Disable cache](#disabling-the-cache)

![Fiddler Jam Advanced Options](../images/ext/ext-images/extension-start-capturing-extended-002.png)

## Capturing Videos

The **Capture video** option allows you to capture video recordings from the inspected Google Chrome tab. The video is then accessible through the **Screen recording** tab from the submitted log screen in the Jam portal. Note that only the tab from which the Fiddler Jam log recording has started will be recorded, and subsequentially opened tabs won't be present in the video recording. The option is enabled by default.

>tip The video recording is available only when accessing the recorded log through [the Fiddler Jam portal]({%slug fj-portal%}). A recorded log exported as HAR or opened directly in [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) won't contain the video recording.

>important The video recording could contain sensitive input data from the recorded tab (for example, data entered in forms, fields, and so on) visible in the recorded video. Please be careful while sharing sensitive logs, including credit card information, passwords, and so on, and sharing them only with trusted parties.

## Capturing Screenshots

This option will allow you to take a screenshot of each user's activities during the capturing process. Each screenshot is added to the ongoing recording as a PNG file. The activities that trigger a screenshot are clickable actions (buttons, links), interactions with forms, and so on. The option is enabled by default.

>tip The screenshots are available only when you access the recorded log through [Fiddler Jam portal]({%slug fj-portal%}). A recorded log exported as an HAR or opened directly in [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) won't contain screenshots.

>important The taken screenshots could contain sensitive input data from the recorded tabs (for example, data entered in forms, fields, and so on) visible in the recorded video. Please be careful while sharing sensitive logs, including credit card information, passwords, and so on, and sharing them only with trusted parties.

## Capturing Console Logs

When enabled, the capturing includes everything outputted in the developer console, including the log and available stack traces. The option is enabled by default.

>tip The console logs are available only when accessing the recorded log through [the Fiddler Jam portal]({%slug fj-portal%}). A recorded log exported as HAR or opened directly in [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) won't contain console logs.

## Capturing Storage Information

This option will allow you to capture local or session storage data from each inspected Chrome tab. The storage info is then accessible through the **Storage Details** tab from the submitted log screen in the Jam portal. The option is enabled by default.

>important The storage data could contain sensitive input data from the recorded tabs (for example, data entered in forms, fields, and so on) visible in the recorded video. Please be careful while sharing sensitive logs, including credit card information, passwords, and so on, and sharing them only with trusted parties.

## Masking Cookies

This option masks any cookies that are part of the captured requests and responses. Masking hides all cookie values while the cookie key names remain visible. The option is enabled by default.

## Masking All Post Data

This option masks any post data (for example, data from forms, input text fields, and so on). Post data is also the request body sent via POST/PUT/PATCH methods. The option is disabled by default.

>important By default, when the option **Mask all post data** is disabled, all data that is considered sensitive is masked. Enabling the option will explicitly mask all POST data (sensitive or not). Learn more about what does Fiddler Jam considers as sensitive data in our [dedicated security article]({%slug fj-security%}#masking-sensitive-data).

## Disabling the Cache

When enabled, the Jam extension sets the value of the `Cache-Control` and `Prasgma` headers to `no-cache` on each network request.  The option is enabled by default.
