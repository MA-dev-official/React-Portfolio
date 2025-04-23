import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const useSwipeNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const touchStartX = useRef(null);

  const routes = ['/', '/about', '/services', '/contact'];

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartX.current;

    const currentIndex = routes.indexOf(location.pathname);

    if (diffX > 100 && currentIndex > 0) {
      // Swipe Right = Previous Page
      navigate(routes[currentIndex - 1]);
    } else if (diffX < -100 && currentIndex < routes.length - 1) {
      // Swipe Left = Next Page
      navigate(routes[currentIndex + 1]);
    }
  };

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [location.pathname]);

  return null;
};

export default useSwipeNavigation;