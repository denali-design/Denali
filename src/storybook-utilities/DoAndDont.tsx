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

import React, { ReactNode } from 'react'; // Importing ReactNode type
import Icon from '../components/Icon/Icon';
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
interface DoAndDontProps {
  doChildren: ReactNode;
  dontChildren: ReactNode;
  direction?: 'vertical' | 'horizontal';
}

const DoAndDont: React.FC<DoAndDontProps> = ({
  doChildren,
  dontChildren,
  direction = 'vertical'
}) => {
  const isVertical = direction === 'vertical';
  const containerClasses = isVertical
    ? 'grid grid-cols-1 gap-6'
    : 'grid grid-cols-2 gap-6';

  return (
    <div className={`pb-6 ${containerClasses}`}>
      {/* Do Section */}
      <div className="canvas-success stroke-success-vivid overflow-hidden rounded border-t-4 p-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-start-1 col-end-1">
            <div className="canvas-success-vivid flex h-6 w-6 items-center justify-center rounded-full">
              <Icon
                color="default"
                name="icon-control-check"
                size="sm"
                className="text-white"
              />
            </div>
          </div>
          <div className="col-start-2 col-end-12">
            <p className="font-bold uppercase">Do</p>
            {doChildren}
          </div>
        </div>
      </div>

      {/* Don't Section */}
      <div className="canvas-danger stroke-danger-vivid overflow-hidden rounded border-t-4 p-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-start-1 col-end-1">
            <div className="canvas-danger-vivid flex h-6 w-6 items-center justify-center rounded-full">
              <Icon
                color="default"
                name="icon-control-check"
                size="sm"
                className="text-white"
              />
            </div>
          </div>
          <div className="col-start-2 col-end-12">
            <p className="font-bold uppercase">Do</p>
            {dontChildren}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoAndDont;
