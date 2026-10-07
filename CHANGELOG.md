# Changelog

## [2.0.0] – Extension Phase 10 – Final Polish (2026-07-29)

### Added
- Skip-to-content link and main landmark
- Global `:focus-visible` styles
- Expanded README and QA checklist
- Production meta tags (theme-color, viewport-fit)

### Status
All planned extension phases (1–10) complete. Production-ready suite.

---

## [1.9.0] Linear systems · [1.8.0] Numerical · [1.7.0] Statistics  
## [1.6.0] Formulas · [1.5.0] Units/Constants · [1.4.0] Mobile UX  
## [1.3.0] Themes · [1.2.0] History · [1.1.0] ErrorBoundary/Lazy  
## [1.0.0] Core product (Phases 1–6 foundation)

## [2.1.0] – AI Phase 1 – Architecture & Settings (2026-07-29)

### Added
- Modular AI layer: types, AIService, provider adapters
- Mock (offline) + OpenAI streaming adapters
- AIContext with localStorage settings
- Settings → AI (enable, mode, provider, key, model, base URL)
- AI Assistant panel (basic chat shell)
- Sidebar mode: AI Assistant

### Privacy
- AI off by default
- Keys stored only in browser localStorage

## [2.2.0] – AI Phase 2 – Assistant UX (2026-07-29)

### Added
- Engineering system prompt (AIService)
- Suggestion chips, clear chat, copy message
- Session-scoped conversation persistence
- Offline local intents (units, circle area, Ohm’s law) in mock provider

## [2.3.0] – AI Phase 3 – Multi-provider (2026-07-29)

### Added
- Anthropic Claude streaming adapter
- Google Gemini streaming adapter
- Ollama local streaming adapter
- Full provider registry (all ready: true)

## [2.4.0] – AI Phase 4 – NL Calculator (2026-07-29)

### Added
- `nlCalculator.ts` offline routing to expression, units, formulas
- AIService runs NL **before** LLM when intent matches
- Expanded suggestion chips for NL examples

## [2.5.0] – AI Phase 5 – Formula Recommendations (2026-07-29)

### Added
- `formulaRecommend.ts` – as-you-type formula / constant / unit suggestions
- AIPanel suggestion list under the composer
- Richer formula search detail in NL answers

## [2.6.0] – AI Phase 6 – Step-by-step (2026-07-29)

### Added
- answerStyle quick | detailed
- stepByStep formatter for NL results
- Header + Settings toggles
- System prompt addons for LLM style

## [2.7.0] – AI Phase 7 – Smart Errors & History (2026-07-29)

### Added
- smartErrors explanations for common failures
- smartHistory NL filter + summary
- AI chat history summary / search intents
- History panel uses NL-aware search

## [2.8.0] – AI Phase 8 – Tutor / Learning (2026-07-29)

### Added
- Offline tutor question bank + answer checking
- TutorPanel (subject, difficulty, hints, score)
- AI Assistant Chat / Tutor tabs

## [2.8.1] – Cross-Platform Phase 1 – Audit (2026-07-29)

### Added
- `docs/CROSS_PLATFORM_MIGRATION.md` — full roadmap + codebase audit
- No feature code changes (audit-only phase)

## [2.9.0] – Cross-Platform Phase 2 – Responsive Design (2026-08-01)

### Added / Improved
- Fluid page shells and scrollable engineering tabs
- Safe-area padding on chrome
- Keypad / graphing / AI panel mobile layout polish
- Tailwind `xs` breakpoint

## [2.10.0] – Cross-Platform Phase 3 – Mobile UX (2026-08-01)

### Added / Improved
- visualViewport keyboard handling
- Improved edge-swipe and landscape keypad UX
- Reduced-motion and touch press feedback

## [2.11.0] – Cross-Platform Phase 4 – PWA (2026-08-27)

### Added
- Web App Manifest + PNG icons (any / maskable)
- Service worker with offline shell
- Install and update UI prompts

## [2.12.0] – Cross-Platform Phase 5 – Performance (2026-08-27)

### Improved
- Manual Rollup chunks for vendors and feature domains
- Lazy engineering sub-panels
- Nav hover prefetch for mode modules

## [2.13.0] – Cross-Platform Phase 6 – Capacitor (2026-08-27)

### Added
- Capacitor 6 config and npm scripts
- Platform detection stub
- Vite relative base for native WebView

## [2.14.0] – Cross-Platform Phase 7 – Platform adapters (2026-08-28)

### Added
- Platform service layer (clipboard, share, haptics, files)
- Wired AI copy, constants copy, history export

## [2.15.0] – Cross-Platform Phase 8 – Android (2026-08-28)

### Added
- Android adaptive icon & splash resources
- Release / AAB documentation
- Hardened Capacitor Android config

## [2.16.0] – Cross-Platform Phase 9 – iOS (2026-08-28)

### Added
- iOS icon set and splash resources
- App Store / TestFlight oriented documentation

## [2.17.0] – Cross-Platform Phase 10 – Testing (2026-08-28)

### Added
- Platform test matrix document
- SW cache version bump; QA checklist for Web/PWA/Android/iOS

## [3.0.0] – Cross-Platform Phase 11 – Production Release (2026-08-28)

### Added
- Production release guide (`docs/RELEASE.md`)
- Version line 3.0.0 marking completed Web → PWA → Capacitor track
