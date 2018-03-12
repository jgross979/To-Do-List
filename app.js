$(function(){
  let newItem = $('.new_item')
  let ul = $('ul')
  let plus = $('.plus')
  let input = $('input')


  //Add Item
  newItem.on('keypress', function(e){
    if(e.which === 13 && newItem.val() !== ''){
      ul.append(`<li><span class = "trash"><i class="far fa-trash-alt"></i></span>${newItem.val()}</li>`);
      newItem.val('');
    }
  })

  //Remove items
  ul.on('click', '.trash', function(){
    $(this).parent().remove()
  })

  //Toggle input menu
  plus.on('click', function(){
    input.fadeToggle()
  })

  //Toggle complete
  ul.on('mouseover', 'li', function(){
    $(this).addClass('complete')
  })

  ul.on('mouseleave', 'li', function(){
    $(this).removeClass('complete')
  })

  ul.on('click', 'li', function(){
    if(!$(this).hasClass('complete_perm')){
      $(this).addClass('complete_perm')
    }else{
      $(this).removeClass('complete_perm')
    }
  })



})
