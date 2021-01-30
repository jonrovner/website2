const codingCard = document.querySelector('.coding');
const codingWorks = document.querySelector('.works');

codingCard.addEventListener('click', function(){
    if (codingWorks.classList.contains('hidden')){
        codingWorks.classList.remove('hidden')
    }  else {
        codingWorks.classList.add('hidden')
    }

})