document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      emailjs.init("ByGYas4DwQWDLKwaT");
  
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };
  
      emailjs
        .send("service_5ksfo9h", "template_3d2cyzm", templateParams)
        .then(function(response) {
          formFeedback.textContent = "Message sent successfully!";
          formFeedback.style.color = "green";
          formFeedback.style.display = "block";
          form.reset();
        })
        .catch(() => {
          formFeedback.textContent = "Failed to send message. Please try again.";
          formFeedback.style.color = "red";
          formFeedback.style.display = "block";
        });
    });
  
    // Scroll Animation for timeline items
    const timelineItems = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    timelineItems.forEach(item => {
      observer.observe(item);
    });
  });

  
  // Seleccionar todas las secciones que deben animarse
const sections = document.querySelectorAll('.fadeIn');

// Función para detectar si el elemento es visible en el viewport
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
};

// Agregar o quitar la clase visible según la posición de la sección en el viewport
const handleScroll = () => {
  sections.forEach((section) => {
    if (isElementInViewport(section)) {
      section.classList.add('visible');
    }
  });
};

// Agregar evento de scroll
window.addEventListener('scroll', handleScroll);

// Ejecutar una vez al cargar la página
handleScroll();
