<script lang="ts">
	import Mirror_Twins from './Mirror_Twins.svelte';
	import {create_images_store} from './images_store.js';
	import {default_images} from './default_images.js';

	export let name: string;

	const images = create_images_store(default_images);

	let width = window.innerWidth;
	let height = window.innerHeight;
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<Mirror_Twins {images} {width} {height} />
<svelte:window bind:innerHeight={height} bind:innerWidth={width} />
