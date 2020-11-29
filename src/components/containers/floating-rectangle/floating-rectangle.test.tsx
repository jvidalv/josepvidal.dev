import { FC } from 'preact/compat';
import { ComponentChildren, h } from 'preact';

type FloatingRectangleProps = {
  children: ComponentChildren;
};

export const FloatingRectangle: FC<FloatingRectangleProps> = ({ children }) => (
  <div className="w-30">{children}</div>
);
