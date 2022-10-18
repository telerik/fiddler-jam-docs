---
title: Workspaces
description: "Learn how to rename the default workspace, create new workspaces, and add submitted logs to existing workspaces when working with the Fiddler Jam Portal cloud space."
slug: fj-workspaces
publish: true
position: 30
---

# Workspaces

The Fiddler Jam portal uses workspaces to save and organize the submitted logs.

Through the workspaces, you can manage teams and permissions based on your organization or requirements. Only Portal [Users]({%slug fj-users%}) can create, edit, and delete a workspace, and add newly submitted logs to an existing workspace.

Currently, Fiddler Jam doesn't provide options for Portal Users to create additional workspaces. To create multiple workspaces, [directly contact the Fiddler team](mailto:support@getfiddler.com).

## Creating and Renaming Workspaces

Each Fiddler Jam subscription automatically creates a sample workspace for the organization called **Default Workspace**.

![Default workspace](../images/portal/menu/portal-landing-page.png)

To rename the default workspace, a Portal User has to:

1. Select the workspace you want to edit.

1. Click the **Rename workspace** button at the top-right corner.

1. Enter the new workspace name and click **Rename**.

## Adding Submitted Logs to a Workspace

Any log submitted by an [Extension User]({%slug fj-users%}##extension-users) is initially accessible based on [the predefined link generation options]({%slug fj-link-options%}).

When a Portal User with access rights first opens the submitted link, it won't be part of any workspace. Submitted logs that are not added to a workspace will expire within 31 days. Logs added to an organizational workspace won't expire and can only be removed by the organization users.

A Portal User can add the submitted log to the workspace in the following way:

1. Go to the **Add To Workspace** button in the top-right corner of the portal. Note that password-protected logs will require you to enter the log password before you execute the action.

1. Enter the following details:

    2.1 **Title**&mdash;The input will appear as a log title in the workspace log list.

    2.2 (Optional) **Description**&mdash;The input will appear as a log description in the workspace log list.

    2.3 **Submitted by**&mdash;The input will appear as the log creator alongside the submission date.

    2.4 **Workspace**&mdash;Choose from the drop-down list of existing organizational workspaces. The option is available only when multiple workspaces are created.

1. Click **Done**. As a result, a confirmation notification appears and the log will be loaded in the selected workspace. Note that password-protected logs will require you to enter the log password after you execute the action.

1. (Optional) Click **Open Workspace** to open the workspace and review the listed new log entry. Alternatively, directly continue to work with the submitted log.

![Add submitted log to existing workspace](../images/portal/workspaces/fj-portal-add-to-workspace.png)
