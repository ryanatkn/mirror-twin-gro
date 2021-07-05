import type {Task} from '@feltcoop/gro';
import type {Map_Input_Options} from '@feltcoop/gro/dist/build/rollup.js';
import {gro_terser_plugin} from '@feltcoop/gro/dist/build/rollup_plugin_gro_terser.js';

// turns on terser b/c we currently disable it in Gro by default

export interface TaskArgs {
	map_input_options?: Map_Input_Options;
}

export const task: Task<TaskArgs> = {
	summary: 'build the project',
	dev: false,
	run: async ({invoke_task, args}): Promise<void> => {
		args.map_input_options = (o) => ({
			...o,
			plugins: (o.plugins || []).concat(gro_terser_plugin()),
		});
		await invoke_task('gro/build');
	},
};
