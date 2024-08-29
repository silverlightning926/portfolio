<script lang="ts">
	export let title: string;
	export let items: string[];
</script>

<div class="skills-section w-full max-w-lg">
	<h3 class="skills-title text-2xl font-semibold text-gray-200">{title}</h3>
	<ul class="skills-list list-none mt-4 flex flex-wrap gap-4">
		{#each items as item}
			<li class="skills-item bg-gray-800 p-2 rounded-md">{item}</li>
		{/each}
	</ul>
</div>

<style>
	.skills-section {
		border-left: 4px solid #41ff00;
		padding-left: 1rem;
	}

	.skills-title {
		color: #e5e7eb;
		text-shadow:
			0 0 4px rgba(255, 255, 255, 0.4),
			0 0 8px rgba(255, 255, 255, 0.2);
	}

	.skills-list {
		padding: 0;
	}

	.skills-item {
		font-size: 1.125rem;
		filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.2));
	}
</style>
