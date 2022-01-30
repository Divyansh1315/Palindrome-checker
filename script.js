const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const text = document.querySelector(".input-text");

btn.addEventListener("click", palindrome);

function palindrome() {
  const word = document.querySelector(".input-text").value;
  let len = word.length;

  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();

  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  let flip = [...end].reverse().join("");
  if (start == flip) {
    result.innerHTML = `${word.toUpperCase()} is a palindrome. `;

    result.style.color = "green";
  } else if (start != flip) {
    result.innerHTML = `${word.toUpperCase()} is NOT a Palindrome`;
    result.style.color = "red";
  }
}
