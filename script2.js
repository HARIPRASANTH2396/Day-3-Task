var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    console.log(result);
    for (var i=0; i < result.length; i++){
        var flag = result[i].name;
        var countryname = result[i].name.common;
        var population = result[i].population;
        var region = result[i].region;
        var subregion = result[i].subregion;
        console.log("flag:"+flag);
        console.log("countryname:"+countryname);
        console.log("population:"+population);
        console.log("region:"+region);
        console.log("subregion:"+subregion);
    }

}