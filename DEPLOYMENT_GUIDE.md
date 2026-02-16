# Guide de Déploiement Gratuit (24h/24)

Pour héberger ton site gratuitement et facilement, le meilleur choix est **Vercel** (ou **Netlify**). C'est ce que la plupart des développeurs utilisent. C'est gratuit, ultra rapide, et ça reste en ligne tout le temps.

## Étape 1 : Mettre ton code sur GitHub

Avant tout, tu dois avoir ton code sur GitHub.

1.  Crée un compte sur [github.com](https://github.com/).
2.  Télécharge [GitHub Desktop](https://desktop.github.com/) (plus simple) ou utilise le terminal.
3.  Crée un nouveau "Repository" (Dépôt) sur GitHub.
4.  Envoie (Push) ton dossier `love-site` dessus.

_Si tu veux, je peux t'aider à faire ça avec des commandes terminal._

## Étape 2 : Connecter à Vercel (Recommandé)

1.  Va sur [vercel.com](https://vercel.com/) et crée un compte (connecte-toi avec GitHub, c'est le plus simple).
2.  Clique sur **"Add New..."** -> **"Project"**.
3.  Tu verras ton projet `love-site` apparaître (car lié à ton GitHub). Clique sur **"Import"**.
4.  **Important** : Dans "Build and Output Settings", vérifie que c'est bien détecté comme "Vite".
    - _Build Command_: `npm run build`
    - _Output Directory_: `dist`
    - (Normalement Vercel le remplit tout seul).
5.  Clique sur **"Deploy"**.

⏳ Attends 1 minute... et pouf ! Tu as un lien du style `love-site-f8z9.vercel.app`.

## Étape 3 : C'est fini !

Tu peux envoyer ce lien à ta copine. Il marchera tout le temps, sur téléphone et ordi.

---

### Alternative : Netlify

C'est pareil que Vercel.

1.  Va sur [netlify.com](https://www.netlify.com/).
2.  Connecte-toi avec GitHub.
3.  "Add new site" -> "Import an existing project".
4.  Choisis ton repo GitHub.
5.  Deploy.

### Pourquoi pas un hébergeur classique (OVH, Hostinger) ?

- C'est payant (souvent).
- C'est plus compliqué à configurer (FTP, etc.).
- Vercel/Netlify sont faits pour React/Vite.

Dis-moi si tu as besoin d'aide pour mettre ça sur GitHub !
