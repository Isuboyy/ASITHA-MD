const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=GiwGHTwI#B4QLEQc-5scp5sv0N4pTTE2NCbF41waPpTIjLwIj7Bs",
MONGODB: process.env.MONGODB || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=GiwGHTwI#B4QLEQc-5scp5sv0N4pTTE2NCbF41waPpTIjLwIj7Bs",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
