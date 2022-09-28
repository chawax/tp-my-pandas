id:tp-react

# TP My Pandas

## Initialisation d’une application React

Ce TP permet de développer une application qui permet de gérer une liste de pandas.

- Liste de pandas
- Détail d’un panda
- Création d’un panda
- Modification d’un panda
- Suppression d’un panda

<aside class="positive">
Prérequis :

- Node JS installé (16 minimum recommandée)
- Chrome ou un autre navigateur installé
- Visual Studio Code installé
</aside>

### Initialiser l'application React

Créer une application React avec la commande `create-react-app`.

> Attention au copier / coller qui peut parfois embarquer des caractères pourris !

```bash
npx create-react-app my-pandas --template typescript
```

### Vérifier que tout fonctionne

Lancer l'application en mode développement :

```bash
cd my-pandas
npm start
```

Tester le hot reloading en modifiant le fichier `App.tsx`

Lancer un build :

```bash
npm run build
```

Et vérifier que l'application fonctionne en mode production :

```bash
npx serve -s build
```

Lancer les tests automatisés avec `npm test`.

<aside class="negative">
En cas d'erreur "Cannot use JSX unless the '--jsx' flag is provided' quand on ouvre un fichier TSX dans VSCode, faire un upgrade de Typescript (`npm install -D typescript@latest`) puis relancer VSCode. Ce problème est lié à la version Typescript utilisée par VSCode.
</aside>

### Améliorer l'environnement de développement

Ajouter le plugin Prettier et la configuration Prettier.

```bash
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

Installer l'extension Prettier dans VSCode et activer le formatage à la sauvegarde de chaque fichier (option `Format on save` dans les préférences du workspace).

Installer l'extension ESLint dans VSCode.

## Création des premiers composants

Nous allons créer nos premiers composants et utiliser Storybook pour les tester. Nous utiliseront la librairie Reactstrap (librairie de wrapping de Bootstrap pour React) pour créer des composants beaux visuellement sans avoir besoin d'écrire de CSS !

<aside class="positive">
Reacstrap met à disposition un Storybook pour documenter les composants mis à disposition et les tester : https://reactstrap.github.io/
</aside>

### Installation de Storybook

Dans un premier temps installons Storybook dans le projet.

```bash
npx sb init --use-npm
```

Puis lancer `npm run storybook` pour vérifier que tout se lance bien.

### Installation de Reactstrap

D'abord installer les librairies Bootstrap et Reactstrap :

```bash
npm install bootstrap reactstrap
npm install --save-dev @types/reactstrap
```

<aside class="negative">
La librairie Reactstrap n'étant pas encore officiellement compatible avec React 18, on peut avoir des warnings pendant l'installation de la librairie.
</aside>

Ajouter l’import `import 'bootstrap/dist/css/bootstrap.min.css'` dans `index.tsx` et dans `.storybook/preview.js` pour que les styles CSS Bootstrap soient chargés au démarrage de l'application et de Storybook.

Pour vérifier que Reactstrap est bien initialisé :

- Insérer le composant `Button` de Reactstrap dans `App.tsx` et vérifier qu'il a l'aspect attendu.
- Créer une story `ReactstrapButton.stories.tsx` utilisant le composant `Button` de Reactstrap. On peut s'inspirer de celle du composant `Button` initialisé lors de l'installation de Storybook pour créer une story de ce type :

```ts
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from 'reactstrap';

export default {
  title: 'Example/Reactstrap Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Secondary',
};
```

### Création du composant `PandasList`

On va créer un composant `PandasList` pour afficher une liste de pandas. Ce composant a les propriétés suivantes :

- `pandas` : un tableau de pandas
- `onPress` : événement déclenché lorsqu’on clique sur un panda dans la liste. On passe l’id du panda en paramètre.

Chaque item de la liste est défini par un composant `PandaItem`. Ce composant a les propriétés suivantes :

- `name` : le nom du panda
- `onPress` : événement déclenché lorsqu'on clique sur le panda

Ce composant affiche un cercle avec la 1ère lettre du nom du panda puis son nom. Le clic doit être pris sur l'ensemble de la ligne.

Ces composants doivent être définis dans le répertoire `src/components`.

Pour pouvoir typer correctement les composants, créer un type `Panda` dans `src/types` avec les propriétés suivantes :

- `key` de type `string`
- `name` de type `string`
- `interests` de type tableau de `string`
- `image` de type string

Écrire des stories pour le composant `PandasList` (dans le même répertoire que le composant) avec deux cas :

- La liste de pandas est vide
- La liste de pandas n'est pas vide

Ajouter des commentaires sur les propriétés dans le code du composant `PandasList` pour compléter la documentation dans Storybook.

<aside>
 Un peu d'aide :

 - Pour créer ces composants on peut s'appuyer sur les composants `ListGroup`, `ListGroupItem` et `Badge` de Reactstrap.
 - La création du cercle avec la lettre nécessite de créer un style CSS personnalisé.
 - La liste des pandas peut être récupérée dans le fichier `src/mocks/pandas.json`.
 </aside>

### Création du composant PandasListView

Une fois que les composants fonctionnent dans Storybook, on peut les utiliser dans l'application !

Créer un nouveau composant `PandasListView` dans `src/views`. Ce composant utilise le composant `PandasList`et lui passe la liste des pandas (comme dans la story). Lors d’un clic sur un panda, on doit afficher une alerte avec la clé du panda qui a été cliqué.

Intégrer ce composant dans `App.tsx` à la place du code déjà existant.

Écrire un test unitaire de ce composant `PandasListView` pour vérifier que le panda `Yuan Men` est bien affiché. On peut s'inspirer de ce qui existe pour le test `App.test.tsx`.

## Chargement de données avec Axios et les hooks

### Préparation d'un serveur de mock

On va s'appuyer sur `json-server` pour fournir une API de manière très simplifiée.

- Installer `json-server`

```
npm install -D json-server
```

- Ajouter le script suivant dans `package.json` :

```
"json-server": "./node_modules/.bin/json-server --watch ./json-server/db.json --port 3004 --id key"
```

- Créer un fichier `json-server/db.json`

- Y créer une collection `pandas` et y recopier la liste des pandas

- Démarrer le serveur

```
npm run json-server
```

- Tester que le service fonctionne

```
http://localhost:3004/pandas
```

### Utilisation des hooks avec Axios

- Installer la librairie `axios`

  ```
  npm install axios
  ```

- Modifier le composant `PandasListView` et utilise les hooks `useState` et `useEffect` pour appeler le service `http://localhost:3004/pandas`. Il faut afficher un spinner (composant `Spinner` de Reactstrap) pendant le chargement des données et afficher un message d'erreur en cas d'échec de l'appel.

- Une fois que ce chargement fonctionne on peut en extraire un hook personnalisé `usePandas` dans le répertoire `/src/hooks`.

- Créer un test unitaire pour ce hook, en testant le cas où l'appel au service est OK et le cas où il est en erreur. Il faudra en particulier mocker les appels Axios. Ce test nécessitera l'installation de quelques librairies.

  ```
  npm install -D axios-mock-adapter react-test-renderer @testing-library/react-hooks
  ```

- Et mettre à jour les tests pour `PandasListView` sur les mêmes cas. On doit contrôler qu'on affiche bien d'abord un spinner, puis une liste de pandas ou un message d'erreur en fonction du résultat de l'appel de l'API.

## Chargement de données avec React Query

On va utiliser React Query pour faciliter la gestion des requêtes asynchrones et ajouter quelques fonctionnalités bien pratiques à notre applicaiton.

### Utilisation de `useQuery`

- Installer React Query

```
npm install @tanstack/react-query
npm install -D @tanstack/react-query-devtools
```

- Encapsuler l'application dans un composant `QueryClientProvider` pour initialiser React Query et activer les devtools de React Query.

- Modifier le hook `usePandas` pour utiliser le hook `useQuery`. Le hook doit retourner l'objet retourné par le hook `useQuery`.

- Adapter les tests unitaires du hook `usePandas` et du composant `PandasListView` pour qu'ils continuent à passer.

> Quelques indices :
>
> - Pour encapsuler le test unitaire dans le composant `QueryClientProvider`, utiliser l'option `wrapper` de la méthode `renderHook`.
> - Pour simplifier l'écriture des tests, on désactive le mode retry de React Query sur le client créé précédemment (option `defaultOptions.queries.retry` à `false`)
> - En dehors de l'ajour du wrapper React Query, le test de `PandasListView` ne devrait pas bouger. Pour le test de `usePandas` on peut utiliser la méthode `waitFor` de Testing Library et s'appuyer sur les propriétés `isSuccess` ou `isError` pour suivre l'état de la requête.
> - Attention à vider le cache de React Query entre chaque exécution de test. Sinon le test d'échec va fonctionner car on a des données en cache !

### Utilisation de la fonctionnalité `refetch` de React Query

Dans un deuxième temps on va utiliser la fonctionnalité `refetch` de React Query pour réeen cas d'erreur lors de la requête.

- Créer un nouveau composant `ErrorAndRetry` qui affiche un message d'erreur et un bouton Réessayer. Il expose deux propriétés :

  - `message` : un message d'erreur à afficher
  - `onRetry` : une méthode à appeler lorsqu'on clique sur le bouton `Réessayer`

- Utiliser ce composant dans le composant `PandasListView` et le raccrocher à la fonctionnalité `refetch` de React Query.

- Pour tester ce comportement, couper le serveur json-server, essayer l'application, redémarrer le serveur puis cliquer sur Réessayer.

## Navigation avec React Router

Objectif de ce TP :

- Créer une page de détail d’un panda
- Intégrer React Router

### Création de la page de détail d'un panda

- Créer le composant `components/PandaDetails.tsx` et sa story. Ce composant affiche le nom du panda, ses centres d’intérêt sous forme de badges, son image et un bouton "Fermer". Il expose les propriétés suivantes :

  - `panda` : le panda à afficher (de type `Panda`)
  - `onClose` : une méthode appelée quand on clique sur "Fermer"

- Créer un nouveau hook `usePandaDetails` qui charge le détail d'un panda. Ce hook prend un identifiant de panda en paramètre et utilise React Query pour charger le détail du panda. Écrire les tests unitaires pour ce hook.

- Créer un composant `PandaDetailsView`. Ce composant utilise le composant `PandaDetails` et s'appuie sur le hook `usePandaDetails`. Dans un premier temps on passe un identifiant en dur, par exemple `1`. Pour vérifier que ce composant fonctionne correctement, remplacer le composant `PandasListView` dans le composant `App` par le composant `PandasDetailsView`.

> Pour tous ces composants, hooks et tests, on peut s'appuyer sur ceux déjà faits pour la liste des pandas.

### Utilisation de React Router

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

> Remarque 1 : l'utilisation de React Router modifie la manière de tester le composant `PandaDetailsView` car il doit s'exécuter dans le contexte de React Router. On doit donc simuler l'appel d'une route en adaptant le test sur le modèle suivant :

```
const history = createMemoryHistory({
  initialEntries: ['/pandas/1'],
});
const { getByText, getByRole } = render(
  <ReactQueryWrapper>
    <Router history={history}>
      <Route path="/pandas/:id" component={PandaDetailsView} />
    </Router>
  </ReactQueryWrapper>,
);
```

> Remarque 2 : une fois que ça marche on peut en profiter pour observer le bon fonctionnement du cache React Query.

## Utilisation de React i18next

On va utiliser React i18Next pour gérer l'internationalisation de l'application.

### Traduction des libellés

- Installer React i18Next

```
npm install i18next react-i18next
```

- Créer un fichier `i18n/index.ts` pour configurer React i18Next et importer ce fichier dans `index.ts` pour initialiser l'internationalisation dans l'application. On gère deux langues : anglais et français (français par défaut).

- Utiliser le hook `useTranslation` pour remplacer les libellés en dur dans les différents composants.

### Changement de la langue

- Modifier le composant `Header` pour permettre le changement de la langue.
  - Deux libellés "FR" et "EN" pour passer en français ou en anglais.
  - Le libellé associé à la langue courante est en gras.

## Utilisation de React Hook Form

On va utiliser React Hook Form pour gérer un formulaire de création de pandas.

### Création du composant `TextInput`

On va d'abord créer un composant `TextInput` qui permet de définir un champ de saisie de texte avec son label, sa gestion d'erreur et d'autres comportements.

Ce composant a les propriétés suivantes :

- `label` : libellé du champ
- `name` : nom du champ
- `placeholder`: placeholder pour le champ (optionnel)
- `value` : valeur initiale du champ (optionnel)
- `required` : le champ est-il obligatoire (`false` par défaut)
- `error` : le message d'erreur à afficher sous le champ

Quelques précisions sur le comportement :

- Lorsqu'on clique sur le label, on doit donner le focus au champ
- Lorsque le champ est obligatoire le label doit contenir une petite étoile
- Lorsque le champ est en erreur, il doit avoir une bordure rouge

On s'appuie sur les composants et les styles CSS de Reactstrap pour créer ce composant.

On peut créer des stories pour valider les cas suivants :

- Le champ a un placeholder
- Le champ est obligatoire (propriété `required` à `true`)
- Le champ est en erreur (on a un message d'erreur dans la propriété `error`)
- Le champ a une valeur initiale (on une valeur dans la propriété `value`)

### Création du composant `PandaForm` avec React Hook Form

Installer React Hook Form :

```
npm install react-hook-form
```

Créer un composant `PandaForm` qui s'appuie sur React Hook Form et le composant `TextInput` créé précédemment pour définir un formulaire de création / modification d'un panda.

Le formulaire comprend les éléments suivants :

- Un champ `Nom` pour définir le nom du panda
- Un champ `Centres d'intérêt` pour définir les centres d'intérêt du panda (ce sont des chaînes de caractère séparées par des virgules)
- Un champ `Image` pour définir l'URL de la photo du panda
- Un bouton `Valider` pour soumettre le formulaire
- Un bouton `Annuler` pour annuler la création en cours

Quelques règles de gestion :

- Tous les champs sont obligatoires
- Le champ `Image` doit contenir une URL valide (commençant par `http://` ou `https://`)
- Le bouton `Valider` ne doit être actif que si

On crée deux stories pour tester ce composant :

- L'une avec le formulaire sans valeurs initiales
- L'autre avec le formulaire avec des valeurs initiales

> **Remarque :** Pour lier chaque champ d'entrée à React Hook Form, il faut passer dans le cas de Reactstrap par la propiété `innerRef` plutôt que la propriété `ref`. Il faut donc que le composant `TextInput` fasse le "passe-plat" pour cette propriété `innerRef` définie par le composant `Input` de Reactstrap.

### Création des pages de création et de modification de panda

Ajouter un composant `CreatePandaView` :

- Ce composant définit une page permettant de créer un panda en intégrant le composant `PandaForm`.
- Lors de la création d'un panda dans le formulaire on se contente pour l'instant d'afficher dans la console le panda créé.
- Ce composant est associé à la route `/pandas/new`. Un bouton "Ajouter un panda" dans le composant `PandasListView` permet d'accéder à cette route

Ajouter un deuxième composant `EditPandaView` :

- Ce composant définit une page permettant de modifier un panda en intégrant le composant `PandaForm` et en lui fournissant les valeurs initiales.
- Les informations sur le panda sont chargées de la même manière que depuis la page de visualisation des détails d'un panda
- Lors de la modification d'un panda dans le formulaire on se contente pour l'instant d'afficher dans la console les nouvelles données sur le panda.
- Ce composant est associé à la route `/pandas/:id/edit`. Un bouton "Modifier le panda" dans le composant `PandaDetailsView` permet d'accéder à cette route.

## Mise à jour des données avec React Query

On va utiliser React Query pour gérer les appels de services REST pour la création, la modification et la suppression des pandas.

### Création de panda

- Créer un hook `useCreatePanda` qui permet d'appeler le service REST de création d'un panda :

  - URL : `http://localhost:3004/panda`
  - Method : `POST`
  - Data : `{ name: "Nom du panda", interests: ["hobby1", "hobby2"], image: "http://url.image.fr" }`

- Utiliser ce hook dans le composant `CreatePandaView`.

### Modification d'un panda

- Créer un hook `useUpdatePanda` qui permet d'appeler le service REST de création d'un panda :

  - URL : `http://localhost:3004/panda/:id`
  - Method : `PUT`
  - Data : `{ key: "zFR134", name: "Nom du panda", interests: ["hobby1", "hobby2"], image: "http://url.image.fr" }`

- Utiliser ce hook dans le composant `EditPandaView`.

### Suppression d'un panda

- Créer un hook `useDeletePanda` qui permet d'appeler le service REST de suppression d'un panda :

  - URL : `http://localhost:3004/panda/:id`
  - Method : `DELETE`

- Ajouter un bouton "Supprimer le panda" et utiliser ce hook dans le composant `PandaDetailsView`.

## Utilisation de Context API

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
