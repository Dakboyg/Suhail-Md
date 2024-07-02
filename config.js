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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : 255676107880";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_46_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDY5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTczLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDExMixcbiAgICAgICAgODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc2LFxuICAgICAgICA1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMixcbiAgICAgICAgODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDExLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDExMixcbiAgICAgICAgNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNDZveUh0UWZIZ1B2ZFRHMGE5dnlTSytRblZrQTRrR01LRUw4bHphK3V6MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWThsejA2ZE9TVFc1YVZIWFhKcHczQVwiLFxuICBcInBob25lSWRcIjogXCIzNmE3MmM2ZC1jMmRiLTQ4OWItYjhkMy03NDhmZDhiYTQ1YTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMzMsXG4gICAgICAxNTMsXG4gICAgICAyMjgsXG4gICAgICAyMjEsXG4gICAgICA5MixcbiAgICAgIDExMCxcbiAgICAgIDI0LFxuICAgICAgMTY5LFxuICAgICAgMTkzLFxuICAgICAgMjgsXG4gICAgICAxMDAsXG4gICAgICAyMjQsXG4gICAgICA4NCxcbiAgICAgIDIxMSxcbiAgICAgIDU0LFxuICAgICAgMjQxLFxuICAgICAgOTMsXG4gICAgICAxMTIsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAxMTAsXG4gICAgICAyMDQsXG4gICAgICA4MixcbiAgICAgIDc3LFxuICAgICAgMjI5LFxuICAgICAgMjA4LFxuICAgICAgMTAsXG4gICAgICAxMSxcbiAgICAgIDEzMSxcbiAgICAgIDE0OSxcbiAgICAgIDIwMCxcbiAgICAgIDIyNyxcbiAgICAgIDIzNyxcbiAgICAgIDIyLFxuICAgICAgMjEzLFxuICAgICAgMjMzLFxuICAgICAgMTE3LFxuICAgICAgODksXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzY2RzJFRE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY3NjEwNzg4MDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGFrIGJveVwiLFxuICAgIFwibGlkXCI6IFwiMTQyMjU0MDE0NTIxNDk3OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnJHbzd3R0VLZXY0ck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVbFk1QmRhcFMvL1Q5dlhMc29yU1FDNlJUS2M0WkJGbGtibkVBWXhKamhFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklMMXowUDVFNFE4M0hVVVlhZVBuQ3B5Z0JOVnY3MnRpUlViWlp3VS9KbFo2TENOd2c4MVpib3FvWkdsRW1qNkpFQm1VaGh0ajVtbHo3dC9rMkZmY0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhlN280STRBMTJyUEFreVV6eXFIWHYwNnRWVHJmWWpzYnFQVFBuTnhTMi9IRURicHkwL0pkdkJUWFR5TXFnRXZtOHZpQnRFUUZZQkJzWmRrSThTekJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY3NjEwNzg4MDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MTc5MTgwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "D",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Dakboy",
  ownername:process.env.OWNER_NAME|| "Dakboy",


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
