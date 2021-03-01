---
title: FAQ
slug: faq
tags: faq, frequently asked questions, Fiddler Jam terminology, Fiddler Jam help
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

The [**Fiddler Jam portal**](https://jam.getfiddler.com) is an online space where the captured logs can be accessed and maintained. The Fiddler Jam portal is the place where the support engineers and developers could analyze, share and maintain logs submitted by the extension users.

## Who can use the Fiddler Jam portal?

Only registered users with active seats have access to the Jam portal. Licenses and seats can be activated from t[he dashboard site](https://dashboard.getfiddler.com).

## So how does Fiddler Jam work... really?  

**_A:_**  

**Your customers (also referred to as [extension users](#fiddler-jam-terminology))) will...**  
- Install the lightweight Chrome extension.
- Start recording network requests/responses.
- Reproduce the issue at hand.
- Save their recordings and share them via the generated link (upload to cloud space).  

**Your support team (also referred to as [portal users](#fiddler-jam-terminology))) will then...**  
- Open the customer-provided generated link in the **Fiddler Jam portal** via a browser.
- Access the protected private workspace where logs are stored.
- Triage the issue, add context and share with the development team.

## What is an extension user?

**_A:_** An extension user is everyone who uses the Fiddler Jam Chrome extension.

## What is a portal user?

**_A:_** A portal users are accounts created for your organization to access the [Fiddler Jam portal](https://jam.getfiddler.com/). Learn more about [portal users and roles]({%slug fj-users%}#portal-users).

## Who can access details of a submitted log?

**_A:_** That depends on [the link generation options]({%slug fj-link-options%}) chosed by the extension user. **Public links** are accessible for any portal user with the **agent** role. **A link shared with specific people** will be avccessible only for the concrete portal user with agent role. **Link with password-protection** will be accessible only for portal user with agent role and knowledge of the password.

## Who can access the details of a password-protected log?

**_A:_** Any portal user with agent role and with the password to unlock it. After opening the log via a password, the corresponding portal user will have complete access to the sessions.

## What level of access do portal users get?

**_A:_** Portal users have access to logs of the workspace they have been assigned and will have access to all public links.

## Where are the logs stored?

**_A:_** The logs are stored in Fiddler's cloud servers.

## Fiddler Jam Terminology

| Term      |   Description |
|---    |---    |
|  extension user  |   End-user who have encountered an issue on your web application and are using the Fiddler Jam extension |
|  Fiddler Jam portal   |   A central website for accessing call logs stored on the cloud    |
|  portal user    | Account created for your organization to access the web portal. This includes both support and development. The portal users  |
|  viewer role  |  A portal user assigned with [the viewer role]({%slug fj-users%}#viewer-role) |
|  agent role  |  A portal user assigned with [the agent role]({%slug fj-users%}#agent-role) |
|  session |   A network activity that Fiddler captures. it contains HTTP(S) request and response information together   |
|  log |   A collection of captured HTTP(S) sessions, screenshots, console logs, and other information recorded by an extension user   |
|  workspace   |   A workspace is an organizational placeholder for logs. The workspace provides means to organize and share logs with your collaborators (withint the organizational account)   |
|  password-protected log  |   Log created with a password |
|  log URL |  Direct URL for accessing the submitted log of any space on the web portal  |
