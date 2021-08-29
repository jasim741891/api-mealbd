// button control and input add work-01
const searchFood = () => {
    // console.log('click')
    const searchField = document.getElementById('search-field');
    // console.log(searchField);
    const searchText = searchField.value;
    // console.log(searchText)
    searchField.value = '';
    // console.log('paoa gache')


    // sodo add korlia hobye na data naiye dynamict korta hobye work-02

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}
// eake dekita hobye work-03

const displaySearchResult = meals => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result')
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick = "loadMealDetail(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                </div>
        </div>

        `
        searchResult.appendChild(div)
    })
}
// image er modye click karale kecho dekibia work-04
const loadMealDetail = mealId => {
    // console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))

}
// work-04 ke display korta habye work-5
const displayMealDetail = meal => {
    // console.log(meal)
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
        `
    mealDetails.appendChild(div)
}