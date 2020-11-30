import { FC } from 'preact/compat';
import { ComponentChildren, h } from 'preact';

const styles = require('./row.pcss');

type Props = {
  children: ComponentChildren;
};

export const Row: FC<Props> = ({ children }) => (
  <section>
    <div className={styles.default}>
      <div className="w-full self-center h-1/2 ml-auto bg-gold">
        <div className="w-5/6 mx-auto self-center h-1/2 bg-background -mt-12">{children}</div>
      </div>
    </div>
  </section>
);
