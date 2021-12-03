const btn = document.querySelector('.search-btn')
const input = document.getElementById('search-input')
const id = 'de35f7b7'

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
    console.log(info);
}

btn.addEventListener('click', handleRecipeClick)
