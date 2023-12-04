import '../css/style.css'
import {skins} from '../js/skins.js'
const DOMSelectors = {
  apps: document.getElementById("apps"),
  defualt: document.getElementById('Defualt'),
  vandals: document.getElementById('Vandals'),
  Phantoms: document.getElementById('Phantoms'),
  Sherrif: document.getElementById('Sherrif'),
  Guardian: document.getElementById('Guardian'),
  container: document.querySelector(".container"),
  theme: document.querySelector(".theme"),
  parent: document.querySelector(".parent"),
}

function thing(x) {
  const otherthing = 
  `
  <div class="container"></div>
  <div class="card">
    <p>${x.name}</p>
    <p>Gun:${x.gun}</p>
    <p>Animation:${x.animated}</p>
    <img id="${x.name}" src="${x.image}"class="image"
  </div>
  </div> 
  `;
      DOMSelectors.apps.insertAdjacentHTML(
      "beforeend",
      otherthing
  );
};

skins.forEach(thing);





DOMSelectors.defualt.addEventListener("click", () => {
  const Defualt = skins.filter((x) => 
  x.animated.includes("yes"));

  DOMSelectors.apps.textContent = "";
  const Defualtss = Defualt.map((x) => thing(x));
  DOMSelectors.apps.insertAdjacentHTML("beforeend", Defualtss.join("")
  );
});


DOMSelectors.vandals.addEventListener("click", () => {
  const vandals = skins.filter((x) => 
  x.gun.includes("Vandal"));

  DOMSelectors.apps.textContent = "";
  const vandalss = vandals.map((x) => thing(x));
  DOMSelectors.apps.insertAdjacentHTML("beforeend", vandalss.join("")
  );
});


DOMSelectors.Phantoms.addEventListener("click", () => {
  const Phantoms = skins.filter((x) => 
  x.gun.includes("Phantom"));

  DOMSelectors.apps.textContent = "";
  const Phantomss = Phantoms.map((x) => thing(x));
  DOMSelectors.apps.insertAdjacentHTML("beforeend", Phantomss.join("")
  );
});

DOMSelectors.Guardian.addEventListener("click", () => {
  const Guardian = skins.filter((x) => 
  x.gun.includes("Guardian"));

  DOMSelectors.apps.textContent = "";
  const Guardianss = Guardian.map((x) => thing(x));
  DOMSelectors.apps.insertAdjacentHTML("beforeend", Guardianss.join("")
  );
});

DOMSelectors.Phantoms.addEventListener("click", () => {
  const Phantoms = skins.filter((x) => 
  x.gun.includes("Phantom"));

  DOMSelectors.apps.textContent = "";
  const Phantomss = Phantoms.map((x) => thing(x));
  DOMSelectors.apps.insertAdjacentHTML("beforeend", Phantomss.join("")
  );
});

DOMSelectors.Sherrif.addEventListener("click", () => {
  const Sherrif = skins.filter((x) => 
  x.gun.includes("Sherrif"));

  DOMSelectors.apps.textContent = "";
  const Sherrifs = Sherrif.map((x) => thing(x));
  DOMSelectors.apps.insertAdjacentHTML("beforeend", Sherrifs.join("")
  );
});




document.querySelector(".btns").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
  else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});


// function all(){
//   DOMSelectors.parent.innerHTML = '';
//   skins.forEach((skin)=> {
//     const apps = `
//     <div class='card'>
//   <p>name: ${skin.name}</p>
//   <p>gun:${skin.gun}</p>
//   <p>animation: ${skin.animated}</p>
//   <img id="${skin.name}" src="${skin.image}"class="image"
//   </div> 
//   `;
//   DOMSelectors.parent.insertAdjacentElement(
//     'beforeend', apps
//   );


//   }
//   );
// }


// function filters (){
//   let buttons = document.querySelectorAll("btn")
//   buttons.forEach((btn) => btn.addEventListener("click", function(){
//     let category = btn.textContent.toLowerCase()
//     let newArr = items.filter((x)=>x.type.includes(category))
//     document.querySelector(".parent").innerHTML
//   )
//   }
// ;
// function populate (arr){
//   arr.forEach((el)=> parent.insertAdjacentHTML{
//     "beforeend",
//     `<div class=card>
//     <h2 id="name" class="name">${el.name}</h2>
//     <img id="${el.name}" src="${el.image}" class="image>
//     <h3 id="price" class="name">$${el.price}</h3>
//      </div>`
//   ))
// }

