# Comment mettre ton site sur GitHub

J'ai déjà préparé ton code sur ton ordinateur (initialisé git, tout ajouté et fait le premier "commit").

Maintenant, **tu doles faire ces 3 petites étapes** :

1.  Va sur [GitHub.com](https://github.com/new) et connecte-toi.
2.  Crée un **nouveau repository** (donne-lui le nom que tu veux, par exemple `love-site`). **Ne coche rien** (pas de README, pas de license).
3.  Une fois créé, GitHub va te montrer une page avec des commandes. Copie et colle les 3 commandes de la section **"…or push an existing repository from the command line"** dans ton terminal ici.

Elles ressemblent à ça (remplace `TON_PSEUDO` et `TON_PROJET` par ce que GitHub te donne) :
```bash
git remote add origin https://github.com/TON_PSEUDO/TON_PROJET.git
git branch -M main
git push -u origin main
```

Dès que tu as collé ça, c'est en ligne ! Ensuite tu pourras connecter Vercel.
