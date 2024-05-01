const Button = document.querySelector(".convert-button")
const Select = document.querySelector(".select-currency")
const SelectMain = document.querySelector(".select-main")
const currencyToconvert = document.querySelector(".currency-to-convert")
const currencyConverted = document.querySelector(".currency-converted")

async function convertValues() {
    const currencyvalues = document.querySelector(".input-currency").value
    console.log(Select.value)
    
 const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    
    const dolarToday = data.USDBRL.high;
    const euroToday = data.EURBRL.high;
    const bitcoinToday = data.BTCBRL.high;

//configuração do REAL para CADA moeda, a conta precisará ser diferente
    if (SelectMain.value=="real" && Select.value=="dolar"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US",{style:"currency", currency:"USD"}).format(currencyvalues*dolarToday)}

    if (SelectMain.value=="real" && Select.value=="euro"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"EUR"}).format(currencyvalues*euroToday)}

    if (SelectMain.value=="real" && Select.value=="bitcoin"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"BTC"}).format(currencyvalues*bitcoinToday)}
        
//Formatação dos valores SELECT MAIN
    if (SelectMain.value=="real"){currencyToconvert.innerHTML = new Intl.NumberFormat("pt-BR",{style:"currency", currency:"BRL"}).format(currencyvalues)}
}

// Troca de bandeiras ao trocar os valores do Select-Currency
function currencyChange(){
    const currencyName = document.getElementById("currency-name")
    const changedImg = document.querySelector(".img-changed")
   
    const nameMain = document.getElementById("currency-name-main")
    const logoMain = document.querySelector(".logo-currency-main")
   
    if (SelectMain.value=="real"){
        nameMain.innerHTML=("Real")
        logoMain.src=("./assets/brasil 2.png")}

    if (Select.value =="dolar"){
        currencyName.innerHTML=("Dólar Americano")
        changedImg.src = "./assets/usa.png"
    }

    if (Select.value =="euro"){
        currencyName.innerHTML=("Euro")
        changedImg.src = "./assets/euro.png" 
    }

    if (Select.value =="bitcoin"){
        currencyName.innerHTML=("Bitcoin")
        changedImg.src = "./assets/bitcoin.png" 
    }
    
    convertValues()
}