window.onload = function () {
    let add = document.getElementById("add");



    add.addEventListener("click", () => {
        let inputText = document.getElementById("text").value;
        if (inputText === '') {

        }
        else {
            console.log(inputText);
            let main = document.querySelector('main');
            main.insertAdjacentHTML('beforeend', "<div class='toDo'><div class='elem'></div><div class='complete'>\u00D7</div></div>" );
            let elems = document.getElementsByClassName("elem");
            elems[elems.length-1].innerHTML = inputText;

            let comp = document.getElementsByClassName('complete');
            for (let i=0; i<comp.length; i++) {
                comp[i].onclick = function () {
                    let div = this.parentElement;
                    div.style.display = "none";
                    console.log("click");
                }
            }
        }
    });
};
