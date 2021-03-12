---
title: Users & Roles
slug: fj-users
tags: Fiddler Jam portal users, Fiddler Jam viewer, Fiddler Jam agents, Jam extension users
publish: true
position: 20
---


# Fiddler Jam Users and Roles

The Fiddler Jam portal site users are referred to as **portal users** while the Chrome extension users are referred to as **extension users**. A portal user can be assigned the role of a viewer or the role of an agent.

## Extension users 

Everyone who uses the Fiddler Jam Chrome extension can be described as an extension user. All extension users can capture and record logs and generate Fiddler Jam portal links where the logs will be stored. 
- There is no limitation on the number of recorded logs.
- There is no limitation for the number of generated links to recorded logs.
- A recorded log with a generated link will be stored in the Fiddler Jam portal for **30 days.** After that period, the log will be automatically deleted.
- A recorded log with a generated link **that is added to a workspace** by an agent will be stored in the Fiddler Jam portal until it is explicitly removed by an agent.

## Portal users

All users who have an active Fiddler Jam [subscription]({%slug fj-portal%}#subscriptions) can be referred to as Fiddler Jam portal users. Those users can have different roles based on the available seats in the subscription.

- [**Viewer role**](#viewer-role): The viewer can open **submitted logs** added to a workspace.
- [**Agent role**](#agent-role): The agent can view and maintain **submitted logs** and **workspaces logs** based on the Fiddler Jam account quota.
- **Account owner**: The user who purchased the Fiddler Jam license from [the Fiddler dashboard](https://dashboard.getfiddler.com/). This role manages the subscription seats, payment, and assigning the **agent** or **viewer** roles.


### Viewer Role

All subscription plans are coming with unlimited seats for assigning viewer roles. Assign a viewer role to an existing account through [the Fiddler dashboard](https://dashboard.getfiddler.com).

The viewer role comes with the following advantages and limitations:

- The viewer can access all logs that are added to the organization's workspace. Password-protected logs can only be accessed from a viewer who has the password.
- The viewer can't access logs not added to a workspace.
- The viewer can't edit and remove logs added to the workspace.


### Agent Role

Depending on the subscription plan, each license will provide a different number of seats with the agent role. Assign an agent role to an existing account through [the Fiddler dashboard](https://dashboard.getfiddler.com).

The agent role comes with the following advantages and limitations:

- The agent can access all logs that are added to the account workspace. Password-protected logs can only be accessed from an agent who has the password.
- The agent can access logs not added to a workspace.
- The agent can edit and remove logs added to the workspace.
- The agent can add shared logs to a workspace. Logs added to a workspace will be accessible to all viewers.
- Logs [shared with specific agents]({%slug fj-link-options%}#share-with-specific-people) (based on the registered email) can be accessed from all users with access to the workspace.
