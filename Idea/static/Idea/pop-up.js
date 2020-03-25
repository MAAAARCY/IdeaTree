var btn = document.getElementById('question');
var modal = document.getElementById('modal');

btn.addEventListener('click', function() {
  modal.style.display = 'flex';
})

var d_btn = document.getElementById('image-modal');
d_btn.addEventListener('click',function(e){
  if(e.target == image_modal){
  image_modal.style.display = 'none';
  }
});




window.addEventListener('click', function(e) {
    if (e.target == modal||e.target == image_modal) {
      modal.style.display = 'none';
      image_modal.style.display = 'none';
    }
});



function done_dl(){
  image_modal.style.display = 'none';

}