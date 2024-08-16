window.addEventListener('DOMContentLoaded', () => {
    getVisitCount();
});


const localFunctionAPi = 'http://localhost:7071/api/GetResumeCounter';

// Çevresel değişkenleri tarayıcıda kullanmak için bir yöntem
const functionApiUrl = window.FUNCTION_API_URL || localFunctionAPi; 

const getVisitCount = () => {
    fetch(functionApi)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(response => {
            console.log("Website called function API.");
            const count = response.Count; // Değişiklik burada
            const counterElement = document.getElementById("counter");
            if (counterElement) {
                counterElement.innerText = count;
            } else {
                console.log("Element with ID 'counter' not found");
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}
