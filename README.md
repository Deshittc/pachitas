# Registro de estudiantes

Aplicación web básica para registrar estudiantes y consultar el listado guardado.

## Tecnologías

| Capa | Tecnología |
| --- | --- |
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Base de datos | SQLite + Sequelize |

## Arquitectura

La API sigue MVC y separa responsabilidades para aplicar SOLID:

- **Routes**: definen HTTP y dependen de controladores.
- **Controllers**: traducen petición/respuesta HTTP.
- **Services**: contienen los casos de uso y las reglas de negocio.
- **Repositories**: encapsulan acceso a datos.
- **Models**: representan las entidades persistentes.

## Inicio rápido

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`. La API queda en `http://localhost:3000/api`.

## Integrantes

| Integrante | Rama | Responsabilidad |
| --- | --- | --- |
| Integrante 1 | `feature/backend-estudiantes` | API MVC, validación y persistencia |
| Integrante 2 | `feature/frontend-registro` | Formulario, consumo de API y estilos |
| Integrante 3 | `feature/documentacion-integracion` | README, variables de entorno e integración |

Reemplacen “Integrante 1/2/3” por sus nombres antes de la entrega.

## Flujo de Git

Cada persona crea su rama desde `main`, realiza el commit indicado en `docs/PLAN_EQUIPO.md`, sube la rama y abre un Pull Request hacia `main`.

