
import myLogo from './extensions/images/2bsimple-logo.png';

const config = {
  auth: {
    logo: myLogo,
  },
  head: {
    favicon: myLogo,
  },
  menu: {
    logo: myLogo,
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  theme: {
    light: {
      colors: {
        // primary100: '#12BAE3',
        // primary200: '#12BAE3',
        // primary500: '#12BAE3',
        // primary600: '#12BAE3',
        // primary700: '#12BAE3',
        // danger700: '#b72b1a'
        primary100: '#f6ecfc',
        primary200: '#e0c1f4',
        primary500: '#ac73e6',
        primary600: '#9736e8',
        primary700: '#8312d1',
        danger700: '#b72b1a'
      },
    },
    dark: {
      colors: {
        // primary100: '#C43010',
        // primary200: '#C43010',
        // primary500: '#C43010',
        // primary600: '#C43010',
        // primary700: '#C43010',
        // danger700: '#b72b1a'
        primary100: '#f6ecfc',
        primary200: '#e0c1f4',
        primary500: '#ac73e6',
        primary600: '#9736e8',
        primary700: '#8312d1',
        danger700: '#b72b1a'
      },
    }
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "2BSimple Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Dashboard",
      "Auth.form.welcome.title": "Welcome to 2BSimple",
      "Auth.form.welcome.subtitle": "Log in to your 2BSimple account",
      "app.components.HomePage.welcome.again": "Welcome KUB yeah!",
      "app.components.HomePage.welcomeBlock.content.again": "Welcome to 2BSimple Dashboard",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
