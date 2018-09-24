/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

window.onload = function(){

    function newCard(){
        var value = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        var suits = ["&heartsuit;" , "&diamondsuit;", "&clubs;", "&spadesuit;"];
        
        var num = Math.floor(Math.random() * value.length);
        var randomValue = value[num];
        
        var suit = Math.floor(Math.random() * suits.length);
        var randomSuit = suits[suit];
        
        
        
        if (randomSuit === "&heartsuit;" || randomSuit === "&diamondsuit;"){
          document.getElementById('topSuit').className="";
          document.getElementById('bottomSuit').className="";
          document.getElementById('topSuit').classList.add('turnRed');
          document.getElementById('bottomSuit').classList.add('turnRed');
        }
        
        document.getElementById('cardValue').innerHTML=randomValue;
        
        document.getElementById('topSuit').innerHTML = randomSuit;
        
        document.getElementById('bottomSuit').innerHTML = randomSuit;

    }
    
    
};