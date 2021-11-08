---
title: First Steps with the Portal
description: "Open the customer link in the Fiddler Jam Portal cloud and learn how to access protected workspaces with stored logs, add context, and share submitted logs with the team."
slug: first_steps_portal
publish: true
position: 1
---

# First Steps with the Fiddler Jam Portal

This tutorial describes how to start using the Fiddler Jam Portal if you have access rights corresponding to the [Portal User role]({% slug fj-users %}#portal-users), and the Extension user has shared the log containing a video recording with you through a link.

- First, you will open the customer-provided generated link with a browser.

- Next, you'll access the default private workspace with stored logs and add the submitted log to it thus sharing the recording with other Portal Users on your team.

## Prerequisites

* Install the Chrome browser on your machine.

* Provide an active Internet connection with access to the following URLs. To test whether you access the required Fiddler endpoints, use [the Fiddler connectivity check link](https://fiddler-backend-production.s3.amazonaws.com/connectivity-test/check.html).

    ```curl
      https://*.getfiddler.com/
      https://*.amazonaws.com/
    ```

## Opening the Submitted Log

Now, let's open a log that was submitted by an Extension user and shared with you through a generated link.

1. Open the link in the browser. As a result, the **Captured Logs** with the **Video recording** tabs are displayed.

    Note that depending on the type and content of the recorded log, the Fiddler Jam Portal will load other respective **Captured Logs** tabs.

1. Click the submitted log entry to inspect its details, for example, check the **Navigated to** event information.

## Adding and Sharing the Log in the Workspace

In this step, you'll add the submitted log to your default organization workspace. Note that to add new workspaces to your organization, you [need to contact the Fiddler Jam Support team]({% slug fj-workspaces %}#creating-and-renaming-workspaces).

1. Go to the **Add to Workspace** button in the top-right corner of the dashboard.

1. Enter the required information in the **Title**, **Submitted by**, and **Workspace** fields. Optionally, add some content in the **Description** field.

1. Click **Done**. Now that the submitted log is added to the organization default workspace, it is visible to all Portal Users who have access to that workspace.

That was it! Now you are ready to dive more deeply into Fiddler Jam Portal cloud space and take full advantage of its slick functionalities!

## Next Steps

* [Portal Users and Roles]({% slug fj-users %})
* [Managing Portal Workspaces]({% slug fj-workspaces %})
* [Working with Submitted Logs]({% slug fj-portal-logs %})
* [Performing Advanced Log Analyses]({% slug fj-advanced-analysis %})
