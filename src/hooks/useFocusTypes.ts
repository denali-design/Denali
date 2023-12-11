import { useState, useEffect } from 'react';

/**
 * Custom hook to determine the type of focus on an element (click or tab).
 *
 * @returns An object containing states and setters for different focus types.
 */
const useFocusType = () => {
  const [isTabFocused, setIsTabFocused] = useState<boolean>(false);
  const [isClickFocused, setIsClickFocused] = useState<boolean>(false);
  const [lastInteractionType, setLastInteractionType] = useState<
    'keyboard' | 'mouse'
  >('keyboard');

  useEffect(() => {
    const handleMouseDown = () => setLastInteractionType('mouse');
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setLastInteractionType('keyboard');
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleFocus = () => {
    if (lastInteractionType === 'keyboard') {
      setIsTabFocused(true);
      setIsClickFocused(false);
    } else {
      setIsClickFocused(true);
      setIsTabFocused(false);
    }
  };

  const handleBlur = () => {
    setIsTabFocused(false);
    setIsClickFocused(false);
  };

  return { isTabFocused, isClickFocused, handleFocus, handleBlur };
};

export default useFocusType;
