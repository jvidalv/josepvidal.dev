module.exports = {
  purge: [
    './public/*.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      outline: {
        dashed: '12px dashed #ffffff',
      },
      colors: {
        gold: '#ffdd00',
        background: '#131315',
        react: '#181616',
        typescript: '#007acc',
      },
      height: {
        129: '32rem',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        96: '24rem',
      },
    },
  },
};
