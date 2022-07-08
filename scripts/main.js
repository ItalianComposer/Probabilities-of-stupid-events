function calcProb() {
  let actionVal = "";
  let objectVal = "";
  let placeVal = "";
  actionVal = document.prob.action.value;
  objectVal = document.prob.object.value;
  placeVal = document.prob.place.value;
  let resultProb = actionVal * objectVal * placeVal;
  console.log(resultProb);
  document.getElementById("res").innerHTML = "Вероятность этого события " + resultProb + "%";
}
