const imageContainer = document.getElementById("imageContainer");
        const zoomResult = document.getElementById("zoomResult");
        const image = document.getElementById("image");

        zoomResult.style.backgroundImage = `url(${image.src})`;

        imageContainer.addEventListener("mousemove", function (event) {
            const { left, top, width, height } = imageContainer.getBoundingClientRect();
            const x = event.clientX - left;
            const y = event.clientY - top;

            const percentX = (x / width) * 100;
            const percentY = (y / height) * 100;

            zoomResult.style.backgroundPosition = `${percentX}% ${percentY}%`;
        });