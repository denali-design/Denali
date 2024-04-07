/**
 * Defines the Avatar component.
 *
 * This component renders an avatar, supporting different modes such as photo, icon, and letters. It displays
 * different sizes and uses a dynamic fallback mechanism based on the mode prop, ensuring versatility in avatar
 * display options.
 *
 * @file   This file defines the Avatar component.
 * @since  1.0.0
 */

import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import './Avatar.css';

interface AvatarProps {
  imageUrl?: string;
  name: string;
  size: 'lg' | 'md' | 'sm';
  mode: 'photo' | 'icon' | 'letter';
  fallbackMode?: 'icon' | 'letter';
  onPress?: () => void;
}

/**
 * Handles rendering of an avatar image, icon, or letters based on the provided props. It allows for the button within
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
  fallbackMode = mode !== 'photo' ? mode : 'letter',
  onPress
}) => {
  const sizeClasses = {
    lg: 'avatar__img--lg',
    md: 'avatar__img--md',
    sm: 'avatar__img--sm'
  };
  const iconSize = size === 'lg' ? 'lg' : 'sm';
  const avatarSizeClass = `avatar__circle ${sizeClasses[size]}`;

  // Render content based on mode
  const renderContent = () => {
    if (mode === 'photo' && imageUrl) {
      return (
        <img
          src={imageUrl}
          alt={`${name}'s avatar`}
          className={`avatar__img ${sizeClasses[size]}`}
        />
      );
    } else {
      switch (fallbackMode) {
        case 'icon':
          return (
            <div className={avatarSizeClass}>
              <Icon color="default" name="icon-security-user" size={iconSize} />
              <p className="sr-only">{name}</p>
            </div>
          );
        case 'letter':
          return (
            <div className={avatarSizeClass}>
              <p>
                <abbr aria-label={name} title={name}>
                  {name.charAt(0)}
                </abbr>
              </p>
            </div>
          );
        default:
          return null;
      }
    }
  };

  return (
    <div className="avatar">
      {renderContent()}
      <Button
        iconColor="default"
        iconOnly
        iconRight="icon-action-arrowhead-down"
        iconSize="md"
        label="Expand avatar options"
        size="none"
        variety="plain"
        onPress={onPress}
      />
    </div>
  );
};

export default Avatar;
