let converter = document.querySelector("#converter")

let convertButton = document.querySelector(".convertButton")

let resetButton = document.querySelector(".resetButton")

let changeButton = document.querySelector(".changeButton")

let result = document.querySelector(".result")

let C = document.querySelector(".C")

let F = document.querySelector(".F")

let converterValue = converter.value

converter.value = converterValue.trim()

convertButton.addEventListener("click" , function () {
    if (isNaN(converter.value) ||converter.value === "") {
        result.innerHTML = ""
        result.innerHTML = "write correct value"
        result.style.color = "red"
    }   else {
        result.innerHTML = ""
        result.style.color = "green"
        if (converter.placeholder == "°C") {
            let CtoF = (converter.value * 1.8) + 32
            result.innerHTML = CtoF.toFixed(2)
        }   else {
            let FtoC = ((converter.value - 32) * 5) / 9
            result.innerHTML = FtoC.toFixed(2)
        }
    }
})

resetButton.addEventListener("click" , function () {
    result.innerHTML = ""
    converter.value = ""
})

changeButton.addEventListener("click" , function () {
    if (converter.placeholder == "°C") {
        C.innerHTML = "°F"
        F.innerHTML = "°C"
        document.title = "SalzLearn| Js | °F to °C"
        converter.placeholder = "°F"
    }   else {
        C.innerHTML = "°C"
        F.innerHTML = "°F"
        document.title = "SalzLearn| Js | °C to °F"
        converter.placeholder = "°C"
    }
})