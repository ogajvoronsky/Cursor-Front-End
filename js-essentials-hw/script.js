var name, time, place, event;
var curs_uah = 26;
var curs_euro = 30;
// var curs


// $.getJSON("http://resources.finance.ua/ua/public/currency-cash.json", function(data){
//     curs = JSON.parse(data);
// });



function submit_form() {
  name = document.getElementById('name').value;
  time = document.getElementById('time').value;
  place = document.getElementById('place').value;

  event=prompt("Please specify event:");
  console.log(name + ' has a ' + event + ' today at ' + time + ' somwhere in ' + place);
} 


function conv_dollar() {
  cash = parseInt(prompt('Сума в доларах:') );
  alert(cash.toString() + ' Dollars are equal to '+ (cash*curs_uah).toString() + ' grns' );  }

function conv_euro() {
  cash = parseInt(prompt('Сума в євро:') );
  alert(cash.toString() + ' Euros are equal to '+ (cash*curs_euro).toString() + ' grns' ); }