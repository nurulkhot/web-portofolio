const txtElement = ["Nurul Khotimah", "IT Enthusiast", "Merupakan Seorang Pemula,"];
let count = 0;
let txtIndex = 0;
let currentTxt = " ";
let words = " ";

(function ngetik(){
    if(count== txtElement.length){
        count=1;
    }

    currentTxt=txtElement[count];

    words=currentTxt.slice(0, ++txtIndex);
    document.querySelector(".efek-ngetik").textContent=words;
    
   

    if(words.length == currentTxt.length){
        count++;
        txtIndex=0;
    }

    setTimeout(ngetik, 300);
})();