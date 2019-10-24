This application will push all zoom recordings to a configured slack channel.

This application is currently set up to handle multiple different slack workspaces and zoom accounts.

Each user will have to go to the user configuration screen, which you can find at **Users > User Configuration**. It'll be something like `https://zoom-to-slack-e7t4v.transposit.io`. There's a [sample app running](https://zoom-to-slack-e7t4v.transposit.io) if you want to kick the tires.

After the user visits that url, they'll have to perform the following steps:

* login via Slack.
* connect their Slack account (the one that they want to post the Zoom recordings to). 
* set up a Zoom app (on a paid account) and get the JWT token. You can do [that here](https://marketplace.zoom.us/develop/create). Note that you'll want to set up the JWT token to have a far future expiration date.
* connect to the Zoom account using the JWT token
* select an existing channel to post the zoom channels to.

At the end, you'll post each recording to the channel. Note that this application only goes back thirty days, and posts all recordings for all users. You can tweak that by modifying the `recordings_list` operation.

## I want to run my own

You can fork this application. You'll get your own user configuration screen.

As a developer, you'll need to configure a scheduled task at **Deploy > Scheduled Tasks** to run the `scheduled_run` operation. Here's a sample schedule: `0 15 * ? * *`; this will run every hour on the fifteenth minute.
