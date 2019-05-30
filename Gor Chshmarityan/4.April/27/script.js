const getDots = (node, temp = 0) => Array.prototype.reduce.call(node, (dots, item) => 
{
    dots = [...dots, `${'&nbsp;\t'.repeat(temp*4)}`];
    (item.children.length && (dots = [...dots, ...(getDots(item.children, temp + 1))])); 
    return dots;
}, 
[]); 

const getTags = (node, temp = 0) => Array.prototype.reduce.call(node, (tag, item) => 
{
    let button = document.createElement("input")
    button.setAttribute("type", "button")
    button.setAttribute("value", `${item.nodeName}`)
    tag = [...tag, button];
    (item.children.length && (tag = [...tag, ...(getTags(item.children, temp + 1))])); 
    return tag;
}, 
[]); 

let dot = getDots(document.querySelectorAll('html'))
let tags = getTags(document.querySelectorAll('html'))
let br = document.createElement('br')

function draw(){
    document.getElementById("button").setAttribute("disabled", "true")
    for(let i = 0; i < dot.length; i++){
        document.getElementById("div").innerHTML += dot[i]
        document.getElementById("div").appendChild(tags[i])
        document.getElementById("div").appendChild(br)
    }
}