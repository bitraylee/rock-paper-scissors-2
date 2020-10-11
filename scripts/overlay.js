function overlay(result) {
   let overlayContainer = document.getElementById("overlay-container");
   let layout = document.createElement("div");
   layout.className = "layout";
   layout.style.opacity = 1;
   layout.innerHTML = result;
   overlayContainer.appendChild(layout);

   overlayContainer.style.width = "100vw";
   overlayContainer.style.height = "100vh";

   let btn = document.createElement("button");
   btn.className = "replay";
   btn.innerHTML = "Replay";
   btn.setAttribute("onclick", "location.reload()");
   // let svgObj = document.createElement("use");
   // svgObj.className = "reload";

   // svgObj.setAttribute("xlink:href", "#reload");
   // svgObj.setAttribute("x", "100");
   // svgObj.setAttribute("y", "100");

   // // svgObj.setAttribute("data", "../images/refreshing.svg");
   // svgObj.style.fill = "#fefefe";
   // svgObj.style.fillOpacity = "100%";


   //btn.appendChild(svgObj);

   overlayContainer.appendChild(btn);

}