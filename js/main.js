console.log("fired");

//variables
const button = document.querySelector("#button");
const burgerCon = document.querySelector("#burger-con");
const lightBox = document.querySelector("#popup");
const links = document.querySelectorAll(".popup-link");
const info = document.querySelector("#popup description");

const content = document.querySelector("#popup article");

let NewProduct = [
	{
		Title: "Juice Cans",
		Description: "Quatro Juice Cans are a quick way to have our carbonated fruit juice while you’re on the go! Launching in July of 2026, you can now have Quatro as a quick pick-me-up, with your lunch or in the car with you on the go. We’ll have the design and size for the cans ready by June of 2026."
	},
	{
		Title: "Juice Boxes",
		Description: "Quatro Juice Boxes are a quick way to give your kids a refreshing drink in their lunch, their sporting events or out on their daily life. We’re currently doing a survey on whether carbonated juice or regular juice should be used for the boxes, and once the survey has been completed at the end of May, we will start production on box design and capacity to prepare for the 2026-27 school year."
	},
    {
        Title: "The Flavour Family",
        Description: "The Flavour Family is here to give you a different refreshing taste. We have Papaya, Mango, Lime and Kiwi, with more flavours such as Apple, and Grapefruit to come next year"
    }
];

console.log(NewProduct);

function hamburgerMenu() {
	burgerCon.classList.toggle("slide-toggle");
	button.classList.toggle("expanded");
}

function fillContent() {
    console.log(NewProduct[this.dataset.productIndex].Title);
    console.log(NewProduct[this.dataset.productIndex].Description);

    lightBox.classList.add(`popup${this.dataset.productIndex}`);

    content.innerHTML = "";

    let NewProductTitle = document.createElement("h3");
    NewProductTitle.textContent = NewProduct[this.dataset.productIndex].Title;
    NewProductTitle.classList = "popup_heading";
    content.appendChild(NewProductTitle);

    let NewProductDescription = document.createElement("p");
    NewProductDescription.textContent = NewProduct[this.dataset.productIndex].Description;
    NewProductDescription.classList = "popup_text";
    content.appendChild(NewProductDescription);
}

//Event Listeners
button.addEventListener("click", hamburgerMenu);
links.forEach(link => link.addEventListener("click", fillContent));