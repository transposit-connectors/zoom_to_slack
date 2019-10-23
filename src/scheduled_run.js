(params) => {
  
  api.runForAllUsers("this.post_recording_to_slack");
  return {
    mission: "complete"
  };
}

/*
 * For sample code and reference material, visit
 * https://www.transposit.com/docs/references/js-operations
 */