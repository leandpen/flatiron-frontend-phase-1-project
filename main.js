console.log('main.js connected');

const searchTermsInputs = document.body.querySelector("#search-terms");

const getMealCatagories = async () =>{
const mealCatagoriesApiURL ="https://www.themealdb.com/api/json/v1/1/categories.php"

fetch(mealCatagoriesApiURL)
}
const handleFormInputFocus = () => {
console.log('focus occurred');

getMealCategories();
};

document.body.addEventListener('focus', handleFormInputFocus);