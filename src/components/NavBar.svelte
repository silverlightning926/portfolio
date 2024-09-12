<script lang="ts">
	import { building } from "$app/environment";
	import { base } from "$app/paths";

	let isMenuOpen: boolean = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function getLink(path: string) {
		return !building ? `${base}${path}.html` : `${base}${path}`;
	}
</script>

<nav class="navbar">
	<div class="container">
		<a href={base + "/"} class="brand">Siddharth Rao</a>
		<button
			class="navbar-toggle"
			on:click={toggleMenu}
			aria-expanded={isMenuOpen}
			aria-controls="navbar-menu"
		>
			<span class="bar" class:isMenuOpen></span>
			<span class="bar" class:isMenuOpen></span>
			<span class="bar" class:isMenuOpen></span>
		</button>
		<ul class="navbar-menu" id="navbar-menu" class:show={isMenuOpen}>
			<li><a href={base + "/"}>Home</a></li>
			<li><a href={getLink("/about")}>About</a></li>
			<li><a href={getLink("/experience")}>Experience</a></li>
			<li><a href={getLink("/projects")}>Projects</a></li>
			<li><a href={getLink("/education")}>Education</a></li>
			<li><a href={getLink("/contact")}>Contact</a></li>
		</ul>
	</div>
</nav>
