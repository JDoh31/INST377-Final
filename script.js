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
				{ label: "Atk",  y: 10  },
				{ label: "Def", y: 15  },
				{ label: "SpAtk", y: 25  },
				{ label: "SpDef",  y: 30  },
				{ label: "Spd",  y: 28  }
			]
		}
		]
	});
	chart.render();
}