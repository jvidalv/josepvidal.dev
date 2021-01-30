import { createStore } from 'redux';
import { getLanguageForStore } from '../utils/language';

export type AppLang = 'ca' | 'es' | 'en';

export interface IApp {
  lang: AppLang;
}

export enum APP_ACTIONS {
  LANGUAGE_CHANGED,
}

type ChangeLanguageAction = {
  type: APP_ACTIONS;
  payload: AppLang;
};

const reducer = (state: IApp, action: ChangeLanguageAction): IApp => {
  switch (action.type) {
    case APP_ACTIONS.LANGUAGE_CHANGED:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return { ...state };
  }
};

export const generateInitialAppStore = () => {
  const lang = getLanguageForStore(navigator?.language);
  return createStore(reducer, { lang });
};
