# Plan de implementación y trabajo en equipo

## Alcance del MVP

El encargo requiere un formulario que persista información y una pantalla de listado. El MVP implementa el caso de uso **registrar estudiantes** con los campos `nombres`, `correo` y `programa`; evita correos duplicados y muestra los registros más recientes primero.

## Diseño técnico

```text
React (vista + componentes) -> HTTP /api/students -> Controller -> Service -> Repository -> Sequelize -> SQLite
```

MVC se aplica en el backend: `Student` es el modelo, `StudentController` el controlador y el frontend actúa como vista. `StudentService` y `StudentRepository` separan las reglas de negocio de la infraestructura.

### SOLID aplicado

- **SRP**: cada capa tiene una única responsabilidad.
- **OCP**: se puede añadir otro repositorio sin modificar el servicio.
- **DIP**: el servicio recibe su repositorio por constructor, facilitando reemplazarlo en pruebas.
- **ISP**: el cliente solo consume `GET` y `POST` que necesita.

## Plan por integrante

### Integrante 1 — Backend

```bash
git switch main
git switch -c feature/backend-estudiantes
# trabaja en backend/
git add backend
git commit -m "feat(api): agregar registro y listado de estudiantes"
git push -u origin feature/backend-estudiantes
```

Responsable de modelo, repositorio, servicio, controlador, rutas y configuración SQLite. Criterio de aceptación: `POST /api/students` devuelve 201; un correo repetido devuelve 409; `GET /api/students` lista los registros.

### Integrante 2 — Frontend

```bash
git switch main
git switch -c feature/frontend-registro
# trabaja en frontend/
git add frontend
git commit -m "feat(web): crear formulario y listado de estudiantes"
git push -u origin feature/frontend-registro
```

Responsable de la vista, componentes, validación HTML, estados de carga/error y cliente HTTP. Criterio de aceptación: al guardar un formulario válido, el registro aparece sin recargar la página.

### Integrante 3 — Documentación e integración

```bash
git switch main
git switch -c feature/documentacion-integracion
# trabaja en README.md, docs/ y archivos raíz
git add README.md docs package.json .gitignore
git commit -m "docs: documentar arquitectura, equipo e inicio del proyecto"
git push -u origin feature/documentacion-integracion
```

Responsable de completar nombres en README, verificar el flujo completo, resolver conflictos y abrir/coordinar Pull Requests. Criterio de aceptación: `npm install` y `npm run dev` levantan ambas capas y el README identifica tecnologías y autores.

## Orden sugerido

1. Integrante 1 fija el contrato `GET/POST /api/students`.
2. Integrante 2 desarrolla contra ese contrato (puede usar datos simulados mientras espera la API).
3. Integrante 3 integra los Pull Requests a `main`, prueba el flujo y completa los nombres.

## Próximas iteraciones

1. Editar/eliminar estudiantes.
2. Pruebas unitarias del servicio y pruebas de integración de rutas.
3. Autenticación si el docente la solicita.
