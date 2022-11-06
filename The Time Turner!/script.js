let illo = new Zdog.Illustration({
	element: ".zdog-canvas",
	zoom: 1.8
});

var timer = new Zdog.Group({
	addTo: illo,
	rotate: { z: -Zdog.TAU / 8 }
});

var innerRing = new Zdog.Ellipse({
	addTo: illo,
	diameter: 90,
	stroke: 10,
	color: "gold",
	rotate: { z: -170 }
});

var outerRing = new Zdog.Ellipse({
	addTo: illo,
	diameter: 115,
	stroke: 8,
	color: "#E6CA00",
	translate: { z: 2 }
});

new Zdog.Ellipse({
	addTo: timer,
	diameter: 68,
	stroke: 8,
	color: "#E6CA00"
});

new Zdog.Ellipse({
	addTo: timer,
	translate: { y: -14 },
	diameter: 6,
	stroke: 25,
	fill: true,
	color: "gold"
});

new Zdog.Ellipse({
	addTo: timer,
	translate: { y: 14 },
	diameter: 6,
	stroke: 25,
	fill: true,
	color: "gold"
});

let pentagon = new Zdog.Polygon({
	addTo: timer,
	radius: 5,
	translate: { y: 0, x: 21 },
	sides: 5,
	stroke: 4,
	fill: true,
	color: "gold"
});

pentagon.copy({
	translate: { y: 0, x: -21 },
	addTo: timer
});

pentagon.copy({
	radius: 1,
	translate: { y: -12, x: -21 },
	addTo: timer
});

pentagon.copy({
	radius: 1,
	translate: { y: 12, x: 22 },
	addTo: timer
});

let pointyBase = new Zdog.Shape({
	addTo: outerRing,
	path: [{ y: -5 }, { y: 5 }],
	stroke: 5,
	translate: { y: 0, x: 65.5, z: 2 },
	color: "gold"
});
//Here is your (3/3) part of Flag -> "haxx}
pointyBase.copy({
	rotate: { y: Zdog.TAU / 4 },
	translate: { y: 0, x: -65.5 },
	addTo: outerRing
});

let pointy = new Zdog.Cone({
	addTo: outerRing,
	diameter: 12,
	length: 12,
	stroke: false,
	color: "#c29a00",
	backface: "#E6CA00",
	rotate: { y: -Zdog.TAU / 4 },
	translate: { y: 0, x: 69.5, z: 2 }
});

pointy.copy({
	rotate: { y: Zdog.TAU / 4 },
	translate: { y: 0, x: -69.5 },
	addTo: outerRing
});

illo.updateRenderGraph();
animate();

function animate() {
	innerRing.rotate.y += 0.06;
	illo.rotate.y += 0.04;
	illo.updateRenderGraph();
	
	requestAnimationFrame(animate);
}

// animate item on mousedown
// get new colors on mouseup based on length of click
var mousedownTimestamp;
$(".zdog-canvas")
	.mousedown(function() {
	  	mousedownTimestamp = new Date();
	  	$("main").addClass("animating");
	})
	.mouseup(function(e) {
		var mouseupTimestamp = new Date();
		var difference = mouseupTimestamp - mousedownTimestamp;
		if (difference < 1500) {
			getColor(0);
		} else if (difference >= 1500 && difference < 2100) {
			getColor(1);
		} else if (difference >= 2100 && difference < 2700) {
			getColor(2);
		} else if (difference >= 2700 && difference < 3300) {
			getColor(3);
		} else if (difference >= 3300 && difference < 3900) {
			getColor(4);
		} else if (difference >= 3900 && difference < 4400) {
			getColor(5);
		} else if (difference >= 4400 && difference < 5000) {
			getColor(6);
		} else if (difference >= 5000 && difference < 5600) {
			getColor(7);
		} else if (difference >= 5600 && difference < 6100) {
			getColor(8);
		} else if (difference >= 6100 && difference < 6600) {
			getColor(9);
		} else if (difference >= 6600 && difference < 7200) {
			getColor(10);
		} else if (difference >= 7200) {
			getColor(11);
		}
	});


//assign proper colors and text
//remove animation


function getColor(number) {
	var root = document.documentElement;
	root.style.setProperty("--color-1", pattern[number].color1);
	root.style.setProperty("--color-2", pattern[number].color2);
	root.style.setProperty("--color-3", pattern[number].color3);
	root.style.setProperty("--color-4", pattern[number].color4);
	root.style.setProperty("--color-5", pattern[number].color5);
	$("h5").html(pattern[number].year);
	
	setTimeout($("main").removeClass("animating"), 7000);
}





//array for colors
var pattern = [
	{
		year: "2010s",
		color1: "#efb6bf",
		color2: "#fe3c71",
		color3: "#2bd566",
		color4: "#0081fe",
		color5: "#dddddd"
	},
	{
		year: "2000s",
		color1: "#df19c1",
		color2: "#ff6200",
		color3: "#efc40e",
		color4: "#23d513",
		color5: "#4399de"
	},
	{
		year: "1990s",
		color1: "#b13a1a",
		color2: "#832c76",
		color3: "#164db0",
		color4: "#e4a834",
		color5: "#287e9e"
	},
	{
		year: "1980s",
		color1: "#3968cb",
		color2: "#ca7cd8",
		color3: "#10e7e2",
		color4: "#f9eb0f",
		color5: "#ff2153"
	},
	{
		year: "1970s",
		color1: "#00a1d3",
		color2: "#a92da3",
		color3: "#fd4e2d",
		color4: "#ff68a8",
		color5: "#f8ca38"
	},
	{
		year: "1960s",
		color1: "#cf4917",
		color2: "#f9ac3d",
		color3: "#758c33",
		color4: "#985914",
		color5: "#d0b285"
	},
	{
		year: "1950s",
		color1: "#ff91bb",
		color2: "#ffd9fc",
		color3: "#4ac6d7",
		color4: "#f5855b",
		color5: "#68bbb8"
	},
	{
		year: "1940s",
		color1: "#F6C970",
		color2: "#FAE804",
		color3: "#EE1D19",
		color4: "#0E68AD",
		color5: "#031E4B"
	},
	{
		year: "1930s",
		color1: "#C14F11",
		color2: "#773621",
		color3: "#ABB1A5",
		color4: "#1D354B",
		color5: "#0E0D1E"
	},
	{
		year: "1920s",
		color1: "#E5A914",
		color2: "#DC0502",
		color3: "#005E2A",
		color4: "#058F96",
		color5: "#031F34"
	},
	{
		year: "1910s",
		color1: "#DCC978",
		color2: "#D39E04",
		color3: "#82875D",
		color4: "#4B5733",
		color5: "#1E2214"
	},
	{
		year: "1900s",
		color1: "#CEBFB9",
		color2: "#71614C",
		color3: "#B49E6F",
		color4: "#C17121",
		color5: "#3C371A"
	}
];