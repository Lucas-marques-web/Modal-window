'use strict';
// the queryselector below selects all the elements 
const btnOpenModal = document.querySelectorAll('.show-modal'); 
// the normal queryselector selects only the first 
const modal = document.querySelector('.modal ');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const  newModal = document.querySelector('.newModal')
const newCloseModal =document.querySelector('.newclose-modal')


function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
}
function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
function newOpen(){
    newModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function newClose(){
    newModal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//the code below creates a loop to go through the buttons  and
// there is an addEventListener on click to when the button be clicked 
// it calls a function that remove the class hidden of html
for(let i =0 ; i < btnOpenModal.length ; i++){
    if(i==0){
    btnOpenModal[i].addEventListener('click',openModal);
    }
    else if(i==1){
        btnOpenModal[i].addEventListener('click',newOpen)
    }/*else {
        btnOpenModal[i].addEventListener('click',openModal);
    }*/
    
}
document.addEventListener('keydown',function(e){
   // console.log(e.key)
   if(e.key==='Escape'){
        if(!modal.classList.contains("hidden")){
            closeModal();
        }
        else if(!newModal.classList.contains('hidden')){
            newClose();
        }    
    }
})
btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

newCloseModal.addEventListener('click',newClose);
overlay.addEventListener('click',newClose);


