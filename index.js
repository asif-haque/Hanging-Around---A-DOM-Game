// New terms:
// window.innerWidth, innerHeight
// offsetWidth, offsetHeight
// offsetX, offsetY (mouse event properties)


var person = document.querySelector(".person");

person.style.position = "absolute";
person.style.left = "0"; // I gave their default position value 0
person.style.top = "0";
var speed = 10;


document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowLeft":
            if (parseInt(person.style.left) > 0)
                person.style.left = parseInt(person.style.left) - speed + "px";
            break;
        case "ArrowRight":
            if (parseInt(person.style.left) < window.innerWidth - person.offsetWidth)
                person.style.left = parseInt(person.style.left) + speed + "px";
            break;
        case "ArrowUp":
            if (parseInt(person.style.top) > 0)
                person.style.top = parseInt(person.style.top) - speed + "px";
            break;
        case "ArrowDown":
            if (parseInt(person.style.top) < window.innerHeight - person.offsetHeight)
                person.style.top = parseInt(person.style.top) + speed + "px";
            break;
        default:
            break;
    }
})

person.addEventListener("pointerdown", move);

function move(event) {
    // Had to change the target of the event to document from person in the below line
    document.addEventListener("pointermove", (event) => {
        if(event.pageX < window.innerWidth - person.offsetWidth) person.style.left = parseInt(event.pageX) + "px";
        if(event.pageY < window.innerHeight - person.offsetHeight) person.style.top = parseInt(event.pageY) + "px";
    })
    document.addEventListener("pointerup", function () {
        document.removeEventListener("pointerdown", move);
    })
}


// ADD "WHAT ARE YOU DOING, NOTHING JUST HANGING AROUND" AUDIO WHENEVER CLICKED









