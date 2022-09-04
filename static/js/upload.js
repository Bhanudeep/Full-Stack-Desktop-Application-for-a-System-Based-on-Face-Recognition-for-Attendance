    function checkcount()
    {
      var count=document.Attendance.count.value;
      if(count.length>0)
      {
        document.getElementById('image').disabled=true;
        document.getElementById('verify_button').disabled=true;
        document.getElementById('img_div').style.display='none';
        document.getElementById('details_alert').style.display="none";
      }
      var total=document.Attendance.total.value;
      if(total.length==0)
      {
        document.Attendance.total.value=0;
      }
    }
    function img_info()
    {
      document.getElementById("details_alert").style.display="none";
      document.getElementById('verify_button').style.display="block";
      document.getElementById("imglabel").style.color="green";
      document.getElementById("imglabel").innerHTML="Image is captured";
    }
    function verify()
    {
      document.getElementById('Attendance').action="/upload";
      image_value=document.getElementById('image');
      if(image_value.files.length==0)
      {
        alert("Please capture the image..");
      }
      else
      {
      document.getElementById('details_alert').style.display="none";
      document.getElementById('img_div').style.display="none";
      document.getElementById('verify_stmt').style.display="block";
      document.getElementById('location_stmt').style.display="block";
      }
    }
    function verifycom()
    {
      document.getElementById('Attendance').action="/upload";
      image_value=document.getElementById('image');
      if(image_value.files.length==0)
      {
        alert("Please capture the image..");
      }
      else
      {
      document.getElementById('details_alert').style.display="none";
      document.getElementById('img_div').style.display="none";
      document.getElementById('verify_stmt').style.display="block";
      document.getElementById('location_stmt').style.display="block";
      }
    }
    function finisher()
    {
      document.getElementById('details_alert').style.display="none";
      document.getElementById('finish_button').style.display="none";
      document.getElementById('discard_button').disabled=true;
      var sampleDiv = document.getElementById('statement');
      sampleDiv.style.display="block";
      var Count=document.Attendance.count.value;
      var Total=document.Attendance.total.value;
      x=parseInt(Count);
      y=parseInt(Total);
      result=x+y;
      document.getElementById("ttl").innerHTML = parseInt(result);
      document.getElementById('processing_statement').style.display="block";
      document.getElementById('Attendance').action="/mark_attendance";
    }
