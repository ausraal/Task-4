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
            data.forEach (car => {
            car => car.models.split(", ");
            console.log(car);
            let allCar = car.models.join(", ");          
            let outputCard = document.createElement("div");
            let outputCardText = document.createElement("p");
            Object.assign (outputCard.style, {
            width:"350px",
            height:"300px",
            display: "inline-flex",
            margin: "2px",
            whiteSpace: "pre-wrap",
            textAlign:"left",
            backgroundColor: "lightblue"    
            })
            outputCardText.style.padding = "10px";
            outputCardText.textContent = `Brand: "${car.brand}".
Models: ${allCar}`;
            let output = document.querySelector("#output");
            outputCard.append(outputCardText);
            output.append (outputCard);
        })
    }
})
