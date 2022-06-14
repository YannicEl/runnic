<template>
	<h1>Run</h1>

	<ul>
		<li v-for="{ coords } in positions" class="mt-4 pb-1 border-b border-black">
			<div>longitude: {{ coords.longitude }}</div>
			<div>latitude: {{ coords.latitude }}</div>
			<div>accuracy: {{ coords.accuracy }}</div>
			<div>speed: {{ coords.speed }}</div>
			<div>altitude: {{ coords.altitude }}</div>
			<div>altitudeAccuracy: {{ coords.altitudeAccuracy }}</div>
		</li>
	</ul>
</template>

<script setup lang="ts">
let positions = $ref<GeolocationPosition>([]);

if (!navigator.geolocation) {
	console.log('geolocation is not supproted');
} else {
	navigator.geolocation.watchPosition(
		(success) => {
			console.log(success);
			positions.push(success);
		},
		(error) => {
			console.error('lol gps error');
			console.error(error);
		}
	);
}
</script>

<style></style>
