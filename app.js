let lights = document.querySelector('#morse-img');
const onSrc = "./img/on.png";
const offSrc = "./img/off.png";
const text = document.querySelector('#enter-text');
const original = document.querySelector('#original');
const ditDat = document.querySelector("#morse");
document.querySelector("#translate").addEventListener("click", translate);

const morse = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----"

}

function translate() {
  let result = "";
  let showResult = result;
  console.log(text.value);
  let sentText = text.value.toLowerCase();
  let textArr = sentText.split(" ")
  textArr.forEach(function(word){
    word.split('').forEach((letter) => result += (morse[letter] + ","));
    word.split('').forEach((letter) => showResult += (morse[letter] + ' '));
    result += ' ';
    showResult += ' ';
  }
  )
  original.textContent = text.value;
  ditDat.textContent = showResult;
  text.value = '';
  blink(result);
}



function blink(str) {
  let time = 0;
  let char = str.split('')
  char.forEach(function(x){
    switch(x) {
      case '.':
        setTimeout(() => lights.src = onSrc, time);
        time += 300;
        setTimeout(() => lights.src = offSrc, time);
        time += 300;
        break;
      case '-':
        setTimeout(() => lights.src = onSrc, time);
        time += 900;
        setTimeout(() => lights.src = offSrc, time);
        time += 300;
        break;
      case ',':
        time += 600;
        break;
      case ' ':
        time += 1600;
        break;
    }
  
  })
}
