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


function isChacked1() {
  if(document.querySelector(".site-input1").checked) {
    document.querySelector(".input-result1").
    textContent = "+ Pamidor"
  } else {
    document.querySelector(".input-result1").
    textContent = ""
  }
}

function isChacked2() {
  if(document.querySelector(".site-input2").checked) {
    document.querySelector(".input-result2").
    textContent = "+ Kurka go'shti"
  } else {
    document.querySelector(".input-result2").
    textContent = ""
  }
}
function isChacked3() {
  if(document.querySelector(".site-input3").checked) {
    document.querySelector(".input-result3").
    textContent = "+ Zaytun"
  } else {
    document.querySelector(".input-result3").
    textContent = ""
  }
}
function isChacked4() {
  if(document.querySelector(".site-input4").checked) {
    document.querySelector(".input-result4").
    textContent = "+ Tuzlangan bodiring"
  } else {
    document.querySelector(".input-result4").
    textContent = ""
  }
}
function isChacked5() {
  if(document.querySelector(".site-input5").checked) {
    document.querySelector(".input-result5").
    textContent = "+ Qo'zi qorin"
  } else {
    document.querySelector(".input-result5").
    textContent = ""
  }
}
function isChacked6() {
  if(document.querySelector(".site-input6").checked) {
    document.querySelector(".input-result6").
    textContent = "+ Qa'zi"
  } else {
    document.querySelector(".input-result6").
    textContent = ""
  }
}


function isInputQosh1() {
  if(document.querySelector(".site-input-qosh1").checked) {
    document.querySelector(".qosh-result1").
    textContent = "+ Achchiq"
  } else {
    document.querySelector(".qosh-result1").
    textContent = ""
  }
}
function isInputQosh2() {
  if(document.querySelector(".site-input-qosh2").checked) {
    document.querySelector(".qosh-result2").
    textContent = "+ Pishloq"
  } else {
    document.querySelector(".qosh-result2").
    textContent = ""
  }
}


var elBtn = document.querySelector('.btn')

function onClick() {
  alert("Buyurtma berildi")
}







// findSelected();

// var elInResult1 = document.querySelector('.input-result1')
// var elInResult2 = document.querySelector('.input-result2')
// var elInResult3 = document.querySelector('.input-result3')
// var elInResult4 = document.querySelector('.input-result4')
// var elInResult5 = document.querySelector('.input-result5')
// var elInResult6 = document.querySelector('.input-result6')
// var elInput = document.querySelector('.site-input1')

// elInput.addEventListener('click', function() {
//   elInResult1.textContent = '-- Pamidor'
// })

// var elInput = document.querySelector('.site-input2')

// elInput.addEventListener('change', function() {
//   elInResult2.textContent = "-- Kurka Go'shti"
// })

// var elInput = document.querySelector('.site-input3')

// elInput.addEventListener('change', function() {
//   elInResult3.textContent = "-- Zaytun"
// })

// var elInput = document.querySelector('.site-input4')

// elInput.addEventListener('change', function() {
//   elInResult4.textContent = "-- Tuzlangan bodiring"
// })

// var elInput = document.querySelector('.site-input5')

// elInput.addEventListener('change', function() {
//   elInResult5.textContent = "-- Qo'zi qorin"
// })

// var elInput = document.querySelector('.site-input6')

// elInput.addEventListener('change', function() {
//   elInResult6.textContent = "-- Qazi"
// })