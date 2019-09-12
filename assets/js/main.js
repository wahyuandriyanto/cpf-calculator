function age(){
			var payrollMonth = document.getElementById('payrollmonth').value;
			var payrollMonthReverse = payrollMonth.split("/").reverse().join("/");
			var date = document.getElementById('birthday').value;
			var today = new Date(payrollMonthReverse);
			var birthday = new Date(date);
			var year = 0;
			var month = 0;
			if (today.getMonth() < birthday.getMonth()) {
				year = 1;
				month = 12 - (birthday.getMonth() - today.getMonth());
			} else {
				month = today.getMonth() - birthday.getMonth();
			}
			var age = today.getFullYear() - birthday.getFullYear() - year;

			if(age < 0){
			age = 0;
			}	
			var age2 = ""+age+"."+month;
			return (parseFloat(age2));
		}
		function agePR() {
			var payrollMonth = document.getElementById('payrollmonth').value;
			var payrollMonthReverse = payrollMonth.split("/").reverse().join("/");
			var date = document.getElementById('pr').value;
			var today = new Date(payrollMonthReverse);
			var datepr = new Date(date);
			var year = 0;
			var month = 0;
			if (today.getMonth() < datepr.getMonth()) {
				year = 1;
				month = 12 - (datepr.getMonth() - today.getMonth());
			} else {
				month = today.getMonth() - datepr.getMonth();
			}
			var age = today.getFullYear() - datepr.getFullYear() - year;

			if(age < 0){
			age = 0;
			}	
			var age2 = ""+age+"."+month;
			return (parseFloat(age2));
		}
		function totalWages(){
			var ow = parseFloat(document.getElementById('ow').value);
			var aw = parseFloat(document.getElementById('aw').value);
			var wage = ow + aw;
			return wage;
		}
		function percentFG() {
			var ow = parseFloat(document.getElementById('ow').value);
			var aw = parseFloat(document.getElementById('aw').value);
			var citizenship = document.getElementById('selectCitizenship').value;
			var totalPercent = 0;
			var totalAdditional = 0;
			var eePercent = 0;
			var eeAdditional = 0;
			var totalPercentDetail = "";
			var eePercentDetail = "";
			var totalMax = 0;
			var eeMax = 0;
			if (citizenship == 'pr' && agePR() <= 1){
				if (age() <= 55 && totalWages() <= 500){
					totalPercent = 0.17;
					totalPercentDetail = "17%";
				} else if (age() <= 55 && totalWages() < 750){
					totalPercent = 0.17;
					totalPercentDetail = "17%";
					totalAdditional = 0.15;
					eeAdditional = 0.15;
				} else if (age() <= 55 && totalWages() >= 750){
					totalPercent = 0.22;
					totalPercentDetail = "22%";
					eePercent = 0.05;
					eePercentDetail = "5%";
					totalMax = 1320;
					eeMax = 300;
				} else if (age() <= 60 && totalWages() <= 500){
					totalPercent = 0.13;
					totalPercentDetail = "13%";
				} else if (age() <= 60 && totalWages() < 750){
					totalPercent = 0.13;
					totalPercentDetail = "13%";
					totalAdditional = 0.15;
					eeAdditional = 0.15;
				} else if (age() <= 60 && totalWages() >= 750){
					totalPercent = 0.18;
					totalPercentDetail = "18%";
					eePercent = 0.05;
					eePercentDetail = "5%";
					totalMax = 1080;
					eeMax = 300;
				} else if (age() <= 65 && totalWages() <= 500){
					totalPercent = 0.09;
					totalPercentDetail = "9%";
				} else if (age() <= 65 && totalWages() < 750){
					totalPercent = 0.09;
					totalPercentDetail = "9%";
					totalAdditional = 0.15;
					eeAdditional = 0.15;
				} else if (age() <= 65 && totalWages() >= 750){
					totalPercent = 0.14;
					totalPercentDetail = "14%";
					eePercent = 0.05;
					eePercentDetail = "5%";
					totalMax = 840;
					eeMax = 300;
				} else if (age() > 65 && totalWages() <= 500){
					totalPercent = 0.075;
					totalPercentDetail = "7.5%";
				} else if (age() > 65 && totalWages() < 750){
					totalPercent = 0.075;
					totalPercentDetail = "7.5%";
					totalAdditional = 0.15;
					eeAdditional = 0.15;
				} else if (age() > 65 && totalWages() >= 750){
					totalPercent = 0.125;
					totalPercentDetail = "12.5%";
					eePercent = 0.05;
					eePercentDetail = "5%";
					totalMax = 750;
					eeMax = 300;
				}
			} else if (citizenship == 'pr' && agePR() <= 2){
				if (age() <= 55 && totalWages() <= 500){
					totalPercent = 0.17;
					totalPercentDetail = "17%";
				} else if (age() <= 55 && totalWages() < 750){
					totalPercent = 0.17;
					totalPercentDetail = "17%";
					totalAdditional = 0.45;
					eeAdditional = 0.45;
				} else if (age() <= 55 && totalWages() >= 750){
					totalPercent = 0.32;
					totalPercentDetail = "32%";
					eePercent = 0.15;
					eePercentDetail = "15%";
					totalMax = 1920;
					eeMax = 900;
				} else if (age() <= 60 && totalWages() <= 500){
					totalPercent = 0.13;
					totalPercentDetail = "13%";
				} else if (age() <= 60 && totalWages() < 750){
					totalPercent = 0.13;
					totalPercentDetail = "13%";
					totalAdditional = 0.375;
					eeAdditional = 0.375;
				} else if (age() <= 60 && totalWages() >= 750){
					totalPercent = 0.255;
					totalPercentDetail = "25.5%";
					eePercent = 0.125;
					eePercentDetail = "12.5%";
					totalMax = 1530;
					eeMax = 750;
				} else if (age() <= 65 && totalWages() <= 500){
					totalPercent = 0.09;
					totalPercentDetail = "9%";
				} else if (age() <= 65 && totalWages() < 750){
					totalPercent = 0.09;
					totalPercentDetail = "9%";
					totalAdditional = 0.225;
					eeAdditional = 0.225;
				} else if (age() <= 65 && totalWages() >= 750){
					totalPercent = 0.165;
					totalPercentDetail = "16.5%";
					eePercent = 0.075;
					eePercentDetail = "7.5%";
					totalMax = 990;
					eeMax = 450;
				} else if (age() > 65 && totalWages() <= 500){
					totalPercent = 0.075;
					totalPercentDetail = "7.5%";
				} else if (age() > 65 && totalWages() < 750){
					totalPercent = 0.075;
					totalPercentDetail = "7.5%";
					totalAdditional = 0.15;
					eeAdditional = 0.15;
				} else if (age() > 65 && totalWages() >= 750){
					totalPercent = 0.125;
					totalPercentDetail = "12.5%";
					eePercent = 0.05;
					eePercentDetail = "5%";
					totalMax = 750;
					eeMax = 300;
				}
			} else {
				if (age() <= 55 && totalWages() <= 500){
					totalPercent = 0.17;
					totalPercentDetail = "17%";
				} else if (age() <= 55 && totalWages() < 750){
					totalPercent = 0.17;
					totalPercentDetail = "17%";
					totalAdditional = 0.6;
					eeAdditional = 0.6;
				} else if (age() <= 55 && totalWages() >= 750){
					totalPercent = 0.37;
					totalPercentDetail = "37%";
					eePercent = 0.2;
					eePercentDetail = "20%";
					totalMax = 2220;
					eeMax = 1200;
				} else if (age() <= 60 && totalWages() <= 500){
					totalPercent = 0.13;
					totalPercentDetail = "13%";
				} else if (age() <= 60 && totalWages() < 750){
					totalPercent = 0.13;
					totalPercentDetail = "13%";
					totalAdditional = 0.39;
					eeAdditional = 0.39;
				} else if (age() <= 60 && totalWages() >= 750){
					totalPercent = 0.26;
					totalPercentDetail = "26%";
					eePercent = 0.13;
					eePercentDetail = "13%";
					totalMax = 1560;
					eeMax = 780;
				} else if (age() <= 65 && totalWages() <= 500){
					totalPercent = 0.09;
					totalPercentDetail = "9%";
				} else if (age() <= 65 && totalWages() < 750){
					totalPercent = 0.09;
					totalPercentDetail = "9%";
					totalAdditional = 0.225;
					eeAdditional = 0.225;
				} else if (age() <= 65 && totalWages() >= 750){
					totalPercent = 0.165;
					totalPercentDetail = "16.5%";
					eePercent = 0.075;
					eePercentDetail = "7.5%";
					totalMax = 990;
					eeMax = 450;
				} else if (age() > 65 && totalWages() <= 500){
					totalPercent = 0.075;
					totalPercentDetail = "7.5%";
				} else if (age() > 65 && totalWages() < 750){
					totalPercent = 0.075;
					totalPercentDetail = "7.5%";
					totalAdditional = 0.15;
					eeAdditional = 0.15;
				} else if (age() > 65 && totalWages() >= 750){
					totalPercent = 0.125;
					totalPercentDetail = "12.5%";
					eePercent = 0.05;
					eePercentDetail = "5%";
					totalMax = 750;
					eeMax = 300;
				}
			}
			return {totalPercent, totalAdditional, eePercent, eeAdditional, totalPercentDetail, eePercentDetail, totalMax, eeMax};
		}
		function percentGG() {
			var ow = parseFloat(document.getElementById('ow').value);
			var aw = parseFloat(document.getElementById('aw').value);
			var citizenship = document.getElementById('selectCitizenship').value;
			var totalPercent = 0;
			var totalAdditional = 0;
			var eePercent = 0;
			var eeAdditional = 0;
			var totalPercentDetail = "";
			var eePercentDetail = "";
			var totalMax = 0;
			var eeMax = 0;
			if (citizenship == 'pr' && agePR() <= 1){
				if (age() <= 60 && totalWages() <= 500){
					totalPercent = 0.04;
					totalPercentDetail = "4%";
				} else if (age() <= 60 && totalWages() < 750){
					totalPercent = 0.04;
					totalPercentDetail = "4%";
					totalAdditional = 0.15;
					eeAdditional = 0.15;
				} else if (age() <= 60 && totalWages() >= 750){
					totalPercent = 0.09;
					totalPercentDetail = "9%";
					eePercent = 0.05;
					eePercentDetail = "5%";
					totalMax = 540;
					eeMax = 300;
				} else if (age() > 60 && totalWages() <= 500){
					totalPercent = 0.035;
					totalPercentDetail = "3.5%";
				} else if (age() > 60 && totalWages() < 750){
					totalPercent = 0.035;
					totalPercentDetail = "3.5%";
					totalAdditional = 0.15;
					eeAdditional = 0.15;
				} else if (age() > 60 && totalWages() >= 750){
					totalPercent = 0.085;
					totalPercentDetail = "8.5%";
					eePercent = 0.05;
					eePercentDetail = "5%";
					totalMax = 510;
					eeMax = 300;
				} 
			} else if (citizenship == 'pr' && agePR() <= 2){
				if (age() <= 55 && totalWages() <= 500){
					totalPercent = 0.09;
					totalPercentDetail = "9%";
				} else if (age() <= 55 && totalWages() < 750){
					totalPercent = 0.09;
					totalPercentDetail = "9%";
					totalAdditional = 0.45;
					eeAdditional = 0.45;
				} else if (age() <= 55 && totalWages() >= 750){
					totalPercent = 0.24;
					totalPercentDetail = "24%";
					eePercent = 0.15;
					eePercentDetail = "15%";
					totalMax = 1440;
					eeMax = 900;
				} else if (age() <= 60 && totalWages() <= 500){
					totalPercent = 0.06;
					totalPercentDetail = "6%";
				} else if (age() <= 60 && totalWages() < 750){
					totalPercent = 0.06;
					totalPercentDetail = "6%";
					totalAdditional = 0.375;
					eeAdditional = 0.375;
				} else if (age() <= 60 && totalWages() >= 750){
					totalPercent = 0.185;
					totalPercentDetail = "18.5%";
					eePercent = 0.185;
					eePercentDetail = "18.5%";
					totalMax = 1110;
					eeMax = 750;
				} else if (age() <= 65 && totalWages() <= 500){
					totalPercent = 0.035;
					totalPercentDetail = "3.5%";
				} else if (age() <= 65 && totalWages() < 750){
					totalPercent = 0.035;
					totalPercentDetail = "3.5%";
					totalAdditional = 0.225;
					eeAdditional = 0.225;
				} else if (age() <= 65 && totalWages() >= 750){
					totalPercent = 0.11;
					totalPercentDetail = "11%";
					eePercent = 0.075;
					eePercentDetail = "7.5%";
					totalMax = 660;
					eeMax = 450;
				} else if (age() > 65 && totalWages() <= 500){
					totalPercent = 0.035;
					totalPercentDetail = "3.5%";
				} else if (age() > 65 && totalWages() < 750){
					totalPercent = 0.035;
					totalPercentDetail = "3.5%";
					totalAdditional = 0.15;
					eeAdditional = 0.15;
				} else if (age() > 65 && totalWages() >= 750){
					totalPercent = 0.085;
					totalPercentDetail = "8.5%";
					eePercent = 0.05;
					eePercentDetail = "5%";
					totalMax = 510;
					eeMax = 300;
				}
			} else {
				if (age() <= 55 && totalWages() <= 500){
					totalPercent = 0.17;
					totalPercentDetail = "17%";
				} else if (age() <= 55 && totalWages() < 750){
					totalPercent = 0.17;
					totalPercentDetail = "17%";
					totalAdditional = 0.6;
					eeAdditional = 0.6;
				} else if (age() <= 55 && totalWages() >= 750){
					totalPercent = 0.37;
					totalPercentDetail = "37%";
					eePercent = 0.2;
					eePercentDetail = "20%";
					totalMax = 2220;
					eeMax = 1200;
				} else if (age() <= 60 && totalWages() <= 500){
					totalPercent = 0.13;
					totalPercentDetail = "13%";
				} else if (age() <= 60 && totalWages() < 750){
					totalPercent = 0.13;
					totalPercentDetail = "13%";
					totalAdditional = 0.39;
					eeAdditional = 0.39;
				} else if (age() <= 60 && totalWages() >= 750){
					totalPercent = 0.26;
					totalPercentDetail = "26%";
					eePercent = 0.13;
					eePercentDetail = "13%";
					totalMax = 1560;
					eeMax = 780;
				} else if (age() <= 65 && totalWages() <= 500){
					totalPercent = 0.09;
					totalPercentDetail = "9%";
				} else if (age() <= 65 && totalWages() < 750){
					totalPercent = 0.09;
					totalPercentDetail = "9%";
					totalAdditional = 0.225;
					eeAdditional = 0.225;
				} else if (age() <= 65 && totalWages() >= 750){
					totalPercent = 0.165;
					totalPercentDetail = "16.5%";
					eePercent = 0.075;
					eePercentDetail = "7.5%";
					totalMax = 990;
					eeMax = 450;
				} else if (age() > 65 && totalWages() <= 500){
					totalPercent = 0.075;
					totalPercentDetail = "7.5%";
				} else if (age() > 65 && totalWages() < 750){
					totalPercent = 0.075;
					totalPercentDetail = "7.5%";
					totalAdditional = 0.15;
					eeAdditional = 0.15;
				} else if (age() > 65 && totalWages() >= 750){
					totalPercent = 0.125;
					totalPercentDetail = "12.5%";
					eePercent = 0.05;
					eePercentDetail = "5%";
					totalMax = 750;
					eeMax = 300;
				}
			}
			return {totalPercent, totalAdditional, eePercent, eeAdditional, totalPercentDetail, eePercentDetail, totalMax, eeMax};
		}
		function totalCPF(){
			var ow = parseFloat(document.getElementById('ow').value);
			var aw = parseFloat(document.getElementById('aw').value);
			var contributionType = document.getElementById('typeContribution').value;
			if (contributionType == "GG"){
				var data = percentGG();
			} else {
				var data = percentFG();
			}
			var total = 0;
			var detail = ""
			if (totalWages() <= 50) {
				total = 0;
				detail = "Nil";
			} else if (totalWages() <= 500){
				total = data.totalPercent * totalWages();
				detail = ""+data.totalPercentDetail+" x "+totalWages()+" = "+Math.round(total);
			} else if (totalWages() < 750){
				total = (data.totalPercent * totalWages()) + data.totalAdditional * (totalWages() - 500);
				detail = ""+data.totalPercentDetail+" x "+totalWages()+" + "+data.totalAdditional+" x ("+totalWages()+" - 500) = "+Math.round(total);
			} else if (totalWages() >= 750){
				total = Math.min((data.totalPercent * ow) + (data.totalPercent * aw), data.totalMax); 
				detail = "("+data.totalPercentDetail+" x "+ow+") + ("+data.totalPercentDetail+" x "+aw+") = "+Math.round(total);
			} 
			return {total, detail};
		}
		function employeeCPF(){
			var ow = parseFloat(document.getElementById('ow').value);
			var aw = parseFloat(document.getElementById('aw').value);
			var contributionType = document.getElementById('typeContribution').value;
			if (contributionType == "GG"){
				var data = percentGG();
			} else {
				var data = percentFG();
			}
			var total = 0;
			var detail = "";
			if (age() <= 55 && totalWages() <= 50) {
				total = 0;
				detail = "Nil";
			} else if (age() <= 55 && totalWages() <= 500){
				total = 0;
				detail = "Nil";
			} else if (age() <= 55 && totalWages() < 750){
				total = data.eeAdditional * (totalWages() - 500);
				detail = ""+data.eeAdditional+" ("+totalWages()+" - 500) = "+Math.round(total);
			} else if (age() <=55 && totalWages() >= 750){
				total = Math.min((data.eePercent * ow) + (data.eePercent * aw), data.eeMax); 
				detail = "("+data.eePercentDetail+" x "+ow+") + ("+data.eePercentDetail+" x "+aw+") = "+Math.round(total); 
			} 
			return {total, detail};

		}
		function employerCPF(){
			var data = totalCPF();
			var data2 = employeeCPF();
			var total = data.total - data2.total;
			var detail = ""+Math.round(data.total)+" - "+Math.round(data2.total)+" = "+Math.round(total);
			return {total, detail};
		}
		function donationType(){
			var donation = document.getElementById('cpfDonation').value;
			return donation;
		}
		function totalDonation(){
			var contribution = 0;
			if (donationType() == 'cdac') {
				if (totalWages() <= 2000) {
					contribution = 0.50;
				} else if (totalWages() <= 3500) {
					contribution = 1.00;
				} else if (totalWages() <= 5000) {
					contribution = 1.50;
				} else if (totalWages() <= 7500) {
					contribution = 2.00;
				} else {
					contribution = 3.00;
				}
			} else if (donationType() == 'sinda') {
				if (totalWages() <= 1000) {
					contribution = 1;
				} else if (totalWages() <= 1500) {
					contribution = 3;
				} else if (totalWages() <= 2500) {
					contribution = 5;
				} else if (totalWages() <= 4500) {
					contribution = 7;
				} else if (totalWages() <= 7500) {
					contribution = 9;
				} else if (totalWages() <= 10000) {
					contribution = 12;
				} else if (totalWages() <= 15000) {
					contribution = 18;
				} else {
					contribution = 30;
				}
			} else if (donationType() == 'ecf') {
				if (totalWages() <= 1000) {
					contribution = 2;
				} else if (totalWages() <= 1500) {
					contribution = 4;
				} else if (totalWages() <= 2500) {
					contribution = 6;
				} else if (totalWages() <= 4000) {
					contribution = 9;
				} else if (totalWages() <= 7000) {
					contribution = 12;
				} else if (totalWages() <= 10000) {
					contribution = 16;
				} else {
					contribution = 20;
				}
			} else if (donationType == 'mbmf') {
				if (totalWages() <= 1000) {
					contribution = 3.00;
				} else if (totalWages() <= 2000) {
					contribution = 4.50;
				} else if (totalWages() <= 3000) {
					contribution = 6.50;
				} else if (totalWages() <= 4000) {
					contribution = 15.00;
				} else if (totalWages() <= 6000) {
					contribution = 19.50;
				} else if (totalWages() <= 8000) {
					contribution = 22.00;
				} else if (totalWages() <= 10000) {
					contribution = 24.00;	
				} else {
					contribution = 26.00;
				}
			} else {
				contribution = "";
			}	
			
			return contribution;
		}
		function sdl(){
			var ow = parseFloat(document.getElementById('ow').value);
			var aw = parseFloat(document.getElementById('aw').value);
			var sdl = 0;
			if (totalWages() <= 800){
				sdl = 2;
			} else {
				sdl = 0.0025 * Math.min((ow + aw), 4500);
			}
			return sdl;
		}
		function netPay(){
			var data = employeeCPF();
			var total = totalWages() - data.total - totalDonation();
			return total;
		}
		function printCPF(){
				var data = totalCPF();
				var data2 = employeeCPF();
				var data3 = employerCPF();
				document.getElementById('result').style.display = 'block';
				document.getElementById('images').style.display = 'none';
				document.getElementById('employeeCPF').innerHTML = '$'+Math.round(data2.total);
				document.getElementById('employerCPF').innerHTML = '$'+Math.round(data3.total);
				document.getElementById('donationType').innerHTML = donationType();
				document.getElementById('contribution').innerHTML = '$'+totalDonation();
				document.getElementById('sdl').innerHTML = '$'+sdl();
				document.getElementById('netpay').innerHTML = '$'+netPay();
				document.getElementById('totalDetails').innerHTML = data.detail;
				document.getElementById('employeeCpfDetail').innerHTML = data2.detail;
				document.getElementById('employerCpfDetail').innerHTML = data3.detail;
		}
		function show(){
			var data = document.getElementById('selectCitizenship').value;
			if (data == 'pr'){
				document.getElementById('PRDate').style.display = 'block';
				document.getElementById('tcr').style.display = 'block';
			} else{
				document.getElementById('PRDate').style.display = 'none';
				document.getElementById('tcr').style.display = 'none';
			}
		}
