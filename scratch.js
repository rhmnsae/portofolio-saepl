document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("scratch-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    
    const coverImg = document.getElementById("cover-img");

    function initCanvas() {
        const container = document.getElementById("hero-scratch-container");
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;

        const ratioText = Math.max(canvas.width / coverImg.naturalWidth, canvas.height / coverImg.naturalHeight);
        const centerShift_x = (canvas.width - coverImg.naturalWidth * ratioText) / 2;
        const centerShift_y = (canvas.height - coverImg.naturalHeight * ratioText) / 2;  

        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(coverImg, 0, 0, coverImg.naturalWidth, coverImg.naturalHeight,
                      centerShift_x, centerShift_y, coverImg.naturalWidth * ratioText, coverImg.naturalHeight * ratioText);
                      
        // Ensure opacity is reset if window is resized after a fade-out
        canvas.style.opacity = 1;
        canvas.style.display = "block";
    }

    if(coverImg.complete) {
        initCanvas();
    } else {
        coverImg.onload = initCanvas;
    }

    let brushRadius = 50; 

    function getMousePos(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    function erase(e) {
        ctx.globalCompositeOperation = "destination-out";
        const pos = getMousePos(e);
        
        // Create a radial gradient for soft/blurred realistic edges
        const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, brushRadius);
        gradient.addColorStop(0, "rgba(0, 0, 0, 1)");      // Solid center
        gradient.addColorStop(0.5, "rgba(0, 0, 0, 0.8)");  // Slightly faded midway
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");      // Fully transparent edge
        
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, brushRadius, 0, Math.PI * 2, false);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        checkScratchProgress();
    }

    // Erase simply by moving the mouse over the canvas
    canvas.addEventListener("mousemove", erase);

    // Touch events for mobile
    canvas.addEventListener("touchstart", (e) => { 
        if(e.cancelable) e.preventDefault(); 
        erase(e); 
    }, {passive: false});
    
    canvas.addEventListener("touchmove", (e) => {
        if(e.cancelable) e.preventDefault();
        erase(e);
    }, {passive: false});

    window.addEventListener("resize", () => {
        // Adding a slight delay for resize accuracy
        setTimeout(initCanvas, 100);
    });
    
    let checkTimeout;
    function checkScratchProgress() {
        if(checkTimeout) clearTimeout(checkTimeout);
        checkTimeout = setTimeout(() => {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let transparentPixels = 0;
            const totalPixels = imageData.data.length / 4;
            
            // Sample pixels to save performance
            for (let i = 0; i < totalPixels; i += 5) {
                if (imageData.data[(i * 4) + 3] === 0) { 
                    transparentPixels++;
                }
            }
            
            // If 55% transparent, complete the reveal to avoid forcing the user to scratch tiny bits
            if (transparentPixels / (totalPixels / 5) > 0.55) {
                canvas.style.transition = "opacity 0.8s ease-out";
                canvas.style.opacity = "0";
                setTimeout(() => canvas.style.display = "none", 800);
            }
        }, 150);
    }
});
