window.onload = function() {
  findElements();
}

function findElements() {
  var elemArray = document.getElementsByClassName("draggable");
  for (let i = elemArray.length - 1; i >= 0; i--) {

    elemArray[i].style.position = "absolute";
    elemArray[i].style.zIndex = 1000;
    let coords = elemArray[i].getBoundingClientRect();
    elemArray[i].style.left = coords.left + "px";
    elemArray[i].style.top = coords.top + "px";

    dragItem(elemArray[i]);
  }
}

function dragItem(item) {
  item.onmousedown = function(event) {
    var shiftX = event.clientX - item.getBoundingClientRect().left;
    var shiftY = event.clientY - item.getBoundingClientRect().top;

    item.classList.add("grabed");

    item.style.position = "absolute";
    item.style.boxShadow = "0 0 5px 2px";
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
      item.style.boxShadow = "0 0 0 0";
      item.onmouseup = null;
    };
  };

  item.ondragstart = function() {
    return false;
  };
}
