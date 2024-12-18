/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let first = ["A ", "The "];
  let pronoun = ["I ", "they ", "her ", "our ", "their ", "you "];
  let adj = [];
  let noun = [
    "cake ",
    "car ",
    "boy ",
    "book ",
    "bed ",
    "bottle ",
    "brother ",
    "bcycle ",
    "body "
  ];
  let action = [
    "took my ",
    "broke my ",
    "hurt my ",
    "kicked my ",
    "stole my ",
    "burned my ",
    "delayed my ",
    "hit my "
  ];
  let possetion = [
    "toe ",
    "car ",
    "watch ",
    "shoe ",
    "wallet ",
    "ball ",
    "pants ",
    "keys ",
    "computer ",
    "phone ",
    "sandwich ",
    "tendril "
  ];
  let where = [
    "on the street ",
    "in my house ",
    "in my school ",
    "in front of the office ",
    "near the hospital ",
    "near the toilet ",
    "at the train station "
  ];

  let rdm1 = Math.floor(Math.random() * pronoun.length);
  let rdm2 = Math.floor(Math.random() * adj.length);
  let rdm3 = Math.floor(Math.random() * noun.length);
  let rdm4 = Math.floor(Math.random() * action.length);
  let rdm5 = Math.floor(Math.random() * possetion.length);
  let rdm6 = Math.floor(Math.random() * where.length);

  document.querySelector("#theexcuse").innerHTML =
    first +
    pronoun[rdm1] +
    adj[rdm2] +
    noun[rdm3] +
    action[rdm4] +
    possetion[rdm5] +
    where[rdm6];
};
