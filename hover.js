// button 3 JS start here:

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let text = "HoverHere!";

document.querySelector('div :nth-child(4)').onmouseenter = event => {

  let iteration = 0;

  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {

    if (index < iteration){
      return event.target.dataset.value[index]
    }
    else{
      return letters[Math.floor(Math.random()*26)]
    }}
  ).join("");

  if (iteration >= event.target.dataset.value.length){
    clearInterval(interval);
  }
  iteration += .4;

}, 30)

  
}



document.querySelector('div :nth-child(4)').onmouseleave = event => {

  let iteration = 0;

  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {

    if (index < iteration){
      return text[index];
    }
    else{
      return letters[Math.floor(Math.random()*26)]
    }}

  ).join("");

  if (iteration >= event.target.dataset.value.length){
    clearInterval(interval);
  }
  iteration += .4;

}, 30)

  
}

// button 3 JS ends here;


