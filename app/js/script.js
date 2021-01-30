const codingCard = document.querySelector('.coding');
const codingWorks = document.querySelector('.works');
const cardContent = document.querySelector('.cardContent');

codingCard.addEventListener('click', function(){
    if (codingWorks.classList.contains('hidden')){
        cardContent.classList.add('hidden');
        codingWorks.classList.remove('hidden')
    }  else {
        codingWorks.classList.add('hidden')
        cardContent.classList.remove('hidden')
    }

})