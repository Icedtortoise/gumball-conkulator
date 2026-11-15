let gumballs = 0;
let money = 0;

const form = document.getElementById("Calculator");
const result = document.getElementById("result");

function Calculate(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
    gumballs = Number(data.gumballs);
    money = Number(data.money);
    switch (data.calculation) {
        case "1":
            gumballs = money * 100 / 25;
            console.log(gumballs);
            result.innerText = `With $${money} you could get ${gumballs} gumballs`
            break;
        case "2":
            money = gumballs / 4;
            console.log(money);
            result.innerText = `To get ${gumballs} gumballs you would need $${money}`
            break;
        case "3":
            money = money * 100 / 25;
            console.log(gumballs);
            console.log(money);
            result.innerText = "ruh roh raggy"
            for (let i = 0; i < money; i++) {
                const x = Math.floor((Math.random() * screen.width) + 1);
                console.log(x);
                const y = Math.floor((Math.random() * screen.height) + 1);
                console.log(y);
                const quarter = document.createElement("img");
                quarter.style.position = "absolute";
                quarter.style.top = `${y}px`;
                quarter.style.left = `${x}px`;
                quarter.setAttribute("src", "./images/quarter.png");
                document.body.appendChild(quarter);
            }
            function throwgumball (gumball) {
                let throwgumball = document.body.appendChild(gumball);
                for (let i = 0; i < 100; i++) {
                    gumball.style.width += `${i}px`;
                    gumball.style.height += `${i}px`;
                }
            }
            for (let i = 0; i < gumballs; i++) {
                const x = screen.width;
                console.log(x);
                const y = screen.height;
                console.log(y);
                const gumball = document.createElement("img");
                const color = Math.floor((Math.random() * 5) + 1);
                gumball.style.position = "absolute";
                gumball.style.top = `${y}px`;
                gumball.style.left = `${x}px`;
                gumball.setAttribute("src", `./images/gumball${color}.png`);
                throwgumball(gumball);
            }
            
            break;
    }
}

form.addEventListener("submit", Calculate);
