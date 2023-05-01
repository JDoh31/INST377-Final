function findThatPokemon(pokemon) {
    pokeName = pokemon.toLowerCase();
    getFrom = "https://pokeapi.co/api/v2/pokemon/" + pokeName;
    return getFrom;
}

let search = "";

const pokemon = document.querySelector('#poke');

pokemon.addEventListener("input", async (event) => {
    //console.log("input",event.target.value)
    pocketMonsterLink = findThatPokemon(event.target.value);
    search = pocketMonsterLink;
    console.log(search)
});

window.onload = function formChart() {
    var chart = new CanvasJS.Chart("chart", {
        title:{
            text: "Stat Spread"              
        },
        data: [              
        {
            type: "column",
            dataPoints: [
                {label: "HP", y: 0  },
                { label: "Atk",  y: 0  },
                { label: "Def", y: 0  },
                { label: "SpAtk", y: 0  },
                { label: "SpDef",  y: 0  },
                { label: "Spd",  y: 0  }
            ]
        }
        ]
    });
    chart.render();

    $("#example").click(function () {
        $.get("https://pokeapi.co/api/v2/pokemon/bulbasaur", function (data) {
            var chart = new CanvasJS.Chart("chart", {
                animationEnabled: true,
                theme: "light2",//light1
                title: {
                    text: data["name"] + " base stats"
                },
                data: [
                  {
                    type: "column",
                    dataPoints: [
                    {label: "HP", y: data["stats"][0]["base_stat"]  },
                    { label: "Atk",  y: data["stats"][1]["base_stat"]  },
                    { label: "Def", y: data["stats"][2]["base_stat"]  },
                    { label: "SpAtk", y: data["stats"][3]["base_stat"]  },
                    { label: "SpDef",  y: data["stats"][4]["base_stat"]  },
                    { label: "Spd",  y: data["stats"][5]["base_stat"]  }
                    ]
                  }
                ]
            });
         
            chart.render();
        });
    });

    $("#poke_search").click(function () {
        $.get(search, function (data) {
            var chart = new CanvasJS.Chart("chart", {
                animationEnabled: true,
                theme: "light2",//light1
                title: {
                    text: data["name"] + " base stats"
                },
                data: [
                  {
                    type: "column",
                    dataPoints: [
                    {label: "HP", y: data["stats"][0]["base_stat"]  },
                    { label: "Atk",  y: data["stats"][1]["base_stat"]  },
                    { label: "Def", y: data["stats"][2]["base_stat"]  },
                    { label: "SpAtk", y: data["stats"][3]["base_stat"]  },
                    { label: "SpDef",  y: data["stats"][4]["base_stat"]  },
                    { label: "Spd",  y: data["stats"][5]["base_stat"]  }
                    ]
                  }
                ]
            });
         
            console.log(data)
            chart.render();
        });
    });
    }


async function whoThatPokemon() {
    const bulbasaurExample = document.querySelector('#example')
    const getStatsButton = document.querySelector('#poke_search')

    const storedData = localStorage.getItem('storedData');
    let parsedData = JSON.parse(storedData);

    let search = "";
    let stats = [];

    window.onload

    bulbasaurExample.addEventListener("click", async (event) => {
        console.log("Bulbasaur Data")
        const results = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");

        const storedList = await results.json();
        localStorage.setItem('storedData', JSON.stringify(storedList));
        parsedData = storedList;

        bulbStats = parsedData["stats"]
        console.log(bulbStats)
    });

    getStatsButton.addEventListener("click", async (event) => {
        console.log("Getting Stats")
        const results = await fetch(search);

        const storedList = await results.json();
        localStorage.setItem('storedData', JSON.stringify(storedList));
        parsedData = storedList;

        stats = parsedData
    });


}

document.addEventListener("DOMContentLoaded", async () => whoThatPokemon());