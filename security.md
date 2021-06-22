---
title: Security
description: Security details and related technical information about the Fiddler Jam sharing and capturing functionalities.
slug: fj-security
publish: true
position: 90
---


## Fiddler Jam Security

Fiddler Jam extension is a Chrome extension tool that can capture the ongoing tab activity and generate links with the captured activity logs. With such functionality, a particular set of security is added as functionality to Fiddler Jam to protect its users' privacy and allow you to share logs with some information being entirely stripped. Here are the must-know highlights when capturing and sharing Fiddler Jam logs.

- When Fiddler Jam starts capturing, a red dot will indicate that there is an ongoing recording.

- Fiddler Jam captures the Chrome tab's content where Fiddler Jam capturing is initialized plus all tabs and windows opened from that tab (and all tabs and windows opened from them). All tabs and windows with active capturing will have the red dot indication in the Fiddler Jam extension.

- The default settings (see the [**Capture Options**](#capture-options) below) will mask cookies values and won't record any post data (input from text fields, forms, etc.)

- The password-protected logs are encrypted with AES-CTR.

- The Fiddler Jam logs are stored in cloud storage based in the US, North Virginia. The Fiddle Jam team doesn't have access to and can't recover password-protected log content. See more about the password protecting option in the [**Sharing Links**](#sharing-links) option.

- By default, The FiddlerJam portal site is collecting usage statistics data. Learn more about how to enable and disable the collection of usage data via the [Privacy settings]({%slug fj-portal%}#privacy-settings) 

## Capture Options

The **Capture Options** menu provides some useful functionalities to will be applied during the capturing. Before you record a log, consider the following security concerns.

- **Take screenshots while capturing** - This option will add a screenshot of your initial action from the active Chrome tab. Before you record a log, consider disabling the screenshot option if your screen shows sensitive data. **Turned ON by default**.

- **Capture console** - This option will include any developers console outputs in the recorded log. Before you record a log, consider disabling this functionality if your console logs contain sensitive information. **Turned ON by default**.

- **Mask cookies** - When active, this option masks all cookies values (cookie key names are still readable!) so that they won't be visible to the portal users receiving the log. **Turned ON by default**.

- **Mask post data** - This option captures the user's information in text inputs and forms. That might include sensitive information like usernames, personal information, etc. **Turned ON by default**.

- **Disable cache** - This option sets the `Cache-Control` and `Pragma` headers to **no-cache** value on each network request. **Turned ON by default**.

## Sharing Links

Once [a log is recorded]({%slug fj-recording-logs%}), the Fiddler Jam extension generates a unique link. The logs are distributed as HAR files.

- For logs generated with **Share as link** option:  Any [Fiddler Jam portal users and viewers]({%slug fj-portal%}) could open the link.

- For logs generated with **Share with specific people** options:  Only [Fiddler Jam portal users and viewers]({%slug fj-portal%}) that is explicitly included in the share list will be able to open the link.

- For logs generated with **Password protection** option: Only [Fiddler Jam portal users and viewers]({%slug fj-portal%}) that knows the password could open the link. The logs are distributed as HAR files, which are encrypted with the AES-CTR encryption algorithm.
