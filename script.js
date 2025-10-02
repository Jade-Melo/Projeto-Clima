document.querySelector('.busca').addEventListener('submit', async(event)=>{
    event.preventDefault()

    let input = document.querySelector('#searchInput').value

    console.log(input)

    if(input !== ""){
        showWarning("Carregando...")

        let results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ encodeURI (input) }
        &appid=b0724cd1b2de128424ddda8f57f3a966&units=metrics&lang=pt_br`);
        let json = await results.json();

        if(json.cod == 200){
            showInfo({
                name:json.name,
                country:json.sys.country,
                temp:json.main.temp,
                tempIcon:json.weather[0].icon,
                windSpedd:json.wind.speed,
                windAngle:json.wind.deg
            })
        }else{
            showWarning("Não encontramos essa localização...")
        }

    }else{

    }
})

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
    document.querySelector('.resultado').style.display = 'block'
}

function showInfo(json){
    showWarning("")
}