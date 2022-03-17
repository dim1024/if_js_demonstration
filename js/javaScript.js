// function checkForNaN() {  
//   let x = localStorage.count;
//   if (isNaN(x) || x == undefined) {
//     localStorage.count = 100;
//   }
//   document.getElementById("hit").innerHTML=`${localStorage.count}`
// }
// checkForNaN();

localStorage.count = 100;
document.getElementById("hit").innerHTML=`${localStorage.count}`;

function count() {  
  // let max = 25, min = 10;
  // localStorage.count -= Math.floor(Math.random() * (max - min) + min);
  localStorage.count--;  
  document.getElementById("hit").innerHTML=`${localStorage.count}`;
  if (localStorage.count == 98) {
    document.getElementById("hit").innerHTML=`${"DEAD!!!"}`;
  }
}

function resetHP() {
  localStorage.count = 100;
  document.getElementById("hit").innerHTML=`${localStorage.count}` ;
}
