document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-bg';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', () => {
        resize();
        initDrops();
    });

    resize();

    // Characters for animation, containing alphabets, numbers, and programming syntax
    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]()<>=+-*/%!;:#_&|~^";
    const fontSize = 16;
    let columns = 0;
    let drops = [];

    function initDrops() {
        columns = Math.floor(canvas.width / fontSize);
        drops = [];
        for (let x = 0; x < columns; x++) {
            // Random start offsets so they don't fall all at the same line
            drops[x] = Math.floor(Math.random() * -50); 
        }
    }
    initDrops();

    function draw() {
        const isLightMode = document.body.classList.contains('light-mode');
        
        // Semi-transparent rect for trail effect (depends on theme)
        if (isLightMode) {
            ctx.fillStyle = "rgba(241, 245, 249, 0.1)"; // var(--bg-primary) in light mode
        } else {
            ctx.fillStyle = "rgba(10, 10, 26, 0.1)"; // var(--bg-primary) in dark mode
        }
        
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = fontSize + "px 'JetBrains Mono', monospace";
        
        for (let i = 0; i < drops.length; i++) {
            const text = charSet[Math.floor(Math.random() * charSet.length)];

            // Subtle color matching primary variables (indigo/cyan)
            if (isLightMode) {
                ctx.fillStyle = Math.random() > 0.8 ? "rgba(6, 182, 212, 0.4)" : "rgba(99, 102, 241, 0.3)";
            } else {
                ctx.fillStyle = Math.random() > 0.8 ? "rgba(6, 182, 212, 0.5)" : "rgba(99, 102, 241, 0.3)";
            }

            // Only draw if within bounds
            if (drops[i] >= 0) {
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            }

            // Reset drop randomly after it crosses context height
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 40);
});
