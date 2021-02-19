---
title: Submitted Logs
slug: fj-portal-logs
tags: Fiddler Jam portal logs, Fiddler Jam accessing submited log, Jam submitted log
publish: true
position: 40
---

# Working With Submitted Logs

<!-- TODO: add section about elaborate capture details like screenshots, console logs  that can be linked to other systems like Jira, Freshdesk, etc. -->

Once a recorded traffic is submitted by an extension user, the log is uploaded to the FIddler Jam cloud space. By default, the uploaded logs will be stored for 30 days in the cloud storage and then they will be removed. With the Fiddler Jam portal, any editor with access rights could save, organize, analyse and work with the provided records. 

## Open Submitted Logs

After an extension user submits a log, the log is uploaded to the Fiddler Jam cloud space. At this moment, only the extension users know the exact address of the log. The next step is for the extension user to share the generated link (with the access rules set via [the link generation options]({%slug fj-link-options%})) to the portal user (e.g. a support engeneer with Fiddler Jam subscription and editor role).

Notice that to protect the content of the submistted log the following rules are in order:
1. The submitted log can only be opened by a portal user that meets the access right requirments set by the extension user via [the link generation options]({%slug fj-link-options%}))
2. Initially, the submitted log can only be opened by a portal user with [the **editor** role]({%slug fj-users%}#editor-role). Quota restrictions apply for the editor opening the log based on the used subscription.
3. (_Optional_) Add the submitted log to a workspace. Logs that are not added to a workspace will be automativcally deleted after 30 days period. 

In order, for portal users with the **viewer** role to be able to open the submitted log, the log must be added to a workspace (by an editor) and the extension user should have set an approriate access level during the link generation.



