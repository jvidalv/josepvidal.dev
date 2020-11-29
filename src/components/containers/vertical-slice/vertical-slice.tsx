import { FC } from 'preact/compat'
import { ComponentChildren, h } from 'preact'

type VerticalSliceProps = {
  children: ComponentChildren
}

export const VerticalSlice: FC<VerticalSliceProps> = ({ children }) => (
  <div className="fixed w-1/3 h-screen bg-blue-500 flex justify-center items-center">
    {children}
  </div>
)
