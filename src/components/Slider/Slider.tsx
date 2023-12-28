/**
 * Defines the Slider component.
 *
 * @file This file defines the Slider component, intended for selecting a value from a range.
 * @since 1.0.0
 */

import {
  Label,
  Slider as AriaSlider,
  SliderOutput,
  SliderThumb,
  SliderTrack
} from 'react-aria-components';
import type { SliderProps as AriaSliderProps } from 'react-aria-components';
import '../../assets/css/App.css';
import './Slider.css';

interface SliderProps<T> extends AriaSliderProps<T> {
  label?: string;
  thumbLabels?: string[];
}

function Slider<T extends number | number[]>({
  label,
  thumbLabels,
  orientation = 'horizontal',
  ...props
}: SliderProps<T>) {
  return (
    <AriaSlider
      className={`slider ${!label ? 'slider--no-label' : ''}`}
      orientation={orientation}
      {...props}
    >
      {label && (
        <div className="slider__header">
          <Label>{label}</Label>
          <SliderOutput className="slider__output">
            {({ state }) =>
              state.values
                .map((_, i) => state.getThumbValueLabel(i))
                .join(' – ')
            }
          </SliderOutput>
        </div>
      )}
      <SliderTrack className="slider__track">
        {({ state }) => {
          let fillStyle;

          if (orientation === 'horizontal') {
            if (state.values.length > 1) {
              // Multiple thumbs
              const firstThumbPercent = state.getThumbPercent(0) * 100;
              const lastThumbPercent =
                state.getThumbPercent(state.values.length - 1) * 100;
              fillStyle = {
                left: firstThumbPercent + '%',
                width: lastThumbPercent - firstThumbPercent + '%'
              };
            } else {
              // Single thumb
              fillStyle = {
                width: state.getThumbPercent(0) * 100 + '%'
              };
            }
          } else {
            // Vertical fill style
            if (state.values.length > 1) {
              const firstThumbPercent = state.getThumbPercent(0) * 100;
              const lastThumbPercent =
                state.getThumbPercent(state.values.length - 1) * 100;
              fillStyle = {
                bottom: firstThumbPercent + '%',
                height: lastThumbPercent - firstThumbPercent + '%'
              };
            } else {
              fillStyle = {
                bottom: '0%',
                height: state.getThumbPercent(0) * 100 + '%'
              };
            }
          }

          return (
            <>
              <div className="slider__fill" style={fillStyle} />
              {state.values.map((_, i) => (
                <SliderThumb
                  className="slider__thumb"
                  key={i}
                  index={i}
                  aria-label={thumbLabels?.[i]}
                />
              ))}
            </>
          );
        }}
      </SliderTrack>
    </AriaSlider>
  );
}

export default Slider;
