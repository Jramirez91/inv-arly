// ─── Local images (procesadas por Vite) ──────────────────────────────────────
import profileImg from './profile.png'
import heroImg    from './hero.png'
import img1       from './1.png'
import img2       from './2.png'
import img3       from './3.png'
import img5       from './5.png'
import img6       from './6.png'

export { profileImg, heroImg }

// ─── Stickers de personajes (Gabby's Dollhouse · imágenes locales) ────────────
export const STICKER_GABBY       = img6
export const STICKER_PANDY       = img5
export const STICKER_KITTY_FAIRY = img2
export const STICKER_DJ_CATNIP   = img1
export const STICKER_CAKEY       = img3

/** Stickers en orden con su posición/rotación para el fondo decorativo */
export const BACKGROUND_STICKERS = [
  { src: STICKER_GABBY,       alt: 'Gabby',       style: 'top-[3%]  left-[2%]  w-16 h-16 md:w-28 md:h-28 -rotate-6 opacity-60 md:opacity-90'  },
  { src: STICKER_PANDY,       alt: 'Pandy Paws',  style: 'top-[10%] right-[10%] w-18 h-18 md:right-[3%] md:w-36 md:h-36  rotate-12 opacity-60 md:opacity-90' },
  { src: STICKER_KITTY_FAIRY, alt: 'Kitty Fairy',  style: 'bottom-[25%] right-[7%] w-16 h-16 md:right-[4%] md:w-28 md:h-28 -rotate-12 opacity-60 md:opacity-90' },
  { src: STICKER_DJ_CATNIP,   alt: 'DJ Catnip',    style: 'bottom-[10%] left-[4%]  w-18 h-18 md:w-32 md:h-32  rotate-3 opacity-60 md:opacity-90'  },
  { src: STICKER_CAKEY,       alt: 'Cakey',         style: 'top-[40%] left-[4%]  w-18 h-18 md:w-32 md:h-32  rotate-6 hidden md:block' },
] as const

// ─── Paleta de colores (Google Stitch · design system) ────────────────────────
export const COLORS = {
  primary:              '#864d61',
  onPrimary:            '#ffffff',
  primaryContainer:     '#ffb7ce',
  onPrimaryContainer:   '#7b4458',
  primaryFixed:         '#ffd9e3',
  primaryFixedDim:      '#fab3ca',

  secondary:              '#406915',
  onSecondary:            '#ffffff',
  secondaryContainer:     '#bdef8b',
  onSecondaryContainer:   '#446d19',
  secondaryFixed:         '#c0f18d',
  secondaryFixedDim:      '#a5d574',

  tertiary:              '#635979',
  onTertiary:            '#ffffff',
  tertiaryContainer:     '#d2c5ea',
  onTertiaryContainer:   '#5a5070',

  surface:             '#fbf9f8',
  surfaceContainer:    '#efeded',
  onSurface:           '#1b1c1c',
  onSurfaceVariant:    '#514347',
  outline:             '#837377',
  outlineVariant:      '#d5c2c6',
} as const

// ─── Tipografía ───────────────────────────────────────────────────────────────
export const FONTS = {
  display: '"Plus Jakarta Sans", sans-serif',
  body:    '"Be Vietnam Pro", sans-serif',
} as const

// ─── Datos del evento ─────────────────────────────────────────────────────────
export const EVENT = {
  title:       'Arleth cumple 4 años',
  headline:    '¡Acompáñanos en un día miau-tástico!',
  subtitle:    '¡Una Celebración Miau-sombrosa!',
  description: 'Te invitamos a un día lleno de magia, chispitas y amistad. ¡También habrá un refrescante baño de piscina para la cumpleañera! 🏊‍♀️',
  date:        'Sábado 19 de Septiembre',
  time:        '1:00 PM',
  rsvpDeadline:'12 de septiembre',
  phone:       '123.456.7890',
  location: {
    name:    "Pitbull",
    address: 'Calle 39 & Calle 18, Villa Flores',
    city:    'Tekax de Álvaro Obregón, Yuc.',
    mapsUrl: 'https://maps.app.goo.gl/yQ8f3rkwnuwFyuou6',
  },
} as const

// ─── Actividades ──────────────────────────────────────────────────────────────
export const ACTIVITIES = [
  { label: 'Pastel',    emoji: '🎂', bg: COLORS.primaryFixed,         color: COLORS.primary,              border: COLORS.primaryContainer     },
  { label: 'Juegos',    emoji: '🎮', bg: COLORS.secondaryContainer,   color: COLORS.secondary,            border: COLORS.secondaryFixedDim    },
  { label: 'Música',    emoji: '🎵', bg: COLORS.tertiaryContainer,    color: COLORS.tertiary,             border: '#cdc1e5'                   },
  { label: 'Piñata',    emoji: '🎊', bg: COLORS.primaryFixed,         color: COLORS.primary,              border: COLORS.primaryContainer     },
  { label: 'Fotos',     emoji: '📸', bg: COLORS.secondaryContainer,   color: COLORS.secondary,            border: COLORS.secondaryFixedDim    },
  { label: 'Sorpresas', emoji: '🎁', bg: COLORS.tertiaryContainer,    color: COLORS.tertiary,             border: '#cdc1e5'                   },
  { label: 'Piscina',   emoji: '🏊', bg: COLORS.secondaryContainer,   color: COLORS.secondary,            border: COLORS.secondaryFixedDim    },
] as const
