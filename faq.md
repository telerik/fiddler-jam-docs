---
title: FAQ
slug: faq
tags: faq, frequently asked questions, Fiddler Jam terminology, Fiddler Jam help
publish: true
position: 100
---

# FAQ

## What is Fiddler Jam?  

**_A:_** Fiddler Jam is a troubleshooting solution for support & dev teams distributed as a Chrome extension.  

## Who can use the chrome extension?

**_A:_** Anyone with Google Chrome can install and use [**the Chrome extension**](#). There is no login or registration required.

>tip Although we are officially supporting only Google Chrome, the extension is expected to work in other  Chromium-based browsers like [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Brave](https://brave.com/)), and [Vivaldi](https://vivaldi.com/).

## What is the purpose of Fiddler Jam?  

**_A:_** Fiddler Jam helps **end-users** (also referred to as [**extension users**](#fiddler-jam-terminology)) to isolate issues by capturing HTTP(S) network logs in the customer's environment. It then enables the secure sharing of these logs between the customers and your support teams. Finally, with full Fiddler Everywhere integration, the development team can load the logs and replicate the issue locally, using tooling they are already comfortable with.  


## So how does Fiddler Jam work... really?  

**_A:_**  

**Your customers (also referred to as [extension users](#fiddler-jam-terminology))) will...**  
- Install a lightweight client (starting with a Chrome browser extension).
- Start recording network requests/responses.
- Reproduce the issue at hand.
- Save their recordings and share them via the cloud.  

**Your support team (also referred to as [portal users](#fiddler-jam-terminology))) will then...**  
- Open the customer-provided issue in the **Fiddler Jam portal** via a browser.
- Access the protected private workspace where logs are stored.
- Triage the issue, add context and share with the development team.


## What is Fiddler Jam portal?

The [**Fiddler Jam portal**](https://jam.getfiddler.com) is an online space that holds the captured logs. Only registered users have access to the Jam portal, and only users with permission could view a generated log.

## What is a portal user?

**_A:_** A portal users are accounts created for your organization to access the [Fiddler Jam portal](https://jam.getfiddler.com/). This includes both support and development.

## Who can access details of a submitted log?

**_A:_** Any portal users of the space for which the submission was made.

## Who can access details of a password protected log?

**_A:_** Any portal user with the password to unlock it. After opening the log via a password, the corresponding portal user will have complete access to the sessions.

## What level of access do portal users get?

**_A:_** Portal users have access to logs of the space they have been assigned only.

## Where are the logs stored?

**_A:_** The logs are stored in Fiddler's cloud servers.

## Fiddler Jam Terminology

| Term      |   Description |
|---    |---    |
|  extension user  |   End-user who have encountered an issue on your web application |
|  Fiddler Jam portal   |   A central website for accessing call logs stored on the cloud    |
|  portal user    | Account created for your organization to access the web portal. This includes both support and development |
|  session |   A network activity that is captured by Fiddler. it contains request and response information together   |
|  log |   A collection of sessions captured, screenshots, and other information after extension user has started to capture and then stopped   |
|  workspace   |   Common location to access all logs submitted for one domain name. sub-domains are treated the same as main domains and will be individual spaces    |
|  public workspace     |   Space to which extension users have submitted sessions, but the domain name does not have any portal users yet   |
|  private workspace    |   Space of a domain name with portal users    |
|  password protected log  |   Log created with a password |
|  log URL |  Direct URL for accessing the submitted log of any space on the web portal    |
