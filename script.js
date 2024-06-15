document.addEventListener("DOMContentLoaded", function () {
    function tossFunction() {
        const tossBtn = document.getElementById("btn");
        const imgElement = document.getElementById("img");

        const div = document.querySelector('.para');

        const p = document.createElement('p');

        div.appendChild(p);

        tossBtn.addEventListener('click', () => {
            console.log("button is clicked");
            p.innerHTML = "Loading...";
            tossBtn.style.backgroundColor = getRandomColor();
            tossBtn.style.transform = "scale(1.1)";
            imgElement.classList.add("spinning");
            const randomNumber = Math.round(Math.random());
            setTimeout(() => {
                if (randomNumber === 0) {
                    imgElement.src = "heads.jpg";
                    p.innerHTML = "Heads";
                } else {
                    imgElement.src = "tails.jpg";
                    p.innerHTML = "Tails";
                }

                imgElement.classList.remove("spinning");
            }, 1000);

            console.log("coin is flip");

            setTimeout(() => {
                tossBtn.style.transform = "scale(1)";
            }, 1000);
        });
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    tossFunction();
});