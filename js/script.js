function myClick() {
    let text = document.getElementById("text1")
    if (text.style.display != "none") {
        text.style.display = "none"

    }
    else {
        text.style.display = "block"

    }
    let velue = document.getElementById('velue')
    velue.textContent = velue.textContent === '+' ? '-' : '+';
    

}