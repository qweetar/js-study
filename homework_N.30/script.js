function findElements() {
  for (let elem of document.getElementsByTagName("img")) {
    elem.style.width = "auto";
    elem.style.height = "100%";

    let newDiv = document.createElement("div");
    newDiv.classList.add("draggable");
    newDiv.style.position = "sticky";
    newDiv.style.float = "left";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    elem.parentNode.insertBefore(newDiv, elem);
    newDiv.appendChild(elem);
    newDiv.style.zIndex = 1000;
    let coords = newDiv.getBoundingClientRect();
    newDiv.style.left = coords.left + "px";
    newDiv.style.top = coords.top + "px";

    dragItem(newDiv);
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
