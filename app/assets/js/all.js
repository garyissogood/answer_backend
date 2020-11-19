

$(document).ready(() => {

  // menu click
  if(location.pathname == '/admin.html'){
    $('.new-admin').hide()
    $('.all-courses').show()
    $('ul li').removeClass('active')
    $('ul li:nth-child(5)').addClass('active')
  }else{
    $('.new-admin').show()
    $('.all-courses').hide()
  }

  $('.btn-edit').click(function(){
    $('.editor').removeClass('d-none')
    $('.user-self-feedback').addClass('d-none')
  })

  $('.btn-cancel').click(function(){
    $('.editor').addClass('d-none')
    $('.user-self-feedback').removeClass('d-none')
  })

});


