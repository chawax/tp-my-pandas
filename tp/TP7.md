# TP7 - Mise à jour des données avec React Query

On va utiliser React Query pour gérer les appels de services REST pour la création, la modification et la suppression des pandas.

## Création de panda

- Créer un hook `useCreatePanda` qui permet d'appeler le service REST de création d'un panda :

  - URL : `http://localhost:3004/panda`
  - Method : `POST`
  - Data : `{ name: "Nom du panda", interests: ["hobby1", "hobby2"], image: "http://url.image.fr" }`

- Utiliser ce hook dans le composant `CreatePandaView`.

## Modification d'un panda

- Créer un hook `useUpdatePanda` qui permet d'appeler le service REST de création d'un panda :

  - URL : `http://localhost:3004/panda/:id`
  - Method : `PUT`
  - Data : `{ key: "zFR134", name: "Nom du panda", interests: ["hobby1", "hobby2"], image: "http://url.image.fr" }`

- Utiliser ce hook dans le composant `EditPandaView`.

## Suppression d'un panda

- Créer un hook `useDeletePanda` qui permet d'appeler le service REST de suppression d'un panda :

  - URL : `http://localhost:3004/panda/:id`
  - Method : `DELETE`

- Ajouter un bouton "Supprimer le panda" et utiliser ce hook dans le composant `PandaDetailsView`.
