# Google Codelabs Tools

Ce codelab a été créé avec les outils Google Codelabs : https://github.com/googlecodelabs/tools

## Installation des Google Codelabs Tools

L'installation des Google Codelabs Tools nécessite l'installation préalable de Go.

### Sur Mac OS

- Installer Go avec Homebrew :

  ```bash
  brew install golang
  ```

- Ajouter les variables d'environnement suivantes dans le fichier `~/.zshrc` ou l'équivalent selon le bash utilisé :

  ```
  # Go configuration
  export GOPATH=$HOME/go
  export GOROOT="$(brew --prefix golang)/libexec"
  export PATH="$PATH:${GOPATH}/bin:${GOROOT}/bin"
  ```

- Recharger le bash :

  ```bash
  source ~/.zshrc
  ```

- Installer les Google Codelab Tools :

  ```bash
  go install github.com/googlecodelabs/tools/claat@latest
  ```

- Vérifier que l'outil `claat` est bien installé :

  ```bash
  claat help
  ```

### Sur Windows

- Suivre les instructions de la documentation de Go : https://go.dev/doc/install

## Écriture du codelab

Le codelab est généré à partir d'un fichier Markdown respectant le format décrit ici :
https://github.com/googlecodelabs/tools/tree/main/claat/parser/md

## Génération du codelab

- Générer le code source du codelab à partir du fichier Markdown

  ```bash
  cd codelab
  claat export tp-react.md
  ```

> Lors de l'exécution de la commade `claat` il peut arriver que Google demande une authentification. Il faut alors ouvrir dans le navigateur l'URL affichée, se connecter sur son compte Google et copier dans la ligne de commande le code unique généré.

- Lancer le codelab en local

  ```bash
  cd codelab
  claat serve
  ```

- Le codelab est lancé sur `http://localhost:9090`, il n'y a plus qu'à cliquer sur le lien `nestjs/

## Déploiement du codelab sur Github.io

Pour que les fichiers du codelab puissent être déployés sur Github.io, il faut les copier dans le répertoire `docs` et les pousser sur le repository Github.

  ```bash
  cd codelab
  cp -R tp-react/* ../docs
  ```

Le compte Github doit être configuré pour faire pointer Github Pages sur le répertoire `/docs` du repository. Le codelab est alors accessible sur l'adresse : `https://chawax.github.io/tp-react`
