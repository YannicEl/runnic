<template>
	<h1>Index</h1>

	<router-link to="/run" activeClass="underline">Go to Run</router-link>

	<div>
		<div v-for="run in runs">
			<div>{{ run.date }}</div>
			<div>{{ run.distance }}</div>
			<div>{{ run.duration }}</div>
			<div>{{ run.pace }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { runs } from '../composables/state';
</script>
