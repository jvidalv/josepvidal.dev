import { FC } from 'preact/compat';
import { Linkedin } from '../components/icons/linkedin';
import { StackOverflow } from '../components/icons/stack-overflow';
import { Github } from '../components/icons/github';
import { Email } from '../components/icons/email';
import { TIcon } from '../components/icons/TIcon';

type Network = {
  name: string;
  url: string;
  Icon: FC<TIcon>;
};

export const networks: Array<Network> = [
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/josepvidalvidal',
    Icon: Linkedin,
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/9724551/josep-vidal?tab=profile',
    Icon: StackOverflow,
  },
  {
    name: 'Github',
    url: 'https://github.com/jvidalv',
    Icon: Github,
  },
  {
    name: 'Email',
    url: 'mailto:josepvidalvidal@gmail.com',
    Icon: Email,
  },
];
