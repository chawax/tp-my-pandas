# TP 1 - Création des premiers composants

## Installation de Storybook

Dans un premier temps on ajoute Storybook pour pouvoir mettre au point nos composants de manière isolée.

```
npx sb init
```

Puis lancer `yarn storybook` ou `npm run storybook` pour vérifier que tout se lance bien

## Installation de Reactstrap / Bootstrap

D'abord installer les librairies Bootstrap et Reactstrap :

```
npm install bootstrap reactstrap
npm install --save-dev @types/reactstrap
```

Ajouter l’import `import 'bootstrap/dist/css/bootstrap.min.css'` dans `index.tsx` et dans `.storybook/preview.js`.

Vérifier que Bootstrap est bien initialisé :

- En utilisant le composant `Button` de Bootstrap dans `App.tsx`
- En créant une story pour le composant `Button` de Bootstrap.

## Création du composant `PandasList`

On va créer un composant `PandasList` (composant de type fonction) pour afficher une liste de pandas. Ce composant a les propriétés suivantes :

- `pandas` : un tableau de pandas
- `onPress(id)` : événement déclenché lorsqu’on clique sur un panda dans la liste. On passe l’id du panda en paramètre à la méthode liée.

Chaque item de la liste est défini par un composant `PandaItem`. Ce composant a les propriétés suivantes :

- `name` : le nom du panda
- `onPress` : événement déclenché lorsqu'on clique sur le panda

Ce composant affiche un cercle avec la 1ère lettre du nom du panda puis son nom. Le clic doit être pris sur l'ensemble de la ligne.

Pour pouvoir typer correctement les composants, créer un type `Panda` dans `src/types` avec les propriétés suivantes :

- `key` de type `string` (optionnel)
- `name` de type `string`
- `interests` de type tableau de `string`
- `image` de type string

Écrire des stories pour le composant `PandasList` avec deux cas :

- La liste de pandas est vide
- La liste de pandas n'est pas vide

Ajouter des commentaires sur les propriétés dans le code du composant `PandasList` pour compléter la documentation dans Storybook.

> Un peu d'aide :
>
> - Pour créer ces composants on peut s'appuyer sur les composants `ListGroup`, `ListGroupItem` et `Badge` de Reactstrap.
> - La création du cercle avec la lettre nécessite de créer un style CSS personnalisé.
> - La liste des pandas peut être récupérée dans le fichier `src/mocks/pandas.json`.

## Création du composant PandasListView

Une fois que les composants fonctionnent dans Storybook, on peut les utiliser dans l'application !

Créer un nouveau composant `PandasListView` dans `src/views`. Ce composant utilise le composant `PandasList`et lui passe la liste des pandas (comme dans la story). Lors d’un clic sur un panda, on doit afficher une alerte avec la clé du panda qui a été cliqué.

Intégrer ce composant dans `App.tsx` à la place du code déjà existant.

Écrire un test unitaire de ce composant `PandasListView` pour vérifier que le panda `Yuan Men` est bien affiché. On peut s'inspirer de ce qui existe pour le test `App.test.tsx`.
