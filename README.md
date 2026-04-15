# shy

Monorepo Angular 21 com biblioteca de componentes UI e utilitários.

## Pacotes

| Pacote       | Caminho              | Descrição                                  |
| ------------ | -------------------- | ------------------------------------------ |
| `@shy/ui`    | `projects/shy-ui`    | Biblioteca de componentes UI reutilizáveis |
| `@shy/utils` | `projects/shy-utils` | Serviços e utilitários Angular             |
| `showcase`   | `projects/showcase`  | App de demonstração dos componentes        |

## Início rápido

```bash
npm install
npm start           # Serve o showcase em http://localhost:4200
```

> Em desenvolvimento (dentro deste monorepo), as libs são resolvidas via `tsconfig.json` — não é necessário fazer build antes de servir o showcase.

## Scripts

| Comando               | Descrição                                    |
| --------------------- | -------------------------------------------- |
| `npm start`           | Serve o showcase (modo dev)                  |
| `npm run build`       | Build de todas as libs + showcase (produção) |
| `npm run build:libs`  | Build de `@shy/ui` e `@shy/utils`            |
| `npm run build:ui`    | Build da biblioteca `@shy/ui`                |
| `npm run build:utils` | Build da biblioteca `@shy/utils`             |
| `npm run build:app`   | Build do showcase                            |

## Componentes (`@shy/ui`)

| Componente | Selector     | Descrição                        |
| ---------- | ------------ | -------------------------------- |
| **Icon**   | `<shy-icon>` | Conjunto de 30 ícones SVG inline |

### Uso do IconComponent

```typescript
import { IconComponent } from '@shy/ui';
```

```html
<shy-icon name="home" /> <shy-icon name="search" label="Buscar" />
```

Ícones disponíveis: `home`, `settings`, `user`, `search`, `bell`, `check`, `x`, `alert`, `info`, `plus`, `minus`, `edit`, `trash`, `download`, `upload`, `heart`, `star`, `menu`, `chevron-right`, `chevron-down`, `mail`, `lock`, `eye`, `help`, `palette`, `type`, `grid`, `layers`, `box`, `zap`.

## Utilitários (`@shy/utils`)

| Export           | Descrição                                                   |
| ---------------- | ----------------------------------------------------------- |
| `StorageService` | Wrapper tipado para `localStorage` com get/set/remove/clear |

### Uso do StorageService

```typescript
import { StorageService } from '@shy/utils';

constructor(private storage: StorageService) {}

this.storage.set('key', { foo: 'bar' });
const value = this.storage.get<{ foo: string }>('key');
this.storage.remove('key');
```

## Design Tokens

Propriedades CSS definidas em `projects/shy-ui/src/lib/styles/_tokens.scss`:

- **Cores** — `--primary`, `--secondary`, `--tertiary`, `--success`, `--warning`, `--danger`, `--dark`, `--medium`, `--light`, `--black`, `--white`
- **Layout** — `--headerHeight`, `--footerHeight`, `--defaultContentHeight`, `--responsiveUnit`

Para usar os estilos base no showcase ou em outro app:

```scss
@use '@shy/ui/src/lib/styles/tokens';
@use '@shy/ui/src/lib/styles/base';
```

## Estrutura do projeto

```
shy/
├── projects/
│   ├── shy-ui/               # Biblioteca de componentes
│   │   └── src/
│   │       ├── lib/
│   │       │   ├── components/
│   │       │   │   └── icon/     # IconComponent
│   │       │   └── styles/       # tokens, variables, mixins, base
│   │       └── public-api.ts
│   ├── shy-utils/            # Biblioteca de utilitários
│   │   └── src/
│   │       ├── lib/
│   │       │   └── services/
│   │       │       └── storage.service.ts
│   │       └── public-api.ts
│   └── showcase/             # App de demonstração
│       └── src/app/
│           └── pages/
│               └── icons/    # Página de demonstração dos ícones
└── angular.json              # Configuração do workspace
```
