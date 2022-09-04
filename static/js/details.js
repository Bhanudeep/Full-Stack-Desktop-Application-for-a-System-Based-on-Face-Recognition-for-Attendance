// ******************************************************* Home page options ****************************************************************** 

  function Take_Attendance()            // Function to perform actions after clicking Take_attendance button
  {
    document.getElementById('container1').style.display="none";
    document.getElementById('container2').style.display="block";
    document.getElementById('container3').style.display="none";
    document.getElementById('container4').style.display="none";
    document.getElementById('excel_sheet').style.display="none";
  }
  function Take_Attendance_com()            // Function to perform actions after clicking Take_attendance button
  {
    document.getElementById('container1').style.display="none";
    document.getElementById('container2').style.display="none";
    document.getElementById('container3').style.display="block";
    document.getElementById('container4').style.display="none";
    document.getElementById('excel_sheet').style.display="none";
  }

  function view_attendance()          // Function to perform actions after clicking view_attendance button
  {
    document.getElementById('container1').style.display="none";
    document.getElementById('container2').style.display="none";
    document.getElementById('container3').style.display="none";
    document.getElementById('container4').style.display="block";
    document.getElementById('excel_sheet').style.display="none";
  }

 // ****************************************************** Take attendance form functions ***********************************************************
  function lengths()
  {
     d_l=document.getElementById('department_alert').innerHTML.length;
     y_l=document.getElementById('year_alert').innerHTML.length;
     s_l=document.getElementById('subject_alert').innerHTML.length;
     h_l=document.getElementById('hour_alert').innerHTML.length;
  };
  function checkdepartment(){                 // Function to check department feild is having only alphabet
     var Dep=document.Attendance.department.value;
     var number = /[0-9]/;
     var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/;
     lengths();
    if(number.test(Dep))
    {
      document.getElementById('department_alert').style.display="block";
      document.getElementById('department_alert').innerHTML="Please ensure that Department field should not contain digits";
      document.getElementById('take_search_button').disabled=true;
    }
    else
    {
      if (format.test(Dep))
      {
        document.getElementById('department_alert').style.display="block";
        document.getElementById('department_alert').innerHTML="Department field should not contain any spaces or special characters except comma(,)";
        document.getElementById('take_search_button').disabled=true;
      }
      else
      {
        document.getElementById('department_alert').innerHTML="";
        document.getElementById('department_alert').style.display="none";
        if(y_l==0 && s_l==0 && h_l==0 )
        {
          document.getElementById('take_search_button').disabled=false;
        }
      }
    }
  }

  function checkyear(){                      // Function to Check Year field have only digit
    var Year=document.Attendance.year.value;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    lengths();
    if(isNaN(Year) || format.test(Year))
    {
      document.getElementById('year_alert').style.display="block";
      document.getElementById('year_alert').innerHTML="Please ensure that Year field have a single digit number";
      document.getElementById('take_search_button').disabled=true;
    }
    else
    {
      document.getElementById('year_alert').innerHTML="";
      document.getElementById('year_alert').style.display="none";
      if(d_l==0 && s_l==0 && h_l==0)
      {
        document.getElementById('take_search_button').disabled=false;
      }
    }
  }

  function checksubject(){                // Function to check section filed have only alphabet
    var Subject=document.Attendance.subject.value;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    lengths();
    if(!isNaN(Subject) && Subject.length!=0)
    {
      document.getElementById('subject_alert').style.display="block";
      document.getElementById('subject_alert').innerHTML="Please ensure that subject code field should not contain only digits";
      document.getElementById('take_search_button').disabled=true;
    }
    else if(format.test(Subject))
    {
      document.getElementById('subject_alert').style.display="block";
      document.getElementById('subject_alert').innerHTML="Please ensure that subject code field should not contain any spaces or special characters except comma(,)";
      document.getElementById('take_search_button').disabled=true; 
    }
    else
    {
      document.getElementById('subject_alert').innerHTML="";
      document.getElementById('subject_alert').style.display="none";
      if(d_l==0 && y_l==0 && h_l==0)
      {
        document.getElementById('take_search_button').disabled=false;
      }
    }
  }

  function checkhour(){                 // Function to check hour field have only digit
    var hr=document.Attendance.hour.value;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    lengths();
    if(isNaN(hr) || format.test(hr))
    {
      document.getElementById('hour_alert').style.display="block";
      document.getElementById('hour_alert').innerHTML="Please ensure that Hour field have a single digit number";
      document.getElementById('take_search_button').disabled=true;
    }
    else
    {
      document.getElementById('hour_alert').innerHTML="";
      document.getElementById('hour_alert').style.display="none";
      if(d_l==0 && y_l==0 && s_l==0)
      {
        document.getElementById('take_search_button').disabled=false;
      }
    }
  }

//****************************************************************************************************************************************

// ******************************************** view attendance forms functions *******************************************************
  function length()
  {
    v_d_l=document.getElementById('view_department_alert').innerHTML.length; // view attendance department alert length
    v_y_l=document.getElementById('view_year_alert').innerHTML.length;       // view attendance year alert length
    v_s_l=document.getElementById('view_subject_alert').innerHTML.length;    // view attendance subject alert length
  }

  function view_checkdepartment(){                 // Function to check department feild is having only alphabet
    length();
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;    
    var Dep=document.view_Attendance_form.department.value;
    var number = /[0-9]/;
    if(number.test(Dep))
    {
      document.getElementById('view_department_alert').style.display="block";
      document.getElementById('view_department_alert').innerHTML="Please ensure that Department field should contain alphabet only";
      document.getElementById('view_search_button').disabled=true;
    }
    else if(format.test(Dep))
    {
      document.getElementById('view_department_alert').style.display="block";
      document.getElementById('view_department_alert').innerHTML="Department field should not contain any spaces or special characters ";
      document.getElementById('view_search_button').disabled=true;
    }
    else
    {
      document.getElementById('view_department_alert').innerHTML="";
      document.getElementById('view_department_alert').style.display="none";
      if(v_y_l==0 && v_s_l==0)
      {
        document.getElementById('view_search_button').disabled=false;
      }
    }
    
  }

  function view_checkyear(){                      // Function to Check Year field have only digit
    length();
    var Year=document.view_Attendance_form.year.value;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(isNaN(Year) || format.test(Year))
    {
      document.getElementById('view_year_alert').style.display="block";
      document.getElementById('view_year_alert').innerHTML="Please ensure that Year field have a single digit number";
      document.getElementById('view_search_button').disabled=true;
    }
    
    else
    {
      document.getElementById('view_year_alert').innerHTML="";
      document.getElementById('view_year_alert').style.display="none";
      if(v_d_l==0 && v_s_l==0)
      {
        document.getElementById('view_search_button').disabled=false;
      }
    }
  }

  function view_checksubject(){                // Function to check section filed have only alphabet
    length();
    var Subject=document.view_Attendance_form.subject.value;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if((!isNaN(Subject) || format.test(Subject)) && (Subject.length!=0))
    {
      document.getElementById('view_subject_alert').style.display="block";
      document.getElementById('view_subject_alert').innerHTML="Please ensure that subject code field should not contain only digits or spaces or special characters ";
      document.getElementById('view_search_button').disabled=true;    
    }
    
    else
    {
      document.getElementById('view_subject_alert').innerHTML="";
      document.getElementById('view_subject_alert').style.display="none";
      if(v_d_l==0 && v_y_l==0)
      {
        document.getElementById('view_search_button').disabled=false;
      }
    }
  }

// ************************************************************************************************************************************
  function show_attendance()          // Function to perform actions after clicking show_attendance button
  {

    document.getElementById('view_attendance_div').style.display="none";
    document.getElementById('container1').style.border="2px solid black";
    document.getElementById('container3').style.display="none";
    document.getElementById('container2').style.display="none";
    document.getElementById('excel_sheet').style.display="block";
  }

// *********************************************************************************************************************************