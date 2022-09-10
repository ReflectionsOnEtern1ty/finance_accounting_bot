import { Menu } from "@grammyjs/menu";
import { getTextById } from "../../api/repository/example_test_repository";

export const textMenu = new Menu("text-menu")
	.text("First text",
		async (ctx) => {
			ctx.reply(await getTextById(1));
			ctx.menu.close();
		}
	).row()
	.text("Second text",
		async (ctx) => {
			ctx.reply(await getTextById(2));
			ctx.menu.close();
		}
	).row()
	.text("Third text",
		async (ctx) => {
			ctx.reply(await getTextById(3));
			ctx.menu.close();
		}
	).row()