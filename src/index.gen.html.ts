import type {Gen} from '@feltcoop/gro';
import {renderNoscriptSection, renderMetaTags} from '@feltcoop/gro/dist/gen/helpers/html.js';

export const gen: Gen = () => {
	const title = 'mirror twins';
	const sourceCodeUrl = 'https://github.com/ryanatkn/mirror-twin-gro';
	// TODO get the `sourceCodeUrl` from gen context param?
	return `<!DOCTYPE html>
<html lang="en">
	<head>
		<title>${title}</title>
		${renderMetaTags()}
		<link rel="shortcut icon" href="favicon.ico" />
		<link rel="stylesheet" href="styles.css" />
		<link rel="stylesheet" href="bundle.svelte.css" />
	</head>

	<body>
		<div id="root">
			${renderNoscriptSection(sourceCodeUrl)}
		</div>
		<script src="index.js" type="module"></script>
	</body>
</html>
`;
};
