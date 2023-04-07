
		function fibonacci_numbers(i) {
			if (i <= 1) {
				return i;
			}
			else {
				return fibonacci_numbers(i - 2) + fibonacci_numbers(i - 1);
			}
		}


		let n = 7;
		for (let i = 0; i < n; i++) {
			console.log(fibonacci_numbers(i) + " ");
		}



