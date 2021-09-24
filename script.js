var xml = new XMLHttpRequest();

xml.open("GET", "https://restcountries.com/v3/all", true);
xml.send()
xml.onload = function(){
var data = JSON.parse(this.response)
console.log(data);
//Countries From Asia - 1
console.log(data.filter(countries=> countries.region === "Asia" ));

//Countries with Population < 200000 - 2
console.log(data.filter(countries => countries.population < 200000 ))

//Get Name,Capital,Flag using ForEach - 3
data.forEach(countries=> console.log( `name : ${countries.name.common} | Capital : ${countries.capital} | flag : ${countries.flags[1]}`));

//Calculate the Populations by using Reduce - 4
console.log(data.reduce((accum, popu)=> accum + popu.population, 0))

//Print the Countries only USD - 5
console.log(data.filter(countries => {   
    for(let i in countries.currencies){
        if(countries.currencies[i].code === 'USD') return true
    }
}))
}
xml.onerror = function(){
    console.log("Error:" + this.statusText);
}