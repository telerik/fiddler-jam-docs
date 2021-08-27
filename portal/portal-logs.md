---
title: Submitted Logs 
description: Essentials and usage instructions for working with submitted Fiddler Jam portal log
slug: fj-portal-logs
publish: true
position: 40
---

# Submitted Jam Logs

Once [an extension user]({%slug fj-users%}#extension-users) submits recorded traffic, the log uploads to the Fiddler Jam cloud space, also known as the [Jam portal](https://Jam.getfiddler.com). The Jam cloud space keeps any submitted logs in the storage for 30 days. After that period, if the log is not added to [a workspace]({%slug fj-workspaces%}), it will be automatically deleted. With the help of the Fiddler Jam portal, any [portal user]({%slug fj-users%}#user-role) with access rights could save, organize, analyze and work with the provided records. 

## Open Submitted Logs

After a Fiddler Jam user submits a log, the log uploads to the Fiddler Jam cloud space. At this moment, only this user knows the exact address of the log. The next step is for the extension user to share the generated link with other portal users (e.g., a support engineer with Fiddler Jam portal subscription and user role). The access rules are set via [the link generation options]({%slug fj-link-options%}).

 Fiddler Jam protects the content of any submitted log through the following rules:

- All Jam logs are captured with applied **masking for [any data considered sensitive]({%slug fj-security%}#masking-sensitive-data)**.
- The submitted log can be opened only by [a portal user]({%slug fj-users%}#user-role) who meets **the access rights requirements set by the extension user** via [the link generation options]({%slug fj-link-options%})).
- The submitted log can be added to a workspace. Any Jam log that is not added to a workspace will be **automatically deleted after 30 days**. 

For [**a portal viewer**]({%slug fj-users%}#viewer-role) role to be able to open the submitted log, the log must be added to a workspace (by a portal user), and the extension user should have set an appropriate access level during the link generation.


## Working with Logs

Once a submitted log loads in the Fiddler Jam portal, there are multiple functionalities that the portal UI provides like:

- [Use and edit the log's details](#log-details) (title, description, etc.).
- [Investigate the log's captured traffic in detail (requests and responses)](#traffic-inspection) - Session data that includes the headers & bodies of each HTTP/HTTPS request and response. 
- [Inspect the browser events](#browser-events) - Each Jam log contains the browser events triggered from user interactions with the page during the recording.
- [Inspect the taken screenshots](#screenshot-inspection)- When the extension user explicitly enables the screenshot option, a new screenshot is added for each user interaction (on a clickable element).
- [Inspect the screen recording](#screen-recording) - When the extension user explicitly enables the **Capture Video** option, the whole capturing process from start to end is outputted in the **Screen Recording** tab.
- [Analyzing the developer's console logs](#console-log-inspection) - When the extension user enables the **Capture Console** option.
- [Deep-dive investigation through **Fiddler Everywhere**]({%slug fj-advanced-analysis%}#fiddler-everywhere-integration).
- [Exporting as **HAR file**]({%slug fj-advanced-analysis%}#export-har).
- [Adding submitted logs to **organizational workspaces**]({%slug fj-workspaces%}#Aadd-submitted-log-to-workspace).

The extension's capture options also allow you to mask sensitive data (like cookies and post-data) and disable the browser cache. Use the different Jam inspectors and tabs to debug and investigate any reported issue in detail.

## Jam Log Tabs and Inspectors

Each Fiddler Jam log contains a list of entries containing different recorded information (HTTP/HTTPS sessions, console logs, screenshots, browser events, etc.). The log page in the Fiddler Jam portal has the following structure:

1. On the left side, the site provides two primary tabs called **Storage Details** and **Captured Logs**.

    - In the **Storage Details**, you will find lists of the entries stored in the Local Storage and the Session Storage. This tab will contain data only when the extension user explicitly used the **Capture storage info** from the [**Advanced options**]({%slug fj-capture-options%}).

    - In the **Captured Logs**, you will find a numerated list of the captured HTTP/HTTPS sessions, screenshots, browser events, and console logs. 

1. On the right side, the site provides two tabs called **Screen Recording** and **Inspectors**.

    - In the **Screen Recording**, you will find a screen recording from the browser (taken during the Jam recording). This tab will contain data only when the extension user explicitly used the **Capture video** from the [**Advanced options**]({%slug fj-capture-options%}).

    - In the **Inspectors** tab, you will see an inspector that loads the information for the selected line from the **Captured Logs** list. The inspectors are changed depending on whether you choose an HTTP session, console log, or browser event. For example, Fiddler Jam loads the **Request** and **Response** inspectors when an HTTP session is selected, the console log details screen when a console log entry is selected, and a browser event information inspector when a browser event entry is selected.

### Traffic Inspection

To investigate a specific HTTP/HTTPS session:

1. Open the submitted log.
1. (Optional) Filter by search term (while using the Search text field) or Filter by log type (while using the Filter button)
1. Select a session line from the **Captured Logs** tab. 
    - When the selected line is an HTTP session, then the **Request** and ** response** inspectors load the session content (headers, body, cookies, etc.). Note that depending on [the capture options]({%slug fj-capture-options%}), some of the submitted information might be masked. 
    - When the selected line is user interaction, the inspector will load technical details about the action (for example, the HTML tag, the text value, and the name of the4 specific action).
    - When the selected line is a screenshot of user interaction, a preview inspector will load the taken screenshot depicting the moment of the user interaction alongside technical data about the action.
    - When the selected line is a console log, a details inspector will load the log details and the captured stack trace.

    >tip Each captured HTTP(S) session has a unique line ID that can be used as a reference in both the Fiddler Jam portal and the Fiddler Everywhere desktop application.


![Portal log UI](../images/portal/logs/fj-portal-log-usage.png)

>tip The traffic list and the inspectors are inspired by the Fiddler Everywhere UI. Learn more about using [the Request and Response inspectors](https://docs.telerik.com/fiddler-everywhere/user-guide/live-traffic/inspector-types) to investigate the captured traffic.


### Browser Events

Each Fiddler Jam log contains browser events that are triggered by user interaction. Each event stores additional information about the exact moment it happened (date and time) and the specific technical data (associated with the event). Additionally, the click events contain a screenshot with an action pointer.

The tracked events are as follows:
- **click**
- **double-click**
- **navigated to** 
- **tab opened**
- **tab closed**
- **pressed "Enter"** key
- **pressed "Tab"** key
- **scroll** events
- **text-input** (just the event without the actual inputted data).

When the option **Capture screenshots** is explicitly enabled, the Fiddler Jam log will also contain screenshots for user interactions. 

_Steps needed to examine a screenshot:_
- Select [a **Click** event line](#browser-events) from the **Captured Logs** list, and the associated screenshot loads in the **Inspectors** tab as the last property of the event data.
- Use the **Save** icon to download the screenshot locally as a PNG file.

>tip The Fiddler Jam extension will take screenshots on user interactions like following a link, pressing a button, and other clickable events recognized as such by FIddler Jam.

_Example of captured click action_
![Inspecting browser event](../images/portal/logs/fj-portal-log-browser-event.png)


### Console Log Inspection

A Fiddler Jam log will also contain console log lines if the extension user has explicitly enabled the developer's console logs capturing. Select a console logline from the **Captured Logs** list, and the chosen console log loads in the **Inspectors** tab. The inspector shows the time the log was outputted and the log stack trace content.

_Example of captured console log_
![Inspecting browser event](../images/portal/logs/fj-portal-log-console-log.png)


### Video Recording

When the extension user explicitly enables the video recording, the whole capturing in the initial tab is output in a video recording. Load the video in the **Screen recording** tab to the right.

_Example of captured screen recording_
![Inspecting video recording](../images/portal/logs/fj-portal-log-screen-recording.png)

### Storage Details

The **Storage Details** tab (to the left) displays the Local Storage and Session Storage data.

_Example of captured storage data_
![Inspecting storage data](../images/portal/logs/fj-portal-log-storage-data.png)

## Dashboard Log User Interface

### Log Details

Apart from the [recorded data](#log-data), each log also contains user-defined [**log details**](#log-details) such as the log title, description, submitted by field, and the workspace. Every Jam log also contains an immutable [**capture info**](#capture-info) that stores technical and environmental data extracted from the extension.

To add or edit the log details of a newly submitted log:

1. Open the submitted log and click on **Add to Workspace**.
1. In the prompted window, edit the log details (_title_, _description_, _submitted by_, _workspace_).
1. Click **Done** when ready to add the log to the selected workspace with the new details.

To edit the details of a log that is already added in a workspace:

1. Open the submitted log from the workspace.
1. Click on the **Edit Log Details** icon (top-right corner next to _Open Workspace_).
1. Edit the log's _title_, _description_, and _submitted by_ fields.
1. Click on **Done** when ready.

![Edit log details](../images/portal/logs/fj-portal-log-edit-details.png)


### Capture Info

The **Capture Info** expandable window (to the right of the Jam log title) shows the technical and environmental data extracted from the Jam extension. That includes information about the URL, time, OS, browser, screen resolution, used localization, timestamps, Jam extension version, and the enabled extension [capture options]({%slug fj-capture-options%}).

![Capture Info](../images/portal/logs/fj-portal-log-capture-info.png)

### Tabs and Inspectors

Each Jam log loads on a screen with different tabs, and each tab has its conceptual inspectors. Learn more about using the log tabs and inspectors in the [Jam Log Tabs and Inspectors](#Jam-log-tabs-and-inspectors) section.

### Search

The **Search** field is available in the **Captured Logs** tab. Use it to filter the captured entries by a search term.

### Filters

A Fiddler Jam log could contain an excessive number of recorded HTTP requests, browser events (mouse interactions and navigation events), screenshots, console logs, etc.  Use the **Filters** (the icon next to the search text input) to filter out the different log entries (requests, screenshots, browser events, and console logs).

![Fiddler Jam Screenshots](../images/portal/logs/fj-portal-log-filtering.png)

### HAR Options

A submitted log can be exported as a HAR file (The HTTP Archive format, or HAR, is a JSON-formatted archive file format for logging a web browser's interaction with a site) and consequentially used with any 3rd-party software that supports HAR. Use the **Download HAR File** button (the icon to the **Filters** icon) to download the Jam log as a HAR file.

Any submitted log can also be re-loaded in the Fiddler Jam extension for a mock replay. Use the **Load HAR for mocking** button to load the log in the Fiddler Jam extension.

### Open in Fiddler Everywhere

Any Jam log can be loaded in the standalone Fiddler Everywhere application for further deep-dive investigation. Learn more about Fiddler Everywhere and its cross-platform functionalities from [the official documentation](https://docs.telerik.com/fiddler-everywhere/introduction).

### Copy URL Link

A submitted log can be re-shared via the **Copy URL** button (top-right corner next to the **Submitted by**).

