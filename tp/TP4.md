# TP 4 - Navigation avec React Router

Objectif de ce TP :

- Créer une page de détail d’un panda
- Intégrer React Router

## Création de la page de détail d'un panda

- Créer le composant `components/PandaDetails.tsx` et sa story. Ce composant affiche le nom du panda, ses centres d’intérêt sous forme de badges, son image et un bouton "Fermer". Il expose les propriétés suivantes :

  - `panda` : le panda à afficher (de type `Panda`)
  - `onClose` : une méthode appelée quand on clique sur "Fermer"

- Créer un nouveau hook `usePandaDetails` qui charge le détail d'un panda. Ce hook prend un identifiant de panda en paramètre et utilise React Query pour charger le détail du panda. Écrire les tests unitaires pour ce hook.

- Créer un composant `PandaDetailsView`. Ce composant utilise le composant `PandaDetails` et s'appuie sur le hook `usePandaDetails`. Dans un premier temps on passe un identifiant en dur, par exemple `1`. Pour vérifier que ce composant fonctionne correctement, remplacer le composant `PandasListView` dans le composant `App` par le composant `PandasDetailsView`.

> Pour tous ces composants, hooks et tests, on peut s'appuyer sur ceux déjà faits pour la liste des pandas.

## Utilisation de React Router

On va maintenant utiliser React Router pour gérer la navigation entre les pages de liste et de détail. On en profite pour ajouter un header dans l'application.

- Créer un composant `Header` qui pour l'instant ne fait qu'afficher le nom de l'application. On peut utiliser le composant `Navbar` de Reactstrap. Intégrer ce composant dans le composant `App`.

- Créer un composant `NotFoundView` qui affiche un message "Page introuvable !".

- Installer la librairie React Router et ses types Typescript

  ```
  npm install react-router-dom @types/react-router-dom
  ```

- Définir un composant `Router` avec les deux routes suivantes :

  - `/pandas` : pour ouvrir la liste des pandas
  - `/pandas/:id` : pour ouvrir le détail d'un panda

  Par défaut on arrive sur la liste des pandas et en cas de route introuvable on arrive sur une page d'erreur (composant `NotFoundView` à créer). Ce composant doit intégrer le header pour permettre la navigation depuis le header.

- Intégrer ce composant `Router` dans le composant `App` et tester dans la barre de navigation du navigateur que les différentes URL fonctionnent correctement.

- Modifier les composants `Header`, `PandasListView` et `PandaDetailsView` pour intégrer la navigation en utilisant les hooks et / ou composants fournis par React Router.

> Remarque : une fois que ça marche on peut en profiter pour observer le bon fonctionnement du cache React Query.
