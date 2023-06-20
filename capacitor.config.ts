import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.spacelab.expenses',
  appName: 'expenses',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      launchFadeOutDuration: 3000,
      // backgroundColor: '#ffffffff',
      androidSplashResourceName: 'splash',
      // androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      // androidSpinnerStyle: 'large',
      // iosSpinnerStyle: 'small',
      // spinnerColor: '#999999',
      splashFullScreen: true,
      splashImmersive: true,
      // layoutName: 'launch_screen',
      // useDialog: true,
    },
  },
};

export default config;
