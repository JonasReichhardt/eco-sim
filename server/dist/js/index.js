let canvas

let raw = [{ name: "German Reich", color: "Red", x: 100, y: 100 }, { name: "France", color: "Blue", x: 650, y: 450 }]
let kingdoms = []
let cities = []
let towns = []

function init() {
	canvas = document.getElementById('cnvs').getContext('2d')

	raw.forEach(el => {
		kingdoms.push(new City(el.name, el.color))
		drawCity(el.x, el.y, el.color)
		drawTowns(el.x, el.y, el.color)
	})
}

function drawCity(x, y, color) {
	canvas.beginPath()
	canvas.rect(x, y, 50, 50)
	canvas.fillStyle = color
	canvas.fill()
}

function drawTowns(x, y, color) {
	values = []

	values.push({ x: x + 75, y: y - getRandom(50, 100) })
	values.push({ x: x + getRandom(50, 100), y: y + getRandom(50, 100) })
	values.push({ x: x - getRandom(50, 100), y: y + 75 })

	values.forEach(e => {
		canvas.beginPath()
		canvas.arc(e.x, e.y, 10, 0, 2 * Math.PI)
		canvas.fillStyle = color
		canvas.fill()
	})


}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}