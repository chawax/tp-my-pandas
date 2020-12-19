# TP 6 - Gestion des formulaires avec React Hook Form

On va utiliser React Hook Form pour gérer un formulaire de création de pandas.

## Création du composant `TextInput`

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

## Création du composant `PandaForm` avec React Hook Form

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

## Création des pages de création et de modification de panda

Ajouter un composant `CreatePandaView` :

- Ce composant définit une page permettant de créer un panda en intégrant le composant `PandaForm`.
- Lors de la création d'un panda dans le formulaire on se contente pour l'instant d'afficher dans la console le panda créé.
- Ce composant est associé à la route `/pandas/new`. Un bouton "Ajouter un panda" dans le composant `PandasListView` permet d'accéder à cette route

Ajouter un deuxième composant `EditPandaView` :

- Ce composant définit une page permettant de modifier un panda en intégrant le composant `PandaForm` et en lui fournissant les valeurs initiales.
- Les informations sur le panda sont chargées de la même manière que depuis la page de visualisation des détails d'un panda
- Lors de la modification d'un panda dans le formulaire on se contente pour l'instant d'afficher dans la console les nouvelles données sur le panda.
- Ce composant est associé à la route `/pandas/:id/edit`. Un bouton "Modifier le panda" dans le composant `PandaDetailsView` permet d'accéder à cette route.
