import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let svg;
const width = 800;
const height = 600;

let circles = [];
const maxCircles = 10;

async function prepareVis() {

  svg = d3.select("#canvas")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid black")
    .on("click", addCircle);

}

function addCircle(event) {

  const [x, y] = d3.pointer(event);

  if (circles.length >= maxCircles) {
    circles[0].remove();
    circles.shift();
  }

  const radius = Math.random() * 40 + 5;

  const color = d3.interpolateRainbow(Math.random());

  const circle = svg
    .append("circle")
    .attr("cx", x)
    .attr("cy", y)
    .attr("r", radius)
    .attr("fill", color);

  circles.push(circle);

}

async function runApp() {
  await prepareVis();
}

runApp();