import { ProgressBar as AriaProgressBar, Label } from 'react-aria-components';
import type { ProgressBarProps as AriaProgressBarProps } from 'react-aria-components';
import '../../assets/css/App.css';
import './ProgressBar.css';

interface ProgressBarProps extends AriaProgressBarProps {
  label?: string;
}

function ProgressBar({ label, ...props }: ProgressBarProps) {
  return (
    <AriaProgressBar {...props} className="progress-bar">
      {({ percentage, valueText }) => (
        <>
          <div className="progress-bar__header">
            <Label className="progress-bar__label">{label}</Label>
            <span className="progress-bar__value">{valueText}</span>
          </div>

          <div className="progress-bar__bar">
            <div
              className="progress-bar__color"
              style={{ width: percentage + '%' }}
            />
          </div>
        </>
      )}
    </AriaProgressBar>
  );
}

export default ProgressBar;
