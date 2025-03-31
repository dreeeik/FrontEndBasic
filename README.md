# Sistema de Gerenciamento de Pneus

Aplicação front-end desenvolvida em React para gerenciamento de pneus, permitindo listar e visualizar detalhes de cada pneu.

## Funcionalidades

- **Lista de Pneus**: Exibe todos os pneus cadastrados com informações básicas como fabricante, modelo, número de série e tamanho
- **Detalhes do Pneu**: Visualização completa das especificações técnicas, histórico de reformas e dados de fabricação

## Tecnologias

- React
- TypeScript
- Material UI
- React Router DOM

## Rotas

- `/` - Lista de pneus
- `/tires/:id` - Detalhes de um pneu específico

## Como executar

```bash
# Instalar dependências
npm install

# Iniciar em modo desenvolvimento
npm run dev
```

## Estrutura básica

O projeto é organizado nas seguintes pastas:

- `/components`: Componentes reutilizáveis (TireCard, Header, Footer)
- `/pages`: Páginas da aplicação (TireList, TireDetails)
- `/routes`: Rotas da aplicação (`/`, `/tires/:id`)
- `/services`: Integração com API
- `/types`: Interfaces TypeScript
- `/assets`: Imagens
