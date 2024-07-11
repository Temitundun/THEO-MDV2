const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || " mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u86b91ha7kn7sq:pf9929dc53188366098cd46987ab9938ebcbfbce32a85cf445a447ebcabf2f57b@c5flugvup2318r.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/deoounlpb9jadg"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ TEMI²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348022159838";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_48_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAzMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDQyLFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MixcbiAgICAgICAgMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMxLFxuICAgICAgICAzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk1LFxuICAgICAgICA4MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMixcbiAgICAgICAgMTU3LFxuICAgICAgICA5MixcbiAgICAgICAgNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDg5LFxuICAgICAgICA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1LFxuICAgICAgICA5MixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAzMixcbiAgICAgICAgMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxNixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5aFMrYTAzd0d0YUxSK3QrcE4rY0JLRXpxTFdTY0hLaWFTcE95MmJFbXRNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItNlZaU195blJiS3VySGZjVWt5TTBnXCIsXG4gIFwicGhvbmVJZFwiOiBcImNjNzQyYzIyLTlkY2UtNDIwNS05MWQyLTgxMTY2OTdmZjQ0YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAyMjQsXG4gICAgICAxODksXG4gICAgICAyMjEsXG4gICAgICAyMzMsXG4gICAgICAxNDAsXG4gICAgICAxNzYsXG4gICAgICAyMjIsXG4gICAgICAyMTksXG4gICAgICAxNzgsXG4gICAgICAyMDEsXG4gICAgICAxNjksXG4gICAgICAxNDgsXG4gICAgICAzLFxuICAgICAgODAsXG4gICAgICAyNTMsXG4gICAgICAxOTIsXG4gICAgICAzNSxcbiAgICAgIDkxLFxuICAgICAgMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgMTY0LFxuICAgICAgOTUsXG4gICAgICAxMTYsXG4gICAgICA0MyxcbiAgICAgIDIyNCxcbiAgICAgIDEwMixcbiAgICAgIDE0MCxcbiAgICAgIDE5MCxcbiAgICAgIDE3LFxuICAgICAgMjgsXG4gICAgICAxMDYsXG4gICAgICAyMDMsXG4gICAgICA4MixcbiAgICAgIDYxLFxuICAgICAgMzMsXG4gICAgICA1MSxcbiAgICAgIDE4MixcbiAgICAgIDk0LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTNWN2ZRRkVKdmh2N1FHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxNi92ajRNcVlwd0dCbVNzblFCRkgrRHk1ZU1SbWMzODh3WDhkQlowVXhNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjh0bjd0TytLdVllR0ZFSG5UYlVYWFRNSXNvdW0zRG82SDRmUVNBWkhSbUdrYmtnVjZmQTNhL1VQbERXZEdSVkFZV2lZaWJSY3pHc0xXckIxWWRPekN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFrSHVGOGg2RUpuSUdJbERkNVdQK0FZWWN4Ryt1UFN3aWVVY0xhYUZwMGR1cUNwZUsvTnh6cHYySEYxWmY0SnV0L0hwSSttR3dLVkdYYXY3Mm1qUUJBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAyMjE1OTgzODozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEwOTYwOTY2NjQ3OTIzOjMwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAyMjE1OTgzODozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzA5MzA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkpPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKSk4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzajRaNVB0Tk92TU9OTmZYZDZ3WjVPdG9QK1hTRy8wSThId0NzVmlLdFFNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODcyNDM2NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE3MjE3MjEzOVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpKTy5qc29uIjogIntcImtleURhdGFcIjpcIlplUk11U1hJRG4yQkM0Wk5sVE03VXVqTGhnSGd3dGNvTkwxd0M3VUtuQVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4NzI0MzY2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE3MjM3OTYzMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpKUC5qc29uIjogIntcImtleURhdGFcIjpcInFRcS9WaVJJMFE0Sm9FZDg2MlVXNmpuZFBIZDhDbWJhRTM0WVNhbXdpSms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4NzI0MzY2MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkpRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN2FVRm9KYldEQTIxcGtWTVIzRUVPODhOcFZYenE1TE9JdWcyRWZ6bG04ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTg3MjQzNjYxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyNzg4NDU2NjhcIn0iCn0="


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "TEMI-MD",
  ownername:process.env.OWNER_NAME|| "Temi_Tundun",


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
