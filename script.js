feather.replace();
let selectedMenuId = 1;

const menu = document.getElementById("menu");
const boardLeft = document.getElementById("board-left");
const boardRight = document.getElementById("board-right");
const flexBoard = document.getElementById("flex-board");
const illustration = document.getElementById("illustration");
const contentList = [
    {img: "./img/surf.png"},
    {img: "./img/paddle-surf.png"},
    {img: "./img/night.png"}
  ]

document.getElementById("bl-1").scrollIntoView();

menu.addEventListener("click", changeContent);

function changeContent(event){
    const target = event.target.id;
    if(target == "menu" || target == "" || target == selectedMenuId){
        return;
    }

    //Seleção do Menu
    document.getElementById(target).classList.add("selected");
    document.getElementById(selectedMenuId).classList.remove("selected");

    //Scroll dos boards
    const offset = selectedMenuId - target;
    boardLeft.scrollTop -= offset * 370;
    boardRight.scrollTop += offset * 370;

    //Flex Board Controll
    flexBoard.classList.add("flex-board-close");
    setTimeout(function(){
        illustration.src = contentList[target - 1].img
        flexBoard.classList.remove("flex-board-close");
        flexBoard.classList.add("flex-board-open");
    }, 100)

    selectedMenuId = target;
}