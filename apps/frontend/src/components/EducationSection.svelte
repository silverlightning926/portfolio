<script lang="ts">
	export let school: string;
	export let degree: string;
	export let fieldOfStudy: string;
	export let startDate: string;
	export let endDate: string;
	export let bulletPoints: string[];
</script>

<article class="experience-item mb-8">
	<h2 class="text-2xl sm:text-4xl font-bold">{school}</h2>
	<p class="text-1xl sm:text-2xl mt-2">
		{degree}
	</p>
	<p class="subtitle text-lg sm:text-xl mt-2">
		{startDate} - {endDate}
	</p>
	<p class="subtitle text-lg sm:text-xl mt-2">{fieldOfStudy}</p>
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
	.experience-item .subtitle {
		color: rgb(160, 160, 160);
		text-shadow: 0 0 10px rgb(160, 160, 160);
	}
	.experience-item p {
		color: #41ff00;
		text-shadow: 0 0 10px #41ff00;
	}
	.experience-item li {
		color: #e5e7eb;
		text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
	}
</style>
