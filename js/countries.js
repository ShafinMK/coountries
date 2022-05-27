console.log("country");

const callApi = ()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res=> res.json())
    .then( data=> allCountry(data))
}

callApi();

const allCountry = countries=>{
    console.log(countries);
    let serialNo = 1;
    for(let country of countries){
        // console.log(country.name.common);
        let cardTitle = country.name;
        let capital = country.capital;
        
        // console.log(cardTitle, capital);
        // let currancy = country.currencies[0];
        // console.log(currancy);
        if(typeof capital != 'undefined'){
            let tr = document.createElement('tr');
            tr.innerHTML = `
            <th scope="row">${serialNo}</th>
            <td><a href='#' onclick="countryDetail('${country?.name}')">${country?.name}</a></td>
                        <td>${country?.capital}</td>
                        <td>${country?.currencies[0].name}</td>
            `;
            document.getElementById('country-table').appendChild(tr);
            serialNo++;
        }
        
    }
}

let countryDetail = countryName =>{
    console.log(countryName);
    let url = `https://restcountries.com/v2/name/${ countryName}`;

    const callCountryApi = ()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data => countryDetail(data))
    }
    callCountryApi();

    const countryDetail = (countries)=>{
        // console.log(country.languages);
        for(let country of countries){
            document.getElementById('country-flag').src = country.flags.svg;
            document.getElementById('country-name').innerHTML= country.name;
            document.getElementById('country-capital').innerHTML = country.capital;
            
            document.getElementById('currancy').innerHTML = country.currencies[0].name;
            document.getElementById('languages').innerHTML = country.languages[0].name;
            document.getElementById('population').innerHTML =  country.population;
            document.getElementById('time-zone').innerHTML =country.timezones[0];
            document.getElementById('region').innerHTML = country.region;
            document.getElementById('description').innerHTML = country.name;
            // console.log(country.flags.svg);
            console.log(country.currencies[0].name);
        }
        
    }

}