import { FC } from 'preact/compat';
import { ComponentChildren, h } from 'preact';

const styles = require('./row.pcss');

type Props = {
  children: ComponentChildren;
};

export const Row: FC<Props> = ({ children }) => (
  <section>
    <div className={styles.default}>
      <div className="w-full self-center h-1/2 ml-auto bg-gold shadow-lg">
        <div className="container w-5/6 mx-auto h-1/2 -mt-12 bg-white shadow-lg rounded-3xl">
          {children}
        </div>
      </div>
    </div>
  </section>
);
