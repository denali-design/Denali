/**
 * Summary. Spacing System for UI elements uses tokens.
 *
 * Description. This component provides a visual representation
 * of various spacing classes based on numeric values in rem units.
 *
 * @file   This file defines the SpacingSystem component.
 * @since  1.0.0
 */

import '../App.css';

export const SpacingSystem = () => {
  const spacingClasses = [
    { name: 'space-none', value: 0, pixels: '0px' },
    { name: 'space-1', value: 0.125, pixels: '2px' },
    { name: 'space-2', value: 0.25, pixels: '4px' },
    { name: 'space-3', value: 0.5, pixels: '8px' },
    { name: 'space-4', value: 1, pixels: '16px' },
    { name: 'space-5', value: 1.5, pixels: '24px' },
    { name: 'space-6', value: 2, pixels: '32px' },
    { name: 'space-7', value: 2.5, pixels: '40px' }
  ];

  return (
    <div>
      <h3>Spacing Tokens</h3>
      <p>
        Spacing tokens are the recommended way to handle spacing in your app.
        They adhere to predefined scales which helps in maintaining consistency.
      </p>
      <table className="w-full table-auto border-collapse border border-transparent ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Size (rem)</th>
            <th>Pixels</th>
            <th>Visual</th>
          </tr>
        </thead>
        <tbody>
          {spacingClasses.map((spacingClass, index) => (
            <tr key={index}>
              <td>{spacingClass.name}</td>
              <td>{spacingClass.value}rem</td>
              <td>{spacingClass.pixels}</td>
              <td>
                <div
                  style={{
                    width: spacingClass.pixels,
                    height: '10px',
                    backgroundColor: 'blue'
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

export default SpacingSystem;