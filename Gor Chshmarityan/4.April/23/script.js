function my() {
    let input = document.getElementById("tag").value
    let tag = "";
    let style = "";
    let gor = 0;

    for (let i = 0; i < input.length; i++) {
        tag += input[i]
        if (input[i + 1] == " " || input[i + 1] == ",") {
            gor = i + 1;
            break;
        }
    }
    for (let j = gor; j < input.length; j++) {
        style += input[j]
    }
    let result = document.createElement(tag)
    if (tag == "button") {
        result.setAttribute("style", `${style}`)
        document.body.appendChild(result)
        let button = document.getElementById("button")
        button.setAttribute("disabled", "true")
    }
    else {
        result.setAttribute("style", `${style}; border: solid`)
        document.body.appendChild(result)
        let button = document.getElementById("button")
        button.setAttribute("disabled", "true")
    }
}   
