async function Search() {
    try {
        const city = window.document.getElementById("value").value.toLowerCase()
        
        const link = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=13ac5de8ccec4877bc03cf12a129e107&lang=pt_br&units=metric`)
        if(!link.ok) {
          throw new Error("Error no fetch, tente novamente")  
        }
        const data = await link.json()
        if (city == "") {
            alert("Put the city on the input")
        }
        const cityname = window.document.getElementById("cityname")
        const image = window.document.getElementById("image")
        const temp = window.document.getElementById("temp")
       const feels = window.document.getElementById("feels")
        const ci = data['name']
        const te = data['main']['temp']
        const fe = data['main']['feels_like']
        const main = data['weather'][0]["main"]
        cityname.textContent = ci
        temp.textContent = `${te}°C`
        feels.textContent = `${fe}°C`
        switch (main) {
            case 'Clear':
            image.src= `/images/clear.png`
            break
            case 'Rain':
            image.src = `/images/rain.png`
            break
            case 'Snow':
            image.src = `/images/snow.png`
            break
            case 'Clouds':
            image.src = `/images/clouds.png`
            default:
            image.src = `/images/clear.png`
        
        }

    }catch(error) {
        console.error("Erro", error)
    }
}
window.document.addEventListener("keydown", (event) => {
if(event.key == "Enter") {
    Search()
}
})     
