---
title: Error Handling
description: "Resolve issues related to the usage and configuration of the Fiddler Jam Chrome Extension."
slug: fj-error-handling
publish: true
position: 60
previous_url: /get-started/error-handling
---

# Error Handling

Submitting a Fiddler Jam log requires access to specific API endpoints and specific access levels for the users who use the Internet through the browser.

Some end users might experience issues while starting the extension, capturing traffic, or submitting a generated Fiddler Jam log.

To handle such possible errors, follow the suggested steps:

1. Verify that you have an active Internet connection.

1. Verify that you have access to the following test endpoint:

    [https://fiddler-backend-production.s3.amazonaws.com/connectivity-test/check.html](https://fiddler-backend-production.s3.amazonaws.com/connectivity-test/check.html)

1. Collect additional error data from your [Chrome](#chrome-troubleshooting) or [Edge](#edge-troubleshooting) browser.

## Chrome Troubleshooting

Collect additional error data from your Chrome browser as follows:

1. Open [chrome://extensions/?id=fnkjlegmkbicdodlheligomlfbdblpf](chrome://extensions/?id=fnkjlegmkbicdodlheligomlfbdblpf). When the Fiddler Jam Chrome Extension is installed, the link will open the Chrome Extension **Details** page. Scroll down and enable the **Collect errors** toggle.

1. Open the Fiddler Jam extension and record a test session. Stop the recording and proceed to the next step **before** pressing the **Get Link** button.

1. Open a new Chrome tab and then open `chrome://extensions/` and send a screenshot of any occurred errors to the [Fiddler Jam support team]({%slug jam-support-page%}).

   ![Fiddler Jam error details](../images/ext/support/fj-extension-error-logs-details.png)

1. Go to the **Manage extensions** page and follow the **Background page** link. A Chrome DevTools console opens in another window.

   ![Fiddler Jam background page](../images/ext/ext-images/extension-background-page.png)

1. Back in the Fiddler Jam extension, press the **Get Link** button.

1. Back in the extension **Background page**, open the **Console** tab and click the **Start capture** button. Log all errors in the Chrome DevTools console in an external HAR file.

1. Send all error logs, HAR files, and the screenshots to the [Fiddler Jam support team]({%slug jam-support-page%}).

## Edge Troubleshooting

Collect additional error data from your Edge browser as follows:

1. Open [edge://extensions/?id=fpolpgbhhhbioobffnkcfhmdafkgcmbh](edge://extensions/?id=fpolpgbhhhbioobffnkcfhmdafkgcmbh). When the Fiddler Jam Chrome Extension is installed, the link will open the Edge Extension **Details** page. Toggle the **Developer mdoe** and then enable the **Collect errors** check.

1. Open the Fiddler Jam extension and record a test session. Stop the recording and proceed to the next step **before** pressing the **Get Link** button.

1. Go to the Edge's **Manage extensions** page and follow the **Background page** link. An Edge DevTools console opens in another window.

1. Back in the Fiddler Jam extension, press the **Get Link** button.

1. Back in the extension **Background page**, open the **Network** tab and export all logs in an external HAR file.

1. Back in the extension **Background page**, open the **Console** tab and save all logs in an external LOG file.

1. Send all error logs, HAR files, and the screenshots to the [Fiddler Jam support team]({%slug jam-support-page%}).