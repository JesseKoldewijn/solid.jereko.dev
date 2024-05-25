const getRelativeTitle = (title: string, forceAbsolute = false) => {
	const template = appConfig.title.relative.template ?? "";

	if (
		title &&
		title?.length > 0 &&
		title !== appConfig.title.default &&
		!!appConfig.title.relative.enabled &&
		!forceAbsolute
	) {
		return template.replace("%s", title);
	}

	return title;
};

export const appConfig = {
	title: {
		default: "SolidStart Jereko",
		relative: {
			template: "%s | SolidStart Jereko",
			getTitle: getRelativeTitle,
			enabled: true,
		},
	},
};
