const cardSlides=document.querySelectorAll(".card-slider__pos");
const slider=document.querySelector(".card-slider ");
const recContainer=document.querySelector(".best-seller-card__slider--container");
let curCardSlide=0;
const maxCardSlide =cardSlides.length -1 ;
slider.style.overflow="hidden";
const createRecs = ()=>{
    cardSlides.forEach((_,i)=>{
        recContainer.insertAdjacentHTML('beforeend',`<div class="best-seller-card__slider" data-slide="${i}">`)
    })
}
const activeRecs=(slide)=>{
    recContainer.querySelectorAll(".best-seller-card__slider").forEach((rec,i)=>{
        rec.classList.remove("best-seller-card__slider--active");
        if(i===slide){
            rec.classList.add("best-seller-card__slider--active");
            }
            })
}
createRecs();
cardSlides.forEach((s,i)=>{
    s.style.transform=`translateX(${i*100}%)`;
  });
  const goToSlideCard=(slide)=>{
    cardSlides.forEach((s,i)=>{
      s.style.transform=`translateX(${(i-slide)*100}%)`;
    });
  }
  goToSlideCard(0);
  activeRecs(0);

  const nextCardSlide = ()=>{
    if(curCardSlide===maxCardSlide){
      curCardSlide=0;
      }else{
    curCardSlide++;}
    goToSlideCard(curCardSlide);
    activeRecs(curCardSlide);
  }

  const startCardSlider = () => {
    setInterval(() => {
        nextCardSlide();
    }, 3000);}
    startCardSlider();