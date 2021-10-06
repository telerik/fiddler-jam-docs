---
title: FAQ
description: Frequently asked questions about Fiddler Jam
slug: faq
publish: true
position: 100
---

# FAQ

## So how does Fiddler Jam work... really?  

**_A:_**  

**Your customers (also referred to as [extension users](#fiddler-jam-terminology))) will...**  
- Install the lightweight Chrome extension.
- Start recording network requests/responses.
- Reproduce the issue at hand.
- Save their recordings and share them via the generated link (upload Fiddler Jam logs to cloud space).  

**Your support team (also referred to as [portal users](#fiddler-jam-terminology))) will then...**  
- Open the customer-provided generated link in the **Fiddler Jam portal** via a browser.
- Access the protected private workspace where logs are stored.
- Triage the issue, add context and share with the development team.

## What is the definition of a Fiddler Jam log?

**_A:_** A Fiddler Jam log is an information recorded by [the extension users](#what-is-an-extension-user?) via the Fiddler Jam Chrome extension. A log contains the captured network traffic and (optionally) the generated console logs and screenshots from the user interaction. The maximum size for Fiddler Jam log (requests and screenshots) is 50MB.

## Who can access details of a submitted log?

**_A:_** That depends on [the link generation options]({%slug fj-link-options%}) chosed by the extension user. **Public links** are accessible for any Fiddler Jam portal user. Link generated via the **Share with specific people** option are accessible only for the concrete Fiddler Jam portal users. Links generated with the **password-protection** option are be accessible only for Fiddler Jam portal users with knowledge of the password.

## Who can access the details of a password-protected log?

**_A:_** Any portal user and password to unlock it. After opening the log via a password, the corresponding portal user will have complete access to the sessions.

## What level of access do portal users get?

**_A:_** Portal users have access to logs of the workspace they have been assigned and will have access to all public links.

## Where are the logs stored?

**_A:_** The logs are stored in Fiddler's cloud servers.

## Fiddler Jam Terminology

|  session |   A network activity that Fiddler captures. it contains HTTP(S) request and response information together   |
|  log |   A collection of captured HTTP(S) sessions, screenshots, video recordting, console logs, and other information recorded by an extension user. The maximum size of Fiddler Jam log is 50MB.  |
|  capture options |  A set of [advanced capture options]({%slug fj-capture-options%}) available in the Fiddler Jam extension. The options allows you to control what information is to be captured.|
|  workspace   |   A workspace is an organizational placeholder for logs. The workspace provides means to organize and share logs with your collaborators (within the organizational account)   |
|  password-protected log  |   Log created with a password |
|  log URL or log link |  Direct URL for accessing the submitted log of any space on the web portal. The link is generated after the log recording is stopped.  |
