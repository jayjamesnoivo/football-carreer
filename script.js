const careerStats = [

    {
        club: "FC St-Léonard",
        competition: "Club Football • Canada",
        seasons: [
            ["2009", 12, 14, 5],
            ["2010", 8, 11, 3],
            ["2011", 10, 11, 5]
        ]
    },

    {
        club: "Patriotes de Pointe-aux-Trembles",
        competition: "High School Football",
        seasons: [
            ["2012–2013", 12, 18, 9],
            ["2013–2014", 13, 15, 7],
            ["2014–2015", 13, 15, 11]
        ]
    },

    {
        club: "Parada FC",
        competition: "Summer Futsal Tournament • Viseu, Portugal",
        seasons: [
            ["Summer 2014", 5, 3, 2]
        ]
    },

    {
        club: "Cobras de Laval",
        competition: "QCSL",
        seasons: [
            ["2018–2019", 5, 3, 0]
        ]
    },

    {
        club: "LSAQ Career Statistics",
        competition: "Rush FC • Montrealista FC",
        seasons: [
            ["Rush FC — 2026", 7, 0, 0],
            ["Montrealista FC — 2027", "TBD", "TBD", "TBD"]
        ]
    }

];

const container = document.getElementById("stats-container");

careerStats.forEach(team => {

    let totalMatches = 0;
    let totalGoals = 0;
    let totalAssists = 0;

    let rows = "";

    team.seasons.forEach(season => {

        const [year, matches, goals, assists] = season;

        if (typeof matches === "number") {
            totalMatches += matches;
            totalGoals += goals;
            totalAssists += assists;
        }

        const contributions =
            typeof goals === "number"
                ? goals + assists
                : "TBD";

        rows += `
            <tr>
                <td>${year}</td>
                <td>${matches}</td>
                <td>${goals}</td>
                <td>${assists}</td>
                <td>${contributions}</td>
            </tr>
        `;

    });

    const card = document.createElement("div");

    card.className = "stats-card";

    card.innerHTML = `

        <h3>${team.club}</h3>

        <p>${team.competition}</p>

        <table class="stats-table">

            <thead>
                <tr>
                    <th>SEASON</th>
                    <th>MATCHES</th>
                    <th>GOALS</th>
                    <th>ASSISTS</th>
                    <th>G/A</th>
                </tr>
            </thead>

            <tbody>

                ${rows}

                <tr>
                    <td>TOTAL</td>
                    <td>${totalMatches}</td>
                    <td>${totalGoals}</td>
                    <td>${totalAssists}</td>
                    <td>${totalGoals + totalAssists}</td>
                </tr>

            </tbody>

        </table>

    `;

    container.appendChild(card);

});