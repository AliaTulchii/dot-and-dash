"use strict";

function form() {
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("form");
        const inputs = form.querySelectorAll("input, textarea");
        const submitButton = document.getElementById("submit-btn");

        const errorMessages = {
            "first-name": document.querySelector(".form__error-msg-first"),
            "last-name": document.querySelector(".form__error-msg-last"),
            "email": document.querySelector(".form__error-msg-email"),
        };

        function validateForm() {
            let isValid = true;


            Object.values(errorMessages).forEach(error => {
                if (error) error.style.display = "none";
            });

            inputs.forEach((input) => {
                const name = input.name;
                const type = input.type;
                const value = input.value.trim();

                if (type === "text" || type === "textarea" || type === "email") {
                    if (value === "") {
                        if (errorMessages[name]) errorMessages[name].style.display = "block";
                        isValid = false;
                    }
                }

                if (type === "email") {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(value)) {
                        if (errorMessages[name]) errorMessages[name].style.display = "block";
                        isValid = false;
                    }
                }

                if (type === "checkbox" && input.required) {
                    if (!input.checked) isValid = false;
                }
            });

            const radioGroups = [...new Set([...inputs].filter(input => input.type === "radio").map(input => input.name))];
            radioGroups.forEach(name => {
                const radioGroup = form.querySelectorAll(`input[name="${name}"]`);
                if (![...radioGroup].some(radio => radio.checked)) {
                    isValid = false;
                }
            });

            setTimeout(() => {
                submitButton.disabled = !isValid;
            }, 10);
        }

        inputs.forEach((input) => {
            input.addEventListener("input", validateForm);
            if (input.type === "checkbox" || input.type === "radio") {
                input.addEventListener("change", validateForm);
            }
        });

        
        form.addEventListener("submit", function (event) {
            validateForm();
            if (!submitButton.disabled) {
                return; 
            }
            event.preventDefault();
        });

        submitButton.disabled = true;
    });
}

export default form;