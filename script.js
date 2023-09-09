console.log('hello Akash is here');

const API_KEY ="d1845658f92b31c64bd94f06f7188c9c";

async function showWeather(){

    let city = "goa";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const data = await response.json();
    console.log("Weather data:->",data);

    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

   document.body.appendChild(newPara);  
} 

function switchTable(clickedTab) {
    apiErrorContainer.classList.remove("active");
    if(clickedTab !== currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
        if(!searchFrom.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchFrom.classList.add("active");
        } else {
            searchFrom.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        console.log("No geoLocation Support");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let long = position.coords.lengitude;

    console.log(lat);
    console.log(long);
}