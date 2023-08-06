console.log('main.js connected');

const searchTermsInputs = document.body.querySelector("#search-terms");


//fetch meal categories data from TheMealBD API
const getMealCatagories = async () =>{
    const mealCatagoriesApiURL ="https://www.themealdb.com/api/json/v1/1/categories.php"

try {
    const response = await fetch(mealCatagoriesApiURL)
    const data = await response.json()
    const catagories = data.catagories 
    console.log('catagories: ' , catagories);
}   catch (error) {
    console.log(error)
    alert('Something went wrong, try again later');
    }

};

// render meal catagories data to dom
const renderMealCatagories = (mealCatagoriesObj) => {
    console.log('renderMealCatagories');
    console.table('focus ocurred');

    //find and select a dom element to append my data into

   // for each element in our meal catagories array 
  //create a wrapping element maybe <article> class of card 
  //append the article,card to DOM 
  //display the catagory name, image, and description
  //image
  // create an img element
  //set img src to catagory thumbail url
  //give it a mobile friendly max width of like 300px
  //name
  //create an h4 element
  // set h4 element textContent to be meal catagory name
};

// funtion to call when form inputs is given focus
const handleFormInputFocus = async () => {
    console.log('focus occurred');

    const mealCatagoriesObj =await getMealCatagories();
    renderMealCatagories('mealCategoriesObj');
};

//add event listener to search term input
document.body.addEventListener('focus', handleFormInputFocus);
