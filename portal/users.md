---
title: Users & Roles
description: Fiddler Jam extensions users, portal users and portal viewers
slug: fj-users
publish: true
position: 20
---

# Fiddler Jam Portal Users and Roles

The Chrome extension users are referred to as an **extension users**. The Fiddler Jam portal provides different subscription plans with limited seats for the [**user** role](#user-role) and unlimited seats for the [**viewer** role](#viewer-role). The [account owner](#account-owner) is the user that purchased the Fiddler Jam license and the one who manages the seats.

## Portal Users

The Fiddler Jam login accepts using custom credentials or Google authentication, but the portal will be accessible only for usernames/emails that are part of an active subscription. Depending on the user assigned role, the Fiddler Jam portal will provide a different level of accessibility and features as follows:

- Unregistered users won't be able to open the Fiddler Jam portal or load generated Fiddler Jam links. Note that no registration is needed to use the Fiddler Jam Chrome extension.
- Fiddler Jam portal seats with the **viewer** role can see only logs [added to a workspace]({%slug fj-workspaces%}#add-submitted-log-to-workspace). If a viewer opens a public link, a page will inform the user that the links need to be added to the account workspace.
- Fiddler Jam portal seats with the **user** role can open public logs, create and manage workspaces, manage existing logs (manage, add and remove from workspaces).

## Extension Users

Everyone who uses the Fiddler Jam Chrome extension can be described as an extension user. All extension users can capture and record logs and generate Fiddler Jam portal links where the logs will be stored.
- There is no limitation on the number of recorded logs.
- There is no limitation for the number of generated links to recorded logs.
- A recorded log with a generated link will be stored in the Fiddler Jam portal for **30 days.** After that period, the log is automatically deleted.
- A recorded log with a generated link **that is added to a workspace** by a portal [**user**](#user-role) will be stored in the Fiddler Jam portal until a portal user explicitly removes it.

## Account Owner

The account owner is the user who purchased the Fiddler Jam license from [the Fiddler dashboard](https://dashboard.getfiddler.com/). This role manages the subscription seats, payment, and assigning the **user** and the **viewer** roles. Depending on the subscription plan, each license will provide a different number of seats with the **user** role and unlimited seats for the **viewer** role. Manage the seats and their roles through [the Fiddler dashboard](https://dashboard.getfiddler.com).

## User Role

Depending on the chosen Fiddler Jam [subscription plan]({%slug fj-portal%}#subscriptions), the account owner can assign a different number of seats with the **user** role. A portal user can view and maintain **submitted logs** and **workspaces logs** based on the Fiddler Jam account quota. A portal user has full access to the Fiddler Jam dashboard functionalities as opposed to the portal viewer, which has limited rights and can only open **submitted logs** added to a workspace.

The portal users' seat comes with the following advantages and limitations:

- The portal user can access all logs that are added to the account workspace. Password-protected logs can only be accessed from users with knowledge of the password.
- The portal user can access logs not added to a workspace.
- The portal user can edit and remove logs added to the workspace.
- The portal user can add shared logs to a workspace. Logs added to a workspace will be accessible to all viewers.
- Logs [shared with specific people]({%slug fj-link-options%}#share-with-specific-people) (based on the registered email) can be accessed from all users with access to the workspace.


## Viewer Role

All subscription plans are coming with unlimited seats for the **viewer** role. Assign a portal viewer to an existing account through [the Fiddler dashboard](https://dashboard.getfiddler.com).

The portal viewer seat comes with the following advantages and limitations:

- The portal viewer can access all logs that are added to the organization's workspace. Password-protected logs can only be accessed from a viewer with the knowledge of the password.
- The portal viewer can't access logs not added to a workspace.
- The portal viewer can't edit and remove logs added to the workspace.
