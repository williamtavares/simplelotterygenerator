let pastNumbers = 
{ "numbers": [
{"year": 2019, "1": 44, "2": 62, "3": 20, "4": 37, "5": 16, "p": 12},
{"year": 2019, "1": 66, "2": 52, "3": 60, "4": 24, "5": 25, "p": 5},
{"year": 2019, "1": 10, "2": 53, "3": 50, "4": 63, "5": 14, "p": 21},
{"year": 2019, "1": 67, "2": 30, "3": 34, "4": 39, "5": 53, "p": 11},
{"year": 2019, "1": 69, "2": 36, "3": 45, "4": 47, "5": 18, "p": 14},
{"year": 2019, "1": 45, "2": 5, "3": 59, "4": 55, "5": 6, "p": 14},
{"year": 2019, "1": 21, "2": 35, "3": 10, "4": 6, "5": 46, "p": 23}
]};

let arrayOfTds = $("table tr td");
for(element in arrayOfTds) {
    console.log(this);
}

console.log(pastNumbers);