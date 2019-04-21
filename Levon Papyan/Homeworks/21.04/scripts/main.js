const MAIN_ARRAY = [];
        let TABLE_SIZE;
        let COUNT_OF_X;
        let levels = ['easy', 'hard', 'extreme'];
        document.body.onload = () => {
            let dificulity;
            while(!levels.includes(dificulity)){
                dificulity = prompt("Your level? : easy, hard, extreme");
                console.log(dificulity)
                if(dificulity === levels[0]){
                    COUNT_OF_X = 1;
                    TABLE_SIZE = 5;
                }else if(dificulity === levels[1]){
                    COUNT_OF_X = 10;
                    TABLE_SIZE = 10;
                }else if(dificulity === levels[2]){
                    COUNT_OF_X = 50;
                    TABLE_SIZE = 20;
                }
            }
            start();
   
        }

        function start() {
            initMainArray();
            document.body.appendChild(createTable());
            console.log(MAIN_ARRAY)
        }

        function initMainArray() {
            for (let index = 0; index < TABLE_SIZE * TABLE_SIZE; index++) {
                MAIN_ARRAY[index] = "O";
            }
            for (let i = 0; i < COUNT_OF_X; ++i) {
                let randomPosition = parseInt(Math.random() * TABLE_SIZE * TABLE_SIZE);
                if (MAIN_ARRAY[randomPosition] !== "X") {
                    MAIN_ARRAY[randomPosition] = "X";
                } else {
                    --i; continue;
                }
            }
        }
        function createTable() {
            let table = document.createElement("table");
            let index = 0;
            table.id = "game_table";
            for (let i = 0; i < TABLE_SIZE; ++i) {
                let tr = document.createElement("tr");
                for (let j = 0; j < TABLE_SIZE; j++) {
                    let td = document.createElement("td");
                    let button = document.createElement("button");
                    button.setAttribute("class", "field");
                    button.setAttribute("value", index++);
                    button.setAttribute("onclick", `check(this)`)
                    tr.appendChild(td);
                    td.appendChild(button);
                }
                table.appendChild(tr);
            }
            return table;
        }

        function check(element) {
            if (MAIN_ARRAY[parseInt(element.value)] === "X") {
                element.innerHTML = "X"
                setTimeout(() => {
                    let continue__ = confirm("Game over: You lose, Try again?");
                    if (continue__) {
                        document.getElementById("game_table").remove();
                        initMainArray();
                        start()
                    } else {
                        document.write("<h1 style='text-align:center'>Good by looser</h1>")
                    }
                }, 250);
            }else if (element.innerHTML !== "O"){
                openRandomFields(COUNT_OF_X, element);
                element.innerHTML = "O"
                checkMaybyWinHahahaha();
            }
        }

        function openRandomFields(count, element){
            let fields = document.querySelectorAll(".field");
            let index = parseInt(element.value);
            try {
                for(let i = 0; i < count / 4; ++i){
                    fields[index-i].innerHTML = MAIN_ARRAY[index-i];
                }
                for(let i = 0; i < count / 4; ++i){
                    fields[index + i].innerHTML = MAIN_ARRAY[index+i];
                } 
                for(let i = 0; i < count / 4; ++i){
                    fields[index + TABLE_SIZE + i - (count/2)].innerHTML = MAIN_ARRAY[index + TABLE_SIZE + i - (count/2)];
                } 
                for(let i = 0; i < count / 4; ++i){
                    fields[index - TABLE_SIZE + i + (count/2)].innerHTML = MAIN_ARRAY[index - TABLE_SIZE + i + (count/2)];
                } 
            } catch (error) {
              
            }

        }



        function checkMaybyWinHahahaha() {
            let fields = document.querySelectorAll(".field");
            let cuntOfopenedX = 0;
            let countOfVisibleO = 0;
            fields.forEach((field) => {
                if (field.innerHTML === "X") {
                    cuntOfopenedX++;
                }else if (field.innerHTML === "O"){
                    countOfVisibleO++;
                }
            });
            if (cuntOfopenedX === COUNT_OF_X || countOfVisibleO === TABLE_SIZE * TABLE_SIZE - COUNT_OF_X) {
                setTimeout(() => {
                    let continue__ = confirm("Game over: You Win, Would you like to start the new game?");
                    if (continue__) {
                        document.getElementById("game_table").remove();
                        start();
                    } else {
                        document.write("<h1 style='text-align:center'>Good by looser</h1>");
                    }
                }, 250);
            }
        }

        let cheat = "levon"
        let pressedKeys = ""
        document.onkeydown = () => {
            pressedKeys += event.key;
            console.log(pressedKeys);
            if (pressedKeys.includes(cheat)) openX();
        }

        function openX() {
            let fields = document.querySelectorAll(".field");
            for(let i = 0; i < MAIN_ARRAY.length; ++i){
                if (MAIN_ARRAY[i] === "X") {
                    fields[i].innerHTML = "[X]"
                }
            }
        }
