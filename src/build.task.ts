import type {Task} from '@feltcoop/gro';
import type {MapInputOptions} from '@feltcoop/gro/dist/project/build.js';
import {groTerserPlugin} from '@feltcoop/gro/dist/project/rollup-plugin-gro-terser.js';

// turns on terser b/c we currently disable it in Gro by default

export interface TaskArgs {
	mapInputOptions?: MapInputOptions;
}

export const task: Task<TaskArgs> = {
	description: 'build the project',
	dev: false,
	run: async ({invokeTask, args}): Promise<void> => {
		args.mapInputOptions = (o) => ({
			...o,
			plugins: (o.plugins || []).concat(groTerserPlugin()),
		});
		await invokeTask('gro/build');
	},
};
