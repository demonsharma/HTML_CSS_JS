const a = document.getElementsByClassName("login")[0] ;
const b = document.getElementsByClassName("signup")[0] ;
const fn = document.getElementsByClassName("firstname")[0] ;
const em = document.getElementsByClassName("Email")[0] ;
const yp = document.getElementsByClassName("pass")[0] ;
const un = document.getElementsByClassName("username")[0] ; ;
const p1= document.getElementsByClassName("pass1")[0] ;
const p2= document.getElementsByClassName("para")[0] ;
const rbm= document.getElementsByClassName("rbm")[0] ;
const checkb = document.getElementsByClassName("checkb")[0] ;
const ex1 =  document.getElementsByClassName("extra1")[0] ;
const ex2 =  document.getElementsByClassName("extra2")[0] ;
a.addEventListener('click',(e)=>{
    fn.style.display = 'none' ;
    em.style.display = 'none' ;
    yp.style.display = 'none' ;
    un.style.display = 'block' ;
    p1.style.display = 'block';
    p2.style.display='none' ;
    rbm.style.display='block' ;
    checkb.innerHTML =  `<input type="checkbox" id="check"></input>`;
    ex1.style.display='none' ;
    ex2.style.display='block';
})
b.addEventListener('click',(e)=>{
    fn.style.display = 'block' ;
    em.style.display = 'block' ;
    yp.style.display = 'block' ;
    un.style.display = 'none' ;
    p1.style.display = 'none';
    p2.style.display='block' ;
    rbm.style.display='none' ;
    checkb.innerHTML =  `<input type="checkbox" id="check"></input>` ;
    ex1.style.display='block' ;
    ex2.style.display='none';
})