const oGallery = document.querySelector('.gallery');
oGallery.addEventListener('click', function(ev) {
  if (ev.target.tagName !== 'IMG') { return false; };
  let oTarget = ev.target, nWidth, nHeight, nRatio = oTarget.offsetWidth / oTarget.offsetHeight;
  let oBig = this.appendChild(document.createElement('DIV'));
  oBig.style.position = `absolute`;
  oBig.style.top = `${oTarget.offsetTop}px`; oBig.style.left = `${oTarget.offsetLeft}px`;
  oBig.style.width = `${oTarget.offsetWidth}px`; oBig.style.height = `${oTarget.offsetHeight}px`;
  if (this.offsetHeight < this.offsetWidth) {
    nHeight = this.offsetHeight; nWidth = nHeight * nRatio;
  } else {
    nWidth = this.offsetWidth; nHeight = nWidth / nRatio;
  };
  oBig.style.background = `center / 100% 100% no-repeat url('${oTarget.currentSrc}')`;
  oBig.insertAdjacentHTML('beforeend', '<div class="close">×</div>');
  oBig.addEventListener('transitionend', function() { this.querySelector('.close').style.opacity = 1; });
  oBig.addEventListener('click', function(ev) {
    ev.stopPropagation();
    this.addEventListener('transitionend', function() { this.remove(); });
    this.style.transition = `.2s ease-in`;
    this.style.height = this.style.width = `0px`;
  oGallery.classList.toggle('show', false);
  });
  oBig.classList.toggle('activate');
  oBig.style.width = `${nWidth / 1.3}px`; oBig.style.height = `${nHeight / 1.3}px`;
  oBig.style.top = oBig.style.left = `50%`;
  oBig.style.transform = `translate(-50%, -50%) `;
  oGallery.classList.toggle('show', true);
});















let popupBg = document.querySelector('.popup__bg');
let popup1 = document.querySelector('.popup1');
let popup2 = document.querySelector('.popup2');
let popup3 = document.querySelector('.popup3');
let popup4 = document.querySelector('.popup4');
let popup5 = document.querySelector('.popup5');
let popup6 = document.querySelector('.popup6');
let popup7 = document.querySelector('.popup7');
let popup8 = document.querySelector('.popup8');
let popup9 = document.querySelector('.popup9');
let popup10 = document.querySelector('.popup10');
let popup11 = document.querySelector('.popup11');
let popup12 = document.querySelector('.popup12');
let popup13 = document.querySelector('.popup13');
let popup14 = document.querySelector('.popup14');
let popup15 = document.querySelector('.popup15');
let popup16 = document.querySelector('.popup16');
let popup17 = document.querySelector('.popup17');
let popup18 = document.querySelector('.popup18');
let popup19 = document.querySelector('.popup19');
let popup20 = document.querySelector('.popup20');
let popup21 = document.querySelector('.popup21');
let popup22 = document.querySelector('.popup22');
let popup23 = document.querySelector('.popup23');
let popup24 = document.querySelector('.popup24');
let popup25 = document.querySelector('.popup25');
let popup26 = document.querySelector('.popup26');
let popup27 = document.querySelector('.popup27');
let popup28 = document.querySelector('.popup28');
let popup29 = document.querySelector('.popup29');
let popup30 = document.querySelector('.popup30');
let popup31 = document.querySelector('.popup31');
let popup32 = document.querySelector('.popup32');




let openPopupButtons1 = document.querySelectorAll('.open-popup1');
let openPopupButtons2 = document.querySelectorAll('.open-popup2');
let openPopupButtons3 = document.querySelectorAll('.open-popup3');
let openPopupButtons4 = document.querySelectorAll('.open-popup4');
let openPopupButtons5 = document.querySelectorAll('.open-popup5');
let openPopupButtons6 = document.querySelectorAll('.open-popup6');
let openPopupButtons7 = document.querySelectorAll('.open-popup7');
let openPopupButtons8 = document.querySelectorAll('.open-popup8');
let openPopupButtons9 = document.querySelectorAll('.open-popup9');
let openPopupButtons10 = document.querySelectorAll('.open-popup10');
let openPopupButtons11 = document.querySelectorAll('.open-popup11');
let openPopupButtons12 = document.querySelectorAll('.open-popup12');
let openPopupButtons13 = document.querySelectorAll('.open-popup13');
let openPopupButtons14 = document.querySelectorAll('.open-popup14');
let openPopupButtons15 = document.querySelectorAll('.open-popup15');
let openPopupButtons16 = document.querySelectorAll('.open-popup16');
let openPopupButtons17 = document.querySelectorAll('.open-popup17');
let openPopupButtons18 = document.querySelectorAll('.open-popup18');
let openPopupButtons19 = document.querySelectorAll('.open-popup19');
let openPopupButtons20 = document.querySelectorAll('.open-popup20');
let openPopupButtons21 = document.querySelectorAll('.open-popup21');
let openPopupButtons22 = document.querySelectorAll('.open-popup22');
let openPopupButtons23 = document.querySelectorAll('.open-popup23');
let openPopupButtons24 = document.querySelectorAll('.open-popup24');
let openPopupButtons25 = document.querySelectorAll('.open-popup25');
let openPopupButtons26 = document.querySelectorAll('.open-popup26');
let openPopupButtons27 = document.querySelectorAll('.open-popup27');
let openPopupButtons28 = document.querySelectorAll('.open-popup28');
let openPopupButtons29 = document.querySelectorAll('.open-popup29');
let openPopupButtons30 = document.querySelectorAll('.open-popup30');
let openPopupButtons31 = document.querySelectorAll('.open-popup31');
let openPopupButtons32 = document.querySelectorAll('.open-popup32');


let closePopupButton1 = document.querySelector('.close-popup1');
let closePopupButton2 = document.querySelector('.close-popup2');
let closePopupButton3 = document.querySelector('.close-popup3');
let closePopupButton4 = document.querySelector('.close-popup4');
let closePopupButton5 = document.querySelector('.close-popup5');
let closePopupButton6 = document.querySelector('.close-popup6');
let closePopupButton7 = document.querySelector('.close-popup7');
let closePopupButton8 = document.querySelector('.close-popup8');
let closePopupButton9 = document.querySelector('.close-popup9');
let closePopupButton10 = document.querySelector('.close-popup10');
let closePopupButton11 = document.querySelector('.close-popup11');
let closePopupButton12 = document.querySelector('.close-popup12');
let closePopupButton13 = document.querySelector('.close-popup13');
let closePopupButton14 = document.querySelector('.close-popup14');
let closePopupButton15 = document.querySelector('.close-popup15');
let closePopupButton16 = document.querySelector('.close-popup16');
let closePopupButton17 = document.querySelector('.close-popup17');
let closePopupButton18 = document.querySelector('.close-popup18');
let closePopupButton19 = document.querySelector('.close-popup19');
let closePopupButton20 = document.querySelector('.close-popup20');
let closePopupButton21 = document.querySelector('.close-popup21');
let closePopupButton22 = document.querySelector('.close-popup22');
let closePopupButton23 = document.querySelector('.close-popup23');
let closePopupButton24 = document.querySelector('.close-popup24');
let closePopupButton25 = document.querySelector('.close-popup25');
let closePopupButton26 = document.querySelector('.close-popup26');
let closePopupButton27 = document.querySelector('.close-popup27');
let closePopupButton28 = document.querySelector('.close-popup28');
let closePopupButton29 = document.querySelector('.close-popup29');
let closePopupButton30 = document.querySelector('.close-popup30');
let closePopupButton31 = document.querySelector('.close-popup31');
let closePopupButton32 = document.querySelector('.close-popup32');

let closePopupMenuButton1 = document.querySelector('.arrow1');
let closePopupMenuButton2 = document.querySelector('.arrow2');
let closePopupMenuButton3 = document.querySelector('.arrow3');
let closePopupMenuButton4 = document.querySelector('.arrow4');
let closePopupMenuButton5 = document.querySelector('.arrow5');
let closePopupMenuButton6 = document.querySelector('.arrow6');
let closePopupMenuButton7 = document.querySelector('.arrow7');
let closePopupMenuButton8 = document.querySelector('.arrow8');
let closePopupMenuButton9 = document.querySelector('.arrow9');
let closePopupMenuButton10 = document.querySelector('.arrow10');
let closePopupMenuButton11 = document.querySelector('.arrow11');
let closePopupMenuButton12 = document.querySelector('.arrow12');
let closePopupMenuButton13 = document.querySelector('.arrow13');
let closePopupMenuButton14 = document.querySelector('.arrow14');
let closePopupMenuButton15 = document.querySelector('.arrow15');
let closePopupMenuButton16 = document.querySelector('.arrow16');
let closePopupMenuButton17 = document.querySelector('.arrow17');
let closePopupMenuButton18 = document.querySelector('.arrow18');
let closePopupMenuButton19 = document.querySelector('.arrow19');
let closePopupMenuButton20 = document.querySelector('.arrow20');
let closePopupMenuButton21 = document.querySelector('.arrow21');
let closePopupMenuButton22 = document.querySelector('.arrow22');
let closePopupMenuButton23 = document.querySelector('.arrow23');
let closePopupMenuButton24 = document.querySelector('.arrow24');
let closePopupMenuButton25 = document.querySelector('.arrow25');
let closePopupMenuButton26 = document.querySelector('.arrow26');
let closePopupMenuButton27 = document.querySelector('.arrow27');
let closePopupMenuButton28 = document.querySelector('.arrow28');
let closePopupMenuButton29 = document.querySelector('.arrow29');
let closePopupMenuButton30 = document.querySelector('.arrow30');
let closePopupMenuButton31 = document.querySelector('.arrow31');
let closePopupMenuButton32 = document.querySelector('.arrow32');



openPopupButtons1.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup1.classList.add('active');
        popup2.classList.remove('active');
         popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');




    })
});

closePopupButton1.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup1.classList.remove('active');
   document.getElementById("audio2").pause();

});
closePopupButton2.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup2.classList.remove('active');
   });
closePopupButton3.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup3.classList.remove('active');
   });
closePopupButton4.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup4.classList.remove('active');
   });
closePopupButton5.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup5.classList.remove('active');
   });
closePopupButton6.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup6.classList.remove('active');
   });
closePopupButton7.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup7.classList.remove('active');
   });
closePopupButton8.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup8.classList.remove('active');
   });
closePopupButton9.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup9.classList.remove('active');
   });
closePopupButton10.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup10.classList.remove('active');
   });
closePopupButton11.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup11.classList.remove('active');
   });
   closePopupButton12.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup12.classList.remove('active');
   });
   closePopupButton13.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup13.classList.remove('active');
   });
   closePopupButton14.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup14.classList.remove('active');
   });
   closePopupButton15.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup15.classList.remove('active');
   });
   closePopupButton16.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup16.classList.remove('active');
   });
   closePopupButton17.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup17.classList.remove('active');
   });
   closePopupButton18.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup18.classList.remove('active');
   });
   closePopupButton19.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup19.classList.remove('active');
   });
   closePopupButton20.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup20.classList.remove('active');
    });
   closePopupButton21.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup21.classList.remove('active');
   });
   closePopupButton22.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup22.classList.remove('active');
   });
   closePopupButton23.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup23.classList.remove('active');
   });
   closePopupButton24.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup24.classList.remove('active');
   });
   closePopupButton25.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup25.classList.remove('active');
   });
   closePopupButton26.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup26.classList.remove('active');
   });
   closePopupButton27.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup27.classList.remove('active');
   });
   closePopupButton28.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup28.classList.remove('active');
   });
   closePopupButton29.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup29.classList.remove('active');
   });
   closePopupButton30.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup30.classList.remove('active');
   });
   closePopupButton31.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup31.classList.remove('active');
   });
   closePopupButton32.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup32.classList.remove('active');
   document.getElementById("audio").style.display = "none";
   });











closePopupMenuButton1.addEventListener('click',() => {

 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup1.classList.remove('active');
   document.getElementById("audio2").pause();
});
closePopupMenuButton2.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup2.classList.remove('active');
});
closePopupMenuButton3.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup3.classList.remove('active');
});
closePopupMenuButton4.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup4.classList.remove('active');
});
closePopupMenuButton5.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup5.classList.remove('active');
});
closePopupMenuButton6.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup6.classList.remove('active');
});
closePopupMenuButton7.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup7.classList.remove('active');
});
closePopupMenuButton8.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup8.classList.remove('active');
});
closePopupMenuButton9.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup9.classList.remove('active');
});
closePopupMenuButton10.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup10.classList.remove('active');
});
closePopupMenuButton11.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup11.classList.remove('active');
});
closePopupMenuButton12.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup12.classList.remove('active');
});
closePopupMenuButton13.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup13.classList.remove('active');
});
closePopupMenuButton14.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup14.classList.remove('active');
});
closePopupMenuButton15.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup15.classList.remove('active');
});
closePopupMenuButton16.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup16.classList.remove('active');
});
closePopupMenuButton17.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup17.classList.remove('active');
});
closePopupMenuButton18.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup18.classList.remove('active');
});
closePopupMenuButton19.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup19.classList.remove('active');
});
closePopupMenuButton20.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup20.classList.remove('active');
});
closePopupMenuButton21.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup21.classList.remove('active');
});
closePopupMenuButton22.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup22.classList.remove('active');
});
closePopupMenuButton23.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup23.classList.remove('active');
});
closePopupMenuButton24.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup24.classList.remove('active');
});
closePopupMenuButton25.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup25.classList.remove('active');
});
closePopupMenuButton26.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup26.classList.remove('active');
});
closePopupMenuButton27.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup27.classList.remove('active');
});
closePopupMenuButton28.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup28.classList.remove('active');
});
closePopupMenuButton29.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup29.classList.remove('active');
});
closePopupMenuButton30.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup30.classList.remove('active');
});
closePopupMenuButton31.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup31.classList.remove('active');
});
closePopupMenuButton32.addEventListener('click',() => {
 //window.speechSynthesis.pause();
    popupBg.classList.remove('active');
   popup32.classList.remove('active');
      document.getElementById("audio").style.display = "none";
      document.getElementById("audio1").pause();
});
document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup1.classList.remove('active');
        popup2.classList.remove('active');
         document.getElementById("audio3").pause();
          document.getElementById("audio").pause();
           document.getElementById("audio4").pause();
            document.getElementById("audio5").pause();
             document.getElementById("audio6").pause();
              document.getElementById("audio7").pause();
               document.getElementById("audio8").pause();
                document.getElementById("audio9").pause();
                 document.getElementById("audio10").pause();
                  document.getElementById("audio11").pause();
                   document.getElementById("audio12").pause();
                    document.getElementById("audio13").pause();
                     document.getElementById("audio14").pause();
                      document.getElementById("audio15").pause();
                       document.getElementById("audio16").pause();
                        document.getElementById("audio17").pause();
                         document.getElementById("audio18").pause();
                          document.getElementById("audio19").pause();
                           document.getElementById("audio20").pause();
                            document.getElementById("audio21").pause();
                             document.getElementById("audio22").pause();
                              document.getElementById("audio23").pause();
                               document.getElementById("audio24").pause();
                                document.getElementById("audio25").pause();
                                 document.getElementById("audio26").pause();
                                  document.getElementById("audio27").pause();
                                   document.getElementById("audio28").pause();
                                    document.getElementById("audio29").pause();
                                     document.getElementById("audio30").pause();
                                      document.getElementById("audio31").pause();
                                       document.getElementById("audio32").pause();
                                        document.getElementById("audio2").pause();
          popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    }
});


openPopupButtons2.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup2.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons3.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup3.classList.add('active');
         popup1.classList.remove('active');
           popup2.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons4.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup4.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup2.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons5.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup5.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup2.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons6.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup6.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup2.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons7.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup7.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup2.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons8.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup8.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup2.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons9.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup9.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup2.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons10.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup10.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup2.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons11.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup11.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup2.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons12.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup12.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup2.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons13.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup13.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup2.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons14.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup14.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup2.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons15.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup15.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup2.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});openPopupButtons16.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup16.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup2.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons17.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup17.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup2.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons18.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup18.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup2.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons19.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup19.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup2.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons20.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup20.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup2.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons21.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup21.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup2.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});openPopupButtons22.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup22.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup2.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons23.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup23.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup2.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons24.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup24.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup2.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons25.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup25.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup2.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons26.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup26.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup2.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons27.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup27.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup2.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons28.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup28.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup2.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons29.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup29.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup2.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons30.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup30.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup2.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});
openPopupButtons31.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup31.classList.add('active');
         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup2.classList.remove('active');
                                   popup32.classList.remove('active');
    })
});openPopupButtons32.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup32.classList.add('active');

         popup1.classList.remove('active');
           popup3.classList.remove('active');
          popup4.classList.remove('active');
           popup5.classList.remove('active');
            popup6.classList.remove('active');
             popup7.classList.remove('active');
             popup8.classList.remove('active');
              popup9.classList.remove('active');
               popup10.classList.remove('active');
                popup11.classList.remove('active');
                 popup12.classList.remove('active');
                  popup13.classList.remove('active');
                   popup14.classList.remove('active');
                    popup15.classList.remove('active');
                     popup16.classList.remove('active');
                      popup17.classList.remove('active');
                       popup18.classList.remove('active');
                        popup19.classList.remove('active');
                         popup20.classList.remove('active');
                          popup21.classList.remove('active');
                           popup22.classList.remove('active');
                           popup23.classList.remove('active');
                           popup24.classList.remove('active');
                            popup25.classList.remove('active');
                             popup26.classList.remove('active');
                              popup27.classList.remove('active');
                               popup28.classList.remove('active');
                                popup29.classList.remove('active');
                                 popup30.classList.remove('active');
                                  popup31.classList.remove('active');
                                   popup2.classList.remove('active');
    })
});






  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }


function viewDiv1(){
  document.getElementById("audio1").style.display = "inline-block";

}
function viewDiv2(){
  document.getElementById("audio2").style.display = "inline-block";
  /*if(document.getElementById('audio2'.pause())){
      popup1.classList.remove('active');
      popup2.classList.add('active');
  }
});*/
}
function viewDiv3(){
  document.getElementById("audio3").style.display = "inline-block";
}
function viewDiv4(){
  document.getElementById("audio4").style.display = "inline-block";
}
function viewDiv5(){
  document.getElementById("audio5").style.display = "inline-block";
}
function viewDiv6(){
  document.getElementById("audio6").style.display = "inline-block";
}
function viewDiv7(){
  document.getElementById("audio7").style.display = "inline-block";
}
function viewDiv8(){
  document.getElementById("audio8").style.display = "inline-block";
}
function viewDiv9(){
  document.getElementById("audio9").style.display = "inline-block";
}
function viewDiv10(){
  document.getElementById("audio10").style.display = "inline-block";
}
function viewDiv11(){
  document.getElementById("audio11").style.display = "inline-block";
}
function viewDiv12(){
  document.getElementById("audio12").style.display = "inline-block";
}
function viewDiv13(){
  document.getElementById("audio13").style.display = "inline-block";
}
function viewDiv14(){
  document.getElementById("audio14").style.display = "inline-block";
}
function viewDiv15(){
  document.getElementById("audio15").style.display = "inline-block";
}
function viewDiv16(){
  document.getElementById("audio16").style.display = "inline-block";
}
function viewDiv17(){
  document.getElementById("audio17").style.display = "inline-block";
}
function viewDiv18(){
  document.getElementById("audio18").style.display = "inline-block";
}
function viewDiv19(){
  document.getElementById("audio19").style.display = "inline-block";
}
function viewDiv20(){
  document.getElementById("audio20").style.display = "inline-block";
}
function viewDiv21(){
  document.getElementById("audio21").style.display = "inline-block";
}
function viewDiv22(){
  document.getElementById("audio22").style.display = "inline-block";
}
function viewDiv23(){
  document.getElementById("audio23").style.display = "inline-block";
}
function viewDiv24(){
  document.getElementById("audio24").style.display = "inline-block";
}
function viewDiv25(){
  document.getElementById("audio25").style.display = "inline-block";
}
function viewDiv26(){
  document.getElementById("audio26").style.display = "inline-block";
}
function viewDiv27(){
  document.getElementById("audio27").style.display = "inline-block";
}
function viewDiv28(){
  document.getElementById("audio28").style.display = "inline-block";
}
function viewDiv29(){
  document.getElementById("audio29").style.display = "inline-block";
}
function viewDiv30(){
  document.getElementById("audio30").style.display = "inline-block";
}
function viewDiv31(){
  document.getElementById("audio31").style.display = "inline-block";
}
function viewDiv32(){
  document.getElementById("audio32").style.display = "inline-block";
}


/* function speak() {
    let text = document.getElementById('text').value;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}
speak();*/



//  function speak(text) {
  //const message = new SpeechSynthesisUtterance();
    //  const voices = window.speechSynthesis.getVoices();

  // голос женский



/*      let voices = window.speechSynthesis.getVoices();
      setTimeout(function() { voices = window.speechSynthesis.getVoices(); }, 1000);

    function findVoice(lang) {
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].lang === lang) { return voices[i]; }
        }
        return null;
    }

message.voice = findVoice(message.lang);
     message.lang = "uk-UA";
      message.voiceURI = 'native';
 // message.voice = getVoice("Microsoft Pavel");
  // или мужской
 message.voice = getVoice("uk-UA-OstapNeural");
  message.text = text;
  // тембр и скорость по вкусу
  message.pitch = 0.3;
  message.rate = 0.8;
  window.speechSynthesis.speak(message);
}

function getVoice(name) {
  const voices = window.speechSynthesis.getVoices();
  for (const voice of voices) {
    if (voice.name === name) {
      return voice;
    }
  }
  return null;
}

function printVoices() {
  const voices = window.speechSynthesis.getVoices();
  for (const voice of voices) {
    if (voice.lang === "uk-UA") {
      console.log(voice);
    }
  }
}

function splitArticle(elems) {
  const sentences = [];
  for (const el of elems) {
    const par = splitParagraph(el)
      .map(s => s.trim())
      .filter(s => s.trim().length > 0);
    sentences.push(...par);
  }
  return sentences;
}

function splitParagraph(el) {
  return el.innerText.split(/[.?!;:]/);
}

const btnSpeak = document.querySelector("#speak");
const btnPlay = document.querySelector("#playpause");
const article = document.querySelector("#article");

btnPlay.addEventListener("click", () => {
  if (btnPlay.dataset.playing !== undefined) {
    window.speechSynthesis.pause();
    delete btnPlay.dataset.playing;
    btnPlay.innerHTML = "▶️";
  } else {
    window.speechSynthesis.resume();
    btnPlay.dataset.playing = "";
    btnPlay.innerHTML = "⏸️";
  }
});

btnSpeak.addEventListener("click", () => {
  const sentences = splitArticle(article.children);
  btnPlay.style.display = null;
  for (const sentence of sentences) {
    speak(sentence);
  }
});

window.speechSynthesis.getVoices();*/

/*!***************************************************
 * google-translate.js v1.0.3
 * https://Get-Web.Site/
 * author: Vitalii P.
 ****************************************************

const googleTranslateConfig = {
    /* Original language
    lang: "uk",
    /* The language we translate into on the first visit
    /* Язык, на который переводим при первом посещении
    // langFirstVisit: 'en',
    /* Если скрипт не работает на поддомене,
    раскомментируйте и
    укажите основной домен в свойстве domain
    /* domain: "Get-Web.Site"
};

function TranslateInit() {

    if (googleTranslateConfig.langFirstVisit && !Cookies.get('googtrans')) {
        // Если установлен язык перевода для первого посещения и куки не назначены
        TranslateCookieHandler("/auto/" + googleTranslateConfig.langFirstVisit);
    }

    let code = TranslateGetCode();
    // Находим флаг с выбранным языком для перевода и добавляем к нему активный класс
    if (document.querySelector('[data-google-lang="' + code + '"]') !== null) {
        document.querySelector('[data-google-lang="' + code + '"]').classList.add('language__img_active');
    }

    if (code == googleTranslateConfig.lang) {
        // Если язык по умолчанию, совпадает с языком на который переводим
        // То очищаем куки
        TranslateCookieHandler(null, googleTranslateConfig.domain);
    }

    // Инициализируем виджет с языком по умолчанию
    new google.translate.TranslateElement({
        pageLanguage: googleTranslateConfig.lang,
    });

    // Вешаем событие  клик на флаги
    TranslateEventHandler('click', '[data-google-lang]', function (e) {
        TranslateCookieHandler("/" + googleTranslateConfig.lang + "/" + e.getAttribute("data-google-lang"), googleTranslateConfig.domain);
        // Перезагружаем страницу
        window.location.reload();
    });
}

function TranslateGetCode() {
    // Если куки нет, то передаем дефолтный язык
    let lang = (Cookies.get('googtrans') != undefined && Cookies.get('googtrans') != "null") ? Cookies.get('googtrans') : googleTranslateConfig.lang;
    return lang.match(/(?!^\/)[^\/]*$/gm)[0];
}

function TranslateCookieHandler(val, domain) {
    // Записываем куки /язык_который_переводим/язык_на_который_переводим
    Cookies.set('googtrans', val);
    Cookies.set("googtrans", val, {
        domain: "." + document.domain,
    });

    if (domain == "undefined") return;
    // записываем куки для домена, если он назначен в конфиге
    Cookies.set("googtrans", val, {
        domain: domain,
    });

    Cookies.set("googtrans", val, {
        domain: "." + domain,
    });
}

function TranslateEventHandler(event, selector, handler) {
    document.addEventListener(event, function (e) {
        let el = e.target.closest(selector);
        if (el) handler(el);
    });
}*/