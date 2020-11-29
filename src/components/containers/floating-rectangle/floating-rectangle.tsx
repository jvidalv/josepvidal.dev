import { FC } from 'preact/compat'
import { ComponentChildren, h } from 'preact'

type Props = {
  children: ComponentChildren
}

export const FloatingRectangle: FC<Props> = ({ children }) => (
  <div className="w-4/5 mx-auto shadow-md bg-yellow-500 p-3">{children}</div>
)
