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
  'canvas-hover': SemanticColor;
  'canvas-pressed': SemanticColor;
  'canvas-focus': SemanticColor;
  'canvas-disabled': SemanticColor;
}

interface CanvasAltColors {
  'canvas-alt': SemanticColor;
  'canvas-alt-hover': SemanticColor;
  'canvas-alt-pressed': SemanticColor;
  'canvas-alt-focus': SemanticColor;
  'canvas-alt-disabled': SemanticColor;
}

interface CanvasSuccessColors {
  'canvas-success': SemanticColor;
  'canvas-success-hover': SemanticColor;
  'canvas-success-pressed': SemanticColor;
  'canvas-success-focus': SemanticColor;
  'canvas-success-disabled': SemanticColor;
}

interface CanvasSuccessVividColors {
  'canvas-success-vivid': SemanticColor;
  'canvas-success-vivid-hover': SemanticColor;
  'canvas-success-vivid-pressed': SemanticColor;
  'canvas-success-vivid-focus': SemanticColor;
  'canvas-success-vivid-disabled': SemanticColor;
}

interface CanvasWarningColors {
  'canvas-warning': SemanticColor;
  'canvas-warning-hover': SemanticColor;
  'canvas-warning-pressed': SemanticColor;
  'canvas-warning-focus': SemanticColor;
  'canvas-warning-disabled': SemanticColor;
}

interface CanvasWarningVividColors {
  'canvas-warning-vivid': SemanticColor;
  'canvas-warning-vivid-hover': SemanticColor;
  'canvas-warning-vivid-pressed': SemanticColor;
  'canvas-warning-vivid-focus': SemanticColor;
  'canvas-warning-vivid-disabled': SemanticColor;
}

interface CanvasDangerColors {
  'canvas-danger': SemanticColor;
  'canvas-danger-hover': SemanticColor;
  'canvas-danger-pressed': SemanticColor;
  'canvas-danger-focus': SemanticColor;
  'canvas-danger-disabled': SemanticColor;
}

interface CanvasDangerVividColors {
  'canvas-danger-vivid': SemanticColor;
  'canvas-danger-vivid-hover': SemanticColor;
  'canvas-danger-vivid-pressed': SemanticColor;
  'canvas-danger-vivid-focus': SemanticColor;
  'canvas-danger-vivid-disabled': SemanticColor;
}

interface CanvasInfoColors {
  'canvas-info': SemanticColor;
  'canvas-info-hover': SemanticColor;
  'canvas-info-pressed': SemanticColor;
  'canvas-info-focus': SemanticColor;
  'canvas-info-disabled': SemanticColor;
}

interface CanvasInfoVividColors {
  'canvas-info-vivid': SemanticColor;
  'canvas-info-vivid-hover': SemanticColor;
  'canvas-info-vivid-pressed': SemanticColor;
  'canvas-info-vivid-focus': SemanticColor;
  'canvas-info-vivid-disabled': SemanticColor;
}

interface CanvasPrimaryColors {
  'canvas-primary': SemanticColor;
  'canvas-primary-hover': SemanticColor;
  'canvas-primary-pressed': SemanticColor;
  'canvas-primary-focus': SemanticColor;
  'canvas-primary-disabled': SemanticColor;
}

interface CanvasSecondaryColors {
  'canvas-secondary': SemanticColor;
  'canvas-secondary-hover': SemanticColor;
  'canvas-secondary-pressed': SemanticColor;
  'canvas-secondary-focus': SemanticColor;
  'canvas-secondary-disabled': SemanticColor;
}

interface StrokeColors {
  stroke: SemanticColor;
  'stroke-hover': SemanticColor;
  'stroke-pressed': SemanticColor;
  'stroke-focus': SemanticColor;
  'stroke-disabled': SemanticColor;
}

interface StrokeAltColors {
  'stroke-alt': SemanticColor;
  'stroke-alt-hover': SemanticColor;
  'stroke-alt-pressed': SemanticColor;
  'stroke-alt-focus': SemanticColor;
  'stroke-alt-disabled': SemanticColor;
}

interface StrokeSuccessColors {
  'stroke-success': SemanticColor;
  'stroke-success-hover': SemanticColor;
  'stroke-success-pressed': SemanticColor;
  'stroke-success-focus': SemanticColor;
  'stroke-success-disabled': SemanticColor;
}

interface StrokeSuccessVividColors {
  'stroke-success-vivid': SemanticColor;
  'stroke-success-vivid-hover': SemanticColor;
  'stroke-success-vivid-pressed': SemanticColor;
  'stroke-success-vivid-focus': SemanticColor;
  'stroke-success-vivid-disabled': SemanticColor;
}

interface StrokeWarningColors {
  'stroke-warning': SemanticColor;
  'stroke-warning-hover': SemanticColor;
  'stroke-warning-pressed': SemanticColor;
  'stroke-warning-focus': SemanticColor;
  'stroke-warning-disabled': SemanticColor;
}

interface StrokeWarningVividColors {
  'stroke-warning-vivid': SemanticColor;
  'stroke-warning-vivid-hover': SemanticColor;
  'stroke-warning-vivid-pressed': SemanticColor;
  'stroke-warning-vivid-focus': SemanticColor;
  'stroke-warning-vivid-disabled': SemanticColor;
}

interface StrokeDangerColors {
  'stroke-danger': SemanticColor;
  'stroke-danger-hover': SemanticColor;
  'stroke-danger-pressed': SemanticColor;
  'stroke-danger-focus': SemanticColor;
  'stroke-danger-disabled': SemanticColor;
}

interface StrokeDangerVividColors {
  'stroke-danger-vivid': SemanticColor;
  'stroke-danger-vivid-hover': SemanticColor;
  'stroke-danger-vivid-pressed': SemanticColor;
  'stroke-danger-vivid-focus': SemanticColor;
  'stroke-danger-vivid-disabled': SemanticColor;
}

interface StrokeInfoColors {
  'stroke-info': SemanticColor;
  'stroke-info-hover': SemanticColor;
  'stroke-info-pressed': SemanticColor;
  'stroke-info-focus': SemanticColor;
  'stroke-info-disabled': SemanticColor;
}

interface StrokeInfoVividColors {
  'stroke-info-vivid': SemanticColor;
  'stroke-info-vivid-hover': SemanticColor;
  'stroke-info-vivid-pressed': SemanticColor;
  'stroke-info-vivid-focus': SemanticColor;
  'stroke-info-vivid-disabled': SemanticColor;
}

interface StrokePrimaryColors {
  'stroke-primary': SemanticColor;
  'stroke-primary-hover': SemanticColor;
  'stroke-primary-pressed': SemanticColor;
  'stroke-primary-focus': SemanticColor;
  'stroke-primary-disabled': SemanticColor;
}

interface StrokeSecondaryColors {
  'stroke-secondary': SemanticColor;
  'stroke-secondary-hover': SemanticColor;
  'stroke-secondary-pressed': SemanticColor;
  'stroke-secondary-focus': SemanticColor;
  'stroke-secondary-disabled': SemanticColor;
}

interface TypeColors {
  type: SemanticColor;
}

interface TypeAltColors {
  'type-alt': SemanticColor;
}

interface TypeOnVividColors {
  'type-on-vivid': SemanticColor;
  'type-on-vivid-hover': SemanticColor;
  'type-on-vivid-pressed': SemanticColor;
  'type-on-vivid-focus': SemanticColor;
  'type-on-vivid-disabled': SemanticColor;
}

interface TypeSuccessColors {
  'type-success': SemanticColor;
  'type-success-hover': SemanticColor;
  'type-success-pressed': SemanticColor;
  'type-success-focus': SemanticColor;
  'type-success-disabled': SemanticColor;
}

interface TypeInfoColors {
  'type-info': SemanticColor;
  'type-info-hover': SemanticColor;
  'type-info-pressed': SemanticColor;
  'type-info-focus': SemanticColor;
  'type-info-disabled': SemanticColor;
}

interface TypeWarningColors {
  'type-warning': SemanticColor;
  'type-warning-hover': SemanticColor;
  'type-warning-pressed': SemanticColor;
  'type-warning-focus': SemanticColor;
  'type-warning-disabled': SemanticColor;
}

interface TypeDangerColors {
  'type-danger': SemanticColor;
  'type-danger-hover': SemanticColor;
  'type-danger-pressed': SemanticColor;
  'type-danger-focus': SemanticColor;
  'type-danger-disabled': SemanticColor;
}

interface TypePrimaryColors {
  'type-primary': SemanticColor;
  'type-primary-hover': SemanticColor;
  'type-primary-pressed': SemanticColor;
  'type-primary-focus': SemanticColor;
  'type-primary-disabled': SemanticColor;
}

interface TypeSecondaryColors {
  'type-secondary': SemanticColor;
  'type-secondary-hover': SemanticColor;
  'type-secondary-pressed': SemanticColor;
  'type-secondary-focus': SemanticColor;
  'type-secondary-disabled': SemanticColor;
}

interface SemanticColors {
  Canvas: CanvasColors;
  'Canvas Alt': CanvasAltColors;
  'Canvas Success': CanvasSuccessColors;
  'Canvas Success Vivid': CanvasSuccessVividColors;
  'Canvas Info': CanvasInfoColors;
  'Canvas Info Vivid': CanvasInfoVividColors;
  'Canvas Warning': CanvasWarningColors;
  'Canvas Warning Vivid': CanvasWarningVividColors;
  'Canvas Danger': CanvasDangerColors;
  'Canvas Danger Vivid': CanvasDangerVividColors;
  'Canvas Primary': CanvasPrimaryColors;
  'Canvas Secondary': CanvasSecondaryColors;

  Stroke: StrokeColors;
  'Stroke Alt': StrokeAltColors;
  'Stroke Success': StrokeSuccessColors;
  'Stroke Success Vivid': StrokeSuccessVividColors;
  'Stroke Info': StrokeInfoColors;
  'Stroke Info Vivid': StrokeInfoVividColors;
  'Stroke Warning': StrokeWarningColors;
  'Stroke Warning Vivid': StrokeWarningVividColors;
  'Stroke Danger': StrokeDangerColors;
  'Stroke Danger Vivid': StrokeDangerVividColors;
  'Stroke Primary': StrokePrimaryColors;
  'Stroke Secondary': StrokeSecondaryColors;

  Type: TypeColors;
  'Type Alt': TypeAltColors;
  'Type on Vivid': TypeOnVividColors;
  'Type Success': TypeSuccessColors;
  'Type Info': TypeInfoColors;
  'Type Warning': TypeWarningColors;
  'Type Danger': TypeDangerColors;
  'Type Primary': TypePrimaryColors;
  'Type Secondary': TypeSecondaryColors;
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
          txt: colors.black
        },
        dark: {
          bg: colors.black,
          txt: colors.white
        }
      },
      'canvas-hover': {
        use: 'bg',
        desc: 'Alternate canvas backgrounds',
        light: {
          bg: colors.slate[200],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[900],
          txt: colors.white
        }
      },
      'canvas-pressed': {
        use: 'bg',
        desc: 'Indicates successful validation or state',
        light: {
          bg: colors.slate[300],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[800],
          txt: colors.white
        }
      },
      'canvas-focus': {
        use: 'bg',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.slate[500],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[500],
          txt: colors.white
        }
      },
      'canvas-disabled': {
        use: 'bg',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[50],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[950],
          txt: colors.white
        }
      }
    },
    'Canvas Alt': {
      'canvas-alt': {
        use: 'bg',
        desc: 'Used for canvas backgrounds',
        light: {
          bg: colors.slate[100],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[900],
          txt: colors.white
        }
      },
      'canvas-alt-hover': {
        use: 'bg',
        desc: 'Alternate canvas backgrounds',
        light: {
          bg: colors.slate[300],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[800],
          txt: colors.white
        }
      },
      'canvas-alt-pressed': {
        use: 'bg',
        desc: 'Indicates successful validation or state',
        light: {
          bg: colors.slate[400],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[800],
          txt: colors.white
        }
      },
      'canvas-alt-focus': {
        use: 'bg',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.slate[600],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.white
        }
      },
      'canvas-alt-disabled': {
        use: 'bg',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[200],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[400],
          txt: colors.white
        }
      }
    },
    'Canvas Success': {
      'canvas-success': {
        use: 'bg',
        desc: 'Used for canvas backgrounds',
        light: {
          bg: colors.green[100],
          txt: colors.black
        },
        dark: {
          bg: colors.green[950],
          txt: colors.white
        }
      },
      'canvas-success-hover': {
        use: 'bg',
        desc: 'Alternate canvas backgrounds',
        light: {
          bg: colors.green[300],
          txt: colors.black
        },
        dark: {
          bg: colors.green[900],
          txt: colors.white
        }
      },
      'canvas-success-pressed': {
        use: 'bg',
        desc: 'Indicates successful validation or state',
        light: {
          bg: colors.green[400],
          txt: colors.black
        },
        dark: {
          bg: colors.green[800],
          txt: colors.white
        }
      },
      'canvas-success-focus': {
        use: 'bg',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.green[700],
          txt: colors.black
        },
        dark: {
          bg: colors.green[600],
          txt: colors.white
        }
      },
      'canvas-success-disabled': {
        use: 'bg',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[100],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[900],
          txt: colors.white
        }
      }
    },
    'Canvas Success Vivid': {
      'canvas-success-vivid': {
        use: 'bg',
        desc: 'Used for canvas backgrounds',
        light: {
          bg: colors.green[800],
          txt: colors.black
        },
        dark: {
          bg: colors.green[600],
          txt: colors.white
        }
      },
      'canvas-success-vivid-hover': {
        use: 'bg',
        desc: 'Alternate canvas backgrounds',
        light: {
          bg: colors.green[600],
          txt: colors.black
        },
        dark: {
          bg: colors.green[800],
          txt: colors.white
        }
      },
      'canvas-success-vivid-pressed': {
        use: 'bg',
        desc: 'Indicates successful validation or state',
        light: {
          bg: colors.green[500],
          txt: colors.black
        },
        dark: {
          bg: colors.green[800],
          txt: colors.white
        }
      },
      'canvas-success-vivid-focus': {
        use: 'bg',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.green[800],
          txt: colors.black
        },
        dark: {
          bg: colors.green[600],
          txt: colors.white
        }
      },
      'canvas-success-vivid-disabled': {
        use: 'bg',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.white
        }
      }
    },
    'Canvas Info': {
      'canvas-info': {
        use: 'bg',
        desc: 'Used for canvas backgrounds',
        light: {
          bg: colors.blue[100],
          txt: colors.black
        },
        dark: {
          bg: colors.blue[950],
          txt: colors.white
        }
      },
      'canvas-info-hover': {
        use: 'bg',
        desc: 'Alternate canvas backgrounds',
        light: {
          bg: colors.blue[300],
          txt: colors.black
        },
        dark: {
          bg: colors.blue[900],
          txt: colors.white
        }
      },
      'canvas-info-pressed': {
        use: 'bg',
        desc: 'Indicates infoful validation or state',
        light: {
          bg: colors.blue[400],
          txt: colors.black
        },
        dark: {
          bg: colors.blue[800],
          txt: colors.white
        }
      },
      'canvas-info-focus': {
        use: 'bg',
        desc: 'Used for alerts and infos',
        light: {
          bg: colors.blue[700],
          txt: colors.black
        },
        dark: {
          bg: colors.blue[500],
          txt: colors.white
        }
      },
      'canvas-info-disabled': {
        use: 'bg',
        desc: 'Indicates info or errors',
        light: {
          bg: colors.slate[100],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[900],
          txt: colors.white
        }
      }
    },
    'Canvas Info Vivid': {
      'canvas-info-vivid': {
        use: 'bg',
        desc: 'Used for canvas backgrounds',
        light: {
          bg: colors.blue[800],
          txt: colors.black
        },
        dark: {
          bg: colors.blue[400],
          txt: colors.white
        }
      },
      'canvas-info-vivid-hover': {
        use: 'bg',
        desc: 'Alternate canvas backgrounds',
        light: {
          bg: colors.blue[600],
          txt: colors.black
        },
        dark: {
          bg: colors.blue[500],
          txt: colors.white
        }
      },
      'canvas-info-vivid-pressed': {
        use: 'bg',
        desc: 'Indicates infoful validation or state',
        light: {
          bg: colors.blue[500],
          txt: colors.black
        },
        dark: {
          bg: colors.blue[600],
          txt: colors.white
        }
      },
      'canvas-info-vivid-focus': {
        use: 'bg',
        desc: 'Used for alerts and infos',
        light: {
          bg: colors.blue[800],
          txt: colors.black
        },
        dark: {
          bg: colors.blue[400],
          txt: colors.white
        }
      },
      'canvas-info-vivid-disabled': {
        use: 'bg',
        desc: 'Indicates info or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.white
        }
      }
    },
    'Canvas Warning': {
      'canvas-warning': {
        use: 'bg',
        desc: 'Used for canvas backgrounds',
        light: {
          bg: colors.yellow[100],
          txt: colors.black
        },
        dark: {
          bg: colors.yellow[950],
          txt: colors.white
        }
      },
      'canvas-warning-hover': {
        use: 'bg',
        desc: 'Alternate canvas backgrounds',
        light: {
          bg: colors.yellow[300],
          txt: colors.black
        },
        dark: {
          bg: colors.yellow[900],
          txt: colors.white
        }
      },
      'canvas-warning-pressed': {
        use: 'bg',
        desc: 'Indicates warningful validation or state',
        light: {
          bg: colors.yellow[400],
          txt: colors.black
        },
        dark: {
          bg: colors.yellow[800],
          txt: colors.white
        }
      },
      'canvas-warning-focus': {
        use: 'bg',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.yellow[700],
          txt: colors.black
        },
        dark: {
          bg: colors.yellow[600],
          txt: colors.white
        }
      },
      'canvas-warning-disabled': {
        use: 'bg',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[100],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[900],
          txt: colors.white
        }
      }
    },
    'Canvas Warning Vivid': {
      'canvas-warning-vivid': {
        use: 'bg',
        desc: 'Used for canvas backgrounds',
        light: {
          bg: colors.yellow[800],
          txt: colors.black
        },
        dark: {
          bg: colors.yellow[600],
          txt: colors.white
        }
      },
      'canvas-warning-vivid-hover': {
        use: 'bg',
        desc: 'Alternate canvas backgrounds',
        light: {
          bg: colors.yellow[600],
          txt: colors.black
        },
        dark: {
          bg: colors.yellow[800],
          txt: colors.white
        }
      },
      'canvas-warning-vivid-pressed': {
        use: 'bg',
        desc: 'Indicates warningful validation or state',
        light: {
          bg: colors.yellow[500],
          txt: colors.black
        },
        dark: {
          bg: colors.yellow[950],
          txt: colors.white
        }
      },
      'canvas-warning-vivid-focus': {
        use: 'bg',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.yellow[800],
          txt: colors.black
        },
        dark: {
          bg: colors.yellow[600],
          txt: colors.white
        }
      },
      'canvas-warning-vivid-disabled': {
        use: 'bg',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.white
        }
      }
    },
    'Canvas Danger': {
      'canvas-danger': {
        use: 'bg',
        desc: 'Used for canvas backgrounds',
        light: {
          bg: colors.red[100],
          txt: colors.black
        },
        dark: {
          bg: colors.red[950],
          txt: colors.white
        }
      },
      'canvas-danger-hover': {
        use: 'bg',
        desc: 'Alternate canvas backgrounds',
        light: {
          bg: colors.red[300],
          txt: colors.black
        },
        dark: {
          bg: colors.red[900],
          txt: colors.white
        }
      },
      'canvas-danger-pressed': {
        use: 'bg',
        desc: 'Indicates dangerful validation or state',
        light: {
          bg: colors.red[400],
          txt: colors.black
        },
        dark: {
          bg: colors.red[800],
          txt: colors.white
        }
      },
      'canvas-danger-focus': {
        use: 'bg',
        desc: 'Used for alerts and dangers',
        light: {
          bg: colors.red[600],
          txt: colors.black
        },
        dark: {
          bg: colors.red[500],
          txt: colors.white
        }
      },
      'canvas-danger-disabled': {
        use: 'bg',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[100],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[900],
          txt: colors.white
        }
      }
    },
    'Canvas Danger Vivid': {
      'canvas-danger-vivid': {
        use: 'bg',
        desc: 'Used for canvas backgrounds',
        light: {
          bg: colors.red[800],
          txt: colors.black
        },
        dark: {
          bg: colors.red[400],
          txt: colors.white
        }
      },
      'canvas-danger-vivid-hover': {
        use: 'bg',
        desc: 'Alternate canvas backgrounds',
        light: {
          bg: colors.red[600],
          txt: colors.black
        },
        dark: {
          bg: colors.red[600],
          txt: colors.white
        }
      },
      'canvas-danger-vivid-pressed': {
        use: 'bg',
        desc: 'Indicates dangerful validation or state',
        light: {
          bg: colors.red[500],
          txt: colors.black
        },
        dark: {
          bg: colors.red[700],
          txt: colors.white
        }
      },
      'canvas-danger-vivid-focus': {
        use: 'bg',
        desc: 'Used for alerts and dangers',
        light: {
          bg: colors.red[800],
          txt: colors.black
        },
        dark: {
          bg: colors.red[400],
          txt: colors.white
        }
      },
      'canvas-danger-vivid-disabled': {
        use: 'bg',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.white
        }
      }
    },
    'Canvas Primary': {
      'canvas-primary': {
        use: 'bg',
        desc: 'Used for canvas backgrounds',
        light: {
          bg: colors.blue[600],
          txt: colors.black
        },
        dark: {
          bg: colors.blue[500],
          txt: colors.white
        }
      },
      'canvas-primary-hover': {
        use: 'bg',
        desc: 'Alternate canvas backgrounds',
        light: {
          bg: colors.blue[800],
          txt: colors.black
        },
        dark: {
          bg: colors.blue[400],
          txt: colors.white
        }
      },
      'canvas-primary-pressed': {
        use: 'bg',
        desc: 'Indicates primaryful validation or state',
        light: {
          bg: colors.blue[950],
          txt: colors.black
        },
        dark: {
          bg: colors.blue[200],
          txt: colors.white
        }
      },
      'canvas-primary-focus': {
        use: 'bg',
        desc: 'Used for alerts and primarys',
        light: {
          bg: colors.blue[600],
          txt: colors.black
        },
        dark: {
          bg: colors.blue[500],
          txt: colors.white
        }
      },
      'canvas-primary-disabled': {
        use: 'bg',
        desc: 'Indicates info or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.white
        }
      }
    },
    'Canvas Secondary': {
      'canvas-secondary': {
        use: 'bg',
        desc: 'Used for canvas backgrounds',
        light: {
          bg: colors.slate[950],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[50],
          txt: colors.white
        }
      },
      'canvas-secondary-hover': {
        use: 'bg',
        desc: 'Alternate canvas backgrounds',
        light: {
          bg: colors.slate[600],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[400],
          txt: colors.white
        }
      },
      'canvas-secondary-pressed': {
        use: 'bg',
        desc: 'Indicates secondaryful validation or state',
        light: {
          bg: colors.slate[500],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[500],
          txt: colors.white
        }
      },
      'canvas-secondary-focus': {
        use: 'bg',
        desc: 'Used for alerts and secondarys',
        light: {
          bg: colors.slate[950],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[50],
          txt: colors.white
        }
      },
      'canvas-secondary-disabled': {
        use: 'bg',
        desc: 'Indicates info or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.white
        }
      }
    },
    Stroke: {
      stroke: {
        use: 'border',
        desc: 'Used for stroke backgrounds',
        light: {
          bg: colors.slate[100],
          txt: colors.slate[100]
        },
        dark: {
          bg: colors.slate[900],
          txt: colors.slate[900]
        }
      },
      'stroke-hover': {
        use: 'border',
        desc: 'Alternate stroke backgrounds',
        light: {
          bg: colors.slate[300],
          txt: colors.slate[300]
        },
        dark: {
          bg: colors.slate[800],
          txt: colors.slate[800]
        }
      },
      'stroke-pressed': {
        use: 'border',
        desc: 'Indicates successful validation or state',
        light: {
          bg: colors.slate[400],
          txt: colors.black
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.slate[600]
        }
      },
      'stroke-focus': {
        use: 'border',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.slate[600],
          txt: colors.slate[600]
        },
        dark: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        }
      },
      'stroke-disabled': {
        use: 'border',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[200],
          txt: colors.slate[200]
        },
        dark: {
          bg: colors.slate[800],
          txt: colors.slate[800]
        }
      }
    },
    'Stroke Alt': {
      'stroke-alt': {
        use: 'border',
        desc: 'Used for stroke backgrounds',
        light: {
          bg: colors.slate[200],
          txt: colors.slate[200]
        },
        dark: {
          bg: colors.slate[800],
          txt: colors.slate[800]
        }
      },
      'stroke-alt-hover': {
        use: 'border',
        desc: 'Alternate stroke backgrounds',
        light: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        },
        dark: {
          bg: colors.slate[700],
          txt: colors.slate[700]
        }
      },
      'stroke-alt-pressed': {
        use: 'border',
        desc: 'Indicates successful validation or state',
        light: {
          bg: colors.slate[500],
          txt: colors.slate[500]
        },
        dark: {
          bg: colors.slate[500],
          txt: colors.slate[500]
        }
      },
      'stroke-alt-focus': {
        use: 'border',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.slate[700],
          txt: colors.slate[700]
        },
        dark: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        }
      },
      'stroke-alt-disabled': {
        use: 'border',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[300],
          txt: colors.slate[300]
        },
        dark: {
          bg: colors.slate[700],
          txt: colors.slate[700]
        }
      }
    },
    'Stroke Success': {
      'stroke-success': {
        use: 'border',
        desc: 'Used for stroke backgrounds',
        light: {
          bg: colors.green[200],
          txt: colors.green[200]
        },
        dark: {
          bg: colors.green[900],
          txt: colors.green[900]
        }
      },
      'stroke-success-hover': {
        use: 'border',
        desc: 'Alternate stroke backgrounds',
        light: {
          bg: colors.green[400],
          txt: colors.green[400]
        },
        dark: {
          bg: colors.green[800],
          txt: colors.green[800]
        }
      },
      'stroke-success-pressed': {
        use: 'border',
        desc: 'Indicates successful validation or state',
        light: {
          bg: colors.green[500],
          txt: colors.green[500]
        },
        dark: {
          bg: colors.green[700],
          txt: colors.green[700]
        }
      },
      'stroke-success-focus': {
        use: 'border',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.green[800],
          txt: colors.green[800]
        },
        dark: {
          bg: colors.green[500],
          txt: colors.green[500]
        }
      },
      'stroke-success-disabled': {
        use: 'border',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[200],
          txt: colors.slate[200]
        },
        dark: {
          bg: colors.slate[800],
          txt: colors.slate[800]
        }
      }
    },
    'Stroke Success Vivid': {
      'stroke-success-vivid': {
        use: 'border',
        desc: 'Used for stroke backgrounds',
        light: {
          bg: colors.green[800],
          txt: colors.green[800]
        },
        dark: {
          bg: colors.green[600],
          txt: colors.green[600]
        }
      },
      'stroke-success-vivid-hover': {
        use: 'border',
        desc: 'Alternate stroke backgrounds',
        light: {
          bg: colors.green[600],
          txt: colors.green[600]
        },
        dark: {
          bg: colors.green[800],
          txt: colors.green[800]
        }
      },
      'stroke-success-vivid-pressed': {
        use: 'border',
        desc: 'Indicates successful validation or state',
        light: {
          bg: colors.green[500],
          txt: colors.green[500]
        },
        dark: {
          bg: colors.green[700],
          txt: colors.green[700]
        }
      },
      'stroke-success-vivid-focus': {
        use: 'border',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.green[800],
          txt: colors.green[800]
        },
        dark: {
          bg: colors.green[600],
          txt: colors.green[600]
        }
      },
      'stroke-success-vivid-disabled': {
        use: 'border',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.slate[600]
        }
      }
    },
    'Stroke Info': {
      'stroke-info': {
        use: 'border',
        desc: 'Used for stroke backgrounds',
        light: {
          bg: colors.blue[200],
          txt: colors.blue[200]
        },
        dark: {
          bg: colors.blue[900],
          txt: colors.blue[900]
        }
      },
      'stroke-info-hover': {
        use: 'border',
        desc: 'Alternate stroke backgrounds',
        light: {
          bg: colors.blue[400],
          txt: colors.blue[400]
        },
        dark: {
          bg: colors.blue[800],
          txt: colors.blue[800]
        }
      },
      'stroke-info-pressed': {
        use: 'border',
        desc: 'Indicates infoful validation or state',
        light: {
          bg: colors.blue[500],
          txt: colors.blue[500]
        },
        dark: {
          bg: colors.blue[700],
          txt: colors.blue[700]
        }
      },
      'stroke-info-focus': {
        use: 'border',
        desc: 'Used for alerts and infos',
        light: {
          bg: colors.blue[800],
          txt: colors.blue[800]
        },
        dark: {
          bg: colors.blue[400],
          txt: colors.blue[400]
        }
      },
      'stroke-info-disabled': {
        use: 'border',
        desc: 'Indicates info or errors',
        light: {
          bg: colors.slate[200],
          txt: colors.slate[200]
        },
        dark: {
          bg: colors.slate[800],
          txt: colors.slate[800]
        }
      }
    },
    'Stroke Info Vivid': {
      'stroke-info-vivid': {
        use: 'border',
        desc: 'Used for stroke backgrounds',
        light: {
          bg: colors.blue[800],
          txt: colors.blue[800]
        },
        dark: {
          bg: colors.blue[400],
          txt: colors.blue[400]
        }
      },
      'stroke-info-vivid-hover': {
        use: 'border',
        desc: 'Alternate stroke backgrounds',
        light: {
          bg: colors.blue[600],
          txt: colors.blue[600]
        },
        dark: {
          bg: colors.blue[500],
          txt: colors.blue[500]
        }
      },
      'stroke-info-vivid-pressed': {
        use: 'border',
        desc: 'Indicates infoful validation or state',
        light: {
          bg: colors.blue[500],
          txt: colors.blue[500]
        },
        dark: {
          bg: colors.blue[600],
          txt: colors.blue[600]
        }
      },
      'stroke-info-vivid-focus': {
        use: 'border',
        desc: 'Used for alerts and infos',
        light: {
          bg: colors.blue[800],
          txt: colors.blue[800]
        },
        dark: {
          bg: colors.blue[400],
          txt: colors.blue[400]
        }
      },
      'stroke-info-vivid-disabled': {
        use: 'border',
        desc: 'Indicates info or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.slate[600]
        }
      }
    },
    'Stroke Warning': {
      'stroke-warning': {
        use: 'border',
        desc: 'Used for stroke backgrounds',
        light: {
          bg: colors.yellow[200],
          txt: colors.yellow[200]
        },
        dark: {
          bg: colors.yellow[900],
          txt: colors.yellow[900]
        }
      },
      'stroke-warning-hover': {
        use: 'border',
        desc: 'Alternate stroke backgrounds',
        light: {
          bg: colors.yellow[400],
          txt: colors.yellow[400]
        },
        dark: {
          bg: colors.yellow[800],
          txt: colors.yellow[800]
        }
      },
      'stroke-warning-pressed': {
        use: 'border',
        desc: 'Indicates warningful validation or state',
        light: {
          bg: colors.yellow[500],
          txt: colors.yellow[500]
        },
        dark: {
          bg: colors.yellow[700],
          txt: colors.yellow[700]
        }
      },
      'stroke-warning-focus': {
        use: 'border',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.yellow[800],
          txt: colors.yellow[800]
        },
        dark: {
          bg: colors.yellow[500],
          txt: colors.yellow[500]
        }
      },
      'stroke-warning-disabled': {
        use: 'border',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[200],
          txt: colors.slate[200]
        },
        dark: {
          bg: colors.slate[900],
          txt: colors.slate[900]
        }
      }
    },
    'Stroke Warning Vivid': {
      'stroke-warning-vivid': {
        use: 'border',
        desc: 'Used for stroke backgrounds',
        light: {
          bg: colors.yellow[800],
          txt: colors.yellow[800]
        },
        dark: {
          bg: colors.yellow[600],
          txt: colors.yellow[600]
        }
      },
      'stroke-warning-vivid-hover': {
        use: 'border',
        desc: 'Alternate stroke backgrounds',
        light: {
          bg: colors.yellow[600],
          txt: colors.yellow[600]
        },
        dark: {
          bg: colors.yellow[800],
          txt: colors.yellow[800]
        }
      },
      'stroke-warning-vivid-pressed': {
        use: 'border',
        desc: 'Indicates warningful validation or state',
        light: {
          bg: colors.yellow[500],
          txt: colors.yellow[500]
        },
        dark: {
          bg: colors.yellow[700],
          txt: colors.yellow[700]
        }
      },
      'stroke-warning-vivid-focus': {
        use: 'border',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.yellow[800],
          txt: colors.yellow[800]
        },
        dark: {
          bg: colors.yellow[600],
          txt: colors.yellow[600]
        }
      },
      'stroke-warning-vivid-disabled': {
        use: 'border',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.slate[600]
        }
      }
    },
    'Stroke Danger': {
      'stroke-danger': {
        use: 'border',
        desc: 'Used for stroke backgrounds',
        light: {
          bg: colors.red[200],
          txt: colors.red[200]
        },
        dark: {
          bg: colors.red[900],
          txt: colors.red[900]
        }
      },
      'stroke-danger-hover': {
        use: 'border',
        desc: 'Alternate stroke backgrounds',
        light: {
          bg: colors.red[400],
          txt: colors.red[400]
        },
        dark: {
          bg: colors.red[800],
          txt: colors.red[800]
        }
      },
      'stroke-danger-pressed': {
        use: 'border',
        desc: 'Indicates dangerful validation or state',
        light: {
          bg: colors.red[500],
          txt: colors.red[500]
        },
        dark: {
          bg: colors.red[700],
          txt: colors.red[700]
        }
      },
      'stroke-danger-focus': {
        use: 'border',
        desc: 'Used for alerts and dangers',
        light: {
          bg: colors.red[700],
          txt: colors.red[700]
        },
        dark: {
          bg: colors.red[400],
          txt: colors.red[400]
        }
      },
      'stroke-danger-disabled': {
        use: 'border',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[200],
          txt: colors.slate[200]
        },
        dark: {
          bg: colors.slate[800],
          txt: colors.slate[800]
        }
      }
    },
    'Stroke Danger Vivid': {
      'stroke-danger-vivid': {
        use: 'border',
        desc: 'Used for stroke backgrounds',
        light: {
          bg: colors.red[800],
          txt: colors.red[800]
        },
        dark: {
          bg: colors.red[400],
          txt: colors.red[400]
        }
      },
      'stroke-danger-vivid-hover': {
        use: 'border',
        desc: 'Alternate stroke backgrounds',
        light: {
          bg: colors.red[600],
          txt: colors.red[600]
        },
        dark: {
          bg: colors.red[600],
          txt: colors.red[600]
        }
      },
      'stroke-danger-vivid-pressed': {
        use: 'border',
        desc: 'Indicates dangerful validation or state',
        light: {
          bg: colors.red[500],
          txt: colors.red[500]
        },
        dark: {
          bg: colors.red[700],
          txt: colors.red[700]
        }
      },
      'stroke-danger-vivid-focus': {
        use: 'border',
        desc: 'Used for alerts and dangers',
        light: {
          bg: colors.red[800],
          txt: colors.red[800]
        },
        dark: {
          bg: colors.red[400],
          txt: colors.red[400]
        }
      },
      'stroke-danger-vivid-disabled': {
        use: 'border',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.slate[600]
        }
      }
    },
    'Stroke Primary': {
      'stroke-primary': {
        use: 'border',
        desc: 'Used for stroke backgrounds',
        light: {
          bg: colors.blue[600],
          txt: colors.blue[600]
        },
        dark: {
          bg: colors.blue[500],
          txt: colors.blue[500]
        }
      },
      'stroke-primary-hover': {
        use: 'border',
        desc: 'Alternate stroke backgrounds',
        light: {
          bg: colors.blue[800],
          txt: colors.blue[800]
        },
        dark: {
          bg: colors.blue[400],
          txt: colors.blue[400]
        }
      },
      'stroke-primary-pressed': {
        use: 'border',
        desc: 'Indicates primaryful validation or state',
        light: {
          bg: colors.blue[950],
          txt: colors.blue[950]
        },
        dark: {
          bg: colors.blue[200],
          txt: colors.blue[200]
        }
      },
      'stroke-primary-focus': {
        use: 'border',
        desc: 'Used for alerts and primarys',
        light: {
          bg: colors.blue[600],
          txt: colors.blue[600]
        },
        dark: {
          bg: colors.blue[500],
          txt: colors.blue[500]
        }
      },
      'stroke-primary-disabled': {
        use: 'border',
        desc: 'Indicates info or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.slate[600]
        }
      }
    },
    'Stroke Secondary': {
      'stroke-secondary': {
        use: 'border',
        desc: 'Used for stroke backgrounds',
        light: {
          bg: colors.slate[950],
          txt: colors.slate[950]
        },
        dark: {
          bg: colors.slate[50],
          txt: colors.slate[50]
        }
      },
      'stroke-secondary-hover': {
        use: 'border',
        desc: 'Alternate stroke backgrounds',
        light: {
          bg: colors.slate[600],
          txt: colors.slate[600]
        },
        dark: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        }
      },
      'stroke-secondary-pressed': {
        use: 'border',
        desc: 'Indicates secondaryful validation or state',
        light: {
          bg: colors.slate[500],
          txt: colors.slate[500]
        },
        dark: {
          bg: colors.slate[500],
          txt: colors.slate[500]
        }
      },
      'stroke-secondary-focus': {
        use: 'border',
        desc: 'Used for alerts and secondarys',
        light: {
          bg: colors.slate[950],
          txt: colors.slate[950]
        },
        dark: {
          bg: colors.white,
          txt: colors.white
        }
      },
      'stroke-secondary-disabled': {
        use: 'border',
        desc: 'Indicates info or errors',
        light: {
          bg: colors.black,
          txt: colors.black
        },
        dark: {
          bg: colors.white,
          txt: colors.white
        }
      }
    },
    Type: {
      type: {
        use: 'text',
        desc: 'Used for type backgrounds',
        light: {
          bg: colors.slate[900],
          txt: colors.slate[900]
        },
        dark: {
          bg: colors.slate[100],
          txt: colors.slate[100]
        }
      }
    },
    'Type Alt': {
      'type-alt': {
        use: 'text',
        desc: 'Used for type backgrounds',
        light: {
          bg: colors.slate[600],
          txt: colors.slate[600]
        },
        dark: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        }
      }
    },
    'Type on Vivid': {
      'type-on-vivid': {
        use: 'text',
        desc: 'Used for type backgrounds',
        light: {
          bg: colors.white,
          txt: colors.white
        },
        dark: {
          bg: colors.black,
          txt: colors.black
        }
      },
      'type-on-vivid-hover': {
        use: 'text',
        desc: 'Used for type backgrounds',
        light: {
          bg: colors.slate[100],
          txt: colors.slate[100]
        },
        dark: {
          bg: colors.slate[900],
          txt: colors.slate[900]
        }
      },
      'type-on-vivid-pressed': {
        use: 'text',
        desc: 'Used for type backgrounds',
        light: {
          bg: colors.slate[200],
          txt: colors.slate[200]
        },
        dark: {
          bg: colors.slate[800],
          txt: colors.slate[800]
        }
      },
      'type-on-vivid-focus': {
        use: 'text',
        desc: 'Used for type backgrounds',
        light: {
          bg: colors.white,
          txt: colors.white
        },
        dark: {
          bg: colors.black,
          txt: colors.black
        }
      },
      'type-on-vivid-disabled': {
        use: 'text',
        desc: 'Used for type backgrounds',
        light: {
          bg: colors.slate[200],
          txt: colors.slate[200]
        },
        dark: {
          bg: colors.slate[800],
          txt: colors.slate[800]
        }
      }
    },
    'Type Success': {
      'type-success': {
        use: 'text',
        desc: 'Used for type backgrounds',
        light: {
          bg: colors.green[800],
          txt: colors.green[800]
        },
        dark: {
          bg: colors.green[600],
          txt: colors.green[600]
        }
      },
      'type-success-hover': {
        use: 'text',
        desc: 'Alternate type backgrounds',
        light: {
          bg: colors.green[600],
          txt: colors.green[600]
        },
        dark: {
          bg: colors.green[800],
          txt: colors.green[800]
        }
      },
      'type-success-pressed': {
        use: 'text',
        desc: 'Indicates successful validation or state',
        light: {
          bg: colors.green[500],
          txt: colors.green[500]
        },
        dark: {
          bg: colors.green[950],
          txt: colors.green[950]
        }
      },
      'type-success-focus': {
        use: 'text',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.green[800],
          txt: colors.green[800]
        },
        dark: {
          bg: colors.green[600],
          txt: colors.green[600]
        }
      },
      'type-success-disabled': {
        use: 'text',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.slate[600]
        }
      }
    },
    'Type Info': {
      'type-info': {
        use: 'text',
        desc: 'Used for type backgrounds',
        light: {
          bg: colors.blue[800],
          txt: colors.blue[800]
        },
        dark: {
          bg: colors.blue[400],
          txt: colors.blue[400]
        }
      },
      'type-info-hover': {
        use: 'text',
        desc: 'Alternate type backgrounds',
        light: {
          bg: colors.blue[600],
          txt: colors.blue[600]
        },
        dark: {
          bg: colors.blue[500],
          txt: colors.blue[500]
        }
      },
      'type-info-pressed': {
        use: 'text',
        desc: 'Indicates infoful validation or state',
        light: {
          bg: colors.blue[500],
          txt: colors.blue[500]
        },
        dark: {
          bg: colors.blue[600],
          txt: colors.blue[600]
        }
      },
      'type-info-focus': {
        use: 'text',
        desc: 'Used for alerts and infos',
        light: {
          bg: colors.blue[800],
          txt: colors.blue[800]
        },
        dark: {
          bg: colors.blue[400],
          txt: colors.blue[400]
        }
      },
      'type-info-disabled': {
        use: 'text',
        desc: 'Indicates info or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.slate[600]
        }
      }
    },
    'Type Warning': {
      'type-warning': {
        use: 'text',
        desc: 'Used for type backgrounds',
        light: {
          bg: colors.yellow[800],
          txt: colors.yellow[800]
        },
        dark: {
          bg: colors.yellow[600],
          txt: colors.yellow[600]
        }
      },
      'type-warning-hover': {
        use: 'text',
        desc: 'Alternate type backgrounds',
        light: {
          bg: colors.yellow[600],
          txt: colors.yellow[600]
        },
        dark: {
          bg: colors.yellow[800],
          txt: colors.yellow[800]
        }
      },
      'type-warning-pressed': {
        use: 'text',
        desc: 'Indicates warningful validation or state',
        light: {
          bg: colors.yellow[500],
          txt: colors.yellow[500]
        },
        dark: {
          bg: colors.yellow[950],
          txt: colors.yellow[950]
        }
      },
      'type-warning-focus': {
        use: 'text',
        desc: 'Used for alerts and warnings',
        light: {
          bg: colors.yellow[800],
          txt: colors.yellow[800]
        },
        dark: {
          bg: colors.yellow[600],
          txt: colors.yellow[600]
        }
      },
      'type-warning-disabled': {
        use: 'text',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.slate[600]
        }
      }
    },
    'Type Danger': {
      'type-danger': {
        use: 'text',
        desc: 'Used for type backgrounds',
        light: {
          bg: colors.red[800],
          txt: colors.red[800]
        },
        dark: {
          bg: colors.red[400],
          txt: colors.red[400]
        }
      },
      'type-danger-hover': {
        use: 'text',
        desc: 'Alternate type backgrounds',
        light: {
          bg: colors.red[600],
          txt: colors.red[600]
        },
        dark: {
          bg: colors.red[600],
          txt: colors.red[600]
        }
      },
      'type-danger-pressed': {
        use: 'text',
        desc: 'Indicates dangerful validation or state',
        light: {
          bg: colors.red[500],
          txt: colors.red[500]
        },
        dark: {
          bg: colors.red[700],
          txt: colors.red[700]
        }
      },
      'type-danger-focus': {
        use: 'text',
        desc: 'Used for alerts and dangers',
        light: {
          bg: colors.red[800],
          txt: colors.red[800]
        },
        dark: {
          bg: colors.red[400],
          txt: colors.red[400]
        }
      },
      'type-danger-disabled': {
        use: 'text',
        desc: 'Indicates danger or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        },
        dark: {
          bg: colors.red[600],
          txt: colors.red[600]
        }
      }
    },
    'Type Primary': {
      'type-primary': {
        use: 'text',
        desc: 'Used for type backgrounds',
        light: {
          bg: colors.blue[600],
          txt: colors.blue[600]
        },
        dark: {
          bg: colors.blue[500],
          txt: colors.blue[500]
        }
      },
      'type-primary-hover': {
        use: 'text',
        desc: 'Alternate type backgrounds',
        light: {
          bg: colors.blue[800],
          txt: colors.blue[800]
        },
        dark: {
          bg: colors.blue[400],
          txt: colors.blue[400]
        }
      },
      'type-primary-pressed': {
        use: 'text',
        desc: 'Indicates primaryful validation or state',
        light: {
          bg: colors.blue[950],
          txt: colors.blue[950]
        },
        dark: {
          bg: colors.blue[200],
          txt: colors.blue[200]
        }
      },
      'type-primary-focus': {
        use: 'text',
        desc: 'Used for alerts and primarys',
        light: {
          bg: colors.blue[600],
          txt: colors.blue[600]
        },
        dark: {
          bg: colors.blue[500],
          txt: colors.blue[500]
        }
      },
      'type-primary-disabled': {
        use: 'text',
        desc: 'Indicates info or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        },
        dark: {
          bg: colors.blue[600],
          txt: colors.blue[600]
        }
      }
    },
    'Type Secondary': {
      'type-secondary': {
        use: 'text',
        desc: 'Used for type backgrounds',
        light: {
          bg: colors.slate[950],
          txt: colors.slate[950]
        },
        dark: {
          bg: colors.slate[50],
          txt: colors.slate[50]
        }
      },
      'type-secondary-hover': {
        use: 'text',
        desc: 'Alternate type backgrounds',
        light: {
          bg: colors.slate[600],
          txt: colors.slate[600]
        },
        dark: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        }
      },
      'type-secondary-pressed': {
        use: 'text',
        desc: 'Indicates secondaryful validation or state',
        light: {
          bg: colors.slate[500],
          txt: colors.slate[500]
        },
        dark: {
          bg: colors.slate[500],
          txt: colors.slate[500]
        }
      },
      'type-secondary-focus': {
        use: 'text',
        desc: 'Used for alerts and secondarys',
        light: {
          bg: colors.slate[950],
          txt: colors.slate[950]
        },
        dark: {
          bg: colors.slate[50],
          txt: colors.slate[50]
        }
      },
      'type-secondary-disabled': {
        use: 'text',
        desc: 'Indicates info or errors',
        light: {
          bg: colors.slate[400],
          txt: colors.slate[400]
        },
        dark: {
          bg: colors.slate[600],
          txt: colors.slate[600]
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
