<script lang="ts">
	import contactInfoData from "$lib/data/contactInfo.json";
	import Layout from "../+layout.svelte";
	import type { ContactInfo } from "../../types/contactInfo";

	const contactInfo: ContactInfo = contactInfoData;
</script>

<Layout>
	<main
		class="flex flex-col items-start justify-start pt-32 p-12 max-w-4xl mx-auto"
	>
		<h1 class="title text-5xl font-extrabold tracking-wide">CONTACT</h1>
		<h2 class="mt-7">Name</h2>
		<p>{contactInfo.name}</p>
		<h2>Email</h2>
		<a href="mailto:{contactInfo.email}">{contactInfo.email}</a>
		<h2>Phone</h2>
		<a href="tel:{contactInfo.phoneNumber}">{contactInfo.phoneNumber}</a>
		<h2>LinkedIn</h2>
		<a href={contactInfo.links.linkedin}
			>{contactInfo.links.linkedin.replace("https://www.", "")}</a
		>
		<h2>GitHub</h2>
		<a href={contactInfo.links.github}
			>{contactInfo.links.github.replace("https://www.", "")}</a
		>
	</main>
</Layout>

<style>
	.title {
		color: #e5e7eb;
		text-shadow:
			0 0 4px rgba(255, 255, 255, 0.4),
			0 0 8px rgba(255, 255, 255, 0.2);
	}

	h2 {
		color: #e5e7eb;
		text-shadow:
			0 0 4px rgba(255, 255, 255, 0.4),
			0 0 8px rgba(255, 255, 255, 0.2);
		margin-top: 1.5rem;
		font-size: 2rem;
		font-weight: bold;
	}

	p,
	a {
		color: #41ff00;
		text-shadow:
			0 0 4px #41ff00,
			0 0 8px #41ff00;
		margin-top: 0.25 rem;
		font-size: 1.5rem;
		font-weight: normal;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
