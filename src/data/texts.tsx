import { useSelector } from 'react-redux';
import { IApp } from 'store/app.redux';
import { FC } from 'preact/compat';
import { h, VNode } from 'preact';

type Text = {
  ca: VNode;
  es: VNode;
  en: VNode;
};

type Texts = {
  intro: Text;
  contentTitle: Text;
  contentParagraph1: Text;
  contentParagraph2: Text;
  contentParagraph3: Text;
  contentParagraph4: Text;
};

const T: Texts = {
  intro: {
    ca: (
      <p className="text-3xl w-11/12 p-2 text-center mx-auto my-10 text-gray-800">
        I'm Josep, a <span className="bg-red-500 text-white font-thin">software</span> developer
        specialized in <span className="bg-react text-white font-thin">React</span>
      </p>
    ),
    es: (
      <p className="text-3xl w-11/12 p-2 text-center mx-auto my-10 text-gray-800">
        I'm Josep, a <span className="bg-red-500 text-white font-thin">software</span> developer
        specialized in <span className="bg-react text-white font-thin">React</span>
      </p>
    ),
    en: (
      <p className="text-3xl w-11/12 p-2 text-center mx-auto my-10 text-gray-800">
        I'm Josep, a <span className="bg-red-500 text-white font-thin">software</span> developer
        specialized in <span className="bg-react text-white font-thin">React</span>
      </p>
    ),
  },
  contentTitle: {
    ca: (
      <h1 className="text-3xl">
        Welcome <span aria-label="hand wave">👋🏻</span>
      </h1>
    ),
    es: (
      <h1 className="text-3xl">
        Welcome <span aria-label="hand wave">👋🏻</span>
      </h1>
    ),
    en: (
      <h1 className="text-3xl">
        Welcome <span aria-label="hand wave">👋🏻</span>
      </h1>
    ),
  },
  contentParagraph1: {
    ca: (
      <p>
        Currently working remotely for{' '}
        <a
          href="https://www.linkedin.com/company/zartis/"
          target="_blank"
          className="bg-blue-800 text-white font-thin">
          Zartis
        </a>{' '}
        as a software engineer. My role is to lead the frontend part of Agreeable, a brand new
        e-sign platform.
      </p>
    ),
    es: (
      <p>
        Currently working remotely for{' '}
        <a
          href="https://www.linkedin.com/company/zartis/"
          target="_blank"
          className="bg-blue-800 text-white font-thin">
          Zartis
        </a>{' '}
        as a software engineer. My role is to lead the frontend part of Agreeable, a brand new
        e-sign platform.
      </p>
    ),
    en: (
      <p>
        Currently working remotely for{' '}
        <a
          href="https://www.linkedin.com/company/zartis/"
          target="_blank"
          className="bg-blue-800 text-white font-thin">
          Zartis
        </a>{' '}
        as a software engineer. My role is to lead the frontend part of Agreeable, a brand new
        e-sign platform.
      </p>
    ),
  },
  contentParagraph2: {
    ca: (
      <p>
        My actual work requires me to code mostly in React (Preact &{' '}
        <span className="bg-typescript text-white font-thin  normal-case">TypeScript</span>), .NET
        and MongoDB, but my experience includes React Native, PHP, SQL and more.
      </p>
    ),
    es: (
      <p>
        My actual work requires me to code mostly in React (Preact &{' '}
        <span className="bg-typescript text-white font-thin  normal-case">TypeScript</span>), .NET
        and MongoDB, but my experience includes React Native, PHP, SQL and more.
      </p>
    ),
    en: (
      <p>
        My actual work requires me to code mostly in React (Preact &{' '}
        <span className="bg-typescript text-white font-thin  normal-case">TypeScript</span>), .NET
        and MongoDB, but my experience includes React Native, PHP, SQL and more.
      </p>
    ),
  },
  contentParagraph3: {
    ca: (
      <p>
        In{' '}
        <a
          href="https://github.com/jvidalv"
          target="_blank"
          className="bg-gray-900 text-white font-thin">
          Github
        </a>{' '}
        I have a collection of open source projects, like{' '}
        <a
          href="https://github.com/jvidalv/astrale"
          target="_blank"
          className="bg-purple-600 text-white font-thin">
          Astrale
        </a>
        , a mobile app powered by React Native and Python.
      </p>
    ),
    es: (
      <p>
        In{' '}
        <a
          href="https://github.com/jvidalv"
          target="_blank"
          className="bg-gray-900 text-white font-thin">
          Github
        </a>{' '}
        I have a collection of open source projects, like{' '}
        <a
          href="https://github.com/jvidalv/astrale"
          target="_blank"
          className="bg-purple-600 text-white font-thin">
          Astrale
        </a>
        , a mobile app powered by React Native and Python.
      </p>
    ),
    en: (
      <p>
        In{' '}
        <a
          href="https://github.com/jvidalv"
          target="_blank"
          className="bg-gray-900 text-white font-thin">
          Github
        </a>{' '}
        I have a collection of open source projects, like{' '}
        <a
          href="https://github.com/jvidalv/astrale"
          target="_blank"
          className="bg-purple-600 text-white font-thin">
          Astrale
        </a>
        , a mobile app powered by React Native and Python.
      </p>
    ),
  },
  contentParagraph4: {
    ca: (
      <p>
        From time to time I do side jobs for personal clients, if you are interested in having a
        cutting edge, well document codebase{' '}
        <a className="bg-red-500 text-white font-thin" href="mailto:josepvidalvidal@gmail.com">
          contact me
        </a>
        .
      </p>
    ),
    es: (
      <p>
        From time to time I do side jobs for personal clients, if you are interested in having a
        cutting edge, well document codebase{' '}
        <a className="bg-red-500 text-white font-thin" href="mailto:josepvidalvidal@gmail.com">
          contact me
        </a>
        .
      </p>
    ),
    en: (
      <p>
        From time to time I do side jobs for personal clients, if you are interested in having a
        cutting edge, well document codebase{' '}
        <a className="bg-red-500 text-white font-thin" href="mailto:josepvidalvidal@gmail.com">
          contact me
        </a>
        .
      </p>
    ),
  },
};

export const useTexts = (): { [key in keyof Texts]: VNode } => {
  const language = useSelector((s: IApp) => s.lang);
  return {
    intro: T.intro[language],
    contentTitle: T.contentTitle[language],
    contentParagraph1: T.contentParagraph1[language],
    contentParagraph2: T.contentParagraph2[language],
    contentParagraph3: T.contentParagraph3[language],
    contentParagraph4: T.contentParagraph4[language],
  };
};
