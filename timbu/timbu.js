
export default class Timbu {
    static components = {};
  
    static component(name, options) {
  
      const { data, template } = options;
  
      Timbu.components[name] = { data, template };
  
      console.log(`Componente '${name}' registrado com sucesso.`);
    }
  }
  