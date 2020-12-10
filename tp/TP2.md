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
