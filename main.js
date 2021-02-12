var student_array=[];
function submit(){
    for (i=1;i<9;i++){
        var name=document.getElementById("NameOfStudent_"+i).value;
        console.log(name);
        student_array.push(name);
        document.getElementById("output").innerHTML=student_array;
    }
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function Sorting(){
    student_array.sort()
    document.getElementById("output").innerHTML=student_array;
}
