/**
 * Summary. Spacing System for UI elements using TailwindCSS Primitives.
 *
 * Description. This component provides a visual representation
 * of various spacing classes based on numeric values in rem units.
 *
 * @file   This file defines the TWSpacingSystem component.
 * @since  1.0.0
 */

import Heading from '../components/Heading/Heading';

export const TWSpacingSystem = () => {
  const spacingClasses = [
    { name: '0', value: 0, pixels: '0px' },
    { name: 'px', value: 0.0625, pixels: '1px' },
    { name: '0.5', value: 0.125, pixels: '2px' },
    { name: '1', value: 0.25, pixels: '4px' },
    { name: '1.5', value: 0.375, pixels: '6px' },
    { name: '2', value: 0.5, pixels: '8px' },
    { name: '2.5', value: 0.625, pixels: '10px' },
    { name: '3', value: 0.75, pixels: '12px' },
    { name: '3.5', value: 0.875, pixels: '14px' },
    { name: '4', value: 1, pixels: '16px' },
    { name: '5', value: 1.25, pixels: '20px' },
    { name: '6', value: 1.5, pixels: '24px' },
    { name: '7', value: 1.75, pixels: '28px' },
    { name: '8', value: 2, pixels: '32px' },
    { name: '9', value: 2.25, pixels: '36px' },
    { name: '10', value: 2.5, pixels: '40px' },
    { name: '11', value: 2.75, pixels: '44px' },
    { name: '12', value: 3, pixels: '48px' },
    { name: '14', value: 3.5, pixels: '56px' },
    { name: '16', value: 4, pixels: '64px' },
    { name: '20', value: 5, pixels: '80px' },
    { name: '24', value: 6, pixels: '96px' },
    { name: '28', value: 7, pixels: '112px' },
    { name: '32', value: 8, pixels: '128px' },
    { name: '36', value: 9, pixels: '144px' },
    { name: '40', value: 10, pixels: '160px' },
    { name: '44', value: 11, pixels: '176px' },
    { name: '48', value: 12, pixels: '192px' },
    { name: '52', value: 13, pixels: '208px' },
    { name: '56', value: 14, pixels: '224px' },
    { name: '60', value: 15, pixels: '240px' },
    { name: '64', value: 16, pixels: '256px' },
    { name: '72', value: 18, pixels: '288px' },
    { name: '80', value: 20, pixels: '320px' },
    { name: '96', value: 24, pixels: '384px' }
  ];

  return (
    <div>
      <Heading level={2}>Spacing Primatives</Heading>
      <p>
        Spacing primitives give you more control but should be used cautiously
        to ensure design consistency.
      </p>
      <table className="w-full table-auto border-collapse border border-transparent">
        <thead className="border-b-2 text-left stroke-alt">
          <tr>
            <th className="py-4">Name</th>
            <th className="py-4">Size (rem)</th>
            <th className="py-4">Pixels</th>
            <th className="py-4">Visual</th>
          </tr>
        </thead>
        <tbody>
          {spacingClasses.map((spacingClass, index) => (
            <tr key={index} className="border-b stroke-alt hover:canvas-hover">
              <td className="py-4">{spacingClass.name}</td>
              <td className="py-4">{spacingClass.value}rem</td>
              <td className="py-4">{spacingClass.pixels}</td>
              <td className="py-4">
                <div
                  className="h-4 canvas-info-vivid"
                  style={{
                    width: spacingClass.pixels
                  }}
                ></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TWSpacingSystem;
