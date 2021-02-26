---
title: Submitted Logs
slug: fj-portal-logs
tags: Fiddler Jam portal logs, Fiddler Jam accessing submitted log, Jam submitted log
publish: true
position: 40
---

# Working With Submitted Logs

Once an extension user submits recorded traffic, the log is uploaded to the Fiddler Jam cloud space. By default, the uploaded logs will be stored for 30 days in the cloud storage, and then they will be deleted. With the Fiddler Jam portal, any editor with access rights could save, organize, analyze and work with the provided records. 

## Open Submitted Logs

After an extension user submits a log, the log is uploaded to the Fiddler Jam cloud space. At this moment, only the extension users know the exact address of the log. The next step is for the extension user to share the generated link (with the access rules set via [the link generation options]({%slug fj-link-options%})) to the portal user (e.g., a support engineer with Fiddler Jam subscription and editor role).

Notice that to protect the content of the submitted log, the following rules are in order:

1. The submitted log can only be opened by a portal user that meets the access right requirements set by the extension user via [the link generation options]({%slug fj-link-options%}))
2. Initially, the submitted log can only be opened by a portal user with [the **editor** role]({%slug fj-users%}#editor-role). Quota restrictions apply for the editor opening the log based on the active subscription (refer to the _Reports per month_ row in [the subscription comparison table]({%slug fj-portal%}#subscriptions)).
3. (_Optional_) Add the submitted log to a workspace. Logs that are not added to a workspace will be automatically deleted after 30 days period. 

In order for portal users with a **viewer** role to be able to open the submitted log, the log must be added to a workspace (by an editor), and the extension user should have set an appropriate access level during the link generation.

## Working with Logs

Once a submitted log is opened in the Fiddler Jam portal, there are multiple functionalities that the portal UI provides like:

- [Editing log's details](#log-details) (title, description, etc.).
- [Investigating the log's captured traffic in details (requests and responses)](#traffic-inspection). 
- [Inspecting the taken screenshots](#screenshot-inspection).
- [Analyzing the developer's console logs](#console-log-inspection).
- [Reload JAM log for mocking](#mocking-log).
- [Deep dive investigation through Fiddler Everywhere]({%slug fj-advanced-analysis%}#fiddler-everywhere-integration).
- [Exporting as HAR file]({%slug fj-advanced-analysis%}#export-har).
- [Adding submitted logs to organizational workspaces]({%slug fj-workspaces%}#Aadd-submitted-log-to-workspace).


## Log Details

To edit new submitted log details:

- Open the submitted log and click on **Add to Workspace**.
- In the prompted window, edit the log details (_title_, _description_, _submitted by_, _workspace_).
- Click **Done** when ready. The log will be added to the selected workspace with the new details.

To edit the details of a log added in a workspace:

- Open the submitted log from the workspace.
- Click on the **Edit Log Details** icon (top-right corner next to _Open Workspace_).
- Edit the log's _title_, _description_, and _submitted by_ fields.
- Click on **Done** when ready.


## Using Logs

Depending on [the capture options]({%slug fj-capture-options%}), a Fiddler Jam log could contain the captured traffic (sessions), screenshots, and developer's console logs.

### Traffic Inspection

Each FIddler Jam log contains a list of captured HTTP sessions and request/response inspectors. On the left side, called **Captured Logs**, the UI provides the list of captured HTTP sessions, screenshots, and console logs. On the right side, called **Inspectors**, the Fiddler Jam UI provides the **Request** and the **Response** inspectors (when an HTTP session is selected) or the screenshot/console logs preview screen (when a screenshot or a console log is selected).

To investigate specific HTTP session:
- Open the submitted log.
- Select a session line. 
    >tip Each captured HTTP(S) session has a unique line ID which can be used as a reference in both the Fiddler Jam portal and the Fiddler Everywhere desktop application.
- The Request and Response inspectors load the session content (headers, body, cookies, etc.). Note that depending on [the capture options]({%slug fj-capture-options%}), some of the submitted information might be masked.

![Portal log UI](../images/portal/logs/fj-portal-log-usage.png)

>tip The traffic list and the inspectors are inspired by the Fiddler Everywhere UI. Learn more on how to use [the Request and Response inspectors](https://docs.telerik.com/fiddler-everywhere/user-guide/live-traffic/inspector-types) to investigate the captured traffic.


### Screenshot Inspection

In case the extension user has explicitly enabled the screenshot capturing, a Fiddler Jam log will also contain screenshot lines for each user interaction made from the extension user (while the recording is on). 

- Select a screenshot line in the Captured Logs list. The screenshot loads in a screenshot preview inspector.
- Use the **Save** icon to download the screenshot locally as a PNG file.

>tip Fiddler Jam extension will take screenshots on user interactions like following a link, pressing a button, etc.


### Console Log Inspection

In case the extension user has explicitly enabled the developer's console logs capturing a Fiddler Jam log will also contain console log lines.

- Select a console log line in the Captured Logs list. The console log loads in a custom inspector.
- Use the **Details** inspector for examining the console log.
- Use the **Stack Trace** inspector for inspection of the stack trace.

