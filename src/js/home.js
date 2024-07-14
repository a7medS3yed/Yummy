/// <reference types="../../@types/jquery" />

import {  getAreas, getCategories, getIngredients, getSearch } from "./getApis.module.js";
import { slidBar } from "./slidebar.module.js";
import {  validationInput } from "./validation.module.js";




$(function(){
    $('.loader').fadeOut(1000,function(){
        $('.load').fadeOut(1000);
    })
    
})


slidBar();
$('#slide-bar .slide-items #categories').on('click', function(){
    
    $('#category').removeClass('d-none');
    $('#search').addClass('d-none');
    $('#contact').addClass('d-none');
    $('#area').addClass('d-none');
    $('#ingredient').addClass('d-none');
    getCategories();
})
$('#slide-bar .slide-items #areas').on('click', function(){

    $('#area').removeClass('d-none');
    $('#search').addClass('d-none');
    $('#contact').addClass('d-none');
    $('#category').addClass('d-none');
    $('#ingredient').addClass('d-none');
    getAreas();
})
$('#slide-bar .slide-items #ingredients').on('click', function(){
    $('#ingredient').removeClass('d-none');
    $('#search').addClass('d-none');
    $('#contact').addClass('d-none');
    $('#category').addClass('d-none');
    $('#area').addClass('d-none');
   
    getIngredients();
})
$('#slide-bar .slide-items #contacts').on('click', function(){

    let inputs = document.querySelectorAll('.form-control');
    
   
   
    $('#contact').removeClass('d-none');
    $('#search').addClass('d-none');
    $('#category').addClass('d-none');
    $('#area').addClass('d-none');
    $('#ingredient').addClass('d-none');
    
    for(let i = 0;i<inputs.length;i++){
        inputs[i].addEventListener('keyup',function(){
            validationInput(this)
        })
    }
    let cont = 0;
    for(let i = 0;i<inputs.length;i++){
        if(inputs[i].nextElementSibling.classList.contains('alert-danger')){
            return false
        }
        else{
            cont++;
        }

    }
    if(cont === 6){
        $('.btn .btn-danger').removeClass(
            'disabled'
        )
    }

    

    
})
$('#slide-bar .slide-items #searchs').on('click', function(){

    $('#search').removeClass('d-none');
    $('#ingredient').addClass('d-none');
    $('#contact').addClass('d-none');
    $('#category').addClass('d-none');
    $('#area').addClass('d-none');

   $('#searchInp').on('input', function(){
    let x = $(this).val();
    getSearch(x);
   })
   $('#searchFInp').on('input', function(){
    let inputValue = $(this).val();
    getSearch(inputValue);
   })

})

