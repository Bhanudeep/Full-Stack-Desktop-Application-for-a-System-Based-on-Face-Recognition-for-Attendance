 function checkdetails()
      {
        var username=document.getElementById('UserName').value;
        var firstname=document.getElementById('First_Name').value;
        var lastname=document.getElementById('Last_Name').value;
        var password=document.getElementById('Password').value;
        var cpassword=document.getElementById('CPassword').value;
        var mailid=document.getElementById('Mailid').value;
        var passcode=document.getElementById('passcode').value;
        if(username.length==0 || firstname.length==0 || lastname.length==0 || password.length==0 || cpassword.length==0 || mailid.length==0 || passcode.length==0 )
        {
          document.getElementById('fillup_alert').innerHTML="Please fill all the  details";
          document.getElementById('fillup_alert').style.display="block";
          document.getElementById('signup_button').disabled=true;
        }
        else
        {
          document.getElementById('signup_button').disabled=false;
          document.getElementById('registration').action="/register";
        }
      }
      function passwordmatch()
      {
        var password=document.getElementById('Password').value;
        var cpassword=document.getElementById('CPassword').value;
        if(cpassword.length!=0 && password!=cpassword)
        {
          document.getElementById('signup_button').disabled=true;
          document.getElementById('cpassword_alert').style.display="block";
          document.getElementById('cpassword_alert').innerHTML="Passwords do not match";
        }
        else
        {
          document.getElementById('signup_button').disabled=false;
          document.getElementById('cpassword_alert').style.display="none";
        }
      }
      function checkpassword()
      {
        var password = document.getElementById('Password').value;
        var password_match = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*['@', '$', '#','_','-','~','!']).*$/;
        if(password.length!=0 && password.length<8)
        {
          document.getElementById("signup_button").disabled=true;
          document.getElementById('password_alert').style.display="block";
          document.getElementById('password_alert').innerHTML="password must contain atleast 8 characters";
          
        }
        else if(password.length!=0 && !password_match.test(password))
        {
          document.getElementById("signup_button").disabled=true;
          document.getElementById('password_alert').style.display="block";
          document.getElementById('password_alert').innerHTML="password must contain alphanumerics with atleast one special character(@,$,_,etc..), one digit(0-9) and one capital letter(A-Z)";
        }
        else
        {
          document.getElementById("signup_button").disabled=false;
          document.getElementById('password_alert').style.display="none"; 
        }
      }
      function checkmail()
      {
        var mail = document.getElementById('Mailid').value;
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mail.length!=0 && !mail.match(pattern))
        { 
          document.getElementById('signup_button').disabled=true;
          document.getElementById('mail_alert').style.display="block";
          document.getElementById('mail_alert').innerHTML="Invalid Email Id";
        }
        else
        {
          document.getElementById('signup_button').disabled=false;
          document.getElementById('mail_alert').style.display="none";
        }
      }
      function checkusername()
      {
        if(document.getElementById('UserName').value=="ADMIN")
        {
          document.getElementById('passcode_div').style.display="none";
          document.getElementById('passcode').value="NONE";
          document.getElementById('passcode').disabled=false;
        }
        else
        {
          document.getElementById('passcode_div').style.display="block";
          document.getElementById('passcode').disabled=true;

        }
      }