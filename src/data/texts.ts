import { useSelector } from 'react-redux';
import { IApp } from 'store/app.redux';
import { NETWORKS } from '../constants/networks';

type Text = {
  ca: string;
  es: string;
  en: string;
};

type Texts = {
  intro: Text;
  contentTitle: Text;
  contentParagraph1: Text;
  contentParagraph2: Text;
  contentParagraph3: Text;
};

const T: Texts = {
  intro: {
    ca: `I'm Josep, a <span class="bg-red-500 text-white font-medium">software</span> developer specialized in <span class="bg-react text-white font-medium">React</span>`,
    es: `I'm Josep, a <span class="bg-red-500 text-white font-medium">software</span> developer specialized in <span class="bg-react text-white font-medium">React</span>`,
    en: `I'm Josep, a <span class="bg-red-500 text-white font-medium">software</span> developer specialized in <span class="bg-react text-white font-medium">React</span>`,
  },
  contentTitle: {
    ca: 'Welcome <span aria-label="hand wave">👋🏻</span>',
    es: 'Welcome <span aria-label="hand wave">👋🏻</span>',
    en: 'Welcome <span aria-label="hand wave">👋🏻</span>',
  },
  contentParagraph1: {
    ca: `Currently working remotely for <a href="https://www.linkedin.com/company/zartis/" target='_blank' class="bg-blue-800 text-white font-medium">Zartis</a> as a software engineer. My role is to lead the frontend part of Agreeable, a brand new e-sign platform.`,
    es: `Currently working remotely for <a href="https://www.linkedin.com/company/zartis/" target='_blank' class="bg-blue-800 text-white font-medium">Zartis</a> as a software engineer. My role is to lead the frontend part of Agreeable, a brand new e-sign platform.`,
    en: `Currently working remotely for <a href="https://www.linkedin.com/company/zartis/" target='_blank' class="bg-blue-800 text-white font-medium">Zartis</a> as a software engineer. My role is to lead the frontend part of Agreeable, a brand new e-sign platform.`,
  },
  contentParagraph2: {
    ca: `My actual work requires me to code mostly in React <span class="text-sm text-gray-500">(Preact & <span class="bg-typescript text-white font-medium normal-case">TypeScript</span>)</span>, .NET and MongoDB, but my experience includes React Native, PHP, SQL and more.`,
    es: `My actual work requires me to code mostly in React <span class="text-sm text-gray-500">(Preact & <span class="bg-typescript text-white font-medium normal-case">TypeScript</span>)</span>, .NET and MongoDB, but my experience includes React Native, PHP, SQL and more.`,
    en: `My actual work requires me to code mostly in React <span class="text-sm text-gray-500">(Preact & <span class="bg-typescript text-white font-medium normal-case">TypeScript</span>)</span>, .NET and MongoDB, but my experience includes React Native, PHP, SQL and more.`,
  },
  contentParagraph3: {
    ca: `In <a href="https://github.com/jvidalv" target='_blank' class="bg-gray-900 text-white font-medium">Github</a> I have a collection of open source projects, like <a href="https://github.com/jvidalv/astrale" target='_blank' class="bg-purple-600 text-white font-medium">Astrale</a>, a mobile app powered by React Native and Python.`,
    es: `In <a href="https://github.com/jvidalv" target='_blank' class="bg-gray-900 text-white font-medium">Github</a> I have a collection of open source projects, like <a href="https://github.com/jvidalv/astrale" target='_blank' class="bg-purple-600 text-white font-medium">Astrale</a>, a mobile app powered by React Native and Python.`,
    en: `In <a href="https://github.com/jvidalv" target='_blank' class="bg-gray-900 text-white font-medium">Github</a> I have a collection of open source projects, like <a href="https://github.com/jvidalv/astrale" target='_blank' class="bg-purple-600 text-white font-medium">Astrale</a>, a mobile app powered by React Native and Python.`,
  },
};

export const useTexts = (): { [key in keyof Texts]: string } => {
  const language = useSelector((s: IApp) => s.lang);
  return {
    intro: T.intro[language],
    contentTitle: T.contentTitle[language],
    contentParagraph1: T.contentParagraph1[language],
    contentParagraph2: T.contentParagraph2[language],
    contentParagraph3: T.contentParagraph3[language],
  };
};
