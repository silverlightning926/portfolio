<script lang="ts">
	import contactInfoData from "$lib/data/contactInfo.json";
	import skillsData from "$lib/data/skills.json";
	import Layout from "../+layout.svelte";
	import SkillsSection from "../../components/SkillsSection.svelte";
	import type { ContactInfo } from "../../types/contactInfo";
	import type { Skills } from "../../types/skills";

	const contactInfo: ContactInfo = contactInfoData;
	const skills: Skills[] = skillsData;
</script>

<Layout>
	<main
		class="flex flex-col items-start justify-start pt-32 p-12 max-w-4xl mx-auto"
	>
		<h1 class="title text-5xl font-extrabold tracking-wide">ABOUT</h1>
		<p class="text-xl mt-6 leading-relaxed">
			{contactInfo.about}
		</p>

		<h2 class="title text-4xl font-extrabold tracking-wide mt-12">SKILLS</h2>
		<div class="mt-6 flex flex-wrap gap-8">
			{#each skills as skillsSection}
				<SkillsSection
					title={skillsSection.category}
					items={skillsSection.skills}
				/>
			{/each}
		</div>
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
