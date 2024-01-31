/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon", "puedes", "internet", "telecom", "airbus"];
  let ext = [".com", ".net", ".us", ".io", ".es"];

  for (let i = 0; i < pronoun.length; i++) {
    pronoun.forEach(pronombre => {
      adj.forEach(adjetivo => {
        noun.forEach(sustantivo => {
          ext.forEach(extension => {
            let sustantivoHack = sustantivo.slice((extension.length - 1) * -1);
            let extensionHack = extension.slice((extension.length - 1) * -1);
            let sustantivoHackSinExt = sustantivo.slice(
              0,
              sustantivo.length - (extension.length - 1)
            );

            if (sustantivoHack == extensionHack) {
              let domainHack;
              domainHack =
                pronombre + adjetivo + sustantivoHackSinExt + extension;
              console.log(domainHack);
            } else {
              console.log(pronombre + adjetivo + sustantivo + extension);
            }
          });
        });
      });
    });
  }
};
