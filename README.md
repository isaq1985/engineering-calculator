# EngCalc — Premium Engineering & Scientific Calculator

**Version 2.0.0** · Production ready · **No AI features** · Local-only

A modern glassmorphism calculator suite for engineering and scientific work.

---

## Quick start

```bash
cd engineering-calculator
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

---

## Modes

| Mode | Features |
|------|----------|
| **Standard** | Arithmetic, parentheses, memory, keyboard |
| **Scientific** | Trig, log, √, n!, xʸ, π, e, DEG/RAD |
| **Engineering** | Bases/bitwise, complex, matrix, vector, **units**, **constants**, **formulas**, **numerical methods**, **linear systems** |
| **Graphing** | Multi-function 2D plots, zoom, pan, grid |
| **Statistics** | Descriptive stats, linear regression |
| **History** | Search, pin, favorites, import/export, undo/redo |
| **Settings** | Theme presets, accent, animations |

---

## Extension features (v1.1 – v2.0)

1. Error Boundary + code splitting (lazy modes)
2. History upgrades (import, pin, undo/redo, filters)
3. Theme presets (Neon, Material, Classic, Casio, TI)
4. Mobile UX (drawer, swipe, touch targets, safe-area)
5. Unit conversion + science/engineering constants
6. Formula library (geometry → civil)
7. Statistics & regression
8. Numerical methods (roots, derivative, integral)
9. Linear system solver Ax = b
10. Accessibility & documentation polish

---

## Tech stack

- Vite 5 + React 18 + TypeScript
- Tailwind CSS 3
- lucide-react + clsx
- Custom math engine (no `eval`)
- Canvas graphing (no chart library)

---

## Architecture

```
src/
├── components/calculator/   Standard, Scientific, Engineering, Graphing, statistics/
├── components/history/
├── components/layout/
├── components/settings/
├── contexts/                Theme, App, History, UI
├── hooks/                   useCalculator
├── utils/
│   ├── expressionParser.ts
│   ├── graphingEngine.ts
│   ├── engineering/         units, constants, formulas, matrix, linearSystem, …
│   ├── numerical/           roots, integrate, differentiate
│   └── statistics/
└── types/
```

---

## Keyboard (Standard / Scientific)

| Key | Action |
|-----|--------|
| `0-9` `.` | Digits |
| `+ - * / ^` | Operators |
| `Enter` `=` | Evaluate |
| `Esc` | All Clear |
| `Backspace` | Delete |

---

## Accessibility

- Skip to main content link
- `focus-visible` outlines
- ARIA labels on icon controls
- Landmark `main` region
- Touch targets ≥ 44px on mobile

---

## License

Private / Educational use.


## Native (Capacitor)

```bash
npm install
npm run build
npx cap add android   # once
npx cap add ios       # once, macOS only
npm run cap:sync
npx cap open android
```

Full guide: [docs/CAPACITOR.md](docs/CAPACITOR.md)


## Production release

See **[docs/RELEASE.md](docs/RELEASE.md)** for web/PWA hosting, Android AAB, iOS App Store, versioning, and checklists.

```bash
npm ci
npm run build    # → dist/
```
