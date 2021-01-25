d3.csv("../../../../output/cali_date_total_df.csv").then(function(caliCal, err) {
	if (err) throw err;

	console.log(caliCal);

	chart = {
		 svg = d3.create("svg")
			.attr("viewBox", [0, 0, width, height * years.length])
			.attr("font-family", "sans-serif")
			.attr("font-size", 10),


		year = svg.selectAll("g")
			.data(caliCal)
			.join("g")
			.attr("transform", (d, i) => `translate(40.5,${height * i + cellSize * 1.5})`),


		year.append("text")
			.attr("x", -5)
			.attr("y", -5)
			.attr("font-weight", "bold")
			.attr("text-anchor", "end")
			.text(([key]) => key),

		year.append("g")
			.attr("text-anchor", "end")
		    .selectAll("text")
		    .data(weekday === "weekday" ? d3.range(1, 6) : d3.range(7))
		    .join("text")
			 .attr("x", -5)
			 .attr("y", i => (countDay(i) + 0.5) * cellSize)
			 .attr("dy", "0.31em")
			 .text(formatDay),

		year.append("g")
			.selectAll("rect")
			.data(weekday === "weekday"
				? ([, values]) => values.filter(d => ![0, 6].includes(d.date.getUTCDay()))
				: ([, values]) => values)
			.join("rect")
			  .attr("width", cellSize - 1)
			  .attr("height", cellSize - 1)
			  .attr("x", d => timeWeek.count(d3.utcYear(d.date), d.date) * cellSize + 0.5)
			  .attr("y", d => countDay(d.date.getUTCDay()) * cellSize + 0.5)
			  .attr("fill", d => color(d.value))
			.append("title")
			  .text(d => `${formatDate(d.date)}
		${formatValue(d.value)}${d.close === undefined ? "" : `
		${formatClose(d.close)}`}`),

		month = year.append("g")
			.selectAll("g")
			.data(([, values]) => d3.utcMonths(d3.utcMonth(values[0].date), values[values.length - 1].date))
			.join("g"),

		month.filter((d, i) => i).append("path")
			.attr("fill", "none")
			.attr("stroke", "#fff")
			.attr("stroke-width", 3)
			.attr("d", pathMonth),

		month.append("text")
			.attr("x", d => timeWeek.count(d3.utcYear(d), timeWeek.ceil(d)) * cellSize + 2)
			.attr("y", -5)
			.text(formatMonth)

		return svg.node();
	}

	data = {
		data = await FileAttachment("^DJI@2.csv").csv({typed: true}),
		return d3.pairs(data, ({Close: Previous}, {Date, Close}) => {
		//   return {date: Date, value: (Close - Previous) / Previous, close: Close};
		})
	  }

	years = d3.groups(data, d => d.date.getUTCFullYear()).reverse()




});