let arr=[];
let sum;
function input(a){
  arr.push(a);
  arr.join("")
  sum=document.getElementById("outputField").setAttribute("placeholder", arr.join(""));
}
function calcNumbers(result){
  form.displayResult.value=form.displayResult.value+result;
}