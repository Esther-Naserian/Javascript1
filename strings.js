//Question1
let a = "extravaganza";
console.log(a[8], a[9], a[10], a[11]);

//question2

const food = "The quick fox jumped over the lazy dog";
let b = "eat"
let f = `The ${b} quick fox jumped over the lazy dog`;
console.log({f});

//Question3
const story= "The quick brown fox jumps over the lazy dog";
let c = "The quick brown fox jumps over the lazy dog";
let d = "brown"
let e = c.split(d).length-1;
console.log(e)

 
 let h ="the"
 let k = c.split(h).length-1;
 console.log(k)
 
 //question4
 let p = "The pupils are reading in the library";
 let i =  "are";
 let g = p.indexOf([i]);

 console.log({g});
 

 let m ="The child was sitting on the table it fell";
 let n  ="sitting"
 let t = m.indexOf([n]);
 console.log({t});

 let x ="wonderful";
 let y = x.toUpperCase();
 console.log(y)
 
 let o ="amazing";
 let l = o.toLowerCase();
  console.log(l);

  let j ="UndERneath";
  let v = j.toLowerCase();
  console.log(v);

  let u ="A Wonderful Word";
  let titlecase = "";
  u.split(" ").forEach(word => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titlecase += capitalizedWord + " ";
  });
  console.log(titlecase);




 




