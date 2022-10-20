/*const select = (el, all = false) => {
	el = el.trim();
	if (all) return [...document.querySelectorAll(el)];
	return document.querySelector(el);
};

const formulario = {
	form: select("#contact-form"),
	name: {
		obj: select("#name"),
		icon: select("#icon-name"),
		error: select("#error-name"),
	},
	email: {
		obj: select("#email"),
		icon: select("#icon-email"),
		error: select("#error-email"),
	},
	message: {
		obj: select("#message"),
		icon: select("#icon-message"),
		error: select("#error-message"),
	},
	submit: select("#btn-submit"),
};

const set_ui = (is_valid = false, element,msg) => {
	element.icon.classList.remove("hide");
	if (is_valid) {
		element.obj.style.border = "1px solid #36AE7C";
		element.obj.style.boxShadow = "0 0 5px #36AE7C";
		element.icon.classList.add("fa-circle-check", "icon-success");
		element.icon.classList.remove("fa-circle-exclamation", "icon-error");
		element.error.textContent = "";
	} else {
		element.obj.style.border = "1px solid #EB5353";
		element.obj.style.boxShadow = "0 0 5px #EB5353";
		element.icon.classList.add("fa-circle-exclamation", "icon-error");
		element.icon.classList.remove("fa-check-circle", "icon-success");
		element.error.textContent = msg;
	}
};

/* ---------------------------- Regex validation ----------------------------
const is_a_valid_name = new RegExp(/^[a-zA-Z\s]{2,}$/); // Minimum length of the name is 2 characters
const is_valid_email = new RegExp(
	/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
);
const is_valid_message = new RegExp(/^[a-zA-Z0-9\s]{10,}$/); // Minimum length of the message is 10 characters

formulario.form.addEventListener("submit", (e) => {
	e.preventDefault();
	const form = Object.fromEntries(new FormData(e.target));

	set_ui(is_a_valid_name.test(form.name), formulario.name);
	set_ui(is_valid_email.test(form.email), formulario.email);
	set_ui(is_valid_message.test(form.message), formulario.message);

	if (!is_a_valid_name.test(form.name) || !is_valid_email.test(form.email) || !is_valid_message.test(form.message)) return;
	e.target.reset();
});

formulario.name.obj.addEventListener("input", (e) => {
	set_ui(is_a_valid_name.test(e.target.value), formulario.name,  "Ingrese su nombre! (solo letras)");
});
formulario.email.obj.addEventListener("input", (e) => {
	set_ui(is_valid_email.test(e.target.value), formulario.email, "Ingrese un mail valido!");
});
formulario.message.obj.addEventListener("input", (e) => {
	set_ui(is_valid_message.test(e.target.value), formulario.message,  "Minimo 10 caracteres!");
});
