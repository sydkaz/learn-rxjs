export default function addItem(val:any,time:string="",colour:string="#fff") {

    var node = document.createElement("li");
    node.style.backgroundColor = colour;
    var textnode = document.createTextNode(val);

    var smallNode= document.createElement("small");
    var smallText=document.createTextNode(time.toString());

    node.appendChild(textnode);
    smallNode.appendChild(smallText);
    node.appendChild(smallNode);

    document.getElementById("output").appendChild(node);
}
