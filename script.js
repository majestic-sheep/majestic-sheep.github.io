
function dropToggle(id, buttonImage) {
    let ele = document.getElementById(id)
    let img = document.getElementById(buttonImage)
    if (ele.style.display === "block") {
        ele.style.display = "none";
        img.style.transform = "rotate(90deg)";
    } else {
        ele.style.display = "block";
        img.style.transform = "rotate(180deg)";
    }
}