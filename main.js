const light = document.getElementById("light");
const dark = document.getElementById("dark");
const paraLight = document.getElementById("lightPara");
const paraDark = document.getElementById("darkPara");
function lightMode(){
   light.classList.remove("lightMode")
    dark.classList.add("lightMode");
    container.classList.remove("darkMode");
    paraDark.classList.add("fontInactive");
    paraLight.classList.remove("fontInactive");

}
function darkMode(){
    dark.classList.remove("lightMode");
    light.classList.add("lightMode");
    container.classList.add("darkMode");
    paraLight.classList.add("fontInactive");
    paraDark.classList.remove("fontInactive");
}