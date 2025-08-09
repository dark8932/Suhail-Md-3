const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_58_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NixcbiAgICAgICAgMTM2LFxuICAgICAgICA0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMixcbiAgICAgICAgMjAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAzNixcbiAgICAgICAgNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY0LFxuICAgICAgICA2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MixcbiAgICAgICAgMTU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmTU5WeVJlZjBIbUdLckFzNFU3ZlMrNExmYmN0bGlrenY5dkRWY0ZwVmljPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzkwODMzODg3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjYwNkM5RjNDNDk1MTI1ODMwRjE4MjYwNTgyNUQ1MUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU0NzY1OTE1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3OTA4MzM4ODcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MkUxQTQzM0FBQTQwRDUwNjMwMDk5OTExRkM5Q0E5M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTQ3NjU5MTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOTJWRzVkZmdUb1dCT2tMaTFubUFQZ1wiLFxuICBcInBob25lSWRcIjogXCJlZThmZGQ3NC01MWJkLTQyNGUtOTQ0Zi00NjBmN2Q2ZDQxMWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDE2NyxcbiAgICAgIDM1LFxuICAgICAgNDUsXG4gICAgICA0NyxcbiAgICAgIDE0LFxuICAgICAgNjYsXG4gICAgICAxNDYsXG4gICAgICAyMSxcbiAgICAgIDc1LFxuICAgICAgMTI5LFxuICAgICAgMjIyLFxuICAgICAgMTEsXG4gICAgICA1MixcbiAgICAgIDU0LFxuICAgICAgMjQ5LFxuICAgICAgMTM5LFxuICAgICAgMjIsXG4gICAgICAxODYsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgMTEyLFxuICAgICAgMzMsXG4gICAgICAxNTEsXG4gICAgICAxNDgsXG4gICAgICA2NCxcbiAgICAgIDgzLFxuICAgICAgMjQyLFxuICAgICAgMTA4LFxuICAgICAgMzEsXG4gICAgICA1NSxcbiAgICAgIDIxMyxcbiAgICAgIDExOSxcbiAgICAgIDg5LFxuICAgICAgNTMsXG4gICAgICAxMjcsXG4gICAgICA2MixcbiAgICAgIDY5LFxuICAgICAgMTQ3LFxuICAgICAgMjM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT09FamNZQ0VOUzAzc1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3TDdBTy82akpCcjJHNExXNTNEWnd2ZWR3M2JBdXJUV2xDS2E0eUhLVDA4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNZYWttb3FHRlVNS2drZERsRHVZcDFrNXNvVXREWGVHbXNmS0o4WWVlSmhydk8xc0NsYU9tSWEvTktTNGd6d28rak1rWUU1amtmWE1xRjlRQ2xCOENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJCa05YOVNNVE9GeVBzVDFoVzRYM1V4OGhaakV1QnZBdXNuWGRIbitueVpWUk1TeWFEdmFxTXdlVmxuS1pGTFFNd0ZtMTZRUWh5M3RrWWNIbmwwNEJBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3OTA4MzM4ODcxOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MzAyODg4ODcyMzQ2Mjo2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkRBUktcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzkwODMzODg3MTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NDc2NTkxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFOdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQU51Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRXk2T09mVHlMK25WZjM2UkFDdk5WY1VXazdoVGtEL3NxM1RhZ3pzaDZEMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2ODM4ODUxNTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1NDc2NTkxMzE3NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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

