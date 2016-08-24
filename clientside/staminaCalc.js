	var minLeftToGreenAFn = function(array){
		var minutesLeft;
		if(array[0] <= 40){
				var hr = 40 - array[0];
				var min;
		
			if (array[1] > 0) {
				min = 60 - array[1];
				hr = hr - 1;
			}
			if(array[1] === 0){
				minutesLeft = (hr*60);
				return 	minutesLeft;
			}

				minutesLeft = (hr*60) + min;
				return 	minutesLeft;
			
		}else{
			return 0;
		}
	};
	
		var minLeftToFullAFn = function(array){
		var minutesLeft;
		if(array[0] < 42){
				var hr = 42 - array[0];
				var min;
		
			if (array[1] > 0) {
				min = 60 - array[1];
				hr = hr - 1;
			}
			if(array[1] === 0){
				minutesLeft = (hr*60);
				return 	minutesLeft;
			}

				minutesLeft = (hr*60) + min;
				return 	minutesLeft;
			
		}else{
			return 0;
		}
	};
		
	var minLeftToFullMFn = function(min){
		var totalGreen = 1200 + 7200;
		return totalGreen - min;
		
	};
	
		var minLeftToGreenMFn = function(min){
		var green = 7200;
		return green - min;
		
	};
		
		
	var arrayToMinutes = function(array){
		return (array[0]*60) + array[1];  
	
	};
	
	var minToArray = function(min){
		if((min % 60) !== 0){
			var result = min/60;
			var resultHr = (min/60).toString().split(".")[0];
			var resultMin = ((result.toString()).split(".")[1].substring(0,2));
		if(resultMin.length == 1){
			resultMin = resultMin*10;
		}
		
		resultMin = resultMin*0.6;
		var resultFull = [];
		resultFull.push(parseInt(resultHr));
		resultFull.push(parseInt(resultMin));
		return resultFull;
		
		}else{
			var resultExact = [];
			resultExact.push(min/60);
			resultExact.push(0);
			return resultExact;
			
		}
		
	};
		
		var x = 550;
		var a = [37,00];
		var b = [40,00];
	
	var t =x-(minLeftToGreenAFn(a)*3);

	var test = function(){
		if(t >= 1200){
			return [42,00]
		}else{
			if(t>=0){
				var a1 = Math.floor((t/60)/10);
				var a2= (((t/60)/10) % 1)*60;
				b[0] = b[0] + a1;
				b[1] = b[1]+a2;
				return b;
			}else{
				var a1 =   Math.floor((x/60)/3);
				var a2= 60*((x/60) % 1);
				a[0] = a[0] + a1;
				a[1] = a[1]+a2;
				return a;
			
			}
		}
	}

	test();

		
		
		
		
		