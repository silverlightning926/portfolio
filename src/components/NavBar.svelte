<script lang="ts">
	import { building } from "$app/environment";

	let isMenuOpen: boolean = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function getLink(path: string) {
		return !building ? `${path}.html` : path;
	}
</script>

<nav class="navbar">
	<div class="container">
		<a href="/" class="brand">Siddharth Rao</a>
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
			<li><a href="/">Home</a></li>
			<li><a href={getLink("/about")}>About</a></li>
			<li><a href={getLink("/experience")}>Experience</a></li>
			<li><a href={getLink("/projects")}>Projects</a></li>
			<li><a href={getLink("/education")}>Education</a></li>
			<li><a href={getLink("/contact")}>Contact</a></li>
		</ul>
	</div>
</nav>

<style>
	.navbar {
		padding: 1.5rem 0.8rem;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.9);
		width: 100%;
		height: 4rem;
		z-index: 2;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.brand {
		color: #fff;
		text-decoration: none;
		font-size: 1.6rem;
		font-weight: bold;
		margin-right: 2rem;
	}

	.navbar-menu {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: 3rem;
	}

	.navbar a {
		color: #fff;
		text-decoration: none;
		font-size: 1.2rem;
		transition: color 0.3s ease;
	}

	.navbar a:hover {
		color: #ddd;
	}

	.navbar-toggle {
		display: none;
		flex-direction: column;
		justify-content: space-between;
		width: 1.5rem;
		height: 1.25rem;
		background: transparent;
		border: none;
		cursor: pointer;
	}

	.navbar-toggle .bar {
		display: block;
		width: 100%;
		height: 2px;
		background-color: #fff;
		transition: all 0.3s ease;
	}

	@media (max-width: 768px) {
		.navbar-menu {
			display: none;
			flex-direction: column;
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			background: rgba(0, 0, 0, 0.9);
			padding: 1rem 0;
		}

		.navbar-menu.show {
			display: flex;
		}

		.navbar li {
			margin: 1rem 0;
			text-align: center;
		}

		.navbar-toggle {
			display: flex;
		}
	}
</style>
