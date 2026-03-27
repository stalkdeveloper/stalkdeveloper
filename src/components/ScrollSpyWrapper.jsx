import React, { useEffect, useState, useRef } from 'react';

const ScrollSpyWrapper = ({ items, currentClassName, children, offset = -100 }) => {
  const [activeItem, setActiveItem] = useState('');
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = items.map(item => document.getElementById(item)).filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      {
        rootMargin: `${offset}px 0px 0px 0px`,
        threshold: 0.3
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [items, offset]);

  // Clone children and add active class
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const childId = child.props.href?.replace('#', '');
      const isActive = childId === activeItem;
      
      return React.cloneElement(child, {
        className: `${child.props.className || ''} ${isActive ? currentClassName : ''}`.trim(),
        'data-active': isActive
      });
    }
    return child;
  });

  return <ul className={children.props?.className}>{enhancedChildren}</ul>;
};

export default ScrollSpyWrapper;