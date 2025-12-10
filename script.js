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

            // 2. Lógica de Video: PLAY on HOVER
            const videos = document.querySelectorAll('video');

            videos.forEach(video => {
                // Cuando el ratón entra: Reproducir
                video.addEventListener('mouseenter', () => {
                    video.play();
                });

                // Cuando el ratón sale:
                video.addEventListener('mouseleave', () => {
                    video.pause();
                    // Opcional: Si quieres que vuelva a la carátula (poster)
                    // descomenta la siguiente línea. Si la dejas comentada, se pausa donde quedó.
                    video.load(); 
                });
            });
        });

    // --- 2. OPTIMIZACIÓN DE VIDEO (Intersection Observer) ---
    // Esto hace que los videos se pausen automáticamente si no los estás viendo
    // y se reproduzcan solos cuando aparecen en pantalla.
    
    const videos = document.querySelectorAll('video');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25 // El video debe verse al 25% para empezar a reproducir
    };

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el video entra en pantalla, reproducir
                const video = entry.target;
                // Promesa para evitar errores si el video no ha cargado
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Autoplay prevenido por el navegador (interacción requerida)");
                    });
                }
            } else {
                // Si sale de pantalla, pausar
                entry.target.pause();
            }
        });
    }, observerOptions);

    videos.forEach(video => {
        videoObserver.observe(video);
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
