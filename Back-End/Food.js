/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Set up database
//making all indexed db version respond to the same call
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
//Some other commands must also be "generalised"
//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
//if the function returns false then whatever browser is in use does not support indexed DB and the code sends below alert
if (!window.indexedDB) {
window.alert("Your browser doesn't support a stable version of IndexedDB.");
}

function food(){
  this.name = name; 
  this.E = E;
  this.H = H;
  this.P = P;
  this.cal = cal; 
  
  this.compare = function(){
  //Function to compare
  };
  
  this.suggest = function(){
      //function to suggest alternatives
  };
  
  this.displayinfo = function(){
    //display product info  
  };
}
