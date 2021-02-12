---
title: Submitting a log
slug: fj-submitting-logs
tags: submit Fiddler Jam logs, send Fiddler Jam logs, Fiddler Jam logs, Fiddler Jam capturing, Fiddler Jam recording,
publish: true
position: 30
---


# Submitting a Log

Logs captured by Fiddler Jam can be submitted to the [Fiddler Jam portal]({%slug fj-portal%}), shared with portal users via email, or saved as [JSON-formatted archive (**HAR**)](https://en.wikipedia.org/wiki/HAR_(file_format)).

## Submit via Link

Collaboration is the main feature of Fiddler Jam. Submitting a recorded log is easy and can be achieved in few easy steps:

1. [Record a log]({%slug fj-recording-logs%}).
2. From the [**Link Generation options**]({%slug fj-link-options%}) select the access level you would like to apply to the recorded logs. The default drop-down selection is **Anyone with this link** but you could also create a password-protected link (**Anyone with link and password** option) or share the recorded logs with a specific people via email (**Share with specific people** option).
3. Based on the choice made in the previous steps:
    - _When choosing **Anyone with this link** or **Anyone with link and password** option:_ Click on **Get Link** to submit the generated log. The action will generate a sharable link for the current user. Additionally, it will also submit the log to the Fiddler Jam cloud space.
    - _When choosing **Share with specific people** option:_ Click on **Share Captured Logs** to submit the generated log. The action will generate a shareable link for the current user and send an email containing a link to the email recipients' recorded log. Additionally, it will also submit the log to the Fiddler Jam cloud space.
4. Click on **Copy URL** to store the unique URL to your machine's clipboard. Use this link to share the recorded logs with other Fiddler Jam portal users.

## Save as File

Alternatively, instead of sharing a link, you could generate and share a HAR file. 

1. Click on **Save as File** to download the log as an archive ([HAR format](https://en.wikipedia.org/wiki/HAR_(file_format))). 
2. The HAR archive will be named **fiddler_jam_XXX_jam.getfiddler.com** where XXX is a GUID of the recorded log.
3. Examine the recorded log locally (e.g., via [FIddler Everywhere](https://www.telerik.com/download/fiddler-everywhere)) or share it by sending the archive to collaborators.

>important HAR is a known format and can be recognized and loaded in multiple network tools. However, It will lack some of the extras provided by Fiddler Jam. A HAR file won't contain the Fiddler Jam screenshots and won't include the developer console logs.