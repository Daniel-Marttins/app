import { useEffect } from 'react';

const useLandingHook = () => {
    useEffect(() => {
        const handleScrollClick = (event: Event) => {
            const target = event.currentTarget as HTMLElement;
            const scrollTarget = target.getAttribute('data-scroll-target');

            if (scrollTarget) {
                event.preventDefault();
                const targetElement = document.querySelector(scrollTarget);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }
        };

        // Adiciona o listener a todos os elementos com o atributo `data-scroll-target`
        const scrollButtons = document.querySelectorAll('[data-scroll-target]');
        scrollButtons.forEach(button => {
            button.addEventListener('click', handleScrollClick);
        });

        return () => {
            scrollButtons.forEach(button => {
                button.removeEventListener('click', handleScrollClick);
            });
        };
    }, []);
};

export default useLandingHook;
