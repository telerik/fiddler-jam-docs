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

Some end users might experience an issue while starting the extension, capturing traffic, or submitting a generated Fiddler Jam log.

To handle such possible errors, follow the suggested steps:

1. Verify that you have an active Internet connection.

1. Verify that you have access to the following test endpoint:

    [https://fiddler-backend-production.s3.amazonaws.com/connectivity-test/check.html](https://fiddler-backend-production.s3.amazonaws.com/connectivity-test/check.html)


## Chrome Troubleshooting

If the issue resides elsewhere, proceed with collecting the error data from your Chrome browser:

1. Open [chrome://extensions/?id=fnkjlegmkbicdodlheligomlfbdblpf](chrome://extensions/?id=fnkjlegmkbicdodlheligomlfbdblpf). When the Fiddler Jam Chrome Extension is installed, the link will open the Chrome Extension **Details** page. Scroll down and enable the **Collect errors** toggle.

1. Open the Fiddler Jam extension and record a test session. Stop the recording and proceed to the next step **before** pressing the **Get Link** button.

1. Open a new Chrome tab and then open `chrome://extensions/` and send a screenshot of any occurred errors to the [Fiddler Jam support team]({%slug jam-support-page%}).

   ![Fiddler Jam error details](../images/ext/support/fj-extension-error-logs-details.png)

1. If no errors are listed in the chrome://extensions/ screen,  go to the **Manage extensions** page and follow the **Background page** link. A Chrome DevTools console opens in another window.

   ![Fiddler Jam background page](../images/ext/ext-images/extension-background-page.png)

1. Back in the Fiddler Jam extension, press the **Get Link** button.

1. Go back to the extension **Background page**. Open the **Console** tab and click the **Start capture** button. Log all errors in the Chrome DevTools console in an external HAR file.

1. Send all error logs, HAR files, and the screenshots to the [Fiddler Jam support team]({%slug jam-support-page%}).
