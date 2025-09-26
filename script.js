document.querySelector('.busca').addEventListener('submit', async(event)=>{
    event.preventDefault()

    let input = document.querySelector('#searchInput').value

    console.log(input)

    if(input !== ""){
        showWarning("Carregando...")

        let results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
        ${encodeURI(input)}&units=metric&lang=pt_br&appid=b0724cd1b2de128424ddda8f57f3a966`);
        let json = await results.json();

        if(json.cod == 200){

        }else{
            showWarning("Não encontramos essa localização...")
        }

    }else{

    }
})

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}