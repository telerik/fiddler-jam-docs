---
title: Advanced Options 
description: Fiddler Jam extension advanced capturing and recording options.
slug: fj-capture-options
tags: record Fiddler Jam, Fiddler Jam options, Fiddler Jam capturing options, Fiddler Jam recording
publish: true
position: 40
---


# Advanced Options

Fiddler Jam provides several advanced capture options. These options allow you to enable or disable certain functionalities in order to modify the recorded output:

- [Take screenshots while capturing](#take-screenshots-while-capturing)
- [Capture console](#capture-console)
- [Mask cookies](#mask-cookies)
- [Mask post data](#mask-post-data)
- [Disable Cache](#disable-cache)

![Fiddler Jam Advanced Options](../images/ext/ext-images/extension-start-capturing-extended.png)

## Take screenshots while capturing

This option will take a screenshot of each user action during the capturing process. Each screenshot will be added to the ongoing recording as a PNG file. The activities that trigger a screenshot are clickable actions (buttons, links), interactions with forms, etc. By default, **Take screenshots while capturing** is **enabled**.

>important The screenshots are available only when accessing the recorded log through [the Fiddler Jam portal]({%slug fj-portal%}). A recorded log exported as HAR or opened directly in [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) won't contain screenshots.

## Capture console

This option will capture everything outputted in the developer console, including the log and available stack traces. By default, **Capture console** is **enabled**.

>important The console logs are available only when accessing the recorded log through [the Fiddler Jam portal]({%slug fj-portal%}). A recorded log exported as HAR or opened directly in [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) won't contain console logs.

## Mask cookies

This option will mask any cookies that are part of the captured requests and responses. Masking hides all cookie values while the cookie key names remain visible. By default, **Mask cookies** is **enabled**.

## Mask post data

This option will mask any post data (for example, data from forms, input text fields, etc.). Post data is also the request body sent via POST/PUT/PATCH methods. By default, **Mask post data** is **enabled**.

## Disable cache

This option will set the value of the `Cache-Control` and `Prasgma` headers to `no-cache` on each network request. By default, **Disable cache** is **enabled**.

## Security concerns

Capturing all outgoing and incoming traffic for the current tab might expose sensitive or confidential data. Always consider the security aspect before sharing a recorded log. Learn more about [the security details when working with Fiddler Jam]({%slug fj-security%}).

## Next Steps

Learn more about:

- What is the [Fiddler Jam portal]({%slug fj-portal%}).
- What is the difference between [Fiddler Jam portal user]({%slug fj-users%}#user-role), [Fiddler Jam portal viewer]({%slug fj-users%}#viewer-role) and how to become one.
- How to [work with submitted logs in the Fiddler Jam portal]({%slug fj-portal-logs%}).
- How to [organize received logs into portal workspaces]({%slug fj-workspaces%})
- How to [use the Fiddler Everywhere desktop application for deep-dive investigation of Jam logs]({%slug fj-advanced-analysis%}).

