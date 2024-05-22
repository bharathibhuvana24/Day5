
var json = [{
  "name": "BAGYA LAKSHMI P",
    "email": "bharathibhuvana24@gmail.com",
    "phone": 984330976542,
    "degree": "B.E",
    
    },
{
  "name":"Bharathi",
  "email": "bharathibhuvana111124@gmail.com",
  "phone": 9843545415454,
  "degree": "B.E",
  
}];
console.log("forloop:");
for(var i = 0; i < json.length; i++) {
  var obj = json[i];

  console.log(obj.name);
  console.log(obj.email);
  console.log(obj.phone);
  console.log(obj.degree);

}
console.log("forEach loop:");
json.forEach(function(obj) { console.log(obj.name); });

console.log("for in loop:");
for (var key in json) {
if (json.hasOwnProperty(key)) {
console.log(json[key].email);
//console.log(json[key].msg);

}
}
console.log("for Of loop:");
let text = "";
for (let x of json[key].name) {
text += x; 
}
console.log(text);




