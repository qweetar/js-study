
var elemArray = new Array();

function findElements() {
  for (let elem of document.getElementsByTagName("img")) {
    elemArray.push(elem);
    let coords = elem.getBoundingClientRect();

    elem.style.position = "sticky";
    elem.style.zIndex = 1000;
    elem.style.left = coords.left + "px";
    elem.style.top = coords.top + "px";

    dragItem(elem);
  }
}

findElements();

function dragItem(item) {
  item.onmousedown = function(event) {
    var shiftX = event.clientX - item.getBoundingClientRect().left;
    var shiftY = event.clientY - item.getBoundingClientRect().top;

    item.classList.add("grabed");

    item.style.position = "absolute";
    document.body.append(item);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      item.style.left = pageX - shiftX + "px";
      item.style.top = pageY - shiftY + "px";
    }


    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener("mousemove", onMouseMove);

    item.onmouseup = function() {
      document.removeEventListener("mousemove", onMouseMove);
      item.classList.remove("grabed");
      item.onmouseup = null;
    };
  };

  item.ondragstart = function() {
    return false;
  };
}
