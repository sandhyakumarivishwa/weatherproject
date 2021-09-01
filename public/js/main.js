const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp= document.getElementById('temp');
const temp_status= document.getElementById('temp_status');

const getInfo=async(event)=>{
    event.preventDefault();
   let cityVal=cityName.value;


    if(cityVal=== ""){
   city_name.innerText=`plz write city name `;
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=dfaccb447aa595edb597bc22f4381e6c`;
        
            const response=await fetch(url);
            
            const data=await response.json();
            const arrData=[data];

            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText=arrData[0].main.temp;
            // temp_status.innerText=arrData[0].weather[0].main;

            const tempMood=arrData[0].weather[0].main;

            // condition to check sunny or cloudy

            if(tempMood=="Clear")
            {
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#ccc68;'></i>"
            }
            else if(tempMood=="Clouds")
            {
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#fff;'></i>"
            }
            else if(tempMood=="rain")
            {
                temp_status.innerHTML="<i class='fas cloud-rain' style='color:#fff;'></i>"
            }
            else{
                temp_status.innerHTML="<i class='fas fa-sun' style='color:yellow;'></i>"
            }
        }
        catch{
            city_name.innerText=`plz write city name properly`;
        }
       
  
    }
}
submitBtn.addEventListener('click' , getInfo);