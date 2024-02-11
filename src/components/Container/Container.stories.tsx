import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';
import Heading from '../Heading/Heading';

const meta: Meta<typeof Container> = {
  component: Container,
  title: 'Components/Layout/Container',
  argTypes: {
    ariaLabel: {
      control: 'text',
      description: 'Defines an optional `aria-label` attribute.'
    },
    ariaRole: {
      control: 'text',
      description: 'Defines an optional `aria-role` attribute.'
    },
    className: {
      control: 'text',
      description: 'Defines an optional `className` attribute.'
    },
    id: {
      control: 'text',
      description: 'Defines an optional `id` attribute.'
    },
    semanticTag: {
      control: 'select',
      options: [
        'article',
        'aside',
        'div',
        'footer',
        'header',
        'main',
        'nav',
        'section'
      ],
      description:
        'Defines a semantic HTML5 tag for the container element. Defaults to `div`.'
    },
    style: {
      control: 'object',
      description: 'Defines an optional `style` attribute.'
    },
    useStandardColors: {
      control: 'boolean',
      description:
        'Defines whether to use the Denali `canvas` and `type` classes on the container element.'
    },
    useStandardMargin: {
      control: 'boolean',
      description:
        'Defines whether to use pre-defined margin class along the y axis that scales depending on viewport width.'
    },
    useStandardPadding: {
      control: 'boolean',
      description:
        'Defines whether to use pre-defined padding class along the x and y axis that scales depending on viewport width.'
    },
    children: {
      control: false,
      description: 'Defines the content of the container element.'
    }
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Use `Container` to wrap elements in a semantic HTML container with optional accessibility features, styling, and layout properties.'
      }
    },
    layout: 'fullscreen'
  }
};
export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: [
      <h2 key="h2" className="mb-2 font-bold">
        Container
      </h2>,
      <p key="p">
        This is a paragraph inside the Container component. It demonstrates the
        usage of the Container as a wrapper for various elements.
      </p>
    ]
  }
};

export const NoPadding: Story = {
  args: {
    useStandardPadding: false,
    children: [
      <h2 key="h2" className="mb-2 font-bold">
        Container
      </h2>,
      <p key="p">
        This is a paragraph inside the Container component. It demonstrates the
        usage of the Container as a wrapper for various elements.
      </p>
    ]
  }
};

export const NoStandardColors: Story = {
  args: {
    useStandardColors: false,
    children: [
      <h2 key="h2" className="mb-2 font-bold">
        Container
      </h2>,
      <p key="p">
        This container is not using the default Denali background and type
        colors. It should be thought of as transparent, meaning whatever is
        behind it will show through. It will also not respond automatically to
        switching to dark mode, so inner elements will need to be styled
        accordingly.
      </p>
    ]
  }
};

export const CustomCSSClass: Story = {
  args: {
    useStandardColors: false,
    className: 'canvas-secondary type-on-dark rounded-lg',
    children: [
      <Heading
        key="h1"
        name="Container"
        level="h1"
        style="h1"
        type="article"
      />,
      <p key="p" className="mb-4 text-2xl">
        This is a paragraph inside the Container component. It demonstrates the
        usage of the Container as a wrapper for various elements.
      </p>
    ]
  }
};

export const NestedContainer: Story = {
  args: {
    semanticTag: 'main',
    useStandardColors: false,
    className: 'canvas-alt rounded-lg',
    children: [
      <Container
        semanticTag="article"
        useStandardColors={false}
        className="type-on-dark mx-auto max-w-md rounded-lg canvas-secondary"
      >
        <Heading level="h1" name="Container" style="h1" type="article" />
        <p className="mb-4 text-xl">
          This is a paragraph inside the Container component. It demonstrates
          the usage of the Container as a wrapper for various elements.
        </p>
      </Container>
    ]
  }
};
