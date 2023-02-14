
const burgerButton = document.querySelector(".action__button");
const burgerIcon = document.querySelector(".action__burger");
const buttonWrapper = document.querySelector(".action__button-wrapper");
const closeIcon = document.querySelector(".action__close");
const headerActions = document.querySelector(".header__actions");
burgerButton.addEventListener("click", () => {
	if (burgerIcon.classList.contains("active")) {
		burgerIcon.classList.remove("active")
		closeIcon.classList.add("active")
	} else {
		burgerIcon.classList.add("active")
		closeIcon.classList.remove("active")
	}
	buttonWrapper.classList.toggle("active")
	headerActions.classList.toggle("active")
})

const header = document.querySelector(".header");
window.addEventListener("scroll", (e) => {
	console.log(header.scrollHeight, window.scrollY)
	if (window.scrollY >= 15) {
		header.style.background = "rgba(0, 0, 0, .5)";
		header.style.boxShadow = "0 0 10px #fff";
	} else {
		header.style.background = "";
		header.style.boxShadow = "";
	}
})