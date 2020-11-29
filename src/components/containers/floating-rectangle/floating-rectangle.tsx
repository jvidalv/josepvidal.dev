import { FC } from 'preact/compat';
import { ComponentChildren, h } from 'preact';

type Props = {
  children: ComponentChildren;
};

export const FloatingRectangle: FC<Props> = ({ children }) => (
  <div className="w-4/5 mx-auto shadow-md bg-white shadow-lg p-3 py-8">{children}</div>
);
