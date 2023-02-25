var a = 20 
var b = 40
console.log(a)
var a = "hello"
console.log(a) ;
var a = 10 ;
var b = 20 
console.log(a+b)
var c = "hello"
var d = "hi"
console.log(c+d)
console.log(a+c)
console.log(c+a)
var z = 7
var y = parseInt(a/z)
console.log(y)
console.log(a**z)
var a =10 ;
var b = "10" ;
console.log(a==b)
console.log(a===b)
console.log(a!=b)
console.log(a!==b)
console.log(a==b?"hello":"hi")
var data = {'name':"Shubham" , 'age':22}
console.log(data)
var data = ['apple' , 'bananna' , '10']
console.log(data)
var data = new Date() ;
console.log(data)
var a = 'I am a software engineer'
console.log(a.length) ;
console.log(a.toUpperCase())
console.log(a.toLowerCase())
a = a.replace('engineer','doctor')
console.log(a)
var b = "hello World"
var c = a.concat(b) ;
console.log("     "+c)
console.log(("   "+c).trimStart());
console.log("     "+c+"      "+"hi") ;
console.log(("     "+c+"      ").trimEnd()+"hi")
var a = ['a','b','c'] ;
console.log(a.reverse())
var a = ['a','b','c','d','e','f']
console.log(a.length)
a.push('g')
console.log(a)
a.pop() ;
console.log(a)
a.shift() ;
console.log(a)
a.unshift('a')
console.log(a)
a[2] = 'm'
console.log(a)
console.log(a.slice(1,3)) ;
console.log(a.toString())
//function

function myFunction(a,b){
    return a*b ;
}
console.log(myFunction(10,20))
var date = new Date() ;
console.log(date);
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDay())
console.log(date.getSeconds())
console.log(date.setFullYear(2018))
console.log(date.setHours(14))
console.log(date)
var a = "-"
var a1 = 10 ;
var a2 = 20 ;
var result = 0 ;
switch(a){
    case"+":result=a1+a2;break;
    case"-":result=a1-a2;break;
    case"*":result=a1*a2;break;
    case"/":result=a1/a2;break;
    default:result=0 ;
}
console.log(result) ;
arr1= ['a','b','c','d']
for(var i = 0 ; i<arr1.length ; i++){
    console.log(arr1[i])
}
for(var i in arr1){
    console.log(arr1[i])
}
for(var i of arr1){
    console.log(i)
}
var i = 0 ;
while(i<10){
    console.log(i);
    i++ ;
}
//Hoisting
x = "Shubham"
console.log(10,20) ;
var x ;
console.log(x) ;
var arr = ['a','b','c','d'] ;

arr.map(myFunction1)
function myFunction1(item,index){
    console.log(index,item) ;
}
arr.map((element,i)=>
    console.log(element,i)
)
var arr9 = arr.filter((item)=>item!='a'); //this is returning an array .
console.log(arr) ;
console.log(arr9);
class findarea{
    constructor(l,b){
        this.l = l ;
        this.b = b ;
    }
    area(){
        return this.l*this.b
    }
}
var t = new findarea(20,30) ;
console.log(t.area());
var arr123 = [1,2,3] ;
var a = Array.from(arr123,item=>item+item) ;
console.log(a);
var abc = {'name':'Shubham' , 'role':'Mentor'} ;
console.log(abc.name) ;
console.log(abc.role) ; 
//targeting element by id
var ele1 = document.getElementById('one');
console.log(ele1)
var ele2 = document.getElementsByName('one')
console.log(ele2);
var ele3 = document.getElementsByTagName('p')
console.log(ele3)
var ele4 = document.getElementsByClassName('one');
console.log(ele4)
var ele5 = document.querySelector(".one")
console.log(ele5)
var ele6 = document.querySelectorAll(".one")
console.log(ele6)
var ele7 = document.getElementById('two')
console.log(ele7.parentNode);
var ele8 = document.getElementById('three')
console.log(ele8.nextElementSibling)
console.log(ele8.previousElementSibling)
var ele13 = document.querySelector('.one')
console.log(ele13.childNodes)
//Manipulating HTML
//1 creating a div using js
var ele14 = document.createElement('div');
console.log(ele14) ;
ele14.id = 'Sample'
ele14.className = 'Sample'
ele14.textContent = 'hello World'
document.body.appendChild(ele14)
//2 Unorder list using JS
var ul = document.createElement('ul') ;
var createList=(task)=>{
    var li = document.createElement('li');
    li.textContent = task ;
    return li ;
}
ul.appendChild(createList('task1')) ;
ul.appendChild(createList('task2')) ;
document.body.appendChild(ul);
var ele15 = document.getElementById('one') ;
console.log(ele15.textContent);
var ele16 = document.getElementById('one') ;
console.log(ele16.innerText);
var ele17 = document.getElementById('one')
ele17.textContent = 'Hello World'
console.log(ele17)
var ele18 = document.createElement('div')
ele18.innerHTML = `<p class ="three">Hello everyone</p>`
document.body.appendChild(ele18)
var p = document.querySelector('.three')
console.log(p.innerHTML)
console.log(p.innerText)
var ele19 = document.createElement('h2')
ele19.textContent = "feeling awesome" ;
var ele20 = document.getElementById("five")
ele20.before(ele19)
var ele21 = document.createElement('h2')
ele21.textContent = "hello hi hey"
ele20.after(ele21)
var ele22 = document.createElement('h1') ;
ele22.textContent = "JS is Fun"
ele20.appendChild(ele22) ;
var ele23 = document.createElement('h4')
ele23.textContent = "JS is fun 123!!!"
ele20.prepend(ele23)
console.log(ele23)
var ele24 = document.createElement('h4')
ele24.textContent = 'JS is fun1234545!!!!'
ele20.replaceChild(ele24,ele23)
var ele25 = ele13.cloneNode() ;
console.log(ele13)
console.log(ele25)
ele13.removeChild(ele13.firstElementChild)
console.log(ele13)
console.log(ele20.getAttribute('class'))
ele20.setAttribute('class','check')
console.log(ele20.getAttribute('class'))
ele20.style.color = 'red'
ele20.style.backgroundColor = 'aqua'
ele13.className+=" add me "
console.log(ele13.classList)
ele13.classList.add('addme2') ;
console.log(ele13.classList)
ele13.classList.remove("add") ;
ele13.classList.replace('addme2','addme3');
console.log(ele13.classList)
console.log(ele13.classList.contains('addme3'))
var ele26 = ele24.getBoundingClientRect()
console.log(ele26)
var style = getComputedStyle(ele24)
console.log(style)
//Event Handling
let btn = document.getElementById('btn');
// btn.addEventListener('click',display) ;
// function display(){
//     alert("Button is clicked") ;
// }
// btn.addEventListener('click',()=>{
//     alert('Hello')
// })
// btn.addEventListener('click',(event)=>{
//     console.log(event) ;
//     alert('Hello') ;
// })
let anch = document.getElementById('google');
console.log(btn) ;
console.log(anch);
// anch.addEventListener('click',(event)=>{
//     event.preventDefault() ;
// })
var a21 = 22 ;
console.log(`The value of a is : ${a21}`)
btn.addEventListener('click',(event)=>{
    console.log('Hello')
    event.stopPropagation() ;
})
document.body.addEventListener('click',(event)=>{
    console.log("hello2")
})
btn.addEventListener('mouseover',()=>{
    console.log('I am down')
})
window.addEventListener('scroll',()=>{
    console.log('I am scrolling')
})
var array1 = [1,2,3,4,5,6,7,8,9,10] ;
function checker(array1,callback){
    var array2 = []
    for(var i of array1){
        if(callback(i)){
            array2.push(i) ;
        }
    }
    return array2 ;
}
function callback(i){
    return i%2==0 ;
}
var result = checker(array1,callback) ;
console.log(result);
setTimeout(()=>{
    console.log('Print me after some time')
},25000)
let runningclock = setInterval(runclock,1000)
var timeclock = document.getElementById('time')
function runclock(){
    const d = new Date() ;
    timeclock.innerHTML = d.toLocaleTimeString() ;
}
var stopTime = document.getElementById('to stop') ;
stopTime.addEventListener('click',()=>{
    clearInterval(runningclock) ;
})
stopTime.addEventListener('dblclick',()=>{
    setInterval(runclock,1000)
})