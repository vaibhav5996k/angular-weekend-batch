console.log(document);

let dv = document.getElementById("dv");
console.log(dv);

let ce = document.getElementById("ce");
console.log(ce);

console.log(console);

let mobile = ["android", "apple", "bb", "windows"];

let olmob = document.getElementById("mob");

for (let i = 0; i < mobile.length; i++) {
    let li = document.createElement("li");
    li.style.border = "1px solid red";
    li.textContent = mobile[i];
    olmob.appendChild(li);
}

let hello = ["android", "apple", "bb", "windows"];
let hell = document.getElementById("he");

for (let i = 0; i < hello.length; i++) {
    let td = document.createElement("td");
    td.style.border = "1px solid red";
    td.textContent = hello[i];
    hell.appendChild(td);
}