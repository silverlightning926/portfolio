<script lang="ts">
	import Layout from "../+layout.svelte";
	import EducationSection from "../../components/EducationSection.svelte";
	import type { Education } from "../../types/education";

	export let data: { education: Education[] };

	function formatDate(dateString: string): string {
		const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
		const date = new Date(dateString);
		return new Intl.DateTimeFormat("en-US", options).format(date);
	}
</script>

<Layout>
	<main class="flex flex-col items-start justify-start pt-32 p-12 max-w-4xl mx-auto">
		<h1 class="title text-5xl font-extrabold tracking-wide">EDUCATION</h1>
		<section class="mt-12">
			{#each data.education as education}
				<EducationSection
					school={education.school}
					degree={education.degree}
					fieldOfStudy={education.fieldOfStudy}
					startDate={formatDate(education.startDate)}
					endDate={formatDate(education.endDate)}
					bulletPoints={education.bulletPoints}
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
