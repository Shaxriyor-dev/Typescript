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

const foot = document.querySelector('.foot') as HTMLParagraphElement;
const btn1 = document.querySelector('.btn1') as HTMLButtonElement;
let lorem: string = 'Shaxriyor turgunboyov oziga hos bolgan narsalarni ajratib berilag bolasa';
btn1?.addEventListener('click' , ()=>{
     foot?.textContent === lorem
});



// let a = 'Shaxriyor';
// a = 10;

let f: string = 'Shaxriyor';
f = 'Abdulaziz';
console.log(f);


let g: Number = 30;
g = 16;
console.log(g);

// let s = false
// s = true

let k: boolean = false;
console.log(k);


// let o = {}
// o.name
// o = {'Shaxriyor'}


let q: {name : string} = {name : 'Shaxriyor'};
console.log(q);


let p: any;
p = 12;
p = 'Shaxriyor';
p = false;
p = { name : 'Shaxriyor'};
p = [];
p = null;
console.log(p);


let z: {name : string , age : number} = {name : 'Shaxriyor' , age : 30}
console.log(z);


let son: {Familya : string , name : string , age : number , qiymati : boolean} = {Familya : 'Turg\'unboyov' , name : 'Shaxriyor' , age : 17 , qiymati : true}
console.log(son);

let familya: string = 'Turgunboyov';
let ismim : string = 'Shaxriyor';
let age : number = 17;
console.log(familya + ' ' + ' ' + ismim  + ' ' +  age);



const button = document.querySelector(".btn-2") as HTMLButtonElement;
const output = document.querySelector(".liko") as HTMLParagraphElement;

let lorems: string = "Salom mening ismmim shaxriyor men hozirda 17 yoshdan men hozir 5-maktabda oqiyman va o'zimni dasturlash soham boyicha yaxshi tayorlanaman va kelajakda kattta kampanya ochaman google , nasa , facebookga oxshagan"

button.addEventListener('click' , ()=>{
     output.textContent = lorems
});