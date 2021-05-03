// Chapter # 43 to 48:
// Answer 1 :
// function  clik(){
//     var a = document.getElementById("clik")
//     alert ("I generatd alert box")
// }


//Answer 2 :
// function  mob(){
//     var b = document.getElementById("mob1")
//     alert ("thanks for purchasing mobile from us ")
// }

//Answer 3 :
// function deleteRow(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("chart").deleteRow(i);
//   }


//Answer 5 :
// var clicks = 0;
// function countIncrease() {
//     clicks += 1;
//     document.getElementById("clicks").innerHTML = clicks;
// }

// function countDecrease() {
//   clicks -= 1;
//   document.getElementById("clicks").innerHTML = clicks;
// }





// Chapter # 49 to 52:
//Answer 1 :

// function signupForm(){

//     var b=document.getElementById("email")
//     var c=document.getElementById("password")

//     document.getElementById("demo").innerHTML =" <h1> FORM DATA </h1> <br> Your email is " + b.value +"<br>" +" and your password is " + c.value;
// }



//Answer 2 :

// function visible(){
//     var target = document.getElementById("visible");
//     target.style.visibility ="visible";
//     function ancor (){
//         var get = document.getElementById("anchor");
//     get.style.visibility = "hidden";
//     }
//    ancor()
// }




//Answer 3 :

// var a = 0;
// function studentInfo() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     switch (true) {
//         case (name == false):
//             alert("Name is required field")
//             document.getElementById("submit").disabled = false;
//             document.getElementById("submit").studentForm() = false;
//             break;
//         case (email == false):
//             alert("Email is required field")
//             document.getElementById("submit").disabled = false;
//             document.getElementById("submit").studentForm() = false;
//             break
//         case (password == false):
//             alert("Password is required field ")
//             document.getElementById("submit").disabled = false;
//             document.getElementById("submit").studentForm() = false;
//             break
//     }

// }
// function studentForm() {
//     var getitem = document.getElementById("table");
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var row = getitem.insertRow(-1);
//     row.insertCell(0).textContent = a++;
//     row.insertCell(1).textContent = name;
//     row.insertCell(2).textContent = email;
//     row.insertCell(3).textContent = password;
//     row.insertCell(4).innerHTML = "<button onclick='deletfunc()' style='padding:5px 10px;'>Delete</button>"
//     row.insertCell(5).innerHTML = "<button onclick='editfunc()' style='padding:5px 20px;'>Edit</button>"

//     function empty() {
//         var get = document.getElementById("name");
//         var get1 = document.getElementById("email");
//         var get2 = document.getElementById("password");
//         get.value = "";
//         get1.value = "";
//         get2.value = "";
//     }
//     empty()
// }
// function deletfunc() {
//     var main = document.getElementById("table");
//     for (var i = 0; i <= main.rows.length; i++) {
//         table.rows[i].cells[3].onclick = function () {
//             index = i - 1;
//             table.deleteRow(index)
//         }


//     }

// }
// function editfunc() {
//   
//     var edit1 = prompt("Enter your Name");
//     if (edit1 == "") {
//         alert("Name is required field")
//         editfunc() == false;
//     }
//     var edit2 = prompt("Enter your email address");
//     if (edit2 == "") {
//         alert("Email is required field")
//         var edit2 = prompt("Enter your email address")
//         if (edit2 == "") {
//             alert("Email is required field")
//             editfunc() == false;
//         }
//     }
//     var edit3 = prompt("Creat a password");
//     if (edit3 == false) {
//         alert("Password is required field")
//         var edit3 = prompt("Password is required field")
//         if (edit3 == "") {
//             alert("Password is required field")
//             editfunc() == false;
//         }
//     }
//     var table = document.getElementById("table");
//     for (var i = 1; i < table.rows.length; i++) {
//         table.rows[i].cells[4].onclick = function () {
//             table.rows[i - 1].cells[1].innerHTML = edit1;
//             table.rows[i - 1].cells[2].innerHTML = edit2;
//         }
//     }

// }


// Chapter # 53 to 57:
//Answer 1 :

// function model(){
//     var car= document.getElementById("test")
//   car.className="myMain"
//   document.getElementById("call").innerHTML = "click to reset";
//   }
  
//   function mainFucntion () {
  
//   model()
//   var yar= document.getElementById("pic")
//   yar.className="mystyle";
  
//   }
  
//   function function1 () {
    
//     model()
  
  
//   var yar= document.getElementById("pic1")
//    yar.className="mystyle";
  
//   }
//   function function2 () {
//     model()
  
//   var yar= document.getElementById("pic2")
//    yar.className="mystyle";
  
//   }
//   function function3 () {
//     model()
  
//   var yar= document.getElementById("pic3")
//    yar.className="mystyle";
  
//   }



//Answer 2 :

// function zoomIn(){

//     var t=document.getElementById("para")
  
//     t.style.fontSize="30px"
//   }
  
  
//   function zoomOut(){
  
//   var t=document.getElementById("para")
  
//   t.style.fontSize="20px"
//   }
