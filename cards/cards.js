let activeIndex = 0;

const totalCards = document.getElementsByClassName("card");

const moveRight  = () => {


  const nextIndex = activeIndex + 1 <= totalCards.length-1 ? activeIndex + 1 : totalCards.length-1;

  const activeGroup = document.querySelector(`[data-index = "${activeIndex}"]`);

  const nextGroup = document.querySelector(`[data-index = "${nextIndex}"]`);

  activeGroup.dataset.status = "next";
  nextGroup.dataset.status = "active";

  activeIndex = nextIndex;
  
}

const moveLeft  = () => {
  const preIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 0;
  
  const activeGroup = document.querySelector(`[data-index = "${activeIndex}"]`);

  const preGroup = document.querySelector(`[data-index = "${preIndex}"]`);

  activeGroup.dataset.status = "pre";
  preGroup.dataset.status = "active";

  activeIndex = preIndex;

}



// for card 1;
let _card = document.querySelector(`[data-index = "${0}"]`);


const initialHTML = _card.innerHTML;

_card.onclick = ()=> {
  _card.style.transform = "rotateY(180deg)";

  setTimeout(
    ()=>{
          document.getElementsByClassName("realName_1")[0].style.scale = "0";

          document.getElementsByClassName("branch_1")[0].style.scale = "0";

          document.getElementsByClassName("age_1")[0].style.scale = "0";

          document.getElementsByClassName("photo_1")[0].style.scale = "0";

          document.getElementsByClassName("details_1")[0].style.border = "none";

          document.getElementsByClassName("back-details_1")[0].style.scale = "1";
          document.getElementsByClassName("back-details_1")[0].style.transform = "rotateY(180deg)";
          
  
  }
    , 100);
  
  setTimeout(
    changeColor2_1
    , 3000);
};

const rotation = _card.style.transform;
function changeColor2_1(){
  _card.style.transform = rotation;

  setTimeout(
    () =>{_card.innerHTML = initialHTML;}
    , 100);
  }


// for card 2;
let _card_2 = document.querySelector(`[data-index = "${1}"]`);
const initialHTML_2 = _card_2.innerHTML;


_card_2.onclick = ()=> {
  _card_2.style.transform = "rotateY(180deg)";

  setTimeout(
    ()=>{
      document.getElementsByClassName("realName_2")[0].style.scale = "0";

          document.getElementsByClassName("branch_2")[0].style.scale = "0";

          document.getElementsByClassName("age_2")[0].style.scale = "0";

          document.getElementsByClassName("photo_2")[0].style.scale = "0";

          document.getElementsByClassName("details_2")[0].style.border = "none";

          document.getElementsByClassName("back-details_2")[0].style.scale = "1";
          document.getElementsByClassName("back-details_2")[0].style.transform = "rotateY(180deg)";
    }
    , 100);

  setTimeout(
    changeColor2_2
    , 3000);
};

function changeColor2_2(){
  _card_2.style.transform = rotation;

  setTimeout(
    () =>{_card_2.innerHTML = initialHTML_2;}
    , 100);
  }

// for card 3;
let _card_3 = document.querySelector(`[data-index = "${2}"]`);

const initialHTML_3 = _card_3.innerHTML;

_card_3.onclick = ()=> {

  _card_3.style.transform = "rotateY(180deg)";
  setTimeout(
    ()=>{
      document.getElementsByClassName("realName_3")[0].style.scale = "0";

          document.getElementsByClassName("branch_3")[0].style.scale = "0";

          document.getElementsByClassName("age_3")[0].style.scale = "0";

          document.getElementsByClassName("photo_3")[0].style.scale = "0";

          document.getElementsByClassName("details_3")[0].style.border = "none";

          document.getElementsByClassName("back-details_3")[0].style.scale = "1";
          document.getElementsByClassName("back-details_3")[0].style.transform = "rotateY(180deg)";
    }
    , 100);
  setTimeout(
    changeColor2_3
    , 3000);
};
function changeColor2_3(){
  _card_3.style.transform = rotation;
  setTimeout(
    () =>{_card_3.innerHTML = initialHTML_3;}
    , 100);
  }

// for card 4;
  let _card_4 = document.querySelector(`[data-index = "${3}"]`);

  const initialHTML_4 = _card_4.innerHTML;

  _card_4.onclick = ()=> {
  
    _card_4.style.transform = "rotateY(180deg)";
    setTimeout(
      ()=>{
        document.getElementsByClassName("realName_4")[0].style.scale = "0";

          document.getElementsByClassName("branch_4")[0].style.scale = "0";

          document.getElementsByClassName("age_4")[0].style.scale = "0";

          document.getElementsByClassName("photo_4")[0].style.scale = "0";

          document.getElementsByClassName("details_4")[0].style.border = "none";

          document.getElementsByClassName("back-details_4")[0].style.scale = "1";
          document.getElementsByClassName("back-details_4")[0].style.transform = "rotateY(180deg)";
      }
      , 100);
    setTimeout(
      changeColor2_4
      , 3000);
  };
  
  function changeColor2_4(){
    _card_4.style.transform = rotation;
    setTimeout(
      () =>{_card_4.innerHTML = initialHTML_4;}
      , 100);
    }