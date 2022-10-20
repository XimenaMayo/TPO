/* ------------------------------- Modal setup ------------------------------ 
const modal = document.querySelector("#modal");
const close_btn = document.querySelector("#close-modal");
close_btn.addEventListener("click", () => {
	modal.close();
	document.body.style.overflow = "auto"; // Enable scroll
});

const open_modal = (content) => {
	const header = document.querySelector("#modal-header");

	const image = (url, alt) => {
		if (url == undefined) return "";
		return `<img src="${url}" alt= "${alt}"/>`;
	};
	const iframe = (url) => {
		if (url == undefined) return "";
		return `<iframe src="${content.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
	};
	header.innerHTML = `
		<h2>${content.title}</h2>
		<p>${content.description}</p>
		${image(content.image, content.title)}
		${iframe(content.video)}
	`;
	const pills_container = document.querySelector("#modal-pills-container");
	pills_container.innerHTML = content.pills.map((pill) => `<div class="modal-pill">${pill}</div>`).join("");

	document.body.style.overflow = "hidden"; // Disable scroll
	modal.showModal();
};

/* ---------------------------------- Cards --------------------------------- 
const cards_container = document.querySelector("#main-section");
const card_template = (card, style, type) => `
	<div class="card ${style}">
		<div class="card-image">
			<img src="${card.img_url}" alt="" />
		</div>
		<div class="card-body">
			<div class="card-title">
				<h3>${card.title}</h3>
				<p>${card.description}</p>
			</div>
			<button type="button" class="card-button" card-id="${card.title}" card-type="${type}">
				<i class="fa-solid fa-eye" card-id="${card.title}" card-type="${type}"></i>
			</button>
		</div>
	</div>
`;

// Adding cards to the DOM
fetch("./assets/js/db.json")
	.then((res) => res.json())
	.then((db) => {
		const db_cards = { Satelites: db.satellites, Cohetes: db.launchers };
		for (const type in db_cards) {
			const cards = db_cards[type];
			const card_themes = ["card-t1", "card-t2", "card-t3", "card-t4"];
			const cards_html = cards.map((card, i) => card_template(card, card_themes[i % card_themes.length], type));
			cards_container.innerHTML += `
			<section id="${type}-section" >
				<h2>${type}</h2>
				<div class="card-container">${cards_html.join("")}</div>
			</section>
			`;
		}

		// Adding event listeners to cards
		document.querySelectorAll(".card-button").forEach((button) => {
			button.addEventListener("click", (e) => {
				const card_meta = e.target;
				const card_id = card_meta.getAttribute("card-id"),
					card_type = card_meta.getAttribute("card-type");
				const card_data = db_cards[card_type].find((card) => card.title === card_id);
				open_modal({
					title: card_data.title,
					description: card_data.long_description,
					image: card_data.image,
					video: card_data.video_url,
					pills: card_data.pills,
				});
			});
		});
	});
