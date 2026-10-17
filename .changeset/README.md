# Changesets

This folder contains changesets for the zandome-web project.

## ¿Cómo crear un changeset?

Antes de hacer merge a `main`, ejecuta:

```bash
bun run changeset
```

Se te pedirá que selecciones qué cambios incluir (patch, minor, major) y escribas una descripción breve del cambio. Esto crea un archivo en `.changeset/` con la información.

Incluye este archivo en tu commit y PR. Cuando el PR se mergee a `main`, el CI automáticamente:

1. Crea un PR "Version Packages" con el bump de versión en `package.json`
2. Actualiza `CHANGELOG.md`
3. Cuando se mergea ese PR, crea un git tag `vX.Y.Z` y un GitHub Release

## Tipos de cambios

- **patch** (1.3.0 → 1.3.1): bugfixes, cambios menores
- **minor** (1.3.0 → 1.4.0): nuevas features, cambios que no rompen
- **major** (1.3.0 → 2.0.0): cambios que rompen compatibilidad

Para este proyecto (sitio estático), generalmente usamos `patch` o `minor`.

## Ver estado

```bash
bun run changeset status
```

Muestra los cambios pendientes de ser versionados.
