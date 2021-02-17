---
title: Workspaces
slug: fj-workspaces
tags: Fiddler Jam workspaces, Fiddler Jam space, Fiddler Jam cloud, Fiddler Jam portal logs
publish: true
position: 30
---

# Workspaces

The Fiddler Jam portal uses workspaces to save and organize the submitted logs. With workspaces, you can manage teams, permissions, and restrictions based on your organization or requirement. Only portal users with the [**editor role**]({%slug fj-users%}#editor-role) can create, edit, delete a workspace and add newly submitted logs to an existing workspace. Users with the [**viewer role**]({%slug fj-users%}#viewer-role) can only access and review logs added to the account workspace.

## Add Submitted Log to Workspace

Any log submitted by an extension user is initially accessible based on [the predefined link generation options]({%slug fj-link-options%}). When an editor (with access right) opens the submitted link initially, it won't be part of any workspace. Submitted logs that are not added to a workspace will expire within 30 days. Logs added to an organizational workspace won't expire and can only be removed by the organization editors.

An editor can add the submitted log to the workspace as follows:

- Use the **Add To Workspace** button in the top-right corner of the dashboard. Note that password-protected logs will require entering the log password before the action is executed.
- Enter the following details
    1. **Title**. The input will appear as a log title in the workspace log list.
    2. (_Optional_) **Description**. The input will appear as a log description in the workspace log list.
    3. **Submitted by**. The input will appear as the log creator alongside the submission date.
    4. **Workspace**. Choose from a drop-down list of existing organizational workspaces.
- Click on **Done**. You will see a confirmation notification, and the log will be loaded in the selected workspace on success. Note that password-protected logs will require entering the log password after the action is executed.
- (Optional) Open the workspace to review the list entry via the **Open Workspace** button or directly continue to work with the submitted log.

![Add submitted log to existing workspace](../images/portal/workspaces/fj-portal-add-to-workspace.png)

## Default Workspace

Each Fiddlem Jam subscription creates a default workspace for the organization called **_Default Workspace_**. 

An editor can rename the default workspace as follows:

- Select the workspace you would like to edit.
- Click on the **Rename workspace** button at the top-right corner.
- Enter the new workspace name and click on **Rename**.

>tip The current version of the Fiddler Jam dashboard doesn't allow creating additional workspaces. Please contact us directly if you need to create more than one workspace.

