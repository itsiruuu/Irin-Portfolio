import { useEffect } from 'react';

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, .work-card, .interactive';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const cursorDot = document.getElementById('cursor-dot');
    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    if (!cursor || !cursorDot || !finePointerQuery.matches) return undefined;

    document.body.classList.add('custom-cursor-enabled');

    const handleMouseMove = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursorDot.style.left = `${event.clientX}px`;
      cursorDot.style.top = `${event.clientY}px`;
    };

    const handleMouseOver = (event) => {
      const interactiveElement = event.target.closest(INTERACTIVE_SELECTOR);
      cursor.classList.toggle('hover', Boolean(interactiveElement));
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('hover');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('custom-cursor-enabled');
      cursor.classList.remove('hover');
    };
  }, []);

  return null;
}
