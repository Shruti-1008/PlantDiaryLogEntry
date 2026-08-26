function getPlants() {

    const plants =
        localStorage.getItem("plantDiaryPlants");

    return plants
        ? JSON.parse(plants)
        : [];
}


function savePlant(plant) {

    const plants = getPlants();

    plants.push(plant);

    localStorage.setItem(
        "plantDiaryPlants",
        JSON.stringify(plants)
    );
}


function deletePlant(id) {

    const plants = getPlants();

    const updated =
        plants.filter(
            plant => plant.id !== id
        );

    localStorage.setItem(
        "plantDiaryPlants",
        JSON.stringify(updated)
    );
}


function getJournalEntries() {

    const entries =
        localStorage.getItem(
            "plantDiaryJournal"
        );

    return entries
        ? JSON.parse(entries)
        : [];
}


function saveJournalEntry(entry) {

    const entries =
        getJournalEntries();

    entries.unshift(entry);

    localStorage.setItem(
        "plantDiaryJournal",
        JSON.stringify(entries)
    );
}