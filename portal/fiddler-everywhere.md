---
title: Advanced Log Analysis
description: "Learn how to manage, inspect, and further analyze Fiddler Jam logs by opening them or by exporting them as HAR files in the Fiddler Everywhere desktop application."
slug: fj-advanced-analysis
publish: true
position: 50
---

# Advanced Log Analysis

Fiddler Jam is suitable for fast and easy built-in recording of traffic, sharing, and analyzing data on the fly. Yet, the engineering teams may need an environment where the issue can be reproduced, tested, and shared with even more collaborators for an in-depth analysis.

To address such scenarios, Fiddler Jam logs are fully compatible with [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) and other network tools. The integration is made possible through the options for saving and downloading the captured traffic as an HAR file, or by opening a Fiddler Jam Portal log directly in Fiddler Everywhere.

A log created by Fiddler Jam contains [additional information like screenshots and developer console logs]({%slug fj-capture-options%})). However, these options are not part of the HAR file specification, so when you save a log as a file or open a log in Fiddler Everywhere, these options won't be available.

## Opening Logs in the Portal

Engineers can directly open any log submitted to the Fiddler Jam Portal in Fiddler Everywhere. Each captured HTTP or HTTPS session has a unique **ID** line that can be used as a reference in both the Fiddler Jam Portal and the Fiddler Everywhere desktop application.

1. Install Fiddler Everywhere and make it the default tool for opening HAR files.

1. [Open a log submitted in the Fiddler Jam Portal]({%slug fj-portal-logs%}).

1. Click **Open in Fiddler**. As a result, the captured session is opened as an HAR file in Fiddler Everywhere. To proceed with the debugging process, you can use the features of the desktop tool.

## Exporting HAR Files

Any log submitted to the Fiddler Jam portal can be exported as HAR files while using the UI of the Portal.

To export a log from the Fiddler Jam Portal as an HAR file without exporting the screenshots and console logs:

1. Make sure you have installed the [Fiddler Everywhere](https://docs.telerik.com/fiddler-everywhere) desktop application.

1. [Open a log submitted in the Fiddler Jam Portal]({%slug fj-portal-logs%}).

1. Click the **Download HAR file** button represented by a downward arrow next to the **Open in Fiddler** button.

1. Use the HAR file with other network tools or share it with other collaborators.

1. (Optional) Open the HAR file with Fiddler Everywhere.

    To open the HAR file, use any of the following Fiddler Everywhere options:

    - Right-click the HAR file and choose **Open With...**. Select Fiddler Everywhere. Alternatively, you can make Fiddler Everywhere the default tool for opening HAR files.

    - Open Fiddler Everywhere. From the **Sessions** list, click the  **Import Sessions** button. In the prompted windows, select and open the downloaded Fiddler Jam HAR file.

After the HAR file opens in Fiddler Everywhere, you can now use the full capabilities of Fiddler Everywhere including the modification of requests and responses, consecutive issuing of sessions, mocking of server behavior, and so on.
