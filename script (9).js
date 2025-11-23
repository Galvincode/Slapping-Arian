let num = 0
document.getElementById("num").textContent = num;


function count() {
  const img = document.getElementById("image");
  
  //alert("work")
  // 1. Increase the number
  num++;
  document.getElementById("num").textContent = num;
  
  img.addEventListener("mousedown", () => {
  img.src = "https://i.ibb.co/gFVKqFb2/20251122-224725.jpg";
});
img.addEventListener("mouseup", () => {
  img.src = "https://i.ibb.co/zcQGfGs/20251122-224717.jpg";
});

}