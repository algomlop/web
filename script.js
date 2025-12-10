document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. EFECTO SPOTLIGHT (Luz de fondo) ---
    const glow = document.querySelector('.cursor-glow');

    document.addEventListener('mousemove', (e) => {
        // Usamos requestAnimationFrame para que sea fluido
        requestAnimationFrame(() => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    });

            const videos = document.querySelectorAll('video');

            videos.forEach(video => {
                // Cuando el ratón entra: Reproducir
                video.addEventListener('mouseenter', () => {
                    video.play(); // Al hacer hover, fuerza la carga y reproduce
                });

                // Cuando el ratón sale:
                video.addEventListener('mouseleave', () => {
                    video.pause();
                    video.load(); // Esto resetea al estado "preload=none" (vuelve a salir el poster)
                });
            });

    // --- 3. SCROLL SUAVE PARA NAVEGACIÓN (Opcional, CSS ya lo hace pero esto refuerza) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
