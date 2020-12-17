# TP my-pandas

Gestion d’une liste de pandas

- Liste de pandas
- Détail d’un panda
- Création d’un panda
- Modification d’un panda
- Suppression d’un panda

> Prérequis :
>
> - Node JS installé (>= 8.10)
> - Chrome installé
> - Visual Studio Code installé

## Étapes du TP

[TP 0 – Initialisation d’une application React](TP0.md)

[TP 1 - Création des premiers composants](TP1.md)

[TP 2 - Chargement de données avec Axios et les hooks](TP2.md)

[TP 3 - Chargement de données avec React Query](TP3.md)

[TP 4 - Navigation avec React Router](TP4.md)

[TP 5 - Utilisation de React i18next](TP5.md)

[TP 6 - Utilisation de Redux](TP6.md)

[TP 7 - Utilisation de Formik](TP7.md)

[TP 7 - Utilisation de React Hook Form](TP7.md)

## Chargement des données avec React Query

## Utilisation de Redux

Objectif : afficher des données stockées en dur dans le store Redux plutôt que dans le conteneur

Installation de Redux
• « npm install redux »
• « npm install react-redux »
• « npm install @types/react-redux »

Créer un fichier « redux/types.ts » pour définir le type du state Redux
• Il contient une propriété « pandas » qui est un tableau de pandas

Créer un fichier « redux/store.ts » pour créer un store
• Créer un store en appelant « createStore »
o Par défaut le reducer est une méthode qui prend le state et le retourne tel quel
o Le state initial est la liste des pandas importée du fichier « pandas.ts».
• Exporter le store créé

Dans le fichier « App.tsx » encapsuler le composant « App » dans le provider Redux.

Connecter le composant « PandasListPage » à Redux (et supprimer tout le code d’appel à Axios).
TP2 Bis – Création d’un reducer Redux
Objectif : avoir un state initial vide et le mettre à jour en dispatchant une action Redux.

On va définir une action :
• « type » : « SET_PANDAS »
• « payload » : tableau de pandas
Puis appeler cette action à la création du store en utilisant les pandas exportés par « pandas.ts ».

On va suivre le guide de typage Redux : https://redux.js.org/recipes/usage-with-typescript

• Récupérer sur Gitlab les tests unitaires « redux/pandas/reducers.test.ts » sur Github pour vérifier que le code écrit est OK.
• Créer un répertoire « src/redux/pandas »
• Y définir un fichier « types.ts »
o Un type « PandasState » avec une propriété « data » qui contient les pandas
o Une constante « SET_PANDAS » pour définir l’action
o Un type « SetPandasAction » pour définir l’action (son type et son payload)
o Un type « PandasActionTypes » qui fait une union de tous les types des actions
• Un fichier « actions.ts » qui définit l’action creator « setPandas »
• Un fichier « reducers.ts » avec le initial state et le reducer

Modifier le fichier « store.ts »
• Utiliser « combineReducers » pour obtenir un root reducer avec une clé « pandas »
• Exporter un type « AppState » pour typer l’ensemble du state à partir du root reducer
• Créer le store
• Dispatcher l’action « setPandas » pour initialiser le contenu du state (appel de « store.dispatch »)

Ajouter un spinner dans la « PandasListPage » au cas où la liste des pandas est vide.

Créer un sélecteur pour récupérer la liste des pandas dans « redux/pandas/selectors.ts » => méthode « getPandas() »

Appeler l’action « setPandas » dans la méthode « componentDidMount » de « PandasListPage ».

Intégrer Redux Devtools pour pouvoir observer ce qui se passe.
https://github.com/zalmoxisus/redux-devtools-extension

## Utilisation de Saga

TP3 – Intégrer un appel d’API

Objectifs :
• Créer les actions Redux suivantes request / success / failure
• Un service « loadPandas » basé sur Axios qui retourne une liste de pandas (requête vers « json-server »)
• Utiliser Saga pour charger les pandas : saga « loadPandas » qui s’appuie sur le service et sur Redux

Modifer « src/redux/pandas/types.ts » :
• Structurer le state pour avoir les propriétés :
o « fetching » (boolean)
o « data » (Panda[])
o « error » (Error)
• Définir les actions
o « LOAD_PANDAS_REQUEST »
o « LOAD_PANDAS_SUCCESS » (remplace « SET_PANDAS »)
o « LOAD_PANDAS_FAILURE » (prend une Error dans le payload)
• Enrichir le type « PandasActionTypes »

Modifier « src/redux/pandas/actions.ts » pour définir les action creators
• « loadPandasRequest »
• « loadPandasSuccess »
• « loadPandasFailure »
Récupérer les tests unitaires sur Gitlab pour vérifier que le code écrit est conforme.

Modifier « src/redux/pandas/reducers.ts » pour implémenter les nouvelles actions
• « request » doit passer « fetching » à true, « data » à [] et « error » à undefined
• « sucess » doit passer « fetching » à false, « data » avec la liste des pandas et « error » à undefined
• « failure » doit passer « fetching » à false, « data » à [] et enregistrer l’erreur dans « error »
Récupérer les tests unitaires pour vérifier que le code écrit est conforme.

Modifier « src/redux/pandas/selectors.ts » pour implémenter de nouveaux sélecteurs :
• « isFetching »
• « getError »
Récupérer les tests unitaires pour vérifier que le code écrit est conforme

Créer la couche API avec Axios
• Installer Sinon : « npm install -D sinon @types/sinon »
• Créer un fichier « services/api.ts » avec une méthode « loadPandas » qui fait appel à Axios.
o Retourne une promesse, résolue avec la liste des pandas, ou rejetée avec une erreur.
o Le service doit exposer un objet dont « loadPandas » est une des propriétés (facilite le mock plus tard)
Récupérer les tests unitaires pour vérifier que le code écrit est conforme.

Créer la saga « loadPandas »
• Installer Saga : « npm install redux-saga »
• Créer un fichier « sagas/pandas.ts » et y créer une saga « loadPandas »
Récupérer les tests unitaires pour vérifier que le code écrit est conforme.

Créer la saga « rootSaga » dans « sagas/index.ts »
• Elle doit associer l’action « loadPandasRequest » à la saga « loadPandas »

Modifier « redux/store.ts » pour ajouter le middleware Saga et démarrer la root saga

Modifier « containers/PandasListPage.tsx » pour dispatcher l’action « loadPandasRequest » dans le hook “usePandas”

Corriger la page pour gérer correctement les erreurs avec un bouton « Réessayer » et afficher le message d’erreur en cas d’erreur de chargement.

Tester en coupant le serveur « json-server ».

## Gestion de la navigation avec React Router

Objectif :
• Créer une page de détail d’un panda
• Intégrer React Router

Installer React Router : « npm install react-router-dom @types/react-router-dom »

Dans le type « Panda » ajouter une propriété « image » de type « string »

Créer le composant « components/PandaDetails.tsx » et sa story :
• Propriétés :
o « panda » de type « Panda »
o « onClose »
• Affiche le nom du panda, ses centres d’intérêt sous forme de badges, son image et un bouton « Fermer » qui appelle « onClose »

Ajouter un sélecteur « findPanda » dans « redux/pandas/selectors.ts »
• Il prend un id de type « string » en paramètre et recherche dans la liste des pandas (utiliser la méthode « find »).
Récupérer les tests unitaires pour vérifier que le code écrit est conforme.

Définir une page « containers/PandaDetailsPage.tsx »
• Cette page utilise le composant « PandaDetails » en lui passant le panda et en définissant le comportement de « onPress »
• Dans le « mapStateToProps », appeler le sélecteur « findPanda » en récupérant l’id passé en paramètres
o Pour récupérer l’id il faut utiliser le composant HOC « withRouter » puis la propriété « match.params ».
• Pour le bouton de fermeture utiliser la props « history » fournie par React Router

Définir un composant « Router » dans « App.tsx » avec deux routes :
• « / » pour ouvrir « PandasListPage »
• « /pandas/ :id » pour ouvrir « PandaDetailsPage »

Modifier le composant « PandasListPage » pour naviguer vers le détail du panda
• Utiliser « withRouter » et la props « history »

Problème : lorsqu’on rafraîchit la page de détail, ça ne marche pas ! C’est parce que le store est en mémoire et n’est pas persisté !

On va ajouter Redux Persist !

• Installation : « npm install redux-persist »
• Configuration de Redux Persist dans « redux/store.ts »
o Suivre la doc Redux Persist
• Encapsuler l’application dans un composant PersistGate

## Gestion des formulaires avec Redux Form

Ajouter un écran de création d’un panda.

Installation : « npm install redux-form @types/redux-form »

Dans un premier temps créer le formulaire « components/CreatePandaForm.tsx » juste avec les composants Bootstrap (utiliser les composants « FormGroup », « Label » et « Input »). Et préparer une story.
• Trois champs : « name », « interests » et « image »
• Deux boutons « Valider » et « Annuler »

Dans un deuxième temps on va connecter ce formulaire à Redux Form.

Ajouter le reducer de Redux Form dans « redux/store.ts» avec la clé « form »
• Ajouter cette clé dans les exclusions de Redux Persist

Transformer « CreatePandaForm »
• Créer un composant « ReduxFormInput » générique pour rendre un champ texte en utilisant les composants Bootstrap et en étant relié aux propriétés fournies par le composant « Field » de Redux Form (« input » de type « WrappedFieldInputProps » et « meta » de type « WrappedFieldMetaProps »)
• Utiliser le composant « Field » pour définir les champs du formulaire en utilisant « ReduxFormInput » comme composant
• Encapsuler le tout avec le composant HOC « reduxForm »
• Gérer le « onSubmit » du formulaire

Créer une page « CreatePandaPage » qui inclut le formulaire « CreatePandaForm ». Sur le « onSubmit » se contenter pour l’instant d’afficher les valeurs du formulaire.

Ajouter une route « /createPanda » dans « App.tsx » pointant vers le composant « CreatePandaPage ».

Ajouter un bouton « Ajouter un panda » en bas de la liste des pandas pour ouvrir cette route.

Mettre en place les contrôles de validation sur le formulaire. Emplacement idéal pour le test : Storybook
• Tous les champs sont obligatoires
• Désactiver le bouton de soumission si les contrôles de validation ne sont pas OK
• Afficher un liseré rouge autour des champs en erreur
o Ajouter la classe CSS « is-invalid » si touché et en erreur, « is-valid » si touché mais pas d’erreur
o Ajouter un div avec le style « invalid-feedback » pour afficher le message d’erreur

Prendre en compte la création d’un panda :
• Création d’une saga
• Appel de l’API en mode POST
• Mise à jour du store Redux

Création dans Redux des actions « createPandaRequest », « createPandaSuccess » et « createPandaFailure ». L’action « createPandaSuccess » doit ajouter le panda dans la liste.

Création de la saga « createPanda »

Récupérer les tests unitaires Redux et Saga et vérifier que tout se passe bien.

Brancher la saga sur le bouton de soumission du formulaire
On a besoin de gérer le routage vers la page d’accueil dans la saga ! Comment faire ?
• Installation : « npm install connected-react-router »
• Ajouter Connected React Router au reducer
o L’objet « history » est créé à partir de « createBrowserHistory » de la librairie « history »
• Ajouter le middleware de Connected React Router
• Remplacer le routeur par « ConnectedRouter »
• Appeler « push » depuis la saga pour aller vers la page d’accueil

## Gestion de l'internationalisation
