
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {

    toggle.addEventListener("click", () => {

        nav.classList.toggle("show");

    });

}


document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(function (counter) {

        const target = Number(counter.dataset.target);
        const suffix = counter.dataset.suffix || "";

        let current = 0;

        const duration = 1500;
        const startTime = performance.now();

        function updateCounter(currentTime) {

            const progress = Math.min(
                (currentTime - startTime) / duration,
                1
            );

            current = Math.floor(target * progress);

            counter.textContent =
                current.toLocaleString("fr-FR") + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent =
                    target.toLocaleString("fr-FR") + suffix;
            }
        }

        requestAnimationFrame(updateCounter);
    });

});