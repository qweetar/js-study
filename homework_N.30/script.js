function findElements() {
  for (let elem of document.getElementsByClassName("draggable")) {


    elem.style.width = "100px";
    elem.style.height = "100px";
    elem.style.position = "sticky";
    elem.style.zIndex = 1000;
    let coords = elem.getBoundingClientRect();
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
    item.style.width = "110px";
    item.style.height = "110px";
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
      item.style.width = "100px";
      item.style.height = "100px";
      item.onmouseup = null;
    };
  };

  item.ondragstart = function() {
    return false;
  };
}
