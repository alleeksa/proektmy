
//console.log(obj);

const btnSus = document.querySelector('.btn-success');
const users =document.getElementById('users');

let request = new XMLHttpRequest();
    
request.open('GET', 'main.json', true);
       
      request.onload = function () {
        
     
      let users = JSON.parse(this.response);
      let output = '';

      for (var i = 0; i < users.length; i++) {
  output += '<h2 class="out">' + users[i].name +
   ' <p> '+'prise: ' + users[i].prise + ' <p> '+'materiale: ' + users[i].materiale +  
   '<p>'+'country:' + users[i].country + '<p>'+ 'size:' + users[i].size + 
   '<p>'+'color:' + users[i].color + `<img src="${users[i].url}" alt="" style="width: 150px;">
   <button class="btn">Вибрати</button> `;     
      }
      document.getElementById('users').innerHTML = output;
     
    }
    request.send();
    var languagesSelect = myForm.language;

const catSelect = myForm.category;
const countrySelect = myForm.country;

const colorSelect  = myForm.color;
const sizeSelect = myForm.size;



const req = new XMLHttpRequest();
req.open('GET', 'main.json', true);

function resultAll(){
  const wbstore = document.querySelector('.wbstore');
  const data = JSON.parse(req.response);
  users.innerHTML = '';
  let out = '';
  
    
  for (var i = 0; i < data.length; i++) {
   if(countrySelect.value == data[i].country){
    out += '<h2 class="out">' + data[i].name +
     ' <p> '+'prise: ' + data[i].prise + ' <p> '+'materiale: ' + data[i].materiale +  
     '<p>'+'country:' + data[i].country + '<p>'+ 'size:' + data[i].size + 
     '<p>'+'color:' + data[i].color + `<img src="${data[i].url}" alt="" style="width: 150px;">
     <button class="btn">Вибрати</button>`;    
        
  }
  if(sizeSelect.value == data[i].size){
    out += '<h2 class="out">' + data[i].name +
    ' <p> '+'prise: ' + data[i].prise + ' <p> '+'materiale: ' + data[i].materiale +  
    '<p>'+'country:' + data[i].country + '<p>'+ 'size:' + data[i].size + 
    '<p>'+'color:' + data[i].color + `<img src="${data[i].url}" alt="" style="width: 150px;">
    <button class="btn">Вибрати</button>`;    
  }
  if(colorSelect.value == data[i].color){
    out += '<h2 class="out">' + data[i].name +
    ' <p> '+'prise: ' + data[i].prise + ' <p> '+'materiale: ' + data[i].materiale +  
    '<p>'+'country:' + data[i].country + '<p>'+ 'size:' + data[i].size + 
    '<p>'+'color:' + data[i].color + `<img src="${data[i].url}" alt="" style="width: 150px;">
    <button class="btn">Вибрати</button>`; 
  }
  document.getElementById('data').innerHTML = out;
  }

    const result = (
      sizeSelect.value,
        catSelect.value,
        countrySelect.value,
        colorSelect.value
    );
    wbstore.innerHTML = '<h3 class="result">' + "Пошук : " + '<p>' + sizeSelect.value +
    '<p>' + catSelect.value + '<p>' + countrySelect.value + '<p>' + colorSelect.value;
    console.log(result);
    console.log(catSelect.value);
    //section.innerHTML  = '';
  
   
 
    
}
req.send();
    
    btnSus.addEventListener("click",resultAll);
    


function load() {
  var mydata = JSON.parse();
  alert(mydata.length);

  var div = document.getElementById('data');

  for(var i = 0;i < mydata.length; i++)
  {
     div.innerHTML = div.innerHTML + "<p class='inner' id="+i+">"+ mydata[i].name +"</p>" + "<br>";
  }
}

var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
      return new Date(value);
  } else {
      return value;
  }});

document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

 
   