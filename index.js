
$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');
    
  },
  allowPageScroll:"vertical"

});

function handleShow(){
  let id = document.getElementById('show')
  let btn = document.getElementById('btn')
  if(id.style.display === 'none'){
    id.style.display = 'block'
    btn.style.display= 'none'

  }else{
    id.style.display = 'none'
    btn.style.display= 'block'
  }
}
