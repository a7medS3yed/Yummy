import {  getAreasDetalis, getCategorioyDetalis, getIngredientsDetalis, getMealsDetailes } from "./getApis.module.js";


// -----------------------------------categories----------------------------------------

export let displayCategories = (arrays) => {
    let cartona = '';
    for (let i = 0; i < arrays.length; i++) {
        cartona += `<div class="col-md-3 text-center">
                    <div class="image-container position-relative p-2" data-category ="${arrays[i].strCategory}" >
                        <img src="${arrays[i].strCategoryThumb}" alt="${arrays[i].strCategory}" class="w-100 rounded-5 ">
                        <div class="img-cover text-center">
                            <h2 class="h4">${arrays[i].strCategory}</h2>
                            <p class="desc">${arrays[i].strCategoryDescription}</p>
                        </div>
                    </div>
                </div>`;
    }
    $('#rowCategory').html(cartona)
    $('#rowCategory .image-container').on('click', function() {
        let category = this.getAttribute('data-category');
        document.querySelector('#rowCategory').classList.add('d-none');
        getCategorioyDetalis(category);
    });
}


export let diplayCategoryDetalis = (arr) => {
    let cartona = '';
    for(let i = 0;i<arr.length; i++){
        cartona += `<div class="col-md-3 ">
                    <div class="image-container position-relative p-3" data-category ="${arr[i].idMeal}">
                        <img src="${arr[i].strMealThumb}" alt="${arr[i].strMeal}" class="w-100 rounded-2 ">
                        <div class="img-cover rounded-2 d-flex align-items-center ">
                            <h2 class="h4">${arr[i].strMeal}</h2>
                        </div>
                    </div>
                </div>`;
    }
    $('#rowCategoryDetalis').html(cartona);
    $('#rowCategoryDetalis .image-container').on('click', function() {
        let category = this.getAttribute('data-category');
        document.querySelector('#rowCategoryDetalis').classList.add('d-none');
        getMealsDetailes(category);
    });
}

// -----------------------------------end categories----------------------------------------




export let displayMealDetalis = (arr) =>{
    let cartona = `<div class="part1 w-50 d-block px-5">
                    <img src="${arr[0].strMealThumb}" alt="" class="w-100 rounded-4 d-block">
                    <h2>${arr[0].strMeal}</h2>
                </div>
                <div class="part2 w-50 p-2">
                    <h3>Instructions</h3>
                    <p>${arr[0].strInstructions}</p>
                    <h3>Area: ${arr[0].strArea}</h3>
                    <h3>Category: ${arr[0].strCategory}</h3>
                    <h3 class="mb-3">Recipes: </h3>
                            <div class=" my-3">
                            <span class="bg-info d-inline-block p-1 m-1 rounded-2 ">${arr[0].strIngredient1}</span>
                            <span class="bg-info d-inline-block p-1 m-1 rounded-2 ">${arr[0].strIngredient2}</span>
                            <span class="bg-info d-inline-block p-1 m-1 rounded-2 ">${arr[0].strIngredient3}</span>
                            <span class="bg-info d-inline-block p-1 m-1 rounded-2 ">${arr[0].strIngredient4}</span>
                            <span class="bg-info d-inline-block p-1 m-1 rounded-2 ">${arr[0].strIngredient5}</span>
                            <span class="bg-info d-inline-block p-1 m-1 rounded-2 ">${arr[0].strIngredient6}</span>
                            <span class="bg-info d-inline-block p-1 m-1 rounded-2 ">${arr[0].strIngredient7}</span>
                            </div>
                    <h3 class="my-4">Tags: </h3>
                    <a href="https://www.allrecipes.com/recipe/138131/bigos-hunters-stew/"class="btn btn-success">Source</a>
                    <a href="${arr[0].strYoutube}"class="btn btn-danger">Youtube</a>

                </div>`;

                $('#rowMealsDetalis').html(cartona);

}


export let displayAreas = (arr) =>{
    let cartona = '';
    for(let i = 0;i<arr.length;i++){
        cartona += `<div class="col-md-3">
                    <div class="innerArea text-center" data-category ="${arr[i].strArea}">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${arr[i].strArea}</h3>
                    </div>
                </div>`
    }
    $('#rowAreas').html(cartona);
    $('#rowAreas .innerArea ').on('click', function() {
        let category = this.getAttribute('data-category');
        document.querySelector('#rowAreas').classList.add('d-none');
        getAreasDetalis(category);
    });
}

export let diplayAreasDetalis = (arr) => {
    let cartona = '';
    for(let i = 0;i<arr.length; i++){
        cartona += `<div class="col-md-3 ">
                    <div class="image-container position-relative p-3" data-category ="${arr[i].idMeal}">
                        <img src="${arr[i].strMealThumb}" alt="${arr[i].strMeal}" class="w-100 rounded-2 ">
                        <div class="img-cover rounded-2 d-flex align-items-center ">
                            <h2 class="h4">${arr[i].strMeal}</h2>
                        </div>
                    </div>
                </div>`;
    }
    $('#rowAreasDetalis').html(cartona);
    $('#rowAreasDetalis .image-container').on('click', function() {
        let category = this.getAttribute('data-category');
        document.querySelector('#rowAreasDetalis').classList.add('d-none');
        getMealsDetailes(category);
    });
}



// ----------------------------------------Ingredients-----------------------------------------------

    export let displayIngredients = (arr) => {
        let cartona = '';
        let partStr = '';
        for(let i = 0;i<20;i++){
             partStr = arr[i].strDescription.slice(0,100);
            cartona += `<div class="col-md-3 p-2">
                    <div class="innerIngerdients text-white text-center "data-category ="${arr[i].strIngredient}">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${arr[i].strIngredient}</h3>
                        <p>${partStr}</p>
                    </div>
                </div>`;
        }
        $('#rowIngredients').html(cartona);
        $('#rowIngredients .innerIngerdients ').on('click', function() {
            let category = this.getAttribute('data-category');
            document.querySelector('#rowIngredients').classList.add('d-none');
            getIngredientsDetalis(category);
        });
    }

    export let diplayIngredientsDetalis = (arr) => {
        let cartona = '';
        for(let i = 0;i<arr.length; i++){
            cartona += `<div class="col-md-3 ">
                        <div class="image-container position-relative p-3" data-category ="${arr[i].idMeal}">
                            <img src="${arr[i].strMealThumb}" alt="${arr[i].strMeal}" class="w-100 rounded-2 ">
                            <div class="img-cover rounded-2 d-flex align-items-center ">
                                <h2 class="h4">${arr[i].strMeal}</h2>
                            </div>
                        </div>
                    </div>`;
        }
        $('#rowngredientsDetalis').html(cartona);
        $('#rowngredientsDetalis .image-container').on('click', function() {
            let category = this.getAttribute('data-category');
            document.querySelector('#rowngredientsDetalis').classList.add('d-none');
            getMealsDetailes(category);
        });
    }

// ----------------------------------------End Ingredients-----------------------------------------------



// ---------------------------------search----------------------------------------------


    export let diplaySearch = (arr)=>{
        let cartona = '';
    for(let i = 0;i<arr.length; i++){
        cartona += `<div class="col-md-3 ">
                    <div class="image-container position-relative p-3" data-category ="${arr[i].idMeal}">
                        <img src="${arr[i].strMealThumb}" alt="${arr[i].strMeal}" class="w-100 rounded-2 ">
                        <div class="img-cover rounded-2 d-flex align-items-center ">
                            <h2 class="h4">${arr[i].strMeal}</h2>
                        </div>
                    </div>
                </div>`;
    }
    $('#restult').html(cartona);
    // $('#rowAreasDetalis .image-container').on('click', function() {
    //     let category = this.getAttribute('data-category');
    //     // document.querySelector('#rowAreasDetalis').classList.add('d-none');
    //     getMealsDetailes(category);
    // });
        

    }

// ---------------------------------End search------------------------------------------
    



