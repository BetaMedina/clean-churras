# Criação e agendamento de Churrascos


### Escolhas de desenvolvimento:

- Utilização de clean architecture
- DDD
- javascript standart style guide
- token JWT
- TDD
- Husky
- lint-staged

### Funções:

- Login completo
- Crição de churrascos
- Adição de novos participantes aos churrascos
- Criar usuário e verificação automatica de vencimento de token da api.


### Features previstas:

- Melhoria nos testes de integração
- Implementação de de variaveis ambientes

### Como utilizar esse projeto:

- Run `npm install`
- Run `npm run dev` para iniciar em desenvolvimento.


### Testes:
- Run `npm run test` para testes unitarios 
- Run `npm run test:integration` para testes de integração (Pendentes de melhorias) 


#### Importante

- Configure  as variaveis ambientes do banco, em:
  -Infra > db > MYSQL > config.js

- O token JWT também está pendente de melhorias, atualmente está rodando com ENUM