import { resolve } from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
// @ts-expect-error
import handlebarsPlugin from "vite-plugin-handlebars";

export default defineConfig({
	plugins: [
		tailwindcss(),
		handlebarsPlugin({
			partialDirectory: resolve(__dirname, "src/partials"),
			helpers: {
				range: (from: number, to: number, options: any) =>
					Array.from({ length: to - from })
						.map((_, i) => options.fn(i + from))
						.join(""),
			},
		}),
	],
});
