// console.log("dark and light");

//     function darkLightMode(){
        
        
// document.getElementById("MyElement").classList.remove('light');
//         document.getElementById("preloader").classList.remove= "dark";
//     }
//     window.onload = function(){
//         document.getElementById("MyElement").addEventListener( 'click', darkLightMode);


 function darkLightMode(){
        
        if( document.getElementById( "darkAndLightMode").classList.contains('dark') ){

          document.getElementById("darkAndLightMode").classList.remove('dark');
          document.getElementById("darkAndLightMode").classList.add('light');
          document.getElementById("darkLightMode").innerHTML="On Dark Mode";
          document.getElementById("darkLightMode").style="background-color:None";

       
              }else {
                 document.getElementById("darkAndLightMode").classList.remove('light');
                document.getElementById("darkAndLightMode").classList.add('dark');
                document.getElementById("darkLightMode").innerHTML="Off Dark Mode";
                document.getElementById("darkLightMode").style="background-color:black";
        }

       }
        