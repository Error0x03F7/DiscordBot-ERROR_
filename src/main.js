// 從discord.js或對應的檔案中取出需要的元素
import{ Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

// 讓main.js能讀取到.env中的變數
dotenv.config();

// 創建DiscordBot實體
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// 當Bot準備好並上線時，顯示'Bot已上線了'的字串
client.once(Events.ClientReady, c => {
	console.log(`準備好了! 正在以 ${c.user.tag} 登入`);
});

// 取得Bot的Token來讓Bot登入Discord
client.login(process.env.TOKEN);