export function getRandomRecipe() {
  let recipeURL = "https://www.themealdb.com/api/json/v1/1/random.php";

  $.getJSON(recipeURL, (data) => {
    console.log(data)
  }).fail((error) => {
    console.log("error", error.message)
  });
}

export function getCategories() {
  let categoryURL = "https://www.themealdb.com/api/json/v1/1/categories.php"
  
  $.getJSON(categoryURL, (data) => {
    console.log(data)
    $.each(data.categories, (idx, category) => {
      $("#categories").append(` <option value="${category.strCategory}">${category.strCategory}</option>`)
    });
  }).fail((error) => {
    console.log("error", error.message)
  });
}

export function getRecipe(url){
  $.getJSON(url, (data) => {
    console.log(data)
  }).fail((error) => {
    console.log("error", error.message)
  });
}
export function getRecipeByFirstLetter() {}
