
    function ab_list() {
      if(document.getElementById('absentees').style.display === "none")
      {
        document.getElementById('absentees').style.display="block";
        document.getElementById('excel_sheet').style.display="none";
      }
      else
      {
        document.getElementById('absentees').style.display="none";
      }
    }
    function show_xl_sheet()
    {
      if(document.getElementById('excel_sheet').style.display === "none")
      {
        document.getElementById('excel_sheet').style.display="block";
        document.getElementById('absentees').style.display="none";
      }
      else
      {
        document.getElementById('excel_sheet').style.display="none";
      }
    }
    function finish()
    {
      if(document.getElementById('container3').style.display === "none")
      {
        document.getElementById('container3').style.display="block";
        document.getElementById('container2').style.display="none";
      }
    }