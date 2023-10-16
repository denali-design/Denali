/**
 * Displays Do and Don't sections.
 *
 * This component serves to illustrate good and bad practices by showing
 * content in a Do and Don't format. The content for the Do and Don't
 * sections is passed as children props. The layout direction is controlled
 * via the 'direction' prop.
 *
 * @file   This file defines the DoAndDont component.
 * @since  1.0.0
 */

import '../App.css';
/**
 * Represents a DoAndDont component.
 *
 * @component
 * @param {React.ReactNode} doChildren - The content to display in the Do section.
 * @param {React.ReactNode} dontChildren - The content to display in the Don't section.
 * @param {'vertical'|'horizontal'} direction - The layout direction, either 'vertical' or 'horizontal'.
 * @example
 * return (
 *   <DoAndDont
 *     direction="vertical"
 *     doChildren={<p>You should do this.</p>}
 *     dontChildren={<p>You shouldn't do this.</p>}
 *   />
 * )
 */
const DoAndDont = ({ doChildren, dontChildren, direction = 'vertical' }) => {
  const isVertical = direction === 'vertical';
  const containerClasses = isVertical
    ? 'flex flex-col space-y-4'
    : 'flex flex-row space-x-4';

  return (
    <div className={`pb-4 ${containerClasses}`}>
      {/* Do Section */}
      <div className="flex-1 overflow-hidden rounded border-t-4 border-green-600 bg-green-50 p-2">
        <p className="font-bold uppercase">Do</p>
        {doChildren}
      </div>

      {/* Don't Section */}
      <div className="flex-1 overflow-hidden rounded border-t-4 border-red-600 bg-red-50 p-2">
        <p className="font-bold uppercase">Don't</p>
        {dontChildren}
      </div>
    </div>
  );
};

export default DoAndDont;
