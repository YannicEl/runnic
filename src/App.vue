<template></template>

<script setup lang="ts">
if (!navigator.geolocation) {
	console.log('geolocation is not supproted');
} else {
	navigator.geolocation.watchPosition(
		(success) => {
      success.coords
    },
		(error) => {}
	);
}
</script>

<style></style>
