(params) => {
  const moment = require('moment-timezone-with-data.js');
  const userId = api.user().id;
  
  const startDate = moment().add(-1, 'months').format("YYYY-MM-DD");
  const endDate = moment().format("YYYY-MM-DD");
  const recordings = api.run("this.recordings_list", {start_date : startDate, end_date: endDate});
 
  recordings.forEach(r => {
    const stashKey = userId + "-" + r.id;
    if (stash.get(stashKey)) {
      return;
    }
    const date = moment(r.start_time);
    const text = `${r.topic} was recorded on ${date.format("MMM DD, YYYY")}. Link to recording: ${r.share_url}`
    api.run("this.post_chat_message",{text: text, channel: 'video-archive'});
    stash.put(stashKey,true);
  });
  return {
    mission: "complete"
  };
}