<script lang="ts">
	import SourceImage from './SourceImage.svelte';
	import MirrorImages from './MirrorImages.svelte';
	import type {ImageInfo} from './imagesStore.js';
	import type {ImageHandleMovement, ImageHandlesState} from './imageHandlesStore.js';
	import type {MirrorTwinsLayout} from './mirrorTwinsLayoutStore.js';
	import type {SourceImageLayout} from './sourceImageLayoutStore.js';
	import type {SourceImageSelection} from './sourceImageSelectionStore.js';
	import type {MirrorImagesLayout} from './mirrorImagesLayoutStore.js';

	export let height: number;
	export let layout: MirrorTwinsLayout; // TODO what are the tradeoffs of making this a store?
	export let sourceImageLayout: SourceImageLayout;
	export let sourceImageSelection: SourceImageSelection;
	export let mirrorImagesLayout: MirrorImagesLayout;

	export let image: ImageInfo;
	export let handles: ImageHandlesState;
	export let moveHandles: (movements: ImageHandleMovement[]) => void;
</script>

<div class="mirror-twin-images" style="height: {height}px;">
	<div class="source-image-wrapper" style="height: {layout.sourceContainerHeight}px">
		<SourceImage
			{image}
			{handles}
			{moveHandles}
			width={sourceImageLayout.width}
			height={sourceImageLayout.height}
			scale={sourceImageLayout.scale}
			left={sourceImageLayout.x1}
			top={sourceImageLayout.y1}
		/>
	</div>
	<div class="mirror-images-wrapper" style="height: {layout.mirrorContainerHeight}px">
		<MirrorImages
			{image}
			containerWidth={layout.mirrorContainerWidth}
			selectionX={sourceImageSelection.x1}
			selectionY={sourceImageSelection.y1}
			selectionWidth={sourceImageSelection.width}
			selectionHeight={sourceImageSelection.height}
			renderedWidth={mirrorImagesLayout.imageWidth}
			renderedHeight={mirrorImagesLayout.imageHeight}
			scale={mirrorImagesLayout.scale}
		/>
	</div>
</div>

<style>
	.mirror-twin-images {
		width: 100%;
		user-select: none;
		-webkit-user-select: none;
		/* TODO hmm? */
		overflow: hidden;
	}
	.source-image-wrapper {
		position: relative;
		z-index: 1; /* layer above the mirror images so the handles are always visible  */
	}
	.mirror-images-wrapper {
		position: relative;
	}
</style>
