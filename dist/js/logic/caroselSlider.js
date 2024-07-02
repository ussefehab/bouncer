
document.addEventListener('DOMContentLoaded', () => {
    const slides=document.querySelectorAll(".carousel__flex ");
    const slider=document.querySelector(".carousel");
    const arrowLeft=document.querySelector(".arrow-left");
    const arrowRight=document.querySelector(".arrow-right");
    const maxSlide =slides.length -1 ;
    let slideInterval;
    let curSlide=0;
  
    slider.style.overflow="hidden";
    slides.forEach((s,i)=>{
      s.style.transform=`translateX(${i*200}%)`;
    });
    const goToSlide=(slide)=>{
      slides.forEach((s,i)=>{
        s.style.transform=`translateX(${(i-slide)*200}%)`;
      });
    }
    goToSlide(0);
  
    const nextSlide = ()=>{
      if(curSlide===maxSlide){
        curSlide=0;
        }else{
      curSlide++;}
      goToSlide(curSlide);
    }
    const prevSlide = ()=>{
      if(curSlide===0){
        curSlide=maxSlide;
        }else{
      curSlide--;
    }
          goToSlide(curSlide);
    }
    const startSlider = () => {
      slideInterval = setInterval(() => {
          nextSlide();
      }, 3000); // Change slide every 3 seconds
  };
    arrowRight.addEventListener('click',()=>{
      clearInterval(slideInterval);
      nextSlide();
      startSlider();
    });
    arrowLeft.addEventListener('click',()=>{
      clearInterval(slideInterval);
      prevSlide();
      startSlider();
    });
    slider.addEventListener('mouseover',()=>{
      clearInterval(slideInterval);
    });
    slider.addEventListener('mouseout',()=>{
      startSlider();
      });
    startSlider();
  });