import { ReactNode, memo } from 'react';
import classNames from 'classnames';
import '../../assets/css/App.css';

interface ContainerProps {
  ariaLabel?: string;
  ariaRole?: string;
  className?: string;
  children: ReactNode;
  id?: string;
  semanticTag?:
    | 'article'
    | 'aside'
    | 'div'
    | 'footer'
    | 'header'
    | 'main'
    | 'nav'
    | 'section';
  style?: React.CSSProperties;
  useStandardColors?: boolean;
  useStandardMargin?: boolean;
  useStandardPadding?: boolean;
}

const Container = memo<ContainerProps>(
  ({
    ariaLabel,
    ariaRole,
    className = '',
    children,
    id,
    semanticTag = 'div',
    style,
    useStandardColors = true,
    useStandardMargin = false,
    useStandardPadding = true
  }): JSX.Element => {
    const Tag = semanticTag as keyof JSX.IntrinsicElements;

    return (
      <Tag
        // Conditionally render aria attributes if provided
        {...(ariaLabel && { 'aria-label': ariaLabel })}
        {...(ariaRole && { role: ariaRole })}
        // Conditionally render standard and additional classes
        className={classNames(
          { 'canvas type': useStandardColors },
          { 'standard-margin': useStandardMargin },
          { 'standard-padding': useStandardPadding },
          className
        )}
        // Conditionally render id and style attributes if provided
        {...(id && { id })}
        {...(style && { style })}
      >
        {children}
      </Tag>
    );
  }
);

Container.displayName = 'Container';

export default Container;
