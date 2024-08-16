Dominio respaldo codigo
/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "my"];
  let adjective = ["great", "small", "funny"];
  let noun = ["computer", "dog"];
  let extension = [".com", ".net", ".es"];

  let domains = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          let domainGenerator =
            pronoun[i] + adjective[j] + noun[k] + extension[l];
          console.log(domainGenerator);
        }
      }
    }
  }
}
