/*
Date = 2025-08-06
Shikha Shikha
Assignment 3: JavaScript for Random Animal Fun Facts App
Description: Fetches and displays data from the two different APIs
*/

// 1. First of all, select HTML elements
const factBtn = document.getElementById("getFactBtn");
const animalCard = document.getElementById("animalCard");
const animalName = document.getElementById("animalName");
const animalImage = document.getElementById("animalImage");
const animalFact = document.getElementById("animalFact");
const animalHabitat = document.getElementById("animalHabitat");
const animalDiet = document.getElementById("animalDiet");

// 2. After that add click event listener to button
factBtn.addEventListener("click", async () => {
    try {
        // 3. Now fetch a random animal fact
        const factResponse = await fetch("https://catfact.ninja/fact");
        const factData = await factResponse.json();

        // 4. Fetching random animal image and details from the WORKING API
        const imageResponse = await fetch("https://dog.ceo/api/breeds/image/random");
        const imageData = await imageResponse.json();

        // 5. In addition, updating HTML with fetched data
        animalName.textContent = "Animal: Dog";
        animalImage.src = imageData.message;
        animalImage.alt = "Random Dog";

        animalFact.textContent = "Cat Fact: " + (factData.fact || "No fact available.");
        animalHabitat.textContent = "Habitat: Domestic";
        animalDiet.textContent = "Diet: Omnivore";

        // 6. Showing the card section
        animalCard.classList.remove("hidden");

    } catch (error) {
        // 7. Furthermore, adding a fetch for handling errors
        console.error("Error fetching data:", error);
        alert("Unable to fetch data at this time. Please try again later.");
    }
});
