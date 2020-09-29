const dictionary = {
  "Messenger": "Messages",
  "Мессенджер": "Сообщения"
}

function correctPageTitle() {
  const title = document.title;
  const changeTo = dictionary[title];
  
  if (changeTo) {
    document.title = changeTo;
  }
}

window.onload = function() {
    const titleEl = document.getElementsByTagName("title")[0];
    const docEl = document.documentElement;

    if (docEl && docEl.addEventListener) {
        docEl.addEventListener("DOMSubtreeModified", function(evt) {
            const t = evt.target;
            if (t === titleEl || (t.parentNode && t.parentNode === titleEl)) {
                correctPageTitle();
            }
        }, false);
    } else {
        document.onpropertychange = function() {
            if (window.event.propertyName == "title") {
                correctPageTitle();
            }
        };
    }
};

correctPageTitle();

const elements = document.querySelectorAll(".left_label");

elements.forEach(i => {
  const label = i.innerHTML;
  const changeTo = dictionary[label];
  
  if (changeTo) {
    i.innerHTML = changeTo;
  }
});
