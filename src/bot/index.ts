import { Bot } from 'grammy';
import { startCommand } from './commands/startCommand';
import { textMenu } from './menus/textMenu';

//Check bot token
const token = process.env['BOT_TOKEN'];
if (!token) {
	throw new Error('You not provided the bot-token from @BotFather via environment variable (BOT_TOKEN)');
}

//Create bot
const bot = new Bot(token);

//Set menus
bot.use(textMenu);

//Set commands
bot.command('start', async ctx => await startCommand(ctx));
bot.command("texts", async (ctx) => {
	await ctx.reply("Choose text from DB", { reply_markup: textMenu });
});

//Set error catching
bot.catch(error => {
	console.error('ERROR on handling update occured', error);
});

export async function startBot(): Promise<void> {

	// Add telegram commands here
	await bot.api.setMyCommands([
		{ command: 'start', description: 'Simple hello message' },
		{ command: 'texts', description: 'Texts from DB' },
	]);

	await bot.start({
		onStart(botInfo) {
			console.log(new Date(), 'Bot starts as', botInfo.username);
		},
	});
}

