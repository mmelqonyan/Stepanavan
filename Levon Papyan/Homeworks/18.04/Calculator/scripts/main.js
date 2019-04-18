window.onload = calculate;

function calculate() {
    let display = document.getElementById("display");
    let buttons = document.getElementsByClassName("buttons");
    let operator = empty();
    let result = empty();
    let COO = 0;
    let num1;
    let num2;
    let oDisplay = document.getElementById("o");
    for (let button of buttons) {
        if (button.innerHTML >= 0 ||
            button.innerHTML <= 9 ||
            button.innerHTML === ".") {
            button.onclick = function () {
                if (result) {
                    display.value = button.innerHTML;
                    result = false;
                }
                else {
                    display.value += button.innerHTML;
                }
            }
        }
        if (button.innerHTML === "Del") {
            button.onclick = function () {
                display.value = backspace(display.value);
            }
        }
        if (button.innerHTML === "C") {
            button.onclick = function () {
                display.value = empty();
                oDisplay.value = empty();
            }
        }
        if (button.innerHTML === "-" ||
            button.innerHTML === "+" ||
            button.innerHTML === "*" ||
            button.innerHTML === "/" ||
            button.innerHTML === "=") {
            button.onclick = function () {
                if (button.innerHTML !== "=") {
                    operator = button.innerHTML;
                }
                if (COO % 2 === 0) {
                    num1 = display.value;
                    display.value = empty();
                } else {
                    num2 = display.value;
                    display.value = empty();
                }
                oDisplay.value = num1 + ' ' + operator;
                if (button.innerHTML === "=") {
                    if (num1 && num2 && operator) {
                        display.value = ready(num1, operator, num2);
                        num1 = display.value;
                        num2 = empty();
                        oDisplay.value = empty();
                        operator = empty();
                        result = true;
                    }else{
                        if(!num1){
                            oDisplay.value = "Err";
                        }
                    }
                }
                COO++;
            }
        }
    }

    function backspace(str) {
        return (str.slice(0, str.length - 1));
    }

    function empty() {
        return "";
    }

    function ready(num1, operator, num2) {
        switch (operator) {
            case "+":
                return +num1 + +num2;
            case "-":
                return num1 - num2;
            case "/":
                if (num2 === '0') {
                    window.open("https://www.google.ru/search?q=%D0%BF%D1%80%D0%B8%D1%87%D0%B8%D0%BD%D1%8B+%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83+%D0%BD%D0%B5%D0%BB%D1%8C%D0%B7%D1%8F+%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C+%D0%BD%D0%B0+%D0%BD%D0%BE%D0%BB%D1%8C&rlz=1C1CHWL_ruAM760AM760&oq=%D0%BF%D1%80%D0%B8%D1%87%D0%B8%D0%BD%D1%8B+%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83+%D0%BD%D0%B5%D0%BB%D1%8C%D0%B7%D1%8F+%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C+%D0%BD%D0%B0+%D0%BD%D0%BE%D0%BB%D1%8C&aqs=chrome..69i57.1015j0j7&sourceid=chrome&ie=UTF-8")
                }
                return num1 / num2;
            case "*":
                return num1 * num2;
        }
    }
}
