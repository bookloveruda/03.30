'use strict';


const secCon = document.querySelector('.sec-con');
const secConUl = document.querySelector('.sec-con >ul');
const secConUlLi = document.querySelectorAll('.sec-con >ul>li');

// secConUlLi[0].addEventListener('click', (e)=>{ });
// 이런식으로 8번 주는 것보다는 
// li의 부모인 ul에 주는 것이 좋다. 그것이 이벤트 위임.



// secConUlLi.forEach((el,idx)=>{

//   el.addEventListener('click', (e)=>{
//     // console.log(e.currentTarget);
//     console.log(e.target);
//     console.log(e.target.parentElement);
    
//     const eTarget = e.target;
//     const eParent = eTarget.parentElement;
//     console.log(eParent, idx);
//   });
  
// });



// 이런식으로 8번 주는 것보다는 
// li의 부모인 ul에 주는 것이 좋다. 그것이 이벤트 위임.
// 이벤트 위임
// 클릭한 li의 하위 img, p 값을 get해서 .popupCon에 넣으려는 것

secConUl.addEventListener('click',(e)=>{
  // console.log(e.currentTarget);
  // console.log(e.target);
  // console.log(e.target.parentElement);   //-> li임
  
  const eTarget = e.target;
  const liTag = eTarget.parentElement;
  
  console.log(eTarget , liTag);   //-> li임
  
  secConUlLi.forEach((el,idx)=>{
    if(liTag===el){
      el.classList.add('on');
    }else{
      el.classList.remove('on');
    }
  });

});

