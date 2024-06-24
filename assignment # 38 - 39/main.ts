//assignment # 38
function describe_city(cityName:string,countryName:string = "Pakistan"){
    console.log(cityName," is in ",countryName )
}

console.log("\n \n ******** Assignment # 38********\n\n")
//#1 function call by default country name

describe_city("Karachi")
//# 2 function calling by default country name
describe_city("Islamabad")

//#3 function calling by different country name 
describe_city("Beijing","China")

// assignment # 39
function city_country(city_Name:string,country_Name:string){
    console.log("\"",city_Name," ,",country_Name,"\"")
}
console.log("\n \n ******** Assignment # 39********\n\n")
//#1 function calling
city_country("Tokyo","Japan")

//#2 function calling
city_country("South Korea","Seoul")

//#3 function calling
city_country("Kabul","Afghanistan")