var button=document.getElementById("enter");
 var input=document.getElementById("userbro");
  var bhai=document.querySelector("ul");

   function InputLength()
   {
   	 return(input.value.length);
   }

    function createElement()
    {
    	 var li=document.createElement("li");
      li.appendChild(document.createTextNode(input.value));
       bhai.appendChild(li);
         input.value="";
     }

      function  actionafterbclick()
      {
      	 if(InputLength()>0){
        createElement();
  }
      }

      function actionafterEnter(event)
      {
      	     // console.log(event); to check the charCode and keyCode of  events;
              if(InputLength()>0 && event.charCode===13){
      createElement();
     }
      }
 button.addEventListener("click", actionafterbclick);
  input.addEventListener("keypress", actionafterEnter);