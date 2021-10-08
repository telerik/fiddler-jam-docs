---
title: Users and Roles
description: "Learn more about the available users and role access permission in the Fiddler Jam Portal cloud space."
slug: fj-users
publish: true
position: 20
---

# Fiddler Jam Portal Users and Roles

The number of users who access the Fiddler Jam Portal depends on the active subscription plan. The person who purchased that plan, the Account Owner, assigns different levels of access rights to different users depending on the role they fulfil.  

## Account Owner

The account owner is the user who purchased the Fiddler Jam license from [the Fiddler dashboard](https://dashboard.getfiddler.com/). From the dashboard, the Account Owner can manage the subscription seats, payment, and the assigning of the user and the viewer roles.

Depending on the subscription plan, each license provides a different number of seats. For example, the Fiddler Jam Portal provides limited seats for the [user role](#user-role) and unlimited seats for the [viewer role](#viewer-role).

## Extension Users

Fiddler Jam refers to the end users, who have recorded and submitted logs through the [Fiddler Jam Chrome Extension]({% slug introduction %}#fiffler-jam-chrome-extension), as "extension users".

All extension users can capture and record logs, and generate Fiddler Jam Portal links where the logs will be stored.

- Extension users are not limited on the number of recorded logs.
- Extension users are not limited on the number of generated links to recorded logs.
- A recorded log with a generated link will be stored in the Fiddler Jam Portal for 30 days. After that period, the log is automatically deleted.
- A recorded log with a generated link that is added to a workspace by a [Portal user](#user-role) will be stored in the Fiddler Jam Portal until a Portal user explicitly removes it.

## Portal Users

Even though the Fiddler Jam login accepts custom credentials or Google authentication, the Portal is accessible for users with usernames or emails, which are part of an active subscription only. These users are referred to as "Portal users".

Depending on the user assigned role, the Fiddler Jam portal provides different access levels:

- Unregistered users won't be able to open the Fiddler Jam Portal or load generated Fiddler Jam links.
- Fiddler Jam Portal seats with the viewer role can only watch logs that are [added to a workspace]({%slug fj-workspaces%}#add-submitted-log-to-workspace). If a viewer opens a public link, the page that will open will inform the user that the links need to be added to the account workspace.
- Fiddler Jam Portal seats with the user role can open public logs, create and manage workspaces, and manage, add, and remove logs from workspaces.

## User Role

Depending on the active Fiddler Jam [subscription plan]({%slug fj-portal%}#subscriptions), the Account Owner assigns a different number of seats to the User role.

A User can view and maintain submitted logs and workspace logs based on the Fiddler Jam account quota. Users have full access to the Fiddler Jam dashboard functionalities as opposed to Viewers who have limited rights and can only open submitted logs added to a workspace.

The User seat comes with the following advantages and limitations:

- Users can access all logs that are added to the account workspace. Password-protected logs can only be accessed from users who know the password.
- Users can access logs that are not added to a workspace.
- Users can edit and remove logs that are added to the workspace.
- Users can add shared logs to a workspace. Logs added to a workspace will be accessible to all Viewers.
- Logs [shared with specific people (based on the registered email)]({%slug fj-link-options%}#share-with-specific-people) can be accessed from all Portal users with access to the workspace.

## Viewer Role

All subscription plans provide unlimited seats for the Viewer role.

The Viewer seat comes with the following advantages and limitations:

- Viewers can access all logs that are added to the workspace of the organization. Password-protected logs can only be accessed from a Viewer who knows the password.
- Viewers can't access logs that are not added to a workspace.
- Viewers can't edit and remove logs that are added to the workspace.
