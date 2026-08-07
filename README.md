# inv-arly — Invitaciones Mágicas 🐱✨

> Aplicación de invitaciones de fiestas con diseño **Casa de Muñecas** — extraído de Google Stitch.

## Stack Tecnológico

| Herramienta | Versión | Propósito |
|---|---|---|
| **React** | 19 | UI Framework |
| **TypeScript** | 5 | Tipado estático |
| **Vite** | 8 | Bundler y dev server |
| **Tailwind CSS** | v4 | Sistema de diseño |
| **React Router** | 7 | Navegación SPA |
| **Framer Motion** | 12 | Animaciones premium |

## Conexión MCP — Google Stitch

La configuración MCP está en `~/.gemini/config/mcp_config.json`:

```json
{
  "mcpServers": {
    "stitch": {
      "serverUrl": "https://stitch.googleapis.com/mcp",
      "headers": {
        "X-Goog-Api-Key": "<TU_API_KEY>"
      }
    }
  }
}
```

### Diseño de origen

- **Proyecto Stitch:** `projects/16246713242846067784`
- **Pantalla:** `La Casa de Muñecas` (`4641faaeb12547a3b1256f4bcc9ef27c`)
- **Sistema de diseño:** Tactile-Playful, paleta pastel, cat-ear shapes

## Páginas

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `Home.tsx` | Hero + feature cards + CTA |
| `/detalles` | `EventDetails.tsx` | Fecha, hora, ubicación |
| `/rsvp` | `RSVP.tsx` | Formulario multi-paso con progreso |
| `/regalos` | `GiftIdeas.tsx` | Lista con filtros y reservas |

## Componentes Clave

- `FloatingElements` — Íconos animados flotantes de fondo
- `Navbar` — Navegación sticky con glassmorphism
- `CatEarCard` — Tarjeta con orejas de gato (CSS pseudo-elements)
- `SprinkleDivider` — Divisor de puntos de colores
- `RainbowProgress` — Barra arcoíris con marcador de gato 🐱

## Comandos

```bash
npm run dev     # Desarrollo → http://localhost:5173
npm run build   # Producción
npm run preview # Previsualizar build
```

## Paleta de Colores (Stitch Design System)

| Nombre | Hex | Uso |
|---|---|---|
| Primary | `#854d67` | Acciones, títulos |
| Primary Container | `#ffb7d5` | Rosa suave |
| Secondary | `#6b5195` | Elementos secundarios |
| Secondary Container | `#d1b3ff` | Lavanda |
| Tertiary | `#266a4b` | Acentos verdes |
| Tertiary Container | `#95dab4` | Verde menta |

## Tipografía

- **Display / Headings:** Plus Jakarta Sans (700, 800)
- **Body:** Quicksand (500, 600, 700)
