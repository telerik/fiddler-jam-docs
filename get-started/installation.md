---
title: Managing the Chrome Extension after Installation
description: "Learn how to manage the Fiddler Jam Chrome Extension options after its successful installation."
slug: fj-installation
tags: Fiddler Jam installation, Fiddler Jam Extension, Fiddler chrome extension, Jam Chrome extension
publish: true
position: 10
---

# Managing the Chrome Extension after Installation

After the successful installation of the Fiddler Jam Chrome Extension, you can set its site access and allow it to work in the Incognito mode.

To access the specific settings on the management page of the Fiddler Jam Chrome Extension:

1. Click the **Extensions** button on the Google Chrome toolbar next to your profile avatar.
1. In the expanded menu, click **Manage Extensions**.
1. Type **Fiddler Jam** in the search bar or directly select the Fiddler Jam Chrome Extension.
1. Click the **Details** button.

## Setting the Site Access

The **Site Access** Extension settings enable you to limit the Extension for a specific site. The **on click** option is not applicable for the Fiddler Jam Chrome Extension as it does not allow you to permit access to the mandatory backend endpoints. Most Chrome exceptions are available on all sites and you can manage them through the **On all sites** option.

To use Fiddler Jam on specific sites only, scroll down to **Site access**, select the **On specific site** option, and add the required endpoints:

```
// The URL of the specific site you will use alongside the Fiddler Jam extension.
https://api.getfiddler.com/](https://api.getfiddler.com/
https://fiddler-backend-production.s3-accelerate.amazonaws.com/
```

## Enabling the Incognito Mode

By default, most Chrome extensions are disabled in the Incognito mode. To explicitly enable Fiddler Jam and debug your sites in Incognito:

1. Open the management page of the Fiddler Jam Chrome Extension.
1. Scroll down to **Allow in Incognito** and use the switch to enable the feature.
