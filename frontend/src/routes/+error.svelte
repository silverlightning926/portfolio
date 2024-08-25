<script>
	import Layout from "./+layout.svelte";
</script>

<Layout>
	<main class="not-found-page px-4">
		<h3 class="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-wide title">
			Error
		</h3>
		<p class="text-2xl sm:text-3xl md:text-4xl mt-12">
			Something Went Wrong. Please Try Again Later.
		</p>
		<div class="mt-12 flex flex-col gap-4 items-center sm:flex-row sm:gap-6">
			<a href="/" class="text-xl sm:text-2xl md:text-3xl hover:underline"> Go To Home </a>
		</div>
	</main>

	<style>
		.not-found-page {
			padding: 8rem 1rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			min-height: 100vh;
		}
		.title {
			color: #f56565;
			text-shadow:
				0 0 2px #f56565,
				0 0 4px #f56565;
		}
	</style>
</Layout>
