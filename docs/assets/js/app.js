const modal = document.querySelector('.modal');
const body = document.querySelector('body');

window.addEventListener('load', function(){

    setTimeout(function() {
        modal.style.display = 'block';
    }, 5000);
    
    setTimeout(function() {
        modal.style.display = 'none';
    }, 15000);
})
body.addEventListener('click', function(){
    modal.style.display = 'none';
})