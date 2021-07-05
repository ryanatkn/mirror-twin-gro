import type {Gen} from '@feltcoop/gro';
import {render_noscript_section} from '@feltcoop/gro/gen/helpers/html.js';

// TODO import `renderMetaTags` but it probably needs to be refactored

export const gen: Gen = () => {
	const title = 'mirror twins';
	const sourceCodeUrl = 'https://github.com/ryanatkn/mirror-twin-gro';
	// TODO get the `sourceCodeUrl` from gen context param?
	return `<!DOCTYPE html>
<html lang="en">
	<head>
		<title>${title}</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="shortcut icon" href="favicon.ico" />
		<link rel="stylesheet" href="styles.css" />
		<link rel="stylesheet" href="bundle.svelte.css" />
	</head>

	<body>
		<div id="root">
			${render_noscript_section(sourceCodeUrl)}
		</div>
		<script src="index.js" type="module"></script>
	</body>
</html>
`;
};
