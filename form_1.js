//form validation 
var sub = document.getElementById("sd");
sub.onclick = function validate(){

    var n = document.getElementById("fn");
    var m = document.getElementById("ps");

    if(n.value=='' ||m.value=='' ){
        alert("Field can't be empty");
}

    else{}

    if(m.value.length<3 || m.value>9){
    alert("Password is not valid");
    }
    var str=n.value.slice(0,1);
    if(str=='_' || str=='$'){
        alert("Username is not valid");
    }

}




// var sub=document.getElementById("sd");
// sub.onclick=function validate(){
//     var n=document.getElementById("un");
//     var m=document.getElementById("ps");
//     if(n.value==''||m.value==''){
//         alert("Fields can't be empty");
//     }
//     else{}
    
//     if(m.value.length<3||m.value.length>9){
//         alert("password is not valid");
//     }
    
//     var str=n.value.slice(0,1);
//     if(str=='_'||str=='$'){
//         alert("username is not valid");
              
//        }
    
   
// }
