# TP 0 – Initialisation d’une application React

## Initialiser l'application React

Créer une application React avec la commande `create-react-app`.

> Attention au copier / coller qui embarque des caractères pourris !

```
npx create-react-app my-pandas --template typescript
```

## Vérifier que tout fonctionne

Lancer l'application en mode développement :

```
cd my-pandas
npm start
```

Tester le hot reloading en modifiant le fichier `App.tsx`

Lancer un build :

```
npm run build
```

ou

```
yarn build
```

Et vérifier que l'application fonctionne en mode production :

```
npx serve -s build
```

Lancer les tests automatisés avec `npm test` ou `yarn test`

> En cas d'erreur "Cannot use JSX unless the '--jsx' flag is provided' quand on ouvre un fichier TSX dans VSCode, faire un upgrade de Typescript (`npm install -D typescript@latest`) puis relancer VSCode. Ce problème est lié à la version Typescript utilisée par VSCode.

## Améliorer l'environnement de développement

Ajouter le plugin Prettier et la configuration Prettier.

```
npm install --save-dev prettier
```

Créer un fichier `.prettierrc` à la racine du projet avec la configuration suivante :

```
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all"
}
```

Installer l'extension Prettier dans VSCode et activer le formatage à la sauvegarde de chaque fichier (option `Format on save` dans les préférences).

Installer l'extension ESLint dans VSCode.
