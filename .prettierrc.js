module.exports = {
	useTabs: true,
	plugins: [
		require.resolve("prettier-plugin-astro"),
		require("prettier-plugin-tailwindcss"),
	],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
