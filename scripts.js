const Button = document.querySelector(".convert-button")
const Select = document.querySelector(".select-currency")
const SelectMain = document.querySelector(".select-main")
const currencyToconvert = document.querySelector(".currency-to-convert")
const currencyConverted = document.querySelector(".currency-converted")

function convertValues() {

    const currencyvalues = document.querySelector(".input-currency").value
    
    console.log(Select.value)
    
    const dolarToday = 4.90
    const euroToday = 5.38
    const libraToday = 6.22
    const bitcoinToday = 210000
    const realToday = 1

   //configuração do dólar para CADA moeda, a conta precisará ser diferente
    if (Select.value =="dolar" && SelectMain.value=="dolar"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US",{style:"currency", currency:"USD"}).format(currencyvalues)}
    
    if (Select.value=="euro" && SelectMain.value=="dolar"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"EUR"}).format(currencyvalues * 0.913)}//valor do input multiplicado pelo valor que cada dolar equivale ao euro
    
    if (Select.value=="libra" && SelectMain.value=="dolar"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB",{style:"currency", currency:"GBP"}).format(currencyvalues * 0.788)}

    if (Select.value=="real" && SelectMain.value=="dolar"){
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR",{style:"currency", currency:"BRL"}).format(currencyvalues * 0.204)}
    
    if (Select.value=="bitcoin" && SelectMain.value=="dolar"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"BTC"}).format(currencyvalues/44419.6)}

    //configuração do euro para CADA moeda, a conta precisará ser diferente
    if (Select.value == "euro" && SelectMain.value=="euro"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"EUR"}).format(currencyvalues)}
 
    if (Select.value=="dolar" && SelectMain.value=="euro"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"EUR"}).format(currencyvalues*1.094)}

    if (Select.value=="libra" && SelectMain.value=="euro"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB",{style:"currency", currency:"GBP"}).format(currencyvalues*0.863)}     

    if (Select.value=="real" && SelectMain.value=="euro"){
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR",{style:"currency", currency:"BRL"}).format(currencyvalues*5.36)}

    if (Select.value=="bitcoin" && SelectMain.value=="euro"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"BTC"}).format(currencyvalues*0.000024)}

//configuração da libra para CADA moeda, a conta precisará ser diferente
    if (Select.value == "libra" && SelectMain.value=="libra"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB",{style: "currency", currency:"GBP"}).format(currencyvalues)}

    if (Select.value=="dolar" && SelectMain.value=="libra"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US",{style:"currency", currency:"USD"}).format(currencyvalues*1.268)}

    if (Select.value=="euro" && SelectMain.value=="libra"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"EUR"}).format(currencyvalues*1.158)}

    if (Select.value=="real" && SelectMain.value=="libra"){
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR",{style:"currency", currency:"BRL"}).format(currencyvalues*6.211)}

    if (Select.value=="bitcoin" && SelectMain.value=="libra"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"BTC"}).format(currencyvalues*0.000028)}

//configuração da libra para CADA moeda, a conta precisará ser diferente    
    if (Select.value =="bitcoin" && SelectMain.value=="bitcoin"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"BTC"}).format(currencyvalues)}
    
    if (Select.value=="dolar" && SelectMain.value=="bitcoin"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US",{style:"currency", currency:"USD"}).format(currencyvalues*44576)}

    if (Select.value=="euro" && SelectMain.value=="bitcoin"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"EUR"}).format(currencyvalues*40707)}

    if (Select.value=="libra" && SelectMain.value=="bitcoin"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB",{style:"currency", currency:"GBP"}).format(currencyvalues*35143)}
    
    if (Select.value=="real" && SelectMain.value=="bitcoin"){
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR",{style:"currency", currency:"BRL"}).format(currencyvalues*218374)}

//configuração do REAL para CADA moeda, a conta precisará ser diferente
    if (Select.value =="real" && SelectMain.value=="real"){
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR",{style:"currency", currency:"BRL"}).format(currencyvalues)}
        
    if (Select.value=="dolar" && SelectMain.value=="real"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US",{style:"currency", currency:"USD"}).format(currencyvalues/dolarToday)}

    if (Select.value=="euro" && SelectMain.value=="real"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"EUR"}).format(currencyvalues/euroToday)}

    if (Select.value=="libra" && SelectMain.value=="real"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB",{style:"currency", currency:"GBP"}).format(currencyvalues/libraToday)}
    
    if (Select.value=="bitcoin" && SelectMain.value=="real"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"BTC"}).format(currencyvalues/bitcoinToday)}
        
//Formatação dos valores (CURRENCY TO CONVERT) ao trocar as opções do SELECT MAIN
        if (SelectMain.value=="dolar"){currencyToconvert.innerHTML = new Intl.NumberFormat("en-US",{style:"currency", currency:"USD"}).format(currencyvalues)}
        if (SelectMain.value=="euro"){currencyToconvert.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"EUR"}).format(currencyvalues)}
        if (SelectMain.value=="libra"){currencyToconvert.innerHTML = new Intl.NumberFormat("en-GB",{style:"currency", currency:"GBP"}).format(currencyvalues)}
        if (SelectMain.value=="bitcoin"){currencyToconvert.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"BTC"}).format(currencyvalues)}
        if (SelectMain.value=="real"){currencyToconvert.innerHTML = new Intl.NumberFormat("pt-BR",{style:"currency", currency:"BRL"}).format(currencyvalues)}
}

function currencyChange(){
    const currencyName = document.getElementById("currency-name")
    const changedImg = document.querySelector(".img-changed")
   
   
    if (Select.value =="dolar"){
        currencyName.innerHTML=("Dólar Americano")
        changedImg.src = "./assets/usa.png"
        
    }

    if (Select.value =="euro"){
        currencyName.innerHTML=("Euro")
        changedImg.src = "./assets/euro.png" 
    }

    if (Select.value =="libra"){
        currencyName.innerHTML=("Libra")
        changedImg.src = "./assets/libra.png" 
    }

    if (Select.value =="bitcoin"){
        currencyName.innerHTML=("Bitcoin")
        changedImg.src = "./assets/bitcoin.png" 
    }
    
    if (Select.value =="real"){
        currencyName.innerHTML=("Real")
        changedImg.src = "./assets/brasil 2.png"
    }

    convertValues()
}


function selectMain(){
    const nameMain = document.getElementById("currency-name-main")
    const logoMain = document.querySelector(".logo-currency-main")
   
    if (SelectMain.value == "dolar"){
        nameMain.innerHTML=("Dólar Americano")
        logoMain.src=("./assets/usa.png")} 

    if (SelectMain.value =="euro"){
        nameMain.innerHTML=("Euro")
        logoMain.src=("./assets/euro.png")}
    
    if (SelectMain.value == "libra"){
        nameMain.innerHTML=("Libra")
        logoMain.src=("./assets/libra.png")}

    if (SelectMain.value =="bitcoin"){
        nameMain.innerHTML=("Bitcoin")
        logoMain.src=("./assets/bitcoin.png")}

    if (SelectMain.value=="real"){
        nameMain.innerHTML=("Real")
        logoMain.src=("./assets/brasil 2.png")}
    convertValues()
}

SelectMain.addEventListener("change",selectMain)
Select.addEventListener("change",currencyChange)
Button.addEventListener("click", convertValues)