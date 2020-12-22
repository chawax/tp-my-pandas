# TP 8 - Utilisation de Context API

On va utiliser Context API pour gérer un mode d'affichage "dark" ou "light" dans l'application. Context API permettra de manipuler ce mode d'affichage depuis n'importe quel composant de l'application sans devoir le faire passer par les props.

- Créer un nouveau type `DisplayMode` qui peut prendre deux valeurs : `dark` ou `light`.

- Créer un nouveau contexte `DisplayModeContext` dans le fichier `context/DisplayModeContext.ts` avec l'API Context. Ce contexte contient deux propriétés :

  - `displayMode` : le mode d'affichage courant, `dark` par défaut.
  - `toggleDisplayMode` : une méthode qui permet de basculer le mode d'afficha entre `dark` et `light`

- Créer un nouveau provider `DisplayModeProvider` dans le fichier `context/DisplayModeProvider.tsx`. Ce provider implémenente le provider `DisplayModeContext.Provider` et s'appuie sur `useState` pour conserver la valeur du mode d'affichage mais aussi pour implémenter `toggleDisplayMode`.

- Wrapper l'application avec ce provider `DisplayModeProvider`

- Dans le composant `Header` utiliser le hook `useContext` pour récupérer la valeur de `displayMode` dans `DisplayModeContext` et gérer l'affichage du mode dark ou light :

  - En mode `dark` la navbar doit être en dark et le texte en blanc
  - En mode `light` la navbar doit être en light et le texte en noir

- A l'image de ce qui a été fait pour les langues créer un composant `ChooseDisplayMode` qui permet de choisir le mode d'affichage. Ce composant utilisera lui aussi `userContext` pour récupérer la valeur de `displayMode` dans `DisplayModeContext` mais aussi accéder à ma méthode `toggleDisplayMode`
