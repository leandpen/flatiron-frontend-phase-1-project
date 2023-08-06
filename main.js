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
        const mealCategoryImg = document.createElement('img')
            //set img src to catagory thumbail url
            mealCategoryImg.scr = mealcategory.thumbnail
            //give it a mobile friendly max width of like 300px
            mealCategoryImg.width = 300
            //appendChild the image to our card
            mealCategoryListItem.appendChild(mealcategoryName);
        //name
        //create an h4 element
        const mealCategoryName = document.createElement('h4')
            // set h4 element textContent to be meal catagory name
            mealCategoryName.textContent = mealCategory.name
            //appendChild the h4 to our card
            mealCategoryListItem.appendChild(mealcategoryName);

        //description
        //create an p element
        const mealCategoryDescription = document.createElement('p')
            // set p element textContent to be meal catagory description
            mealCategoryDescription.textContent = mealCategory.description
            //appendChild the p to our card
            mealCategoryListItem.appendChild(mealCategoryListItem)
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
