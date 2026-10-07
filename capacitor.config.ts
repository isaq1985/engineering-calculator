import type { CapacitorConfig } from '@capacitor/cli'

/**
 * Capacitor config – webDir matches Vite `dist`.
 * Generate native projects: npm run build && npx cap add android|ios
 */
const config: CapacitorConfig = {
  appId: 'com.engcalc.app',
  appName: 'EngCalc',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 400,
      launchAutoHide: true,
      backgroundColor: '#0b0f19',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#0b0f19',
    },
  },
  android: {
    allowMixedContent: false,
    backgroundColor: '#0b0f19',
    webContentsDebuggingEnabled: false,
  },
  ios: {
    contentInset: 'automatic',
    preferredContentMode: 'mobile',
    backgroundColor: '#0b0f19',
    scheme: 'EngCalc',
  },
}

export default config
