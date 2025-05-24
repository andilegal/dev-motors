# Dev Motors

Dev Motors é uma aplicação web desenvolvida com [Next.js](https://nextjs.org), focada em facilitar a gestão, visualização e negociação de veículos. O projeto foi criado para oferecer uma experiência moderna, rápida e responsiva tanto para compradores quanto para vendedores de automóveis.

## Funcionalidades

- **Catálogo de Veículos:** Visualize uma lista completa de carros disponíveis, com filtros por marca, modelo, ano, preço e outros atributos.
- **Detalhes do Veículo:** Página dedicada para cada veículo, exibindo fotos, especificações técnicas, histórico e informações do vendedor.
- **Cadastro de Veículos:** Usuários autenticados podem cadastrar novos veículos, incluindo upload de imagens e descrição detalhada.
- **Sistema de Autenticação:** Login e cadastro de usuários com segurança.
- **Favoritos:** Salve veículos de interesse para consulta futura.
- **Contato Direto:** Envie mensagens para o vendedor diretamente pela plataforma.
- **Responsividade:** Layout adaptado para dispositivos móveis e desktops.
- **SEO otimizado:** Estrutura pensada para melhor indexação em mecanismos de busca.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [ESLint](https://eslint.org) e [Prettier](https://prettier.io) para padronização de código
- [Prisma ORM](https://www.prisma.io) (opcional, caso utilize banco de dados relacional)
- [PostgreSQL](https://www.postgresql.org) ou outro banco de dados compatível

## Como rodar o projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/dev-motors.git
   cd dev-motors
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente:**

   - Crie um arquivo `.env.local` na raiz do projeto com as configurações necessárias (exemplo: conexão com banco de dados, chaves de API, etc).

4. **Rode o servidor de desenvolvimento:**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse no navegador:**
   [http://localhost:3000](http://localhost:3000)

## Estrutura de Pastas

```
src/
  components/      # Componentes reutilizáveis
  app/             # Páginas e rotas (Next.js App Router)
  lib/             # Funções utilitárias e helpers
  styles/          # Estilos globais e configurações do Tailwind
  prisma/          # (Opcional) Esquemas e seeds do Prisma
public/            # Imagens e arquivos estáticos
```

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Fork este repositório
2. Crie uma branch: `git checkout -b minha-feature`
3. Faça suas alterações e commit: `git commit -m 'feat: minha nova feature'`
4. Envie para o seu fork: `git push origin minha-feature`
5. Abra um Pull Request

## Licença

## Gerenciador de Conteúdo

Este projeto utiliza o [CosmicJS](https://www.cosmicjs.com/) como gerenciador de conteúdo (headless CMS). O CosmicJS permite que os dados dos veículos, imagens e demais conteúdos dinâmicos sejam facilmente gerenciados por meio de uma interface amigável, facilitando a atualização e manutenção do catálogo sem necessidade de deploys ou alterações diretas no código.

As integrações com o CosmicJS são feitas via API, utilizando as chaves de acesso configuradas no arquivo `.env.local`.

Exemplo de configuração no `.env.local`:

```
NEXT_PUBLIC_API_URL=https://api.cosmicjs.com/v3/buckets/dev-motors-production-00231bb0-382d-11f0-a6df-f9877ec37eee
READ_KEY=xLiF9fFFYtuGxVff14KsaRvyVxpBXKOdewcjcJxSkAclSN3Xjr
WRITE_KEY=BiJqvVcRUTlBSohl7gTNiZ1ootH1JR5ulEywlfXVqo1pPWhWM5
```

Saiba mais sobre o CosmicJS em: [https://www.cosmicjs.com/](https://www.cosmicjs.com/)

Este projeto está sob a licença MIT.

---

Desenvolvido por ANDERSON BATISTA DA COSTA 🚗
