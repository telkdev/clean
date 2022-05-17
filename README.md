# DDD client part

Written using clean architecture patterns(DDD) in combination with vue composition api(as the addapters).

## About the structure:

based on clean architecture - https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

```#Folder name - meaning:```
`domain` - Entities that encapsulates business logic

`application` - Use Cases, The software in this layer contains application specific business rules: validation, auth, api calls, payment etc.

- `ports` - interfaces, specifications for how our application wants the outside world to communicate with it
      `storages` - local storage interfaces
`services` - Interface Adapters, ui(components, views), different libs that could be easily changed and it won't affect the working process of the application
Adapters could be:
driving - which send signals to our application(UI)
driven - which receive signals from our application(api calls, payment).
       `containers` - budget DI 

```Dependency Rule```
The three-layer architecture has a dependency rule: only outer layers can depend on inner ones. It means that:

the domain must be independent;
the application layer may be domain dependent;
outer layers can depend on anything.

## Used technologies
- Vue 3
- Tailwind
- Vite
- TypeScript
- VueUse(for meta and helper functions)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

### TODO:

### Notes: