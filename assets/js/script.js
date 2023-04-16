const displayEl = document.querySelector("#display");
const buttonsEl = document.querySelectorAll("button");

buttonsEl.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            displayEl.innerText = "";
        } else if (item.id == "backspace") {
            let string = displayEl.innerText.toString();
            displayEl.innerText = string.substr(0, string.length - 1);
        } else if (displayEl.innerText != "" && item.id == "equal") {
            displayEl.innerText = eval(displayEl.innerText);
        } else if (displayEl.innerText != "" && item.id == "%") {
            displayEl.innerText = eval(displayEl.innerText)/100;
        } else if (displayEl.innerText == "" && item.id == "equal") {
            displayEl.innerText = "Empty!";
            setTimeout(() => (displayEl.innerText = ""), 2000);
        } else {
            displayEl.innerText += item.id;
        }
    };
});

const themeToggleBtnEl = document.querySelector(".theme-toggler");
const calculatorEl = document.querySelector(".calculator");
const toggleIconEl = document.querySelector("i");

// let isDark = true;

themeToggleBtnEl.onclick = () => {
    calculatorEl.classList.toggle("dark");
    // themeToggleBtnEl.classList.toggle("active");
    const isOpen = calculatorEl.classList.contains("dark");
    // isDark = !isDark

    toggleIconEl.classList = isOpen ? "fa fa-sun-o" : "fa fa-moon-o"; 
};