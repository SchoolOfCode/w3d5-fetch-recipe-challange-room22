
const btn = document.querySelector('.search-btn')
const input = document.getElementById('search-input')
const id = 'de35f7b7'
const container = document.querySelector('.info-box')

async function fetchRecipe() {
    let food = handleInputChange();
    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=de35f7b7&app_key=7c5f3135c3604342105e090327153653&imageSize=REGULAR&random=true`
    const res = await fetch(url);
    const data = await res.json();
    return data
}

function handleInputChange() {

    let inputValue = input.value;
    return inputValue
}
async function handleRecipeClick() {
    let info = await fetchRecipe()
    const recipeArray = info.hits;
    const recipes = recipeArray.map(function (recipe){
        return 
        `<img class="info-left" src="https://via.placeholder.com/150" alt="food picture">
        <div class="info-middle">
          <div>I am pasta</div>
          <div>I am brief description I am brief description I am brief description I am brief description</div>
          <div>40min</div>
          <div>384kcal</div>
        </div>
        <div class="info-right">
          <div>reviews</div>
          <div>allergen symbol</div>
        </div>`
    })
    let showRecipes = recipes.join('')
    container.innerHTML = `${show}`
    console.log(info.hits[0].recipe.label);
}
// info.hits[0].recipe.label
btn.addEventListener('click', handleRecipeClick)


// const showItems = function (){
//     const list = array.map( function (item){
//     return <li>${item.text}</li>
//     })
// let listFinal = list.join('');
// ol.innerHTML = `${listFinal}`
// }