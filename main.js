var area=document.getElementById('area'),
m=0;

area.addEventListener('click',function(event){
    if(m%2==0){
    event.target.innerHTML="x";}
    else{event.target.innerHTML="0";}
    m++;
    check();
    if(!event.target.classList.contains('highlight')){event.target.classList.add('highlight');}
    else event.target.classList.remove('highlight');
});

function check(){
var boxes=area.getElementsByClassName('box');

var arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
for(let i=0;i<arr.length;i++){
    if(boxes[arr[i][0]].innerHTML=='x' && boxes[arr[i][1]].innerHTML=='x' && boxes[arr[i][2]].innerHTML=='x'){
        alert("Выйграл х");
        location.reload();
       
    }
    else if(boxes[arr[i][0]].innerHTML=='0' && boxes[arr[i][1]].innerHTML=='0' && boxes[arr[i][2]].innerHTML=='0'){
        alert("Выйграл 0");
        location.reload();
       
    }
}
}

