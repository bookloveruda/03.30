'use strict';

// click
// img  ->  src , alt    -> get  -> popup  img  set
// p   ->  text    get-> popup p set


const eventCon = document.querySelector('.event-con');

const eventConImg = document.querySelector('.event-con >img');
const eventConP = document.querySelector('.event-con >p');


/*

// Q1 :  .event-con >img  를 클릭click하면,  img의 src, alt 값을 출력해보세요

// A1 : =
eventConImg.addEventListener('click', (e) => {
  // console.log(e);
  // console.log(e.target);
  // console.log(e.currentTarget);   //<- 하나밖에 없어서 target이랑 curentTarget이랑 같아서 currentTarget은 쓸 필요없음

  const eTarget = e.target;
  const imgSrc = eTarget.getAttribute('src');
  const imgAlt = eTarget.getAttribute('alt');

  console.log(imgSrc);
  console.log(imgAlt);
  console.log(imgSrc, imgAlt);

});


// Q2 : .event-con >p  를 클릭click하면,  p태그 안에 있는 텍스트를 출력하시오
// A2 : =
eventConP.addEventListener('click', (e) => {
  // console.log(e.target);
  const eTarget = e.target;
  const pTxt = eTarget.innerText;
  console.log(pTxt);
});


// Q3 : .event-con >img  를 클릭click하면,  img의 src, alt 값을 출력해보세요
// -> .pop-con  img (src,alt)  설정(set)  -> setAttribute('src' , ' ');
//      .event-con >p  를 클릭click하면,  p태그 안에 있는 텍스트를 출력하시오
// -> .pop-con  p 안에 텍스트를 set  ->  innerText = ' ';
// A3 : =
const popupCon = document.querySelector('.popup-con');
// const popupConImg = document.querySelector('.popup-con >img');
// const popupConP = document.querySelector('.popup-con >p');
// A3 : =
popupCon.children[0]
popupCon.children[1]

eventConImg.addEventListener('click', (e) => {
  const eTarget = e.target;
  const imgSrc = eTarget.getAttribute('src');
  const imgAlt = eTarget.getAttribute('alt');

  console.log(imgSrc, imgAlt);

  popupCon.children[0].setAttribute('src', imgSrc);
  popupCon.children[0].setAttribute('alt', imgAlt);

});

eventConP.addEventListener('click', (e) => {
  const eTarget = e.target;
  const pTxt = eTarget.innerText;
  console.log(pTxt);

  popupCon.children[1].innerText = pTxt;
});

*/




// Q4 :
// event 두 번 주지 말고(위처럼), 부모한테 한 번만 주도록 하는 것 ▼
// event-con -> click이벤트 한 번 -> 자식들 img src, img alt, p text      get
// popupCon  -> 자식들 img src, img alt, p text  set
// A4 : =
const popup = document.querySelector('.popup');
const popupCon = document.querySelector('.popup .popup-con');

eventCon.addEventListener('click', (e)=>{
  // console.log(e.target);
  // console.log(e.currentTarget);
  const eCTarget = e.currentTarget;
  const eCTargetChildren = eCTarget.children;
  // console.log(eCTargetChildren);
  // console.log(eCTargetChildren[0]);
  // console.log(eCTargetChildren[1]);

  const imgTag = eCTarget.children[0];
  const pTag = eCTarget.children[1];

  // if(eTarget===imgTag){
  //   const imgSrc = eTarget.getAttribute('src');
  //   const imgAlt = eTarget.getAttribute('alt');
  // };
    const imgSrc = imgTag.getAttribute('src');
    const imgAlt = imgTag.getAttribute('alt');
  
  const pTxt = pTag.innerText;

  console.log(`src -> ${imgSrc}`);
  console.log(`alt -> ${imgAlt}`);
  console.log(`ptxt -> ${pTxt}`);

  popupCon.children[0].setAttribute('src', imgSrc);
  popupCon.children[0].setAttribute('alt', imgAlt);
  popupCon.children[1].innerText = pTxt;

  // Q5 : display:none; 적용되었던 .popup 이 나타나도록 해보시오
  // A5 :
  // popup.style.display='block';
  // block도 되는데 jcc와 aic로 했을 경우 flex로 해야 정가운데 위치함
  popup.style.display='flex';

  popup.classList.add('pop-animation');
  // transition:all 0.5s; 이 트랜지션이 안 먹히는데... 
  // block이나 none일 때 그렇다. 그래서 애니메이션이 안 먹히는 것임...

});


// .popup-con 클릭하면 .popup 사라지게
// A6 : =
popupCon.addEventListener('click',(e)=>{
  // 방법1
  // popup.classList.remove('pop-animation');

  // 방법2
  const eCTarget = e.currentTarget;
  eCTarget.parentElement.classList.remove('pop-animation');
});