<script lang="ts">
	import Layout from "../+layout.svelte";
	import ExperienceSection from "../../components/ExperienceSection.svelte";
	import experienceData from "../../static/data/experience.json";
	import type { Experience } from "../../types/experience";

	const experience: Experience[] = experienceData;

	function formatDate(dateString: string): string {
		const options: Intl.DateTimeFormatOptions = {
			year: "numeric",
			month: "long",
		};
		const date = new Date(dateString);
		return new Intl.DateTimeFormat("en-US", options).format(date);
	}
</script>

<Layout>
	<main
		class="flex flex-col items-start justify-start pt-32 p-12 max-w-4xl mx-auto"
	>
		<h1 class="title text-5xl font-extrabold tracking-wide">EXPERIENCE</h1>
		<section class="mt-12">
			{#each experience as experience}
				<ExperienceSection
					title={experience.title}
					company={experience.company}
					startDate={experience.startDate}
					endDate={experience.endDate}
					employmentType={experience.employmentType}
					bulletPoints={experience.bulletPoints}
				/>
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
