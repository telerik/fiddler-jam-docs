---
title: Log Sharing Options
description: "Learn how to share the Chrome Extension recorded logs with a generated link or with specific Fiddler Jam portal users, and use optional password protection."
slug: fj-link-options
publish: true
position: 50
previous_url: /extension/link-options, /get-started/link-options
---

# Log Sharing Options

The Fiddler Jam Chrome Extension enables you to submit the recorded logs either by sharing the generated link for that log, by sharing the log with specific people. or by directly uploading the recorded log to a workspace (available only for authenticated users).

All alternatives allow you to provide additional security through setting a password.

## Sharing the Generated Link

Link sharing allows [registered Fiddler Jam Portal users]({%slug fj-users%}#portal-users) with that link to open the recorded log.

Additionally, you can protect the log with a password. Only Fiddler Jam Portal users who know the password will have access to the recorded information.

![Link generation options](../images/ext/ext-images/extension-link-options.png)

## Sharing the Log with Specific People

To share the recorded log with specific Fiddler Jam Portal users, you need to explicitly list their account emails. Only users from that email list will be able to open the recorded log.

Additionally, you can protect the log with a password. Only the specified Fiddler Jam Portal users who know the password will have access to the recorded information.

![Share with specific people](../images/ext/ext-images/extension-link-options-sharing-via-emails-popu.png)



## Upload to Jam Portal Workspace

The option **Upload to a workspace** is available for authenticated users that have associated [portal user]({%slug fj-users%}#portal-users) accounts. The recorded log uploads to a selected organizational workspace.

![Upload to a workspace](../images/ext//ext-images/extension-link-options-workspace.png)


## Password Protection for Recorded Logs

All recorded logs can be protected with a password, no matter if they are shared with a link , with specific users, or if they are directly uploaded to an organizational workspace.

To create a password for your recorded log, use the **Password protection** switch. The password requires you to consider that it has to:

* Be at least eight characters long.
* Contain both lowercase and uppercase letters.
* Contain at least a single number.

