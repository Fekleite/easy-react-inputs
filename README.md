# Easy Input Lib

Uma biblioteca de componentes de input reutilizáveis, acessíveis e estilizados com Tailwind CSS para aplicações React.

## Tecnologias

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Biome](https://biomejs.dev/)

## Instalação

```sh
npm install easy-input-lib
# ou
pnpm add easy-input-lib
```

## Uso Básico

```tsx
import { TextInput } from "easy-input-lib";

function Example() {
  return (
    <div>
      <TextInput placeholder="Seu nome" type="text" />
    </div>
  );
}
```

## Componentes

- **BaseInput**: Componente base para inputs customizados.
- **TextInput**: Input de texto com suporte a estados (erro, sucesso, desabilitado, etc).

## Exemplos

Veja exemplos interativos e documentação dos componentes em [Storybook](./src/stories).

## Testes

Execute os testes com:

```sh
pnpm test
```

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feat/nova-feature`)
3. Commit suas alterações (`git commit -m 'feat: nova feature'`)
4. Push para a branch (`git push origin feat/nova-feature`)
5. Abra um Pull Request

## Licença

[MIT](LICENSE)
