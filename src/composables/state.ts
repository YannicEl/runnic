import { Ref } from 'vue';

export interface Run {
	date: Date;
	distance: number;
	duration: number;
	pace: number;
}

export interface State {
	runs: Run[];
}

export const storage: Ref<State> = useStorage<State>('state', {
	runs: [],
});

export const runs: Ref<Run[]> = toRef(storage.value, 'runs');

export const addRun = () => {
	storage.value.runs.push({
		date: new Date(),
		distance: 12,
		duration: 23,
		pace: 34,
	});
};
