import React, { useEffect, useRef, useState } from 'react';

const AnimatedComponent = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // Configura o observador para detectar quando o elemento entra na tela
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona um pequeno delay para a animação ficar mais natural
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          // Uma vez visível, para de observar (não repete a animação se rolar pra cima)
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px' }); // Dispara um pouquinho antes de aparecer 100%

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-95'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;