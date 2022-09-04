
      function checkdetails()
      {
        var password=document.getElementById('Password').value;
        var cpassword=document.getElementById('ConfirmPassword').value;
        var otp=document.getElementById('OTP').value;
        if(password.length==0 || cpassword.length==0 || otp.length==0 )
        {
          document.getElementById('fillup_alert').innerHTML="Please fill all the  details";
          document.getElementById('fillup_alert').style.display="block";
          document.getElementById('resetpassword_button').disabled=true;
        }
        else
        {
          document.getElementById('resetpassword_button').disabled=false;
        }
      }
      function passwordmatch()
      {
        var password=document.getElementById('Password').value;
        var cpassword=document.getElementById('ConfirmPassword').value;
        if(cpassword!=0 && password!=cpassword)
        {
          document.getElementById('resetpassword_button').disabled=true;
          document.getElementById('cpassword_alert').style.display="block";
          document.getElementById('cpassword_alert').innerHTML="Passwords do not match";
        }
        else
        {
          document.getElementById('resetpassword_button').disabled=false;
          document.getElementById('cpassword_alert').style.display="none";
        }
      }
      function checkpassword()
      {
        var password = document.getElementById('Password').value;
        var password_match = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*['@', '$', '#','_','-','~','!']).*$/;
        if(password.length!=0 && password.length<8)
        {
          document.getElementById("resetpassword_button").disabled=true;
          document.getElementById('password_alert').style.display="block";
          document.getElementById('password_alert').innerHTML="password must contain atleast 8 characters";
          
        }
        else if(password.length!=0 && !password_match.test(password))
        {
          document.getElementById("resetpassword_button").disabled=true;
          document.getElementById('password_alert').style.display="block";
          document.getElementById('password_alert').innerHTML="password must contain alphanumerics with atleast one special character(@,$,_,etc..), one digit(0-9) and one capital letter(A-Z)";
        }
        else
        {
          document.getElementById("resetpassword_button").disabled=false;
          document.getElementById('password_alert').style.display="none"; 
        }
      }