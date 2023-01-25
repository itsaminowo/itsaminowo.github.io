    function generateCaptcha()
         {
             var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','&','-','=','+');
             var i;
             for (i=0;i<6;i++){
               var a = alpha[Math.floor(Math.random() * alpha.length)];
               var b = alpha[Math.floor(Math.random() * alpha.length)];
               var c = alpha[Math.floor(Math.random() * alpha.length)];
               var d = alpha[Math.floor(Math.random() * alpha.length)];
               var e = alpha[Math.floor(Math.random() * alpha.length)];
               var f = alpha[Math.floor(Math.random() * alpha.length)];
              }
            var code = a + '' + b + '' + c + '' + d + '' + e + '' + f;
            document.getElementById("mainCaptcha").value = code
          }
          function CheckValidCaptcha(){
              var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
              var string2 = removeSpaces(document.getElementById('txtInput').value);
              if (string1 == string2){
             var alpha = new Array('Go to 'https://itsaminowo.github.io/findoutsearch/authVERIFY$1123421320945x/' to enter FindOut Search.','Go to 'https://itsaminowo.github.io/findoutsearch/authVERIFY$5612351325345x/' to enter FindOut Search.','Go to 'https://itsaminowo.github.io/findoutsearch/authVERIFY$1duf3241545x/' to enter FindOut Search.');
             var i;
             for (i=0;i<1;i++){
               var a = alpha[Math.floor(Math.random() * alpha.length)];
               var b = alpha[Math.floor(Math.random() * alpha.length)];
               var c = alpha[Math.floor(Math.random() * alpha.length)];
              }
            var code = a + '' + b + '' + c;
         document.getElementById('validated').innerHTML = "Go to 'https://itsaminowo.github.io/findoutsearch/authVERIFY$1123421320945x/' to enter FindOut Search.";
         //alert("CAPTCHA validated.");
                return true;
              }
              else{       
         document.getElementById('invalid').innerHTML = "CAPTCHA invalid. Please try again."; 
         //alert("CAPTCHA invalid.");
                return false;
         
              }
          }
          function removeSpaces(string){
            return string.split(' ').join('');
          }
