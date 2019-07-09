(function() {
  // Multifile lists
  let items = document.querySelectorAll(".multifile-item");

  // Loop through each
  items.forEach(item => {

    let title = item.querySelector(".file-name");
    let summary = item.querySelector(".multifile-summary");
    let saveButton = item.querySelector(".multifile-save");

    // Click the summary to toggle collapse state & show settings
    summary.addEventListener("click", e => {
      item.toggleClass("collapse");
      let summaryString = summarizeSettings(item);
      summary.innerHTML = summaryString;
    });

    // Click the update button to refresh the summary and hide the settings
    saveButton.addEventListener("click", e => {
      item.addClass("collapse");
      let summaryString = summarizeSettings(item);
      summary.innerHTML = summaryString;
      e.preventDefault();
    });
  });

  // Incrementers
  let incrementers = document.querySelectorAll(".incrementer");
  incrementers.forEach(item => {
    let numField = item.querySelector("input");
    let minus = item.querySelector(".minus");
    let plus = item.querySelector(".plus");

    minus.addEventListener("click", e => {
      e.preventDefault();
      let val = numField.value - 1;
      if (val < 1) val = 1;
      numField.value = val;
    });

    plus.addEventListener("click", e => {
      e.preventDefault();
      numField.value++;
    });
  });

  function summarizeSettings(item) {
    let copies = parseInt(item.querySelector("input.num-copies").value);
    let color = item.querySelector("input.radio-color:checked").value;
    let orientation = parseInt(item.querySelector("select.orientation").value);
    let collate = item.querySelector("input.toggle-collate:checked");
    let sides = item.querySelector("input.radio-sides:checked").value;

    if (copies == 1) copies = `${copies} Copy`;
    else copies = `${copies} Copies`;

    if (color === "color") color = "Color";
    else color = "B&W";

    if (orientation === 0) orientation = "";
    else if (orientation === 1) orientation = "Portrait";
    else if (orientation === 2) orientation = "Landscape";

    if (!collate) collate = "";
    else collate = "Collated";

    if (sides == 1) sides = "";
    else sides = "Double-sided";

    return `${copies} ${color} ${sides} ${orientation} ${collate}`.trim();
  }

  // Polyfills/utilities
  Element.prototype.hasClass = function(className) {
    if (this.classList) {
      return this.classList.contains(className);
    } else {
      return new RegExp("(^| )" + className + "( |$)", "gi").test(
        this.className
      );
    }
  };
  Element.prototype.addClass = function(className) {
    if (this.classList) {
      this.classList.add(className);
    } else {
      this.className += " " + className;
    }
  };
  Element.prototype.removeClass = function(className) {
    if (this.classList) {
      this.classList.remove(className);
    } else {
      this.className = this.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
    }
  };
  Element.prototype.toggleClass = function(className) {
    if (this.hasClass(className)) {
      this.removeClass(className);
    } else {
      this.addClass(className);
    }
  };
})();
