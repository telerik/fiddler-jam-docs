---
title: Link Options
description: Details and options on link generation for sharing traffic captured from the Fiddler Jam extension
slug: fj-link-options
tags: submit Fiddler Jam, Fiddler Jam link generation, Fiddler Jam URL link, Fiddler Jam portal links, Jam sharing, Jam collaboration, Fiddler collaboration options
publish: true
position: 50
---

# Link Options

After [recording a log]({%slug fj-recording-logs%}), the Fiddler Jam extension provides several options for setting the log accessibility through the generated link. Use the **Link Options** drop-down to generate a sharable log with the proper access level:

- [Anyone with this link](#anyone-with-this-link)
- [Anyone with link and password](#anyone-with-link-and-password)
- [Share with specific people](#share-with-specific-people)

![Link generation options](../images/ext/ext-images/extension-link-options.png)

## Anyone with this link

The option allows any Fiddler Jam portal user with the link to open the recorded logs. Only registered portal users will have full access to the recorded information.

## Anyone with link and password

This option provides the opportunity to protect your recorded log with a password. The content is encrypted with AES-CTR, and only portal users with **appropriate access rights** and **access to the user-defined password** will be able to open the log.

>tip The password needs to be at least eight characters long and contain at least one lowercase letter, one uppercase letter, and one number.

## Share with specific people

This option allows you to list specific users via their emails. Only users explicitly listed in the email list will be able to open the recorded log. The recipients need to be portal users with the appropriate rights in the Fiddler Jam portal.

![Sharing with specific people](../images/ext/ext-images/extension-link-options-sharing-via-emails.png)

## Next Steps

Learn more about:

- What is the [Fiddler Jam portal]({%slug fj-portal%}).
- What is a [Fiddler Jam portal user]({%slug fj-users%}#portal-users) and how to become one.
- How to [work with submitted logs in the Fiddler Jam portal]({%slug fj-portal-logs%}).
- How to [organize received logs into portal workspaces]({%slug fj-workspaces%})
- How to [use the Fiddler Everywhere desktop application for deep-dive investigation of Jam logs]({%slug fj-advanced-analysis%}).
