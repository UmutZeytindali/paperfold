function fold() {
  let val = document.getElementById("times").value;
  let result = document.getElementById("result");
  let foldResult = 0.01;
  for (let i = 1; i <= val; i++) {
    foldResult *= 2;
  }
  if (foldResult >= 990352031428304175103) {
    result.innerHTML = "too damn";
  } else if (foldResult >= 100000) {
    result.innerHTML = (foldResult / 100000).toFixed(2) + "km";
  } else if (foldResult >= 100) {
    result.innerHTML = (foldResult / 100).toFixed(2) + "m";
  } else {
    result.innerHTML = foldResult + "cm";
  }
}

function whyNot() {
  let why = document.getElementById("why");

  if (why.innerText == "Why?") {
    why.innerText = "Why Not?";
  } else if (why.innerText == "Why Not?") {
    why.innerText = "Why?";
  }
}

export function fold();
export function whyNot();