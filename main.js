const btn = document.querySelector('.search-btn')
const input = document.getElementById('search-input')
const id = 'de35f7b7'
const container = document.querySelector('.info-list')

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

    let resultspage = document.querySelector('.result-page');
    resultspage.style.display = "grid";
    
    let info = await fetchRecipe()
    const array = info.hits;
    const recipesList = array.map(function (recipe){
        console.log(recipe.recipe.url);
        return `<div class="info-box">
        <img class="info-left" src="${recipe.recipe.images.REGULAR.url}" alt="food picture">
        <div class="info-middle">
          <div class="recipe-name">${recipe.recipe.label}</div>
          <div class="recipe-short-description">${recipe.recipe.ingredientLines.map(item => {return `</br></br>` + item })}</div>
          <div class="link">
          </br>
            <a href="${recipe.recipe.url}" style="color:#55a630ff; text-decoration: none">Click for Instructions</a>
          </div>
        </div>
        <div class="info-right">
        ${recipe.recipe?.dietLabels[0] ? `<div>${recipe.recipe.dietLabels[0]}</div>` : "`</br> "}
        <div>${recipe.recipe.calories.toString().substring(0,5)}kcal</div>
        </div>
        </div>`
      
    })
    let showRecipes = recipesList.join(' ')
    container.innerHTML = showRecipes;

}

btn.addEventListener('click', handleRecipeClick)



