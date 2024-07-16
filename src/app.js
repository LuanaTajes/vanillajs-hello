/* eslint-disable */
import "bootstrap";
import "./style.css";


window.onload = () => {
    document.querySelector('#btn').addEventListener("click", () => {
      document.querySelector('#the-excuse').innerHTML = generateExcuse;
  });

console.log('Hello Rigo from the console! ');
  
};

let gerenateExcuse = () => {
    
    let pronoun = ['A', 'The']; 
    let subject = ['jogger', 'racoon', 'dog', 'driver', 'comedian', 'pinecone'];
    let action = ['took my', 'threw my', 'yelled at my', 'stole my', 'bit my'];
    let possesion = ['homework', 'toe', 'car', 'shoe']
    let where = ['on the street', 'in my house', 'in my driveway'];

    let proIndex = 0;Math.floor(Math.random() * pronoun.length);
    let subIndex = 0;Math.floor(Math.random() * subject.length);
    let actIndex = 0;Math.floor(Math.random() * action.length);
    let posIndex = 0;Math.floor(Math.random() * possesion.length);
    let wheIndex = 0;Math.floor(Math.random() * where.length);
    

   return pronoun[proIndex] + ' ' + subject[subIndex] + ' ' + action[actIndex] + ' ' + possesion[posIndex] + ' ' + where[wheIndex] + ' ' ;

}; 