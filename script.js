        document.addEventListener("DOMContentLoaded", () => {
            
            // 1. Efecto Spotlight (Luz de fondo)
            const glow = document.querySelector('.cursor-glow');
            document.addEventListener('mousemove', (e) => {
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
