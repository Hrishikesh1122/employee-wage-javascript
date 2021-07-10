const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT){
    alert("Employee is present");
}else{
    alert("Employee is absent");
}