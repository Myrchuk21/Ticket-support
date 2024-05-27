module.exports = (client) => console.log(`${client.user.username} ready to manage tickets !`);

client.on("ready", () => {
    //WHEN CLIENT IS READY
  console.log("<------- Bot status is ready ------->")
  //LOG IN YOUR TERMINAM
  
  
  client.user.setActivity("qfact.de",{type: "STREAMING", url: "https://twitch.tv/myrchuk21"})
  })


/** 
by Emir Savchuk 
*/