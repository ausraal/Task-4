/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
window.addEventListener("load", () => {
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => outputData(data))
    .catch (error => console.log(error)); 
    
    function outputData (data) {
        // let outputCard = " ";
            data.forEach (car => {
            car => car.models.split(", ");
            console.log(car);
            let allCar = car.models.join(", ");          
            let outputCard = document.createElement("div");
            let outputCardText = document.createElement("p");
            outputCard.style.width = "350px";
            outputCard.style.height = "300px";
            outputCard.style.display = "inline-flex";
            outputCard.style.margin = "2px";
            outputCard.style.whiteSpace = "pre-wrap";
            outputCard.style.textAlign = "left";
            outputCardText.style.padding = "10px";

            outputCard.style.backgroundColor = "lightblue";
            outputCardText.textContent = `Brand: "${car.brand}".
Models: ${allCar}`;
            let output = document.querySelector("#output");
            outputCard.append(outputCardText);
            output.append (outputCard);
        })
    }
})
