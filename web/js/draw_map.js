var width = 1200, height = 600
svg1 = d3.select('#choropleth-graph')
            .append("svg")
            .attr("width", width)
            .attr("height", height)
// The svg
/*
<svg width="960" height="600"></svg>
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");
*/

// Map and projection
var path = d3.geoPath();
var projection = d3.geoNaturalEarth()
    .scale(width / 2 / Math.PI)
    .translate([width / 2, height / 2])
var path = d3.geoPath()
    .projection(projection);

// Data and color scale
var data = d3.map();
var colorScheme = d3.schemeReds[6];
colorScheme.unshift("#eee")
var colorScale = d3.scaleThreshold()
    .domain([1000000, 10000000, 20000000, 30000000, 40000000, 50000000])
    .range(colorScheme);

// Legend
var g = svg1.append("g")
    .attr("class", "legendThreshold")
    .attr("transform", "translate(20,20)");
g.append("text")
    .attr("class", "caption")
    .attr("x", 0)
    .attr("y", -6)
    .text("Prize");
var labels = ['0-1000000', '1000000-10000000','10000000-20000000', '20000000-30000000', '30000000-40000000', '40000000-50000000', '>50000000'];
var legend = d3.legendColor()
    .labels(function (d) { return labels[d.i]; })
    .shapePadding(4)
    .scale(colorScale);
svg1.select(".legendThreshold")
    .call(legend);

// Load external data and boot
d3.queue()
    .defer(d3.json, "http://enjalot.github.io/wwsd/data/world/world-110m.geojson")
    .defer(d3.csv, "https://raw.githubusercontent.com/Edwin628/csv_data/main/world_earning.csv", function(d) { data.set(d.Three_Letter_Country_Code, +d.TotalUSDPrize); })
    .await(ready);

function ready(error, topo) {
    if (error) throw error;
    // create a tooltip
    var Tooltip = d3.select("#choropleth-graph")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")

    let mouseOver = function(d) {
        Tooltip.style("opacity", 1)
        d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .5)
        d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("stroke", "black")
    }
    var mousemove = function(d) {
        d.total = data.get(d.id) || 0;
        Tooltip
        .html("The players earnings of " + d.id + " is: $ " + d.total)
        .style("left", (d3.mouse(this)[0]) + "px")
        .style("top", (d3.mouse(this)[1]) + "px")
    }

    let mouseLeave = function(d) {
        Tooltip.style("opacity", 0)
        d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .8)
        d3.select(this)
        .transition()
        .duration(200)
        .style("stroke", "transparent")
    }

    // Draw the map
    svg1.append("g")
        .attr("class", "countries")
        .selectAll("path")
        .data(topo.features)
        .enter().append("path")
        .attr("fill", function (d){
            // Pull data for this country
            d.total = data.get(d.id) || 0;
            // Set the color
            return colorScale(d.total);
        })
        .attr("d", path)
        .style("stroke", "transparent")
        .attr("class", function(d){ return "Country" } )
        .style("opacity", .8)
        .on("mouseover", mouseOver)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseLeave )
}