---
title: Reporting Portal Issues
description: "Learn how to report an issue directly from the Fiddler Jam portal through the Fiddler Jam Embedded built-in functionality."
slug: fj-report-issue
publish: true
position: 94
---

# Reporting Fiddler Jam Portal Issues

You can report a portal issue or request support assistance through the **Report Issue** built-in functionality which utilizes the **Fiddler Jam Embedded** technology. 

The [**Report Issue** button]({%slug fj-portal-menu%}#report-issue) is part of the [Fiddler Jam Portal menu]({%slug fj-portal-menu%}). This option allows you to start capturing within the Fiddler Jam portal, record the observed issue, and directly submit the issue to the Fiddler Jam support team. 

To record and submit your Fiddler Jam portal issue:

1.  From the [Fiddler Jam Portal menu]({%slug fj-portal-menu%}), click **Report Issue**.

    ![Report Issue button](../images/portal/menu/menu-report-issue.png)

1. Click the **Start Capture** button. The browser screen will refresh and a native share window will appear.

    - On Chromium browsers, like Edge, Chrome, Brave, and similar, select **This Tab** and click **Share** to start the recording. The triggered recording will contain the HTTP/HTTPS sessions, video recording, console logs, and storage info.
    
        ![Chrome recording in this tab](../images/portal/report/fj-report-share.png)

    - On the Firefox browser, select **Fiddler Jam Portal - Mozzila Firefox** and click **Allow** to start the recording. The triggered recording will contain the HTTP/HTTPS sessions, video recording, console logs, and storage information.

        ![Choosing the Fiddler Jam Portal window in Firefox as a recording option](../images/portal/report/fj-report-firefox-allow.png)

    - Currently, the video recording is not supported on the Safari browser (macOS). The triggered recording will contain the HTTP/HTTPS sessions, console logs, and storage information (no video recording).

1. Reproduce the portal issue by opening the desired Fiddler Jam page and going through the issue steps.    

    >important The **Report Issue** network capturing works only with the `*.getfiddler.com` domain. You won't be able to capture HTTPS traffic from other pages or applications accessing resources outside the Fiddler Jam portal. However, capturing from other tabs/applications will contain the other active log options like video capturing, user interactions, and so on.

1. Click **Recording** and then **Stop Capture** to stop the recording immediately.

    ![Stop capture](../images/portal/report/fj-report-stop.png)

1. Add as many details as possible in the **Issue Description** field. Click **Submit Issue**.

    ![Submit issue](../images/portal/report/fj-report-submit.png)

As a result, the recorded issue will be submitted to the Fiddler Jam support team for further investigation.

>tip Fiddler Jam Embedded is a dedicated API that you can use alongside your unique API key to fully integrate the Fiddler Jam logging and submission services into your own site. For more information on acquiring the Fiddler Jam Embedded API key and how to use the API, contact the Fiddler team at support@getfiddler.com.
