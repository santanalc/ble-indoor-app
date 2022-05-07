import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nextcap.app',
  appName: 'My App',
  webDir: 'out',
  bundledWebRuntime: false,
  // server: {
  //   url: "http://localhost:3000"
  // },
    ios: {
    scheme: "My App",
  },
};

export default config;
