# Git cheatsheet

## configuration
```
git config --global user.name = "Kutlualp Tazefidan"
git config --global user.email = "email@example.com"
git config --global user.name // for checking your username
````

### generating ssh key
```
ssh-keygen -t ed25519 -C "e@email.com"
eval "$(ssh-agent -s)"
ssh-add */.ssh/id_ed25519 // in ./ssh folder you have your public and private key stored
cat */.ssh/id_ed25519.pub // print your public key and the ssh key to github
```

for testing
```
ssh -T git@github.com // if fingerprint is right; choose yes; get success message

````
### generating personal access token
PAT is required to establish the connection.
settings -> develeper settings -> Personal acess token (classic) -> new Token -> save the token somewhere.

### authentification failed message after push
You cannot use your password; Instead you have to use your PAT.
To automate the authentification:
```
git remote set-url origin https://<githubtoken>@github.com/<username>/<repositoryname>.git
```
githubtoken -> PAT
username -> github username
reponame -> repo name

## commands

```
git init // to initialise a git repo
git status // to see if files are tracked or staged
git add . // adding files to the stage
git commit -m "foo"
git log --oneline // show commit history
git restore . or git restore filename // going back to the previous version 
```

## Push / Pull / Clone
```
git remote add origin git@github.com:GitHubUsername/reponame.git //  use the other git remote command above afther this to automate authentification
git branch -M main 
git push -u origin main

git clone url // use the ssh url
```
## notes

.gitignore to specify some files to be never pushed
