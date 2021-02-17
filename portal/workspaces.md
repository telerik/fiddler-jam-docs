---
title: Workspaces
slug: fj-workspaces
tags: Fiddler Jam workspaces, Fiddler Jam space, Fiddler Jam cloud, Fiddler Jam portal logs
publish: true
position: 30
---

# Workspaces

The Fiddler Jam portal uses workspaces to save and organize the submitted logs. With workspaces, you can manage teams, permissions and restrictions based on your organization or requirment. Only portal users with the [**editor role**]({%slug fj-users%}#editor-role) can create, edit, delete a workspace and add new submitted logs to an existing workspace. Users with the [**viewer role**]({%slug fj-users%}#viewer-role) can only access and review logs added to the account workspace.

## Add Submitted Log to Workspace

Any log submitted by an extension user is initially accessible based on [the predefined link generation options]({%slug fj-link-options%}). When an editor (with access right) opens the submitted link initially it won't be part of any workspace. Submitted logs that are not added to an organizational workspace will expire within 30 days. Logs added to an organizational workspace won't expire and can only be removed by the organization editors.

An editor can add the submitted log to the workspace as follows:

- Use the **Add To Workspace** button in the top-right corner of the dashboard. Note that password-protected logs will require entering the log password before the action is executed.
- Enter the following details
    - Log title. Accepts free-form text.
    - (Optional) Description. Accepts free-form text.
    - Submitted by. Accepts free-form text.
    - Workspace. Choose from a drop-down list of an existing organizational workspaces.
- Click on **Done**. On succsess, you will see a confirmation notification and the log will be loaded in the selected workspace. Note that password-protected logs will require entering the log password after the action is executed.
- (Optional) Open the workspace to review the list entry via **Open Workspace** button or directly continue to work with the submitted log.

![Add submitted log to existing workspace](../images/portal/workspace/fj-portal-add-to-workspace.png)

## Default Workspace

Each Fiddlem Jam subscription creates a default workspace for the organization called **_Default Workspace_**. 

An editor can rename the default workspace as follows:

- Select the workspace you would like to edit.
- Click on **Rename workspace** button at the top-right corner.
- Enter new workspace name and click on **Rename**.

>tip The current version of Fiddler Jam dashboard doesn't allow creating additonal workspaces. Please contact us directly if you need to create more then one workspace.

