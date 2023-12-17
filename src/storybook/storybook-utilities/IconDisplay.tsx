/**
 * Summary. Display and search icons.
 *
 * Description. This component allows users to search and display icons.
 *
 * @file   This file defines the IconDisplay component.
 * @since  1.0.0
 */

import React, { useState, useEffect } from 'react';
import { Icon } from '../../components/Icon/Icon';
import Heading from '../../components/Heading/Heading';

// Dynamic import of SVGs
const iconModules = import.meta.glob('/public/assets/icons/*.svg');

export const IconDisplay: React.FC = () => {
  const [icons, setIcons] = useState<Record<string, string[]>>({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadIcons = async () => {
      const loadedIcons: Record<string, string[]> = {};

      for (const path in iconModules) {
        const matched = path.match(/\/icon-([^/]+?)-([^/]+)\.svg$/);
        if (matched) {
          const category = matched[1];
          const iconName = matched[2];

          if (!loadedIcons[category]) {
            loadedIcons[category] = [];
          }

          loadedIcons[category].push(`icon-${category}-${iconName}`);
        }
      }
      setIcons(loadedIcons);
    };

    loadIcons();
  }, []);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an icon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded border p-2"
      />

      {Object.entries(icons).map(([category, iconsInCategory]) => {
        const filteredIcons = iconsInCategory.filter((icon) =>
          icon.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
          <div key={category} className="pt-2">
            <Heading type="article" level={2}>
              {capitalizeFirstLetter(category)}
            </Heading>
            <div className="grid grid-cols-6 gap-4">
              {filteredIcons.map((iconName) => (
                <a
                  href={`/?path=/docs/components-icon--docs&args=name:${iconName}`}
                  className="flex cursor-pointer flex-col items-center justify-center "
                  key={iconName}
                >
                  <div className="flex h-24 w-full items-center justify-center rounded-lg border border-gray-200">
                    <Icon name={iconName} />
                  </div>
                  <div className=" block">
                    <p className="mt-1 text-xs type-alt">
                      {iconName.split('-').slice(2).join('-')}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
