document.addEventListener('DOMContentLoaded', () => {
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