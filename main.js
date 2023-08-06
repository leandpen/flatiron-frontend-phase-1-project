console.log('main.js connected');

const searchTermsInputs = document.body.querySelector("#search-terms");

const getMealCatagories = async () =>{
const mealCatagoriesApiURL ="https://www.themealdb.com/api/json/v1/1/categories.php"

const response = await fetch(mealCatagoriesApiURL)

console.log(response)
}

const handleFormInputFocus = async () => {
    console.log('focus occurred');

await    getMealCatagories();
};

document.body.addEventListener('focus', handleFormInputFocus);