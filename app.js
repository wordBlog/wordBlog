var editor = document.querySelector(".text-editor");
var html = document.querySelector(".html");
document.execCommand("defaultParagraphSeparator", false, "p");
editor.addEventListener("input", function () {
    let hey = editor.innerHTML.toString();
    hey = hey.split("");
    let hen = hey.indexOf("<");
    if (hen < 0) {
        hey = hey.join("");
        hey = "<p>" + hey + "</p>";
        hey = hey.split("");
        for (let i = 0; i < hey.length; i++) {
            if (hey[i] == "<") {
                hey[i] = "&lt;";
            } else if (hey[i] == ">") {
                hey[i] == "&gt;";
            }
        }
        hey = hey.join("");
    } else {
        hey = hey.join("");
        let temp = hey.slice(0, hen);
        hey = hey.replace(temp, " ");
        temp = "<p>" + temp + "</p>";
        hey = temp + hey;
        hey = hey.split("");
        for (let i = 0; i < hey.length; i++) {
            if (hey[i] == "<") {
                hey[i] = "&lt;";
            } else if (hey[i] == ">") {
                hey[i] == "&gt;";
            }
        }
        hey = hey.join("");
    }
    html.innerHTML = hey;
});
