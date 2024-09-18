import * as MODEL from "../model/model.js";

function initListeners() {
  $("button").on("click", (e) => {
    let btnID = e.currentTarget.id;
    let recipeURL = `https://www.themealdb.com/api/json/v1/1/${btnID}.php`;

      MODEL.getRecipe(recipeURL);
    });
}

function initCategory() {
  MODEL.getCategories();
}

$(document).ready(function () {
  initCategory();
  initListeners();
});
