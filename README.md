## version

1. node: v22.12.0
2. yarn : v1.22.22
3. Next.js: 15.3.2
4. React.js: 19.0.0
5. eslint: v9
6. prettier: v3.5.3

## Getting Started

install

```bash
yarn install
```

start

```bash
yarn dev
```

## Need

eslint

prettier

```bash
yarn add --dev prettier
```

## Internationalization
Next.js [Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

### How to add a new language?
1. Go to that folder `app/src/constants/lang.ts`，then add a new constant on the variable `LOCALE_LANG`.
2. Add new types to the `LangTypes` variable in `app/src/types/lang.d.ts`.
3. Remember to add the json file for that language. the files are stored in `src/app/[lang]/dictionaries`.

### How to set default language?
1. in `app/src/middleware.ts`, find the variable `defaultLocale` and change it to the specified language.