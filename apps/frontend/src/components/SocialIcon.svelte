<script lang="ts">
	export let link: string;
	export let icon: string;
</script>

<a href={link} target="_blank" class="social-icon">
	<svg viewBox="0 0 24 24" fill="currentColor" class="icon">
		<path d={icon}></path>
	</svg>
</a>

<style>
	.social-icon {
		display: inline-block;
	}

	.icon {
		width: 2.5rem;
		height: 2.5rem;
		fill: white;
		transition: fill 0.3s;
	}

	.social-icon:hover .icon {
		fill: #41ff00;
	}

	@media (max-width: 640px) {
		.icon {
			width: 2rem;
			height: 2rem;
		}
	}

	@media (min-width: 1024px) {
		.icon {
			width: 3rem;
			height: 3rem;
		}
	}
</style>