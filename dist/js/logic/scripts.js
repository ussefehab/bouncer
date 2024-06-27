document.addEventListener('DOMContentLoaded', () => {
    const homeItem = document.querySelector('.nav__item[href="#Home"]');
    const megaMenu = document.querySelector('.nav__mega-menu');
    const overlay = document.getElementById('overlay');
    const popup = document.querySelector('.pop-up');
    const closeBtn = document.querySelector('.pop-up__btn-close');
    const subscribeForm = document.querySelector('.pop-up__content--email');
    const neverShowCheckbox = document.getElementById('neverShow');

    homeItem.addEventListener('mouseover', () => {
        megaMenu.style.opacity = '1';
        megaMenu.style.visibility = 'visible';
    });

    homeItem.addEventListener('mouseout', () => {
        setTimeout(() => {
            if (!megaMenu.matches(':hover')) {
                megaMenu.style.opacity = '0';
                megaMenu.style.visibility = 'hidden';
            }
        }, 10000);
    });

    megaMenu.addEventListener('mouseleave', () => {
        megaMenu.style.opacity = '0';
        megaMenu.style.visibility = 'hidden';
    });

        // Show the pop-up and overlay after 10 seconds
      
    setTimeout(() => {
        if (!Cookies.get('popupDismissed')){  
            overlay.style.display = 'block';
            popup.style.display = 'flex';
        }
        }
    , 5000);
    
// Close button functionality
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        popup.style.display = 'none';
        if (neverShowCheckbox.checked) {
        Cookies.set('popupDismissed', 'true', { expires: 365 });
        }
    });
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        popup.style.display = 'none';
        if (neverShowCheckbox.checked) {
        Cookies.set('popupDismissed', 'true', { expires: 365 });
        }
    });
//   Form submission handling
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = subscribeForm.email.value;
        console.log(`Email submitted: ${email}`);

        overlay.style.display = 'none';
        popup.style.display = 'none';
        Cookies.set('popupDismissed', 'true', { expires: 365 });
    });
});
document.addEventListener('DOMContentLoaded', () => {
  const cartLink = document.getElementById('cart-link');
  const productsLink = document.querySelectorAll('.products-link');
  // const productsLinkMobile = document.getElementById('products-link-mobile');
  const productLink = document.querySelectorAll('.product-link');
  const productLinkIcon = document.querySelectorAll('.product-link-i');
  if (cartLink) {
    cartLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = 'cart.html';
    });
  }
  if (productsLink) {
    productsLink.forEach(l=>{
      l.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = 'products.html';
      });
    })
  }
  if (productLinkIcon) {
    productLinkIcon.forEach(l=>{
      l.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'cart-product.html';
      });
    })
  }
  if (productLink) {
    productLink.forEach(l=>{l.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = 'cart-product.html';
    });})
  }

  const header=document.querySelector(".header__mobile") ;
  const menuOpen = document.querySelector(".menu__open");
  const menuClose = document.querySelector(".menu__close");
  const megaHeadList1=document.getElementById('category-1');
  const megaHeadList2=document.getElementById('category-2');
  const megaHeadList3=document.getElementById('category-3');
  const megaList1=document.getElementById('list-1');
  const megaList2=document.getElementById('list-2');
  const megaList3=document.getElementById('list-3');

  const mega=document.querySelectorAll(".header__mobile-mega");
  /////////////
  const home=document.querySelector(".Home");
  home.addEventListener('click',(e)=>{
    e.preventDefault();
    mega.forEach(btn=>{
      btn.classList.toggle("hidden");
  })}
);
megaHeadList1.addEventListener('click',()=>{
    megaList1.classList.toggle('hidden');
}
  );
megaHeadList2.addEventListener('click',()=>{
    megaList2.classList.toggle('hidden');
}
  );
megaHeadList3.addEventListener('click',()=>{
    megaList3.classList.toggle('hidden');
}
  );

  
  menuOpen.addEventListener('click',()=>{
    header.style.display="flex";
    menuOpen.style.display="none";
    menuClose.style.display="flex";
  })
  menuClose.addEventListener('click',()=>{
    header.style.display="none";
    menuOpen.style.display="flex";
    menuClose.style.display="none";
  })
  
});
document.addEventListener('DOMContentLoaded', () => {
  const slides=document.querySelectorAll(".carousel__flex ");
  const slider=document.querySelector(".carousel");
  const arrowLeft=document.querySelector(".arrow-left");
  const arrowRight=document.querySelector(".arrow-right");
  let slideInterval;
  let curSlide=0;

  const maxSlide =slides.length -1 ;


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
  /////////////////////////////////
 // Change slide every 3 seconds
});
// const fetchProducts = async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const data = await response.json();
//       console.log(response,data)
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       return [];
//     }
//   };
//   console.log(fetchProducts())

document.addEventListener('DOMContentLoaded', () => {
    const rangeLeft = document.getElementById('range-left');
    const rangeRight = document.getElementById('range-right');
    const outputLeft = document.getElementById('output-left');
    const outputRight = document.getElementById('output-right');
    const rangeTrackActive = document.querySelector('.range-track-active');
  
    if (!rangeLeft || !rangeRight || !outputLeft || !outputRight || !rangeTrackActive) {
      return;
    }
    
    function updateRange() {
      const min = parseFloat(rangeLeft.min);
      const max = parseFloat(rangeLeft.max);
      const leftValue = Math.min(parseFloat(rangeLeft.value), parseFloat(rangeRight.value) - 0.01);
      const rightValue = Math.max(parseFloat(rangeRight.value), parseFloat(rangeLeft.value) + 0.01);
  
      rangeLeft.value = leftValue;
      rangeRight.value = rightValue;
  
      const formattedLeftValue = leftValue.toFixed(2);
      const formattedRightValue = rightValue.toFixed(2);
  
      outputLeft.textContent = formattedLeftValue;
      outputRight.textContent = formattedRightValue;
  
      const percentageLeft = ((leftValue - min) / (max - min)) * 100;
      const percentageRight = ((rightValue - min) / (max - min)) * 100;
  
      rangeTrackActive.style.left = `${percentageLeft}%`;
      rangeTrackActive.style.width = `${percentageRight - percentageLeft}%`;
    }
  
    updateRange();
  
    rangeLeft.addEventListener('input', updateRange);
    rangeRight.addEventListener('input', updateRange);
  
  });
  

function setupDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);  
    if (!dropdown) {
      return;
    }
  
    const dropbtn = dropdown.querySelector('.bar__dropdown--btn-text');
    if (!dropbtn) {
      return;
    }
  
    const links = dropdown.querySelectorAll('.bar__dropdown--content a');
  
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        dropbtn.textContent = link.textContent;
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    setupDropdown('dropdown1');
    setupDropdown('dropdown2');
    setupDropdown('dropdown3');
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const counterValue = document.getElementById('counter-value');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
  
    function updateDisplay() {
      counterValue.textContent = counter;
    }
  
    let counter = 1;
    
    decrementButton.addEventListener('click', () => {
      if(counter > 1){
        counter--;
        updateDisplay();      }
      
    });
    
    incrementButton.addEventListener('click', () => {
      counter++;
      updateDisplay();
        });
  });  
///////////////
const btnGrid=document.getElementById("grid");
const btnList=document.getElementById("list");
const productsGrid=document.querySelector(".product-grid__card");
const productsList=document.querySelector(".product-list__card ");
const iconGrid = document.getElementById("icon-grid");
const iconList = document.getElementById("icon-list");

btnGrid.addEventListener('click',()=>{
  productsGrid.style.display="grid";
  productsList.style.display="none";
  iconGrid.style.fill="#33A0FF";
  iconList.style.fill="#C1C8CE";

})
btnList.addEventListener('click',()=>{
  productsGrid.style.display="none";
  productsList.style.display="flex";
  iconList.style.fill="#33A0FF";
  iconGrid.style.fill="#C1C8CE";
  })

////////////////////////