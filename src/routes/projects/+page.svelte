<script lang="ts">
	import projectData from "$lib/data/projects.json";
	import Layout from "../+layout.svelte";
	import ProjectSection from "../../components/ProjectSection.svelte";
	import type { Project } from "../../types/project";

	const projects: Project[] = projectData;
</script>

<Layout>
	<main
		class="flex flex-col items-start justify-start pt-32 p-12 max-w-4xl mx-auto"
	>
		<h1 class="title text-5xl font-extrabold tracking-wide">PROJECTS</h1>
		<section class="mt-12">
			{#each projects as project}
				<ProjectSection name={project.name} bulletPoints={project.bulletPoints} />
			{/each}
		</section>
	</main>
</Layout>

<style>
	.title {
		color: #e5e7eb;
		text-shadow:
			0 0 4px rgba(255, 255, 255, 0.4),
			0 0 8px rgba(255, 255, 255, 0.2);
	}
</style>
