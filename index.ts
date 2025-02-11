console.log("Hello type script");

const a = ('Shaxriyor');
console.log(a);

let Familya = 'Turgunboyov';
console.log(Familya);

let b = 30;
if( b = 30 ){
  console.log('Ha');
}else{
    console.log('Yoq');
}


let ism = 'My name is Duyu Mather fuch dubgi';
let famil = 'Mr.mikesov';
console.log(ism + " " + " " + famil);


const fort = document.querySelector('.fort');
fort?.addEventListener('click' , ()=>{
    alert('Salom meni ismim shaxriyor');
     fort.textContent = 'Mening ismim Shox instam esa shahkweb'
})


const btn = document.querySelector('.btn');
btn?.addEventListener('click' , ()=>{
  window.location.href = '/pages/Home.html'
})

const foot = document.querySelector('.foot')
const btn1 = document.querySelector('.btn1');
let lorem = 'Shaxriyor turgunboyov oziga hos bolgan narsalarni ajratib berilag bolasa'
btn1?.addEventListener('click' , ()=>{
     foot?.innerHTML === lorem
})