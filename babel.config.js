module.exports = {
    presets: ['@babel/preset-env'], // '@babel/preset-react' Presets padrão do Babel
    plugins: [
      '@babel/plugin-transform-modules-commonjs', // Necessário para extensões customizadas
      './plugins/timbu-plugin.js',
    ],
  };