<script lang="ts">
	import MirrorTwins from './MirrorTwins.svelte';
	import {createImagesStore} from './imagesStore.js';
	import {defaultImages} from './defaultImages.js';

	export let name: string;

	const images = createImagesStore(defaultImages);

	let width = window.innerWidth;
	let height = window.innerHeight;
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<MirrorTwins {images} {width} {height} />
<svelte:window bind:innerHeight={height} bind:innerWidth={width} />
