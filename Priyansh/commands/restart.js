module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
	description: "Restart Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`𝐁𝐎𝐓 𝐈𝐒 𝐑𝐄𝐒𝐓𝐒𝐓  🤖 👈\n\n ● ──────────────────── ●\n\n𝐎𝐰𝐧𝐞𝐫 ➻     𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 :- ☞\nhttps://www.facebook.com/aadi.babu123
● ──────────────────── ●\n\n 𝐁𝐎𝐓 𝐑𝐄𝐒𝐓𝐒𝐓 𝐇𝐎 𝐑𝐄𝐇𝐀 𝐇𝐀𝐈 𝐏𝐋𝐙 𝐖𝐀𝐈𝐓`, threadID, () => process.exit(1));
}