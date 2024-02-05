import {
  Breadcrumbs as AriaBreadcrumbs,
  Breadcrumb,
  Link
} from 'react-aria-components';
import { BreadcrumbsProps as AriaBreadcrumbsProps } from 'react-aria-components';
import { Icon } from '../Icon/Icon'; // Ensure this path is correct
import { tv } from 'tailwind-variants';
import '../../assets/css/App.css';
import './breadcrumbs.css';

export interface BreadcrumbItem {
  link: string;
  title: string;
  icon: boolean;
  iconName?: string;
}

export interface BreadcrumbsProps extends AriaBreadcrumbsProps<object> {
  breadcrumbs: BreadcrumbItem[];
  variety?: 'plain' | 'gray';
}

const breadcrumbsStyle = tv({
  base: 'flex items-center justify-center gap-2 font-bold',
  variants: {
    color: {
      plain: 'canvas',
      gray: 'canvas-alt p-3 rounded'
    }
  },
  defaultVariants: {
    color: 'plain'
  }
});

/**
 * Renders a navigation aid with links representing the path to the current page.
 *
 * @param {BreadcrumbsProps} props - The props for the component, including `breadcrumbs` array to define breadcrumb links, and `variety` to define style variants.
 * @returns {JSX.Element} The Breadcrumbs component.
 */
function Breadcrumbs({
  breadcrumbs,
  variety,
  ...props
}: BreadcrumbsProps): JSX.Element {
  const linkBaseClasses =
    'breadcrumbs rounded type-secondary hover:underline hover:type-secondary-hover focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-600 focus:type-secondary-focus disabled:type-secondary-disabled action:type-secondary-pressed disabled:!type-secondary-disabled disabled:!cursor-default';
  const breadcrumbElements = breadcrumbs.map((crumb, index) => {
    const isLast = index === breadcrumbs.length - 1;
    return (
      <Breadcrumb key={crumb.link} className="flex items-center">
        <Link
          href={crumb.link}
          className={`${linkBaseClasses} ${
            isLast
              ? '!cursor-default font-light hover:!no-underline hover:!type-secondary'
              : ''
          }`}
        >
          {crumb.icon && crumb.iconName ? (
            <>
              <Icon
                aria-hidden="true"
                className="icon"
                name={crumb.iconName}
                size="md"
              />
              <span className="sr-only">{crumb.title}</span>
            </>
          ) : (
            crumb.title
          )}
        </Link>
        {!isLast && (
          <span aria-hidden="true" className="ml-2">
            <Icon
              aria-hidden="true"
              className="icon"
              name="icon-action-arrowhead-right"
              size="md"
            />
          </span>
        )}
      </Breadcrumb>
    );
  });

  return (
    <AriaBreadcrumbs
      {...props}
      className={`${breadcrumbsStyle({ color: variety })}`}
    >
      {breadcrumbElements}
    </AriaBreadcrumbs>
  );
}

export default Breadcrumbs;
export { Breadcrumbs };
