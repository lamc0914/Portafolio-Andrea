// ===== FUNCIONALIDAD DEL FORMULARIO DE CONTACTO =====

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtenemos el formulario de contacto por su ID
    const contactForm = document.getElementById('contactForm');
    
    // Agregamos un event listener para el evento 'submit' del formulario
    contactForm.addEventListener('submit', function(event) {
        // Prevenimos el comportamiento por defecto del formulario (enviar a servidor)
        event.preventDefault();
        
        // Obtenemos los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Validamos que todos los campos estén llenos
        if (nombre && correo && mensaje) {
            // Mostramos mensaje de éxito en la consola
            console.log('Formulario enviado correctamente');
            console.log('Datos del formulario:');
            console.log('Nombre:', nombre);
            console.log('Correo:', correo);
            console.log('Mensaje:', mensaje);
            
            // Mostramos una alerta visual al usuario
            showSuccessMessage();
            
            // Limpiamos el formulario después del envío
            contactForm.reset();
        } else {
            // Si faltan campos, mostramos un mensaje de error
            showErrorMessage();
        }
    });
    
    // ===== FUNCIÓN PARA MOSTRAR MENSAJE DE ÉXITO =====
    function showSuccessMessage() {
        // Creamos un elemento div para el mensaje de éxito
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div class="message-content">
                <h3>¡Mensaje enviado correctamente!</h3>
                <p>Gracias por contactarme. Te responderé pronto.</p>
            </div>
        `;
        
        // Agregamos estilos al mensaje
        successMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #D5AAFF, #FFABAB);
            color: white;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            text-align: center;
            animation: fadeInScale 0.5s ease;
        `;
        
        // Agregamos el mensaje al body
        document.body.appendChild(successMessage);
        
        // Removemos el mensaje después de 3 segundos
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    }
    
    // ===== FUNCIÓN PARA MOSTRAR MENSAJE DE ERROR =====
    function showErrorMessage() {
        // Creamos un elemento div para el mensaje de error
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.innerHTML = `
            <div class="message-content">
                <h3>¡Error!</h3>
                <p>Por favor, completa todos los campos del formulario.</p>
            </div>
        `;
        
        // Agregamos estilos al mensaje de error
        errorMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
            color: white;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            text-align: center;
            animation: fadeInScale 0.5s ease;
        `;
        
        // Agregamos el mensaje al body
        document.body.appendChild(errorMessage);
        
        // Removemos el mensaje después de 3 segundos
        setTimeout(() => {
            errorMessage.remove();
        }, 3000);
    }
    
    // ===== NAVEGACIÓN SUAVE =====
    // Obtenemos todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Agregamos event listeners a cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevenimos el comportamiento por defecto
            event.preventDefault();
            
            // Obtenemos el ID de la sección a la que queremos ir
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Si la sección existe, hacemos scroll suave hacia ella
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== EFECTO DE APARICIÓN AL HACER SCROLL =====
    // Función para verificar si un elemento está visible en la pantalla
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Función para agregar la clase 'visible' a elementos que están en el viewport
    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.experience-card, .project-card');
        
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }
    
    // Agregamos event listener para el scroll
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Ejecutamos la función una vez al cargar la página
    handleScrollAnimation();
    
    // ===== EFECTO HOVER EN BOTONES DE PROYECTOS =====
    const projectButtons = document.querySelectorAll('.project-btn');
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtenemos el título del proyecto
            const projectTitle = this.closest('.project-card').querySelector('h3').textContent;
            
            // Mostramos un mensaje en consola
            console.log(`Ver más detalles del proyecto: ${projectTitle}`);
            
            // Creamos un mensaje temporal
            const tempMessage = document.createElement('div');
            tempMessage.innerHTML = `
                <div style="
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(45deg, #D5AAFF, #FFABAB);
                    color: white;
                    padding: 15px 25px;
                    border-radius: 10px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    z-index: 10000;
                    animation: slideInRight 0.5s ease;
                ">
                    <strong>Proyecto:</strong> ${projectTitle}
                </div>
            `;
            
            document.body.appendChild(tempMessage);
            
            // Removemos el mensaje después de 2 segundos
            setTimeout(() => {
                tempMessage.remove();
            }, 2000);
        });
    });
    
    // ===== EFECTO DE NAVEGACIÓN ACTIVA =====
    // Función para actualizar el enlace activo en la navegación
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Agregamos event listener para actualizar el enlace activo
    window.addEventListener('scroll', updateActiveNavLink);
    
    // ===== ANIMACIÓN DE LA IMAGEN DE PERFIL =====
    const profileImg = document.querySelector('.profile-img');
    
    if (profileImg) {
        profileImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(5deg)';
        });
        
        profileImg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
    
    // ===== MENSAJE DE BIENVENIDA EN CONSOLA =====
    console.log('🌟 ¡Bienvenido al portafolio de Loraine Andrea Martínez Celis! 🌟');
    console.log('💼 Administrador Financiero especializada en Gestión del Talento Humano');
    console.log('🚀 Página web desarrollada con HTML, CSS y JavaScript puro');
    console.log('📧 Para contactar, utiliza el formulario de contacto en la página');
});

// ===== ESTILOS CSS ADICIONALES PARA ANIMACIONES =====
// Agregamos estilos CSS dinámicamente para las animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInScale {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes slideInRight {
        0% {
            opacity: 0;
            transform: translateX(100px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .nav-link.active {
        color: #D5AAFF !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

