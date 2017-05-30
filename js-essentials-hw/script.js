var name, time, place, event



function submit_form() {
  name = document.getElementById('name').value;
  time = document.getElementById('time').value;
  place = document.getElementById('place').value;

  event=prompt("Please specify event:");
  console.log(name + ' has a ' + event + ' today at ' + time + ' somwhere in ' + place);
} 