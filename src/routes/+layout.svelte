<script>
	export const prerender = true;
	export const trailingSlash = "always";

	import "../app.css";
	import NavBar from "../components/NavBar.svelte";
</script>

<NavBar />
<slot />
