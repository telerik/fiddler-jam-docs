---
title: Security
slug: security
tags: Fiddler Jam security, Fiddler Jam password protection, FIddler Jam encryption, Fiddler Jam masked cookies, Fiddler Jam capturing security concernts
publish: true
position: 90
---

# Fiddler Jam Security

Fiddler Jam is a Chrome extension tool that can capture the ongoing tab activity and generate links with the captured activity logs. With such functionality, a particular set of security is added as functionality to Fiddler Jam to protect its users' privacy and allow you to share logs with some information being entirely stripped. Here are the must-know highlights when capturing and sharing Fiddler Jam logs.

- Fiddler Jam captures only the content of the currently **focused** Chrome tab.
- The default settings (see the [**Capture Options**](#capture-options) below) will mask cookies values and won't record any post data (input from text fields, forms, etc.)
- The password-protected logs are encrypted with AES-CTR.
- The Fiddler Jam logs are stored in a cloud-based in EU. The Fiddle Jam team doesn't have access to and can't recover password-protected log content. See more about the password protecting option in the [**Sharing Links**](#sharing-links) option.

## Capture Options

The **Capture Options** menu provides some useful functionalities to will be applied during the capturing. Before you record a log, consider the following security concerns.

- **Screenshots** - This option will add a screenshot of your initial action from the active Chrome tab. Before you record a log, consider disabling the screenshot option if your screen shows sensitive data. **Turned ON by default**.

- **Capture console** - This option will include any developers console outputs in the recorded log. Before you record a log, consider disabling this functionality if your console logs contain sensitive information. **Turned ON by default**.

**Masking Cookies** - When active this option masks all cookies values (cookie key names are still readable!) so that they won't be visible to the agents receiving the log. **Turned ON by default**.

- **Capture Post Data** - This option captures the user's information in text inputs and forms. That might include sensitive information like usernames, personal information, etc. **Turned OFF by default**.

## Sharing Links

Once [a log is recorded]({%slug fj-recording-logs%}), the Fiddler Jam extension generates a unique link. The logs are distributed as HAR files.

- For logs generated with **Anyone with this link** option:  Any [Fiddler Jam portal agent]({%slug fj-portal%}) could open the link.
- For logs generated with **Anyone with link and password** option: Only [Fiddler Jam portal agent]({%slug fj-portal%}) that knows the password could open the link. The logs are distributed as HAR files, which are encrypted with the AES-CTR encryption algorithm.
- For logs generated with **Share with specific people** option:  Only [Fiddler Jam portal agent]({%slug fj-portal%}) that is explicitly included in the share list will be able to open the link.
