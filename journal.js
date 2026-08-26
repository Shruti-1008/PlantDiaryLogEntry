const form =
    document.getElementById(
        "journalForm"
    );


const entriesContainer =
    document.getElementById(
        "journalEntries"
    );


function displayEntries() {

    const entries =
        getJournalEntries();


    entriesContainer.innerHTML = "";


    if (entries.length === 0) {

        entriesContainer.innerHTML = `
            <div class="journal-entry">

                <strong>
                    🌱 No entries yet
                </strong>

                <p>
                    Your plant memories will
                    appear here.
                </p>

            </div>
        `;

        return;
    }


    entries.forEach(entry => {

        entriesContainer.innerHTML += `

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


form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const plant =
            document.getElementById(
                "journalPlant"
            ).value;


        const text =
            document.getElementById(
                "journalText"
            ).value;


        const entry = {

            plant: plant,

            text: text,

            date:
                new Date()
                    .toLocaleDateString(
                        "en-IN"
                    )

        };


        saveJournalEntry(entry);


        form.reset();


        displayEntries();

    }
);


displayEntries();