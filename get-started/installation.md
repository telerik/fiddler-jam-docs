---
title: Installation
description: Instructions for Fiddler Jam extension installation for Google Chrome or other Chromium browsers
slug: fj-installation
tags: Fiddler Jam installation, Fiddler Jam Extension, Fiddler chrome extension, Jam Chrome extension
publish: true
position: 10
previous_url: /extension/installation
---

# Manage Extensions in Chrome

Some specific information and settings are accessible via the extension's management page:

- Click the **Extensions** button on the Google Chrome toolbar (next to your profile avatar).
- In the expanded menu, click **Manage Extensions**.
- Type **Fiddler Jam** in the search bar or directly select the **Fiddler Jam** extension.
- Click on the **Details** button.

On this management page, you could set Fiddler Jam [site access](#site-access) and the option to [work in incognito mode](#allow-in-incognito).

### Site Access

The **Site Access** extension settings provide the option to limit the extension for a specific site. The option **on click** is not applicable for the Fiddler Jam extension as it does not provides an opportunity to permit access to the mandatory backend endpoints. Most Chrome exceptions are available on all sites (using the option **On all sites**).

To use Fiddler Jam on specific sites only, scroll down to **Site access**, select the **On specific site** option, and add the required endpoints:

```
<The URL of the specific site you will use alongside the Fiddler Jam extension>
https://api.getfiddler.com/](https://api.getfiddler.com/
https://fiddler-backend-production.s3-accelerate.amazonaws.com/
```

### Allow in Incognito

By default, most Chrome extensions are disabled in incognito mode. To explicitly enable Fiddler Jam and debug your sites in incognito mode, follow these steps:

1. Open the [management page](#manage-extensions-in-chrome).
1. Scroll down to **Allow in Incognito** and use the switch to enable the feature.
