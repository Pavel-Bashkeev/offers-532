window.addEventListener('DOMContentLoaded', () =>{
  $('.slider-inner').slick({
    arrows: false,
    dots: true,
    infinite: false
  });

  const sliderItem = document.querySelectorAll('.slick-slide');
  const dotsList = document.querySelector('.slick-dots');
  sliderItem.forEach(item => {
    let indexSlide = item.getAttribute('data-slick-index');
    console.log(indexSlide);
    console.log(typeof(indexSlide))
    console.log(indexSlide === '0');
    if(indexSlide === '0' && item.classList.contains('slick-current')){
      console.log('eas')
      dotsList.classList.add('first-item-slick');
    }else{
      dotsList.classList.remove('first-item-slick');
      console.log('no')
    }
  })
  
})