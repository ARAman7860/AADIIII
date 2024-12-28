const schedule = require("node-schedule");
const moment = require("moment-timezone");
const chalk = require("chalk");
const fs = require("fs");
const request = require("request");

module.exports.config = {
  name: "autosent",
  version: "10.0.0",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "MADE BY ARIF BABU",
  commandCategory: "group messenger",
  usages: "[]",
  cooldowns: 3,
};

const messages = [
    { time: '12:30 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 12:30 𝗔𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '1:30 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 1:30 A𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '2:30 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 2:30 A𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '3:30 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 3:30 A𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '4:30 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 4:30 A𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '5:30 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 5:30 𝗔𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '6:30 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 6:30 A𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '7:30 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 7:30 A𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '8:30 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 8:30 A𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '9:30 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 9:30 A𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '10:30 AM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 10:30 A𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '11:30 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 11:30 A𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '12:30 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 12:30 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '1:30 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 1:30 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '2:30 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 2:30 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '3:30 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 3:30 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '4:30 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 4:30 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '5:30 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 5:30 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '6:30 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 6:30 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '7:30 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 7:30 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '8:30 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 8:30 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '9:30 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 9:30 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '10:30 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 10:30 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' },
    { time: '11:30 PM', message: '❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n𝗧𝗜𝗠𝗘 11:30 𝐏𝐌 ⏰\n\n❁ ━━━━━ ❃ आरिफ बाबू ❃ ━━━━━ ❁' }
];

const imageLinks = [
"https://i.imgur.com/EDZwkWW.jpeg",
"https://i.imgur.com/eeFzTPW.jpeg",
"https://i.imgur.com/48ccAud.jpeg",
"https://i.imgur.com/z8pOswn.jpeg",
"https://i.imgur.com/2onEkj3.jpeg",
"https://i.imgur.com/tzb574S.jpeg",
];

module.exports.onLoad = ({ api }) => {
  console.log(
    chalk.bold.hex("#00c300")(
      "============ SUCCESFULLY LOADED THE AUTOSENT COMMAND ============"
    )
  );

  messages.forEach(({ time, message }) => {
    const [hour, minute, period] = time.split(/[: ]/);
    let hour24 = parseInt(hour, 10);
    if (period === "PM" && hour !== "12") {
      hour24 += 12;
    } else if (period === "AM" && hour === "12") {
      hour24 = 0;
    }

    const scheduledTime = moment
      .tz({ hour: hour24, minute: parseInt(minute, 10) }, "Asia/Kolkata")
      .toDate();

    schedule.scheduleJob(scheduledTime, () => {
      if (!global.data || !global.data.allThreadID) {
        console.error("Error: `global.data.allThreadID` is not defined.");
        return;
      }

      global.data.allThreadID.forEach((threadID) => {
        // Select a random image link
        const randomImage =
          imageLinks[Math.floor(Math.random() * imageLinks.length)];

        // File path to save the image temporarily
        const filePath = `${__dirname}/cache/temp_image.jpg`;

        // Download the image
        request(randomImage)
          .pipe(fs.createWriteStream(filePath))
          .on("close", () => {
            // Send the message with the downloaded image
            api.sendMessage(
              {
                body: message,
                attachment: fs.createReadStream(filePath),
              },
              threadID,
              (error) => {
                if (error) {
                  console.error(`Failed to send message to ${threadID}:`, error);
                }
              }
            );
          });
      });
    });
  });
};

module.exports.run = () => {
  // This function is intentionally left empty
};