import '../css/style.css'
import {skins} from '../js/skins'
const DOMSelectors = {
  apps: document.getElementById("apps")
}

function thing (){
  skins.forEach((x) => {const
    otherthing = `<div class='card'>
  <p>name ${x.name}</p>
  <p>gun ${x.gun}</p>
  <p>animation ${x.animation}</p>
  </div> 
  `
  DOMSelectors.apps.insertAdjacentHTML(
    "beforeend",
    otherthing

  )
  
})
};

thing()