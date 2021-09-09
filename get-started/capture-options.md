---
title: Advanced Options 
description: Fiddler Jam extension advanced capturing and recording options.
slug: fj-capture-options
publish: true
position: 40
previous_url: /extension/capture-options
---


# Advanced Options

Fiddler Jam provides several advanced capture options. These options allow you to enable or disable certain functionalities in order to modify the recorded output:

- [Capture video](#capture-video)
- [Capture screenshots](#capture-screenshots)
- [Capture console](#capture-console)
- [Capture storage info](#capture-storage-info)
- [Mask cookies](#mask-cookies)
- [Mask all post data](#mask-all-post-data)
- [Disable Cache](#disable-cache)

![Fiddler Jam Advanced Options](../images/ext/ext-images/extension-start-capturing-extended-002.png)

### Capture video

This option will allow you to capture video recording from the inspected Google Chrome tab. The video is then accessible through the **Screen recording** tab from the submitted log screen in the Jam portal. Note that only the tab from which the Fiddler Jam log recording has started will be recorded, and subsequentially opened tabs won't be present in the video recording. The option is enabled by default.

>tip The video recording is available only when accessing the recorded log through [the Fiddler Jam portal]({%slug fj-portal%}). A recorded log exported as HAR or opened directly in [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) won't contain the video recording.

>important The video recording could contain sensitive input data from the recorded tab (for example, data entered in forms, fields, and so on) visible in the recorded video. Please be careful while sharing sensitive logs, including credit card information, passwords, and so on, and sharing them only with trusted parties.

### Capture screenshots

This option will allow you to take a screenshot of each user's activities during the capturing process. Each screenshot is added to the ongoing recording as a PNG file. The activities that trigger a screenshot are clickable actions (buttons, links), interactions with forms, and so on. The option is enabled by default.

>tip The screenshots are available only when you access the recorded log through [Fiddler Jam portal]({%slug fj-portal%}). A recorded log exported as an HAR or opened directly in [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) won't contain screenshots.

>important The taken screenshots could contain sensitive input data from the recorded tabs (for example, data entered in forms, fields, and so on) visible in the recorded video. Please be careful while sharing sensitive logs, including credit card information, passwords, and so on, and sharing them only with trusted parties.

### Capture console

When enabled, the capturing includes everything outputted in the developer console, including the log and available stack traces. The option is enabled by default.

>tip The console logs are available only when accessing the recorded log through [the Fiddler Jam portal]({%slug fj-portal%}). A recorded log exported as HAR or opened directly in [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) won't contain console logs.

### Capture storage info

This option will allow you to capture local or session storage data from each inspected Chrome tab. The storage info is then accessible through the **Storage Details** tab from the submitted log screen in the Jam portal. The option is enabled by default.

>important The storage data could contain sensitive input data from the recorded tabs (for example, data entered in forms, fields, and so on) visible in the recorded video. Please be careful while sharing sensitive logs, including credit card information, passwords, and so on, and sharing them only with trusted parties.

### Mask cookies

This option masks any cookies that are part of the captured requests and responses. Masking hides all cookie values while the cookie key names remain visible. The option is enabled by default.


### Mask all post data

This option masks any post data (for example, data from forms, input text fields, and so on). Post data is also the request body sent via POST/PUT/PATCH methods. The option is disabled by default.

>important By default, when the option **Mask all post data** is disabled, all data that is considered sensitive is masked. Enabling the option will explicitly mask all POST data (sensitive or not). Learn more about what does Fiddler Jam considers as sensitive data in our [dedicated security article]({%slug fj-security%}#masking-sensitive-data).


### Disable cache

When enabled, the Jam extension sets the value of the `Cache-Control` and `Prasgma` headers to `no-cache` on each network request.  The option is enabled by default.


### Next Steps

Learn more about:

- What is the [Fiddler Jam portal]({%slug fj-portal%}).
- What is the difference between [Fiddler Jam portal user]({%slug fj-users%}#user-role), [Fiddler Jam portal viewer]({%slug fj-users%}#viewer-role) and how to become one.
- How to [work with submitted logs in the Fiddler Jam portal]({%slug fj-portal-logs%}).
- How to [organize received logs into portal workspaces]({%slug fj-workspaces%})
- How to [use the Fiddler Everywhere desktop application for deep-dive investigation of Jam logs]({%slug fj-advanced-analysis%}).
