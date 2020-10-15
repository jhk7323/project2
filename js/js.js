 $(document).ready(function () {

   $('.tab1').click(function () {
       $('.tab_contents').show();
       $('.tab_contents2').hide();
       $('.tab_contents3').hide();
       $('.tab_contents4').hide();
   });
       
   $('.tab2').click(function () {
       $('.tab_contents2').show();
       $('.tab_contents').hide();
       $('.tab_contents3').hide();
       $('.tab_contents4').hide();
  });
       
   $('.tab3').click(function () {
       $('.tab_contents3').show();
       $('.tab_contents2').hide();
       $('.tab_contents4').hide();
       $('.tab_contents').hide();
  
       });
   $('.tab4').click(function () {
       $('.tab_contents4').show();
       $('.tab_contents').hide();
       $('.tab_contents2').hide();
       $('.tab_contents3').hide();
  
         });
                    });