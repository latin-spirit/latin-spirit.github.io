// Funcionalidad básica del selector de idiomas
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            langButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const selectedLang = this.getAttribute('data-lang');
            changeLanguage(selectedLang);
        });
    });
    
    // Smooth scroll para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Función para cambiar idioma (placeholder por ahora)
function changeLanguage(lang) {
    console.log(`Cambiando idioma a: ${lang}`);
    // Aquí implementarás la lógica de traducción
    alert(`Taal wordt gewijzigd naar: ${lang.toUpperCase()}\nDeze functionaliteit wordt binnenkort toegevoegd.`);
}
