import '../css/style.css'
import { skins } from '../js/skins'
const DOMSelectors = {
  apps: document.getElementById("apps")
}

function thing() {
  skins.forEach((x) => {
    const
    otherthing = `<div class='card'>
  <p>name: ${x.name}</p>
  <p>gun:${x.gun}</p>
  <p>animation: ${x.animated}</p>
  <img id="${x.name}" src="${x.image}"class="image"
  </div> 
  `
    DOMSelectors.apps.insertAdjacentHTML(
      "beforeend",
      otherthing

    )


  })
};
thing()

document.querySelector(".btnn").addEventListener("click", function () {
  function filter() {
    const vandals = skins.filter((skins) => skins.gun === "vandal");
    vandals.forEach((skin) => {
      const Aks = `<div class='card'>
        <p>name: ${skin.name}</p>
      <p>gun: ${skin.gun}</p>
        <p>animation: ${skin.animated}</p>
    <img id="${skin.name}" src="${skin.image}" class="image">
      </div>
      `
      DOMSelectors.apps.insertAdjacentHTML(
        "beforeend",
        Aks
      )
    }
    )
  };

  filter()
});

  document.querySelector(".btnn").addEventListener("click", function () {
    function filters() {
      const Phantoms = skins.filter((skins) => skins.gun === "Phantom");
      Phantoms.forEach((skins) => {
        const M4s = `<div class='card'>
          <p>name: ${skins.name}</p>
        <p>gun: ${skins.gun}</p>
        <p>animation: ${skins.animated}</p>
      <img id="${skins.name}" src="${skins.image}" class="image">
        </div>
        `
        DOMSelectors.apps.insertAdjacentHTML(
          "beforeend",
          M4s
        )
      }
      )
    };
filters()
  
});

document.querySelector(".butn").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
  else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});



// function filters (){
//   let buttons = document.querySelectorAll("btn")
//   buttons.forEach((btn) => btn.addEventListener("click", function(){
//     let category = btn.textContent.toLowerCase()
//     let newArr = items.filter((x)=>x.type.includes(category))
//     document.querySelector(".parent").innerHTML
//   }
// };