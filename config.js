const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_00_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDksXG4gICAgICAgIDE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM2LFxuICAgICAgICA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk5LFxuICAgICAgICA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg3LFxuICAgICAgICA1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkwLFxuICAgICAgICA1LFxuICAgICAgICA2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDU5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM0LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzRlJXRWQ0aWlqSXRQREREZDVyZmFrTDZwUUxtVGlpaTZLVVpwaHh5RzhJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNMnEwS3V0MFN5U2ptQTQ1bEtCeElRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFmM2FmNTUzLTUxMjktNGFkZS05MWVhLWIyYTA4ZjJjOGE0M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICA5OCxcbiAgICAgIDEzNSxcbiAgICAgIDE4OCxcbiAgICAgIDEwMSxcbiAgICAgIDIyNSxcbiAgICAgIDM0LFxuICAgICAgMjE2LFxuICAgICAgMTUxLFxuICAgICAgMjA0LFxuICAgICAgMTM0LFxuICAgICAgMjQ4LFxuICAgICAgMjI2LFxuICAgICAgMjIxLFxuICAgICAgMTc5LFxuICAgICAgMTk1LFxuICAgICAgNTgsXG4gICAgICA5MyxcbiAgICAgIDIwNCxcbiAgICAgIDE5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDkxLFxuICAgICAgMTA0LFxuICAgICAgMTExLFxuICAgICAgNDIsXG4gICAgICAxMzgsXG4gICAgICA3NyxcbiAgICAgIDcxLFxuICAgICAgMTEwLFxuICAgICAgMTE1LFxuICAgICAgMTA3LFxuICAgICAgMzUsXG4gICAgICAyLFxuICAgICAgMjQxLFxuICAgICAgNzQsXG4gICAgICA0NSxcbiAgICAgIDIzNCxcbiAgICAgIDIwLFxuICAgICAgMTk0LFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXMUwxNjhHSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzg2OTk3MTA4OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXIgTWFyYWlyZVwiLFxuICAgIFwibGlkXCI6IFwiMTMzOTczMzAwNzcyODgwOjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pyTHQ1WUdFS2JXaHJRR0dCQWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMWVPQXN1Q3Zkd2diTFRybXFDV1NCeWd5T0pmMXFKa2I2VlN1b2twdElHMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzbGdNZUFaaDdEc3lOd2xOODNhZ3MvM3JPWmNXdU42STVad2gwd0VsazQ5ZDRQTEhnNkRQNWhiZlN5cDh2QnpEUjBMQ1BHUFBiVkVaVU1xUVJ5Y01BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIUWxxNytLd1FVcEJpZUtsaCtTU3hYUHNRQ0Q3L2g0ZnJvRTFvQ25ITTNxRmp1cm5JaC9wOEhnUnNZeVJrVzZDMFd3Z0xta05POUd2Mk1odWhwaGxDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODY5OTcxMDg6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3NzM5OTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQMDBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVAwMC5qc29uIjogIntcImtleURhdGFcIjpcIkdPNDJkTFBXOFNaUloyQkUxWmQxdVN6NHhFaU5DWG1raXQrVzlVUG9pV1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY1NzY2MDgyNixcImN1cnJlbnRJbmRleFwiOjE1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDE1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3NzM5MjA4MDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
