import { h } from 'preact';
import { FC } from 'preact/compat';
import { IJvIcon } from './IJvIcon';

export const StackOverflow: FC<IJvIcon> = (props) => (
  <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
    <circle cx={256} cy={256} r={256} />
    <path
      fill="#FFFFFF"
      d="M309.088 264.435l-108.523-64.008 13.665-23.168 108.524 64.008zM300.262 297.77l-121.678-32.709 6.983-25.977 121.678 32.71zM297.406 333.832l-125.471-11.567 2.47-26.787 125.47 11.567zM170.2 341.4h126v26.9h-126z"
    />
    <path
      fill="#FFFFFF"
      d="M339.1 404.6s0 6.3-.2 6.3v.1H137.3s-6.3 0-6.3-.1h-.2V279.8h21.5v110h165.3v-110h21.5v124.8zM278.698 117.175l70.989 104.101-22.225 15.156-70.989-104.102zM359.664 91.017l21.546 124.148-26.505 4.6L333.16 95.617z"
    />
  </svg>
);

StackOverflow.defaultProps = {
  fill: '#F48024',
};
