<script lang="ts">
	export let name: string;
	export let bulletPoints: string[];
</script>

<article class="experience-item mb-8">
	<h2 class="text-2xl sm:text-4xl font-bold">{name}</h2>
	<ul class="list-disc list-inside mt-4 text-base sm:text-lg leading-relaxed text-gray-300">
		{#each bulletPoints as bulletPoint}
			<li class="mt-3">{bulletPoint}</li>
		{/each}
	</ul>
</article>

<style>
	.experience-item {
		border: 2px solid #41ff00;
		padding: 1.5rem;
		border-radius: 0.5rem;
		box-shadow: 0 0 10px #41ff00;
	}
	.experience-item h2 {
		color: #e5e7eb;
		text-shadow: 0 0 10px rgba(207, 123, 123, 0.4);
	}
	.experience-item li {
		color: #e5e7eb;
		text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
	}
</style>
