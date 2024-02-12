let box = document.querySelectorAll(".box")
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");

let HighestScore = 0;
let arr = [];
let user = [];
let random = () => Math.floor(Math.random() * 4);
let started = false;
let level = 0;
document.addEventListener("keydown", function () {
    // start the game when any key is pressed
    if (!started) {
        h3.textContent = "";
        started = true;
        LevelUp();
    }
});
for (b of box) {
    b.addEventListener("click", btnPress);
}
function compare(j) {
    if (arr[j] === user[j]) return true;
    return false;
}
function btnPress(btn) {
    if (started) {
        let i = Array.from(box).indexOf(this);
        flashBtn(i);
        user.push(i);
        if (compare(user.length - 1)) {
            if (user.length == arr.length) {
                LevelUp();
            }
        }
        else {
            let score = (level - 1) * 10;
            if (score > HighestScore) {
                HighestScore = score;
                h3.textContent = `Game over You scored the Highest Score  ${score}`;
                h4.textContent = `Highest Score : ${HighestScore}`;
            }
            else {
                h3.textContent = `Game over Your Score is  ${score}`;
            }

            h2.textContent = "Press any key to start the game";
            let body = document.querySelector("body");
            let bgColor = body.style.backgroundColor;
            body.style.backgroundColor = "red";
            setTimeout(function () {
                body.style.backgroundColor = bgColor;
            }, 150);

            resetAll();
        }
    }
}
function resetAll() {
    started = false;
    arr = [];
    user = [];
    level = 0;
}
function flashBtn(i) {
    box[i].classList.add("white");
    setTimeout(function () {
        box[i].classList.remove("white");
    }, 250);
}
function LevelUp() {
    level++;
    user = [];
    h2.textContent = `Level ${level}`;
    let i = random();
    setTimeout(() => {
        let i = random();
        arr.push(i);
        flashBtn(i);
    }, arr.length * 400);
}