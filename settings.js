/* 

   Contact: https://wa.me/27767494368
   Telegram: https://t.me/Ednut_x    
   Developer : https://wa.me/27767494368
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")
require('dotenv').config(); 

//======= Change settings =======\\
global.owner = process.env.OWNER_NUMBER || "27767494368"
global.botname = process.env.BOT_NAME || "𝕬𝖛𝖊𝕭𝖔𝖙 𝕸𝕯"
global.ownername = process.env.OWNER_NAME || "𝕬𝖛𝖊.𝕭"; //set bot owner name here 
global.prefix = process.env.PREFIX || "."; // your desired prefix symbol only
global.timezone = process.env.TIME_ZONE || "Africa/Johannesburg";
global.author = process.env.AUTHOR  || "𝕬𝖛𝖊.𝕭";
global.packname = process.env.PACK_NAME  || "☚⍢⃝☚";
global.startup = process.env.STARTUP_MSG === 'true';
global.typeMenu = process.env.MENU_TYPE  || "v2";
global.onlypc = process.env.ONLYPC_MSG  || "Sorry buddy the bot won't work directly in group chat to reduce spam use in private chat";
global.onlygroup = process.env.ONLYGC_MSG  || "Sorry buddy the bot won't work directly in private chat to reduce spam use in group";


global.simbol = "☚⍢⃝☚"
global.tempatDB = 'database.json' // dont change might cause big errors 
global.pairing_code = false // if deploying on panel set true if on any other platform leave it false

// Settings Image Url
global.image = {
menu: "https://imgur.com/a/88oKogn.jpg", 
reply: "https://imgur.com/a/88oKogn.jpg", 
}

// Message Command 
global.mess = {
	owner: "*Access Denied* This feature is for bot owners only!",
	admin: "*Access Denied* This feature is for group admins only!!",
	botAdmin: "*Access Denied* This feature is only for when the bot is an admin.!",
	group: "*Access Denied* This feature is for groups only!",
	private: "*Access Denied* This feature is for private chat only!!",
	ban: "*Access Denied* you have been banned contact owner to unban!!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
