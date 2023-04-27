function formChart(statArr) {
    window.onload = function () {
        var chart = new CanvasJS.Chart("chart", {
            title:{
                text: "Stat Spread"              
            },
            data: [              
            {
                // Change type to "doughnut", "line", "splineArea", etc.
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
        console.log(chart.options)
        chart.render();

        $("#example").click(function () {

            chart.options.title.text = "Bulbasuar Base Stats";
            chart.options.data[0].dataPoints[0].y = 45;
            chart.options.data[0].dataPoints[1].y = 49;
            chart.options.data[0].dataPoints[2].y = 49;
            chart.options.data[0].dataPoints[3].y = 65;
            chart.options.data[0].dataPoints[4].y = 65;
            chart.options.data[0].dataPoints[5].y = 45;
            chart.render();
        
            });
    
    }
}

async function whoThatPokemon() {
    const bulbasaurExample = document.querySelector('#example')
    const getStatsButton = document.querySelector('#poke_search')
    const pokemon = document.querySelector('#poke');

    const storedData = localStorage.getItem('storedData');
    let parsedData = JSON.parse(storedData);

    initChart = formChart()


    bulbasaurExample.addEventListener("click", async (event) => {
        console.log("Bulbasuar Data")
        const results = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");

        const storedList = await results.json();
        localStorage.setItem('storedData', JSON.stringify(storedList));
        parsedData = storedList;

        bulbStats = parsedData["stats"]
        console.log(bulbStats)
    })
}

document.addEventListener("DOMContentLoaded", async () => whoThatPokemon());