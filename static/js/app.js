var tableData = data;
var button = d3.select("button")

function filterData() {

  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var filtered = data.filter(ufo => ufo.datetime === inputValue);
  var filterType = d3.select("#selFilter").property("value");


  if (filterType === "datetime") {
    filtered = data.filter(ufo => ufo.datetime === inputValue);
  } else if (filterType === "city") {
    filtered = data.filter(ufo => ufo.city === inputValue);
  } else if (filterType === "state") {
    filtered = data.filter(ufo => ufo.state === inputValue);
  }

  buildTable(filtered);
}

function buildTable(filtered) {
  var table = d3.select("#ufo-table");
 

  var rows = table.select("tbody").selectAll("tr").data(filtered);
  rows.enter()
    .append("tr")
    .merge(rows)
    .html(data => `<td>${data.datetime}</td><td>${data.city}</td><td>${data.state}</td><td>${data.country}</td><td>${data.shape}</td><td>${data.durationMinutes}</td><td>${data.comments}</td>`);
  rows.exit().remove();
}

buildTable(data);
button.on("click", filterData);