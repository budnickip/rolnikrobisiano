import 'bootstrap';
import '../node_modules/glider-js/glider.min.js';
import './styles/style.scss';


import hidenavbar from './scripts/hidenavbar';

hidenavbar();

window.addEventListener("scroll",function(){
    var target = document.getElementsByClassName('social');
    var menu = document.getElementsByClassName('navbar-color');
    if(window.pageYOffset > 400){
     target[0].style.display = "block";
    }
    else if(window.pageYOffset < 400){
      target[0].style.display = "none";
    }
    if(window.pageYOffset > 150){
      console.log("powinno byc");
      menu[0].style.backgroundColor =  "rgba(0,0,0,0.98)";
    } else if (window.pageYOffset < 150){
      menu[0].style.backgroundColor =  "rgba(0,0,0,0.5)";
    }
  },false);

  window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        draggable: true,     
        rewind: true,   
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4.5,
                slidesToScroll: 1,
                arrows: {
                    prev: '.glider-prev',
                    next: '.glider-next'
                  },
              }
            }
          ]
      });
})
  
  /*let root = document.documentElement;
  
  window.addEventListener("scroll", function(){
    var value = 250 - window.scrollY/4;
    root.style.setProperty('--height-line', value + "px");
    console.log(value);
  }); */