# QA Checklist – EngCalc v2.0.0

## Build
- [ ] `npm install` succeeds
- [ ] `npm run dev` loads without console errors
- [ ] `npm run build` succeeds

## Core calculators
- [ ] Standard: 2+3=5, parentheses, memory, keyboard
- [ ] Scientific: sin(30°)≈0.5 in DEG, log, factorial
- [ ] Graphing: sin(x) plots; zoom/pan work
- [ ] Engineering bases: 255 → FF hex
- [ ] Complex abs(3+4i)=5
- [ ] Matrix 2×2 det/inverse
- [ ] Vector dot/cross

## Extension modules
- [ ] Units: 1 m → 100 cm
- [ ] Constants: search & copy
- [ ] Formulas: load example + calculate
- [ ] Numerical: root of x²−2 on [0,2] ≈ 1.414
- [ ] Numerical: ∫₀¹ x² ≈ 0.333
- [ ] Systems: 3×3 example solves
- [ ] Statistics: mean of sample data
- [ ] Regression: slope/intercept/R²

## History
- [ ] Entry after Standard equals
- [ ] Pin / favorite / search / mode filter
- [ ] Export JSON → clear → import
- [ ] Undo after delete

## Theme & mobile
- [ ] All presets apply (Neon, Casio, TI, …)
- [ ] Mobile drawer + swipe
- [ ] Landscape usable

## Accessibility
- [ ] Tab to “Skip to main content”
- [ ] Focus rings visible on keyboard nav
- [ ] Menu buttons have aria-labels

## Error boundary
- [ ] App shell survives mode-level errors


## Cross-platform (Phase 10)

See [docs/PLATFORM_TEST_MATRIX.md](docs/PLATFORM_TEST_MATRIX.md) for the full Web / PWA / Android / iOS matrix.

Quick smoke:

```bash
npm run build && npm run preview
# Chrome DevTools → Application → Manifest + Service Workers
```
