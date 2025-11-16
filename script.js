const nameElement = document.querySelector(".description .full-name");
const fullName = "# Abdellah EL GHENNAMI";
const mobile_nav = document.getElementById("mobile-hamburger");
const pages = document.querySelectorAll(".page");
const nav_ul = document.querySelector(".sections-list");
const nav_links = document.querySelectorAll(".sections-list li a");
const container = document.querySelector(".container");

// writing animation

function writeName() {
	nameElement.textContent = "";

	for (let i = 0; i < fullName.length; i++) {
		setTimeout(() => {
			nameElement.textContent += fullName[i];
		}, i * 150);
	}
}

writeName();

// nav links transition

nav_links.forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault();

		const targetId = link.getAttribute("href");
		const targetSection = document.querySelector(targetId);

		pages.forEach((page) => {
			page.classList.remove("active");
		});

		if (targetSection) {
			targetSection.classList.add("active");
		}

		nav_links.forEach((l) => {
			l.classList.remove("current");
		});
	});
});

// mobile nav

mobile_nav.addEventListener("click", () => {
	if (nav_ul.style.display === "block") nav_ul.style.display = "none";
	else nav_ul.style.display = "block";
});

// projects section

const projects_container = document.querySelector(".projects-container");

fetch("projects.json")
	.then((res) => res.json())
	.then((projects) => {
		projects.forEach((project, index) => {
			const card = document.createElement("div");
			card.classList.add("project");
			card.innerHTML = `
		<img src = "${project.image}" alt="${project.title}">
		<h3>${project.title}</h3>
		<p>${project.description}</p>
		`;
			projects_container.appendChild(card);
		});
	})
	.catch((err) => console.error("Error loading projects:", err));
