<script lang="ts">
	import { ExternalLink } from "lucide-svelte";

	export let href: string;
	export let text: string;
</script>

<a
	{href}
	target="_blank"
	class="external-link-button inline-flex items-center px-4 py-2 text-lg bg-transparent border-2 border-white rounded-full text-white hover:bg-[#41ff00] hover:border-[#41ff00] hover:text-black"
>
	{text}
	<ExternalLink class="ml-3 icon" />
</a>

<style>
	.external-link-button {
		text-shadow:
			0 0 2px white,
			0 0 4px white;
		transition:
			background-color 0.3s,
			border-color 0.3s,
			text-shadow 0.3s;
	}

	.external-link-button:hover {
		text-shadow:
			0 0 2px black,
			0 0 8px black,
			0 0 10px black;
	}

	@media (max-width: 640px) {
		.external-link-button {
			padding: 0.5rem 1rem;
			font-size: 1rem;
		}

		.icon {
			width: 1.25rem;
			height: 1.25rem;
			margin-left: 0.5rem;
		}
	}

	@media (min-width: 1024px) {
		.external-link-button {
			padding: 0.75rem 1.5rem;
			font-size: 1.25rem;
		}

		.icon {
			width: 1.75rem;
			height: 1.75rem;
			margin-left: 1rem;
		}
	}
</style>
