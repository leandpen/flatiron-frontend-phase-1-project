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

//find and select a UL with meal catagory dom element to append my data into
const mealCatagoriesList =document.body.querySelector('#meal-categories-list')

//for each element in our meal catagories array 
mealCategoriesArray.forEach(mealCategory =>{

    // create wrapping element maybe <li> class card 
    const mealCategoryListItem = document.createElement('li')
    mealCatagoriesListItem.className = 'meal-category-card'
    //appendChild the li.card to selected DOM Element
    mealCatagoriesList.appendChild(mealCategoryListItem)

    //append the article,card to selected DOM Element
    //display the catagory name, image, and description
        //image
            // create an img element
            //set img src to catagory thumbail url
            // give class of catagory-thumbail
            //give it a mobile friendly max width of like 300px
            //appendChild the image to our card
        //name
            //create an h4 element
            // set h4 element textContent to be meal catagory name
            //appendChild the h4 to our card
        //description
            //create an p element
            // set p element textContent to be meal catagory description
            //appendChild the p to our card
        });
};

// funtion to call when form inputs is given focus
const handleFormInputFocus = async () => {
    console.log('focus occurred');

    const mealCatagoriesObj =await getMealCatagories();
    renderMealCatagories('mealCategoriesObj');
};

//add event listener to search term input
document.body.addEventListener('focus', handleFormInputFocus);
