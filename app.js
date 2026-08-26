const plants = getPlants();


// Statistics

document.getElementById(
    "plantCount"
).innerText = plants.length;


document.getElementById(
    "healthyCount"
).innerText = plants.length;


document.getElementById(
    "waterCount"
).innerText =
    Math.min(plants.length, 2);


// Plant cards

const container =
    document.getElementById(
        "plantContainer"
    );


if (plants.length === 0) {

    container.innerHTML = `
        <div class="plant-card">
            <div class="plant-image">
                🌱
            </div>

            <h3>No plants yet</h3>

            <p class="plant-type">
                Add your first green friend!
            </p>
        </div>
    `;

} else {

    plants.slice(0, 3).forEach(
        plant => {

            container.innerHTML +=
                createPlantCard(plant);

        }
    );
}


// Create card

function createPlantCard(plant) {

    return `
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

            </div>

        </div>
    `;
}


// Journal preview

const journal =
    getJournalEntries();


const journalContainer =
    document.getElementById(
        "journalPreview"
    );


if (journal.length === 0) {

    journalContainer.innerHTML = `
        <div class="journal-entry">
            <strong>
                🌱 Your journal is empty
            </strong>

            <p>
                Start recording your plant's
                little milestones!
            </p>
        </div>
    `;

} else {

    journal
        .slice(0, 2)
        .forEach(entry => {

            journalContainer.innerHTML += `
                <div class="journal-entry">

                    <strong>
                        🌿 ${entry.plant}
                    </strong>

                    <p>
                        ${entry.text}
                    </p>

                    <small>
                        ${entry.date}
                    </small>

                </div>
            `;

        });
}