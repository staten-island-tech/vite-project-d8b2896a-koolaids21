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

document.querySelector(".btn").addEventListener("click", function(){
  if (document.body.classlist.contains("dark")){
      document.body.classList.remove("dark");
      document.body.classlist.add("light");
  }
  else {
      document.body.classlist.add("light");
      document.body.classlist.remove("dark");
  }
});


