---
title: Advanced Log Analysis
description: Using Jam logs alongside Fiddler Everywhere desktop application for in-depth analysis
slug: fj-advanced-analysis
tags: Fiddler Jam log in Fiddler Everywhere, advanced Fiddler Jam analysis, Jam integration with Fiddler Everywhere, Open in Fiddler, Fiddler Jam HAR files, Jam HAR, JAM Everywhere
publish: true
position: 50
---

# Advanced Log Analysis

Fiddler Jam is suitable for fast and easy built-in recording of traffic, sharing, and analyzing data on the fly. Still, there are some cases where your support team will need an in-depth investigation, an environment where the issue could be reproduced, tested, and shared with even more collaborators. Fiddler Jam logs are compatible with [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) and other network tools to address the above scenarios. The integration is possible by providing means to save and download the captured traffic as a HAR file or open a Fiddler Jam portal log directly in Fiddler Everywhere.

>tip A log created by Fiddler Jam contains additional information like screenshots and developers console logs (see [capture options]({%slug fj-capture-options%})). However, notice that those are not part of the HAR file specification, so when saving Fiddler Jam log as a file or opening one in Fiddler Everywhere, those extras won't be present.

## Fiddler Everywhere Integration

Traffic captured by the Fiddler Jam extensions could be investigated thoroughly while using the Fiddler Everywhere desktop application for Windows, macOS, or Linux distributions. Fiddler Jam provides options to open the HAR file for both the extension and portal users.


## Open in Fiddler (Fiddler Jam Portal)

Any log submitted to the Fiddler Jam portal could be directly opened in Fiddler Everywhere.

- Install Fiddler Everywhere and make it the default tool for opening HAR files.
- [Open a log submitted in the FIddler Jam portal]({%slug fj-portal-logs%}).
- Click on the **Open in Fiddler** button.
- The captured session is opened as a HAR file in Fiddler Everywhere. You can use the full capabilities of the desktop tool to proceed with the debugging process.

>tip Each captured HTTP(S) session has a unique line ID which can be used as a reference in both the Fiddler Jam portal and the Fiddler Everywhere desktop application.

## HAR Files (Fiddler Jam Portal)

Any log submitted to the Fiddler Jam portal could be exported as HAR files while using the portal UI.

### Export HAR

To **export** a log (from the Fiddler Jam portal) as HAR file (note screenshots and console logs will be omitted):

- [Open a log submitted in the FIddler Jam portal]({%slug fj-portal-logs%}).
- Click on the **Download HAR file** button (downwards arrow next to **Open in FIddler** button).
- Use the HAR file with other network tools or share it with other collaborators.

## HAR Files (Fiddler Jam Extension)

Follow the steps below for loading captured traffic directly from the Fiddler Jam Chrome extension:

1. [Record a log]({%slug fj-recording-logs%})
2.  Once the recording is stopped, click on **Save as FIle**. The action will save and download the captured traffic as a HAR file named _**fiddler_jam_<unique-guid-here_<captured-url-here>.har>**_.
3. Open the HAR file with the Fiddler Everywhere desktop application. You have several options to open a HAR file with Fiddler Everywhere: 
    - Right-click on the HAR file and choose "Open With... " and choose Fiddler Everywhere (note that you need to have FIddler Everywhere installed beforehand). Alternatively, you could make Fiddler Everywhere the default tool for opening HAR files.
    - Open Fiddler Everywhere, and from the **Sessions** list, click on the  **Import Sessions** button. The in the prompted windows, select and open the downloaded Fiddler Jam HAR file.

As a result of the above, the HAR file opens in Fiddler Everywhere, from where you could use the desktop tool's full capabilities like modifying request/responses, re-issuing sessions, mocking server behavior, composing requests, etc.