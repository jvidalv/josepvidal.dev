import { FC } from 'preact/compat';
import { ComponentChildren, h } from 'preact';

type Props = {
  children: ComponentChildren;
};

export const Row: FC<Props> = ({ children }) => (
  <section>
    <div className="bg-red-500 w-2/3 h-screen ml-auto">{children}</div>
  </section>
);
