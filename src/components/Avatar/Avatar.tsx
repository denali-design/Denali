/**
 * Defines the Avatar component.
 *
 * This component renders an avatar, supporting different modes such as photo, icon, and initials. It displays
 * different sizes and uses a dynamic fallback mechanism based on the mode prop, ensuring versatility in avatar
 * display options. It integrates event handlers from the Adobe React ARIA button component for enhanced interactivity.
 *
 * @file   This file defines the Avatar component.
 * @since  1.0.0
 */

import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon'; // Assuming Icon component exists and is exported properly.

// Extending AvatarProps to include onPress event handler prop
interface AvatarProps {
  imageUrl?: string;
  name: string;
  size: 'lg' | 'md' | 'sm';
  mode: 'photo' | 'icon' | 'initial';
  fallbackMode?: 'icon' | 'initial';
  onPress?: () => void; // Optional onPress event handler
}

/**
 * Handles rendering of an avatar image, icon, or initials based on the provided props. It allows for the button within
 * to be interactive, supporting event handlers such as onPress.
 *
 * @param {AvatarProps} props The properties for the Avatar component, including event handlers for interactivity.
 * @returns {React.ReactElement} The Avatar component.
 */
const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  name,
  size,
  mode,
  fallbackMode = mode !== 'photo' ? mode : 'initial', // Dynamically set fallbackMode based on mode if not 'photo'
  onPress // Destructuring onPress from props
}) => {
  // Define classes for size and apply TailwindCSS styles
  const sizeClasses = {
    lg: 'h-16 w-16 text-4xl font-bold',
    md: 'h-8 w-8 text-lg',
    sm: 'h-6 w-6 text-lg'
  };
  const iconSize = size === 'lg' ? 'lg' : 'sm'; // Adjust icon size based on avatar size
  const sizeClass = `rounded-full ${sizeClasses[size]} flex items-center justify-center canvas-info`;

  // Function to render content based on mode
  const renderContent = () => {
    if (mode === 'photo' && imageUrl) {
      return (
        <img
          src={imageUrl}
          alt={`${name}'s avatar`}
          className={`block rounded-full border-2 stroke ${sizeClasses[size]}`}
        />
      );
    } else {
      switch (fallbackMode) {
        case 'icon':
          return (
            <div className={sizeClass}>
              <Icon color="default" name="icon-control-home" size={iconSize} />
            </div>
          );
        case 'initial':
          return (
            <div className={sizeClass}>
              <p>{name.charAt(0)}</p>
            </div>
          );
        default:
          return null; // This case should technically never be reached
      }
    }
  };

  return (
    <div className="flex items-center">
      {renderContent()}
      <Button
        iconColor="default"
        iconOnly
        iconRight="icon-action-arrowhead-down"
        iconSize="md"
        label="Expand avatar options"
        size="none"
        variety="plain"
        onPress={onPress} // Applying the onPress event handler to the Button
      />
    </div>
  );
};

export default Avatar;
