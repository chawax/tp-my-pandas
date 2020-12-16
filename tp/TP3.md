# TP 3 - Chargement de données avec React Query

On va utiliser React Query pour faciliter la gestion des requêtes asynchrones et ajouter quelques fonctionnalités bien pratiques à notre applicaiton.

## Utilisation de `useQuery`

- Installer React Query

```
npm install react-query
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

## Utilisation de la fonctionnalité `refetch` de React Query

Dans un deuxième temps on va utiliser la fonctionnalité `refetch` de React Query pour réeen cas d'erreur lors de la requête.

- Créer un nouveau composant `ErrorAndRetry` qui affiche un message d'erreur et un bouton Réessayer. Il expose deux propriétés :

  - `message` : un message d'erreur à afficher
  - `onRetry` : une méthode à appeler lorsqu'on clique sur le bouton `Réessayer`

- Utiliser ce composant dans le composant `PandasListView` et le raccrocher à la fonctionnalité `refetch` de React Query.

- Pour tester ce comportement, couper le serveur json-server, essayer l'application, redémarrer le serveur puis cliquer sur Réessayer.
