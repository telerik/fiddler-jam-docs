---
title: FAQ 
description: Frequently asked questions about Fiddler Jam
slug: faq
publish: true
position: 100
---

# FAQ

## What is Fiddler Jam?  

**_A:_** Fiddler Jam is a troubleshooting solution for support & developers teams. The **Fiddler Jam Chrome extension** and the **Fiddler Jam portal** are the interconnected components that are the core of Fiddler Jam.

## What is the purpose of Fiddler Jam?  

**_A:_** Fiddler Jam helps **end-users** (also referred to as [**extension users**](#fiddler-jam-terminology)) to isolate issues by capturing HTTP(S) network logs in the customer's environment. It then enables the secure sharing of these logs between the customers and your support teams with the help of the [**Fiddler Jam portal**](https://jam.getfiddler.com). Finally, with full [**Fiddler Everywhere**](https://docs.telerik.com/fiddler-everywhere/introduction) integration, the development team can load the logs and replicate the issue locally, using tooling they are already comfortable with.  

## Who can use the Fiddler Jam Chrome extension?

**_A:_** Anyone with Google Chrome can install and use [**the Chrome extension**](#). There is no login or registration required. The Chrome extension is easy to use and doesn't require advanced knowledge or any previous debugging experience.

## What is the Fiddler Jam portal?

The [**Fiddler Jam portal**](https://jam.getfiddler.com) is an online space where the captured logs can be accessed and maintained. The Fiddler Jam portal is where the support engineers and developers could analyze, share and sustain logs submitted by the extension users.

## Who can use the Fiddler Jam portal?

Only registered users with active seats have access to the Jam portal. Licenses and seats can be activated from t[he dashboard site](https://dashboard.getfiddler.com).

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

## What is an extension user?

**_A:_** An extension user is everyone who uses the Fiddler Jam Chrome extension.

## What is a portal user?

**_A:_** A portal users are accounts created for your organization to access the [Fiddler Jam portal](https://jam.getfiddler.com/). Learn more about [portal users and roles]({%slug fj-users%}#portal-users).

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

| Term      |   Description |
|---    |---    |
|  Fiddler Jam extension   |  The Chrome extension is used for recording network traffic, console logs, screenshots, etc. The Fiddler Jam extension is available from the Google Web Store |
|  Fiddler Jam extension user  |   End-user who have encountered an issue on your web application and are using the Fiddler Jam extension |
|  Fiddler Jam portal   |   A central website for accessing call logs stored on the cloud. Hosted at [https://jam.getfiddler.com](https://jam.getfiddler.com)  |
|  Fiddler Jam portal user    | Account created for your organization to access the web portal. This includes both support and development. By default the Fiddler Jam portal users are having read and write rights and they can  |
|  viewer role  |  A Fiddler Jam portal user explicitly assigned with [the viewer role]({%slug fj-users%}#viewer-role). The viewer role has rescricted read rights. |
|  session |   A network activity that Fiddler captures. it contains HTTP(S) request and response information together   |
|  log |   A collection of captured HTTP(S) sessions, screenshots, console logs, and other information recorded by an extension user. The maximum size of Fiddler Jam log is 50MB.  |
|  workspace   |   A workspace is an organizational placeholder for logs. The workspace provides means to organize and share logs with your collaborators (within the organizational account)   |
|  password-protected log  |   Log created with a password |
|  log URL |  Direct URL for accessing the submitted log of any space on the web portal  |
|  Fiddler dashboard   |   A central website for managing the Fiddler Jam and Fiddler Everywhere subscription plans and seats. Hosted at [https://dashboard.getfiddler.com](https://dashboard.getfiddler.com)  |