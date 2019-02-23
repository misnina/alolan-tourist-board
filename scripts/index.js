$(()=>{

  $('#main-top-right').click((e)=> {
    $('#blue-side').show();
    $('#red-side').hide();
  });

  $('#main-top-left').click((e)=> {
    $('#red-side').show();
    $('#blue-side').hide();
  });

});