function calcProb() {
  let actionVal = "";
  let objectVal = "";
  let placeVal = "";
  actionVal = document.prob.action.value;
  objectVal = document.prob.object.value;
  placeVal = document.prob.place.value;
  let resultProb = actionVal * objectVal * placeVal;
  // console.log(resultProb);
  document.getElementById("res").innerHTML = "Вероятность этого события " + resultProb + "%";
};
// function validate_form() {
// 	valid = true;
//   if ((document.probCustom.actionCustom.value == "") && (document.probCustom.objectCustom.value == "") && (document.probCustom.placeCustom.value == "")) {
//     alert ("Пожалуйста заполните поля");
//     valid = false;
//   } return valid;
// };
function calcCustom() {
  let actionValCustom = "";
  let objectValCustom = "";
  let placeValCustom = "";
  actionValCustom = document.probCustom.actionCustom.value;
  objectValCustom = document.probCustom.objectCustom.value;
  placeValCustom = document.probCustom.placeCustom.value;
  let primePercentile = Math.random() * (1 - 0.00000001) + 0.00000001;
  let secondaryPercentile = primePercentile / 10000;
  let resultProbCustom = "Вероятность события " + actionValCustom + " " + objectValCustom + " " + placeValCustom + " " + secondaryPercentile + "%";
  console.log(resultProbCustom);
  document.getElementById("resCustom").innerHTML = "Вероятность события " + actionValCustom + " " + objectValCustom + " " + placeValCustom + " " + secondaryPercentile + "%";
  

}
