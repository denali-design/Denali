/**
 * Returns a color map leveraging Tailwind's color palette.
 *
 * @file   This file defines the getTailwindColors and getTailwindCompatibleColors functions.
 * @since  1.0.0
 */

import colors from 'tailwindcss/colors';

interface ColorScheme {
  bg: string;
  txt: string;
}

interface SemanticColor {
  use: string;
  desc: string;
  light: ColorScheme;
  dark: ColorScheme;
}

interface CanvasColors {
  canvas: SemanticColor;
  'canvas-alt': SemanticColor;
  'canvas-success': SemanticColor;
  'canvas-warning': SemanticColor;
  'canvas-danger': SemanticColor;
  'canvas-info': SemanticColor;
}

interface StrokeColors {
  stroke: SemanticColor;
  'stroke-alt': SemanticColor;
  'stroke-success': SemanticColor;
  'stroke-warning': SemanticColor;
  'stroke-danger': SemanticColor;
  'stroke-info': SemanticColor;
}

interface TypeColors {
  type: SemanticColor;
  'type-alt': SemanticColor;
  'type-success': SemanticColor;
  'type-warning': SemanticColor;
  'type-danger': SemanticColor;
  'type-info': SemanticColor;
}

interface ActionColors {
  action: SemanticColor;
  'action-alt': SemanticColor;
  'action-success': SemanticColor;
  'action-warning': SemanticColor;
  'action-danger': SemanticColor;
  'action-info': SemanticColor;
}

interface SemanticColors {
  Canvas: CanvasColors;
  Stroke: StrokeColors;
  Type: TypeColors;
  Action: ActionColors;
}

/**
 * Returns an object containing semantic color definitions.
 *
 * @returns {SemanticColors} An object containing semantic color definitions.
 */
const getTailwindSemanticColors = (): { semanticColors: SemanticColors } => ({
  semanticColors: {
    Canvas: {
      canvas: {
        use: 'bg',
        desc: 'Used for canvas backgrounds',
        light: {
          bg: colors.white,
          txt: colors.white
        },
        dark: {
          bg: colors.black,
          txt: colors.white
        }
      },
      'canvas-alt': {
        use: 'bg',
        desc: 'Alternate canvas backgrounds',
        light: {
          bg: colors.slate[100],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[900],
          txt: colors.white
        }
      },
      'canvas-success': {
        use: 'bg',
        desc: 'Indicates successful validation or state',
        light: {
          bg: colors.green[200],
          txt: colors.black
        },
        dark: {
          bg: colors.green[900],
          txt: colors.white
        }
      },
      'canvas-warning': {
        use: 'bg',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.yellow[200],
          txt: colors.black
        },
        dark: {
          bg: colors.yellow[900],
          txt: colors.white
        }
      },
      'canvas-danger': {
        use: 'bg',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.red[200],
          txt: colors.black
        },
        dark: {
          bg: colors.red[900],
          txt: colors.white
        }
      },
      'canvas-info': {
        use: 'bg',
        desc: 'Used for informational elements',
        light: {
          bg: colors.blue[200],
          txt: colors.black
        },
        dark: {
          bg: colors.blue[900],
          txt: colors.white
        }
      }
    },
    Stroke: {
      stroke: {
        use: 'border',
        desc: 'Use as a border color.',
        light: {
          bg: colors.slate[100],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[900],
          txt: colors.white
        }
      },
      'stroke-alt': {
        use: 'border',
        desc: 'Use as a border color.',
        light: {
          bg: colors.slate[600],
          txt: colors.white
        },
        dark: {
          bg: colors.slate[300],
          txt: colors.black
        }
      },
      'stroke-success': {
        use: 'border',
        desc: 'Use as a border color.',
        light: {
          bg: colors.green[600],
          txt: colors.white
        },
        dark: {
          bg: colors.green[300],
          txt: colors.black
        }
      },
      'stroke-warning': {
        use: 'border',
        desc: 'Use as a border color.',
        light: {
          bg: colors.yellow[600],
          txt: colors.white
        },
        dark: {
          bg: colors.yellow[300],
          txt: colors.black
        }
      },
      'stroke-danger': {
        use: 'border',
        desc: 'Use as a border color.',
        light: {
          bg: colors.red[600],
          txt: colors.white
        },
        dark: {
          bg: colors.red[300],
          txt: colors.black
        }
      },
      'stroke-info': {
        use: 'border',
        desc: 'Use as a border color.',
        light: {
          bg: colors.blue[600],
          txt: colors.white
        },
        dark: {
          bg: colors.blue[300],
          txt: colors.black
        }
      }
    },
    Type: {
      type: {
        use: 'text',
        desc: 'Use as a font color.',
        light: {
          bg: colors.slate[900],
          txt: colors.white
        },
        dark: {
          bg: colors.slate[900],
          txt: colors.white
        }
      },
      'type-alt': {
        use: 'text',
        desc: 'Use as a font color.',
        light: {
          bg: colors.slate[600],
          txt: colors.white
        },
        dark: {
          bg: colors.slate[300],
          txt: colors.black
        }
      },
      'type-success': {
        use: 'text',
        desc: 'Use as a font color.',
        light: {
          bg: colors.green[600],
          txt: colors.white
        },
        dark: {
          bg: colors.green[300],
          txt: colors.black
        }
      },
      'type-warning': {
        use: 'text',
        desc: 'Use as a font color.',
        light: {
          bg: colors.yellow[600],
          txt: colors.white
        },
        dark: {
          bg: colors.yellow[300],
          txt: colors.black
        }
      },
      'type-danger': {
        use: 'text',
        desc: 'Use as a font color.',
        light: {
          bg: colors.red[600],
          txt: colors.white
        },
        dark: {
          bg: colors.red[300],
          txt: colors.black
        }
      },
      'type-info': {
        use: 'text',
        desc: 'Use as a font color.',
        light: {
          bg: colors.blue[600],
          txt: colors.white
        },
        dark: {
          bg: colors.blue[300],
          txt: colors.black
        }
      }
    },
    Action: {
      action: {
        use: 'bg',
        desc: 'Used for action backgrounds',
        light: {
          bg: colors.black,
          txt: colors.white
        },
        dark: {
          bg: colors.white,
          txt: colors.black
        }
      },
      'action-alt': {
        use: 'bg',
        desc: 'Alternate action backgrounds',
        light: {
          bg: colors.slate[600],
          txt: colors.white
        },
        dark: {
          bg: colors.slate[200],
          txt: colors.black
        }
      },
      'action-success': {
        use: 'bg',
        desc: 'Indicates successful validation or state',
        light: {
          bg: colors.green[600],
          txt: colors.white
        },
        dark: {
          bg: colors.green[200],
          txt: colors.black
        }
      },
      'action-warning': {
        use: 'bg',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.yellow[600],
          txt: colors.white
        },
        dark: {
          bg: colors.yellow[200],
          txt: colors.black
        }
      },
      'action-danger': {
        use: 'bg',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.red[600],
          txt: colors.white
        },
        dark: {
          bg: colors.red[200],
          txt: colors.black
        }
      },
      'action-info': {
        use: 'bg',
        desc: 'Used for informational elements',
        light: {
          bg: colors.blue[600],
          txt: colors.white
        },
        dark: {
          bg: colors.blue[200],
          txt: colors.black
        }
      }
    }
  }
});

export const semanticColorSwatches = getTailwindSemanticColors();

/**
 * Returns an object containing Tailwind-compatible semantic colors.
 *
 * This function takes the original semantic colors object and restructures it
 * to remove the 'desc' fields. The transformed object is then directly returned.
 *
 * @returns {Record<string, any>} An object containing Tailwind-compatible semantic colors.
 */
export const getTailwindCompatibleSemanticColors = (): Record<string, any> => {
  const originalColors = getTailwindSemanticColors().semanticColors;

  const newColors: Record<string, Record<string, ColorScheme>> = {};

  for (const [_, categoryValue] of Object.entries(originalColors)) {
    for (const [colorKey, colorValue] of Object.entries(categoryValue)) {
      if (typeof colorValue === 'object' && colorValue !== null) {
        newColors[colorKey] = {};

        for (const [innerKey, innerValue] of Object.entries(colorValue)) {
          if (innerKey !== 'desc') {
            newColors[colorKey][innerKey] = innerValue as ColorScheme;
          }
        }
      }
    }
  }

  return newColors;
};

// Export the transformed color swatches
export const tailwindCompatibleSemanticColors =
  getTailwindCompatibleSemanticColors();
