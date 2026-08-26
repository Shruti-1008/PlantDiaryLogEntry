const plantsContainer =
    document.getElementById(
        "allPlants"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );


function displayPlants(list) {

    plantsContainer.innerHTML = "";


    if (list.length === 0) {

        plantsContainer.innerHTML = `
            <div class="plant-card">

                <div class="plant-image">
                    🌱
                </div>

                <h3>
                    No plants found
                </h3>

                <p class="plant-type">
                    Try another search.
                </p>

            </div>
        `;

        return;
    }


    list.forEach(plant => {

        plantsContainer.innerHTML += `

            <div class="plant-card">

                <div class="plant-image">
                    ${plant.emoji}
                </div>

                <h3>
                    ${plant.name}
                </h3>

                <p class="plant-type">
                    ${plant.type}
                </p>

                <div class="plant-details">

                    <span>
                        💧 ${plant.watering}
                    </span>

                    <span>
                        ☀️ ${plant.light}
                    </span>

                    ${
                        plant.notes
                        ?
                        `<span>
                            📝 ${plant.notes}
                        </span>`
                        :
                        ""
                    }

                </div>

            </div>

        `;

    });
}


displayPlants(
    getPlants()
);


searchInput.addEventListener(
    "input",
    function() {

        const search =
            searchInput.value
                .toLowerCase();


        const filtered =
            getPlants().filter(
                plant =>
                    plant.name
                        .toLowerCase()
                        .includes(search)
            );


        displayPlants(filtered);

    }
);