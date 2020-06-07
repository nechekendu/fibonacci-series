var button = document.querySelector('#button')
button.addEventListener('click', getSeries)

function getSeries (e) {
    e.target.preventDefault;
	var number = document.querySelector('#number').value
	if (number !== '') {
		var fibonacciSeries = number => {
			if (number === 1) {
				return [0,1]
			} else {
				let series = fibonacciSeries(number - 1)
				series.push(series[series.length - 1] + series[series.length - 2])
				return series
			}
		}

		var textNode = document.createTextNode(fibonacciSeries(number))
		var para = document.querySelector('#series')
		para.appendChild(textNode)
	}
}