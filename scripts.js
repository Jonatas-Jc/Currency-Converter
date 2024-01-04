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
    const bitcoinToday = 210.000
    const realToday = 1

    if (Select.value =="dolar"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US",{style:"currency", currency:"USD"}).format(currencyvalues / dolarToday)
        }

    if (Select.value == "euro"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {style:"currency", currency:"EUR"}).format(currencyvalues / euroToday)
        }
    
        if (Select.value == "libra"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB",{style: "currency", currency:"GBP"}).format(currencyvalues/libraToday)
        }

    if (Select.value =="bitcoin"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",{style:"currency", currency:"BTC"}).format(currencyvalues/bitcoinToday)
        }

    if (Select.value =="real"){
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR",{style:"currency", currency:"BRL"}).format(currencyvalues/realToday)
        }
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
        logoMain.src=("./assets/usa.png")
        
    }
    
    if (SelectMain.value =="euro"){
        nameMain.innerHTML=("Euro")
        logoMain.src=("./assets/euro.png")
    
    }
    
    
    if (SelectMain.value == "libra"){
        nameMain.innerHTML=("Libra")
        logoMain.src=("./assets/libra.png")
        
    }

    
    if (SelectMain.value =="bitcoin"){
        nameMain.innerHTML=("Bitcoin")
        logoMain.src=("./assets/bitcoin.png")
        
    }

    
    if (SelectMain.value=="real"){
        nameMain.innerHTML=("Real")
        logoMain.src=("./assets/brasil 2.png")
        
    }
    convertValues()
}


SelectMain.addEventListener("change",selectMain)
Select.addEventListener("change",currencyChange)
Button.addEventListener("click", convertValues)