module.exports.config = {
  name: "পরিচয়", 
  version: "1.0.0", 
  permission: 0,
  credits: "Imran Ahmed",
  description: "example",
  prefix: false,
  category: "Fun", 
  usages: "user", 
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": ""
  }
};

module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["Mahabub"] !== "undefined" && thread["rahat"] == false) return;

  let name = await Users.getNameUser(event.senderID);
  if (senderID == global.data.botID) return;
  function out(data) {
api.setMessageReaction("😻", event.messageID, (err) => {}, true)
    api.sendMessage(data, threadID, messageID)
  }
  //reply
  var msg = {
    body: `#পরিচয়-পর্ব ! 😚🤙

࿐❥ আসসালামু আলাইকুম ! 🥰

࿐❥ 𝑵𝒂𝒎𝒆 :- OM E 🫣😚

࿐❥ From:- 🌺hacker࿐❥TEAM🌺

࿐❥ জন্মস্থানঃ নড়াইল, কিন্ত মাইজ পাড়া  থাকি !

࿐❥ পড়াশোনাঃ (121 পরযন্ত) 😇

࿐❥  আম্মু আব্বুর বড় শয়তান তাহ ! 😅

࿐❥ বয়স :22+🙈

࿐❥ Birthday 01/june/......... 🌺

࿐❥ উচ্চতা :  5'3" 😷

࿐❥ ব্লাড গ্রুপঃ জানি না🤧

࿐❥ প্রিয় রং : Black /Blue 🥀

࿐❥ প্রিয় স্থানঃ Facebook / Ludo Game 😘

࿐❥ প্রিয় কাজ : Spamming/Gaming 🥵

࿐❥ প্রিয় মানুষ : আম্মু/আব্বু//বড় আপু/ছোট ভাই বোন )😘

◄⃣⃢⃣🌺 ༄OM E 🫣😚
シ︎ 🌺⃣⃢⃣►`
  }
  // Gọi bot
  var arr = ["পরিচয়"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "hi thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "hi success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["rahat"] == "RAHAT" || data["RAHAT"] == true) data["RAHAT"] = false;
  else data["RAHAT"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["🥰"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
  }
