# Zoom To Slack

Ever wanted a catalog of your Zoom recordings? 

This application will push all Zoom recordings to a Slack channel.

This application is currently set up to handle multiple different slack workspaces and Zoom accounts. That means that you as the developer configure very little, but the user has to configure more.

Each user will have to go to the user configuration screen, which you can find at **Users > User Configuration**. It'll be something like `https://zoom-to-slack-e7t4v.transposit.io`. There's a [sample app running](https://zoom-to-slack-e7t4v.transposit.io) if you want to kick the tires.

After the user visits that url, they'll have to perform the following steps:

* login via Slack.
* connect their Slack account (the one that they want to post the Zoom recordings to). 
* set up a Zoom app (on a paid account) and get the JWT token. You can do [that here](https://marketplace.zoom.us/develop/create). Note that you'll want to set up the JWT token to have a far future expiration date.
* connect to the Zoom account using the JWT token
* select an existing channel to post the Zoom recordings to.

After this is all configured, within the hour the channel will have Zoom recordings posted to it.

```
AWS 101 was recorded on Oct 11, 2019. Link to recording: https://api.zoom.us/recording/share/..
Sprint Planning was recorded on Oct 14, 2019. Link to recording: https://api.zoom.us/recording/share/..
```

Note that this application only looks back thirty days. It posts all recordings for all users. You as the developer can tweak that by modifying the `recordings_list` and the `post_recording_to_slack` operations.

## I want to run my own

If you want to run your own application to tweak the operations mentioned above or just to take a look at the code, you can. Fork this application. You'll get your own user configuration URL. None of the users will be migrated.

As a developer, the only configuration you'll need to do is configure a scheduled task at **Deploy > Scheduled Tasks** to run the `scheduled_run` operation. Here's a sample schedule: `0 15 * ? * *`; this will run every hour on the fifteenth minute.

Then you can go to/share the user configuration screen of your own app and add in the needed credentials.
