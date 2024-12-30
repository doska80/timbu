//AST (do inglês, Abstract Syntax Tree, ou Árvore de Sintaxe Abstrata) é uma representação em formato de árvore de um código-fonte. 
//Cada nó dessa árvore representa uma construção sintática no código, como declarações, expressões, operadores, e assim por diante.


module.exports = function ({ types: t }) {
  return {
    visitor: {  //  visitante principal
      Program(path) {
        path.traverse({ //percorrer (ou "navegar") os nós filhos de um nó específico na árvore de sintaxe abstrata (AST).
          CallExpression(path) {
            // Transformar `escrever('mensagem')` para `console.log('mensagem')`
            if (t.isIdentifier(path.node.callee, { name: 'escrever' }) && path.node.arguments.length === 1) {
              const arg = path.node.arguments[0];
              if (t.isStringLiteral(arg)) {
                const newCall = t.callExpression(t.identifier('console.log'), [arg]);
                path.replaceWith(newCall);
              }
            }

            // Transformar `renderTexto(value)` para `document.getElementById('h1').innerText = value`
            if (t.isIdentifier(path.node.callee, { name: 'renderTexto' }) && path.node.arguments.length === 1) {
              const arg = path.node.arguments[0]; // O valor passado para innerText(value)

              // Cria `document.getElementById('h1')`
              const getElementCall = t.callExpression(
                t.memberExpression(t.identifier('document'), t.identifier('getElementById')),
                [t.stringLiteral('h1')]
              );

              // Cria `document.getElementById('h1').innerText`
              const innerTextAssignment = t.memberExpression(getElementCall, t.identifier('innerText'));

              // Cria `document.getElementById('h1').innerText = value`
              const newExpression = t.assignmentExpression('=', innerTextAssignment, arg);

              // Substitui o nó original
              path.replaceWith(newExpression);
            }
          },
        });
      },
    },
  };
};
