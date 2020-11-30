module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['src/**/*.tsx'],
  },
  theme: {
    extend: {
      outline: {
        dashed: '12px dashed #ffffff',
      },
      colors: {
        gold: '#ffdd00',
        background: '#131315',
      },
    },
  },
};
