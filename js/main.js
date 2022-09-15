var elSele = document.querySelector("#sele");
var elSelehamir = document.querySelector("#hamir");

elSele.addEventListener("change", function() {

  elSelehamir.textContent = elSele.value
});

var elRadios = document.querySelectorAll("input[name='radi']");
var elRdResult = document.getElementById("radio-result");

var findSelected = () => {
  var selected = document.querySelector("input[name='radi']:checked").value;
  elRdResult.textContent = `${selected}`
}

elRadios.forEach(elRadio => {
  elRadio.addEventListener("change", findSelected);
})

findSelected();