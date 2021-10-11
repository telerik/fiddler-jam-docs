---
title: First Steps with the Portal
description: "Open the customer link in the Fiddler Jam Portal cloud and learn how to access protected workspaces with stored logs, add context, and share submitted logs with the team."
slug: first_steps_portal
publish: true
position: 1
---

# First Steps with the Fiddler Jam Portal

This tutorial describes how to start using the Fiddler Jam Portal if you have access rights corresponding to the [Portal User role]({% slug fj-users %}#portal-users).

- First, you will open the customer-provided generated link with a browser.
- Next, you'll access the protected private workspace with the stored logs.
- Finally, you will prioritize the issue, add context, and share it with the development team.

## Prerequisites

* Install the Chrome browser on your machine.

* Provide an active Internet connection with access to the following URLs. To test whether you access the required Fiddler endpoints, use [the Fiddler connectivity check link](https://fiddler-backend-production.s3.amazonaws.com/connectivity-test/check.html).

    ```curl
      https://*.getfiddler.com/
      https://*.amazonaws.com/
    ```

## Opening the Submitted Log

Now, let's open a log that was submitted by an Extension user and shared with you through a generated link. Then, you'll edit its title and description, and investigate the header and body of the captured data.  

1. Open the Fiddler Jam Portal.

1. In the **Captured Logs** tab, click the submitted log entry.

1. In the **Request** inspector tab, check the header and body of the submitted log.

1. Storage/details? smth else?......

## Managing the Workspace

In this step, you'll rename the default workspace of your organization, add the submitted log to it, and then share the submitted log with the other engineers on your team for further analysis.

To rename the workspace:

1. Select the workspace you want to edit and click the **Rename workspace** button.

1. Enter the new workspace name and click **Rename**.

Now, let's add the submitted log to the renamed workspace:  

1. Go to the **Add To Workspace** button in the top-right corner of the dashboard.

1. Enter the required information in the **Title**, **Submitted by**, and **Workspace** fields.

1. Click **Done**.

Then, you'll share the log with the others:

1. Click the **Copy URL** button in the top-right corner next to the **Submitted by**.

1. Share the link.....

## Next Steps

* [Portal Users and Roles]({% slug fj-users %})
* [Managing Portal Workspaces]({% slug fj-workspaces %})
* [Working with Submitted Logs]({% slug fj-portal-logs %})
* [Performing Advanced Log Analyses]({% slug fj-advanced-analysis %})
