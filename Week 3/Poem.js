const txts=document.querySelector(".animate-text").children,
               txtsLen=txts.length;
           let index=0;
          const textInTimer=4000,
                textOutTimer=3800;

         function animateText() {
            for(let i=0; i<txtsLen; i++){
              txts[i].classList.remove("text-in","text-out");  
            }
            txts[index].classList.add("text-in");

            setTimeout(function(){
                txts[index].classList.add("text-out");              
            },textOutTimer)

            setTimeout(function(){

              if(index == txtsLen-1){
                  index=0;
                }
               else{
                   index++;
                 }
                animateText();
            },textInTimer); 
         }
         
         window.onload=animateText;

         function togglePopup(){
          document.getElementById("popup").classList.toggle("active");
      }

      document.getElementById("js_hover").onmouseover = function() {mouseOver()};
      document.getElementById("js_hover").onmouseout = function() {mouseOut()};

      function mouseOver(js_hover) {
        js_hover.style.color = "#635FAB";
      }

      function mouseOut(js_hover) {
          js_hover.style.color = "#556e8f";
      }
