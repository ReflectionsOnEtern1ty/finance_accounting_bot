import { CommandContext, Context } from 'grammy';

export const startCommand = async (ctx: CommandContext<Context>) => {
  ctx.reply(`Hello, ${ctx.from.first_name}!`);
};
