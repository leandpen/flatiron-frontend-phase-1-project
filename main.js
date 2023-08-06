console.log('main.js connected');

const searchTermsInputs = document.body.querySelector("#search-terms");

const getMealCatagories = async () =>{
const mealCatagoriesApiURL ="https://www.themealdb.com/api/json/v1/1/categories.php"

try {
    const response = await fetch(mealCatagoriesApiURL)
    const data = response.json()
    const catagories = data.catagories 
    console.log('catagories: ' , catagories);
}   catch (error) {
    console.log(error)
    alert('Something went wrong, try again later');
}

}

const handleFormInputFocus = async () => {
    console.log('focus occurred');

await    getMealCatagories();
};

document.body.addEventListener('focus', handleFormInputFocus);
