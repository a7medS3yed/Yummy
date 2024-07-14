import { diplayCategoryDetalis, displayCategories, displayMealDetalis, displayAreas, diplayAreasDetalis, displayIngredients, diplayIngredientsDetalis, diplaySearch } from "./ui.module.js";

// -----------------------------------categories----------------------------------------


export let getCategories = async () => {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    try {
        let response = await fetch(url);
        let data = await response.json();
        let categories = data.categories;
        displayCategories(categories);
    } catch (error) {
        console.log(error);
    }
}

export let getCategorioyDetalis = async (id) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`;
    try{
        let response = await fetch(url);
        let data = await response.json();
        let arr = data.meals;
        diplayCategoryDetalis(arr)
    }
    catch(error){
        console.log(error);
    }
}

// -----------------------------------end categories----------------------------------------


export let getMealsDetailes = async (id)=>{
    try{
        let url = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        let response = await url.json();
        let data = response.meals;
        displayMealDetalis(data);
    }
    catch(error){
        console.log(error);
    }
}


export let getAreas = async ()=>{
    try{
        const url = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        let response = await url.json();
        let data = response.meals;
        displayAreas(data); 

    }
    catch(error){
        console.log(error);
    }
}


export let getAreasDetalis = async (id) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        let arr = data.meals;
        if (arr) {
            diplayAreasDetalis(arr);
        } else {
            console.log('No meals found for the given area.');
        }
    } catch (error) {
        console.log(error);
    }
}


// ----------------------------------------Ingredients-----------------------------------------------

    export let getIngredients = async ()=>{
        try{
            const url = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
            let response = await url.json();
            let data = response.meals;
            displayIngredients(data);
        }
        catch(error){
            console.log(error);
        }
    }

    export let getIngredientsDetalis = async(id)=>{
        try{
            const url = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`);
            const response = await url.json();
            const data = response.meals;
            diplayIngredientsDetalis(data);
        }
        catch(error){
            console.log(error);
        }
    }

// ----------------------------------------End Ingredients-----------------------------------------------



// ----------------------------------------search-----------------------------------------------

    export let getSearch = async (id)=>{
        try{
            const url = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
            let response = await url.json();
            let data = response.meals;
            diplaySearch(data);

        }
        catch(error){
            console.log(error);
        }
    }

// ----------------------------------------End search-----------------------------------------------



export let getRandom = async ()=>{
    try{
        const url = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
        let response = await url.json();
        let data = response.meals;
        diplaySearch(data);

    }
    catch(error){
        console.log(error);
    }
}