# TP 2 - Chargement de données avec Axios et React Query

## Préparation d'un serveur de mock

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

## Utilisation des hooks avec Axios

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
