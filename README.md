# Énoncé du projet de Web2 2026-2027

Vous devez réaliser un projet web pour un **vrai client**. Celui-ci a exposé ses besoins le **15 octobre 2026** ; vous avez dû en prendre note. Des **documents** fournis par le client sont disponibles dans le dossier [`Documents/`](Documents/). Assurez-vous de toujours respecter ce qui a été défini avec votre client.

Le client n’étant pas toujours disponible, **le professeur prend la place du client par défaut** : en son absence, c’est lui qui tranche les décisions fonctionnelles et valide les choix.

Nous attirons votre attention que vous devez développer votre logiciel de manière itérative (un ensemble de fonctionnalités/couches à la fois). Commencez par ce que le client estime essentiel, puis continuez avec ce qu’il juge important et finalement ce qui est accessoire.

### Documents fournis par le client

Dans le dossier [`Documents/`](Documents/), vous trouverez :

- **`Projet daccueil - Version finale_compressed.pdf`** — document de cadrage du client (« Projet d’accueil », version finale). À lire en complément de vos notes du 15 octobre.
- **`Photos 1/`** — lot de photos fournies par le client (fichiers `DSC*.jpg`), utilisables pour illustrer et contextualiser le lieu / le projet.
- **`Photos 2/`** — second lot de photos, dont certaines déjà nommées (par ex. façade, jardin, cour de récréation, sas, préau), également destinées au contenu du site.

## 1. **Structure et Style**

Votre application web doit respecter les spécifications suivantes :

- **CSS & Responsive Design (mobile first) :** L'interface doit être conçue **mobile first** : partez du smartphone, puis enrichissez progressivement pour les écrans plus larges (tablette, desktop). L'application reste responsive et s'adapte à différents écrans. Vous pouvez utiliser des frameworks CSS comme Bootstrap, MaterialUI ou TailwindCSS pour faciliter le développement.
- **Scripts :** Des scripts JavaScript gèrent les fonctionnalités de filtrage, de manipulation de données et les actions utilisateur. Le client web est donc un client lourd qui communique avec l'API pour récupérer et mettre à jour les données.

## 2. **Contraintes techniques**

- **Base de données :** Toutes les informations sont stockées dans une base de données SQLite via une API sur mesure. Vous ne pouvez pas utiliser d'ORM. Les données doivent être cohérentes et bien structurées pour permettre une gestion efficace des données (voir votre cours de base de données). Vous ne devez avoir qu'une seule base de données pour l'ensemble de l'application (mais vous aurez évidemment plusieurs tables). Vous pouvez utiliser une autre base de données (comme PostgreSQL, MySQL, MariaDB ou MongoDB) si vous le souhaitez, mais cela n'est pas obligatoire. Votre fichier de configuration doit permettre de définir facilement le type de base de données utilisée et les paramètres de connexion si nécessaire.
- **Données JSON :** Les données sont échangées en format JSON entre le client web et le serveur. Les requêtes HTTP doivent être correctement gérées et les réponses doivent être bien formatées. Structurez vos données de manière logique et cohérente pour faciliter la manipulation côté client. Ne renvoyez pas de données inutiles ou sensibles.
- **API :** L'application web communique avec une API pour récupérer et mettre à jour les données. Cette API sera écrite en NodeJS et Express. L'API doit être bien documentée et respecter les normes RESTful (comme montré dans le syllabus).
- **Unité de serveur :** Vous ne devez développer qu'un seul serveur, qui servira à la fois l'API et les fichiers statiques (HTML, CSS, JS). Vous devez utiliser des routers et des middlewares pour gérer les routes et les requêtes.
- **Qualité du code** : Le code du client et du serveur doit être bien structuré, commenté, et respecter les bonnes pratiques de développement web. Les noms de variables, fonctions, et classes doivent être explicites et cohérents.
- **Sécurité :** Les mots de passe doivent être stockés de manière sécurisée (hashés). Votre application doit être protégée au moins contre les attaques XSS et l'injection SQL.
- **Connexion et rôles :** Les utilisateurs doivent être authentifiés pour accéder aux pages protégées. Les sessions doivent être gérées de manière sécurisée. Vous devez utiliser des JWT pour gérer les sessions. L’application doit prévoir des **rôles différents** (droits et accès adaptés selon le rôle).
- **Compréhension des besoins :** Votre application doit respecter les fonctionnalités demandées par votre client (notes du 15 octobre, documents fournis, validations ultérieures). Toute fonctionnalité manquante ou non conforme aux spécifications pourra entraîner des pénalités.
- **Compréhension du code :** Vous devez être capable d'expliquer votre code et de justifier vos choix de conception. Vous pouvez être interrogé sur les technologies utilisées, les librairies, les méthodes de développement, etc.
- **TypeScript et Sass :** Vous pouvez utiliser TypeScript pour améliorer la qualité de votre code et éviter les erreurs courantes. Cependant, cela n'est pas obligatoire. Idem pour Sass, qui peut vous aider à structurer votre CSS de manière plus efficace.
- **Gestion des erreurs :** Votre application doit gérer les erreurs de manière élégante et informative pour l'utilisateur. Les messages d'erreur doivent être clairs et précis, sans révéler d'informations sensibles. Les erreurs doivent obligatoirement être gérées (par exemple, en laissant des pages blanches ou des messages d'erreur uniquement dans la console est inacceptable).
- **Git :** Vous devez utiliser Git pour gérer votre code source. Chaque membre du groupe doit contribuer au projet et les commits doivent être clairs et bien documentés. Vous devez utiliser des branches pour travailler sur des fonctionnalités spécifiques et fusionner vos modifications de manière cohérente. S'il y a un doute sur la quantité de travail fourni par chaque membre du groupe, les commits et les branches seront examinés pour évaluer la contribution de chacun. Veillez donc à bien committer avec vos propres identifiants. **Ne supprimez aucune branche ou commit avant la fin du projet afin que le professeur puisse vérifier votre travail.**
- **package.json :** Vous devez fournir un fichier `package.json` avec les dépendances nécessaires pour exécuter votre application. Vous devez également fournir un script `start` pour lancer votre application et un script `init` pour initialiser la base de données avec des données fictives des utilisateurs.
- **README.md :** Vous devez fournir un fichier `README.md` avec des instructions claires pour installer et exécuter votre application. Vous y mettrez également le lien vers la vidéo de démonstration de votre application (voir les modalités de remises). 

## 3. Évaluations

### Recueil des besoins

Vous devez vous assurer que vous avez bien compris les besoins du client (notes du 15 octobre, documents du dossier [`Documents/`](Documents/), et décisions prises ensuite — le professeur faisant office de client par défaut). Toute fonctionnalité manquante ou non conforme aux spécifications pourra entraîner des pénalités. Vous devez également être capable d'expliquer votre code et de justifier vos choix de conception.

Pour cela, vous devrez établir une maquette complète de votre application web avant de commencer le développement. Cette maquette doit être validée par le client (ou par le professeur en son absence) avant de commencer le développement.

À la fin du projet, mettez en avant dans votre README.md les fonctionnalités qui ont été implémentées et celles qui ne l'ont pas été, ainsi que les raisons (manque de temps, difficulté technique, etc.).

### Point de contrôle — connexion et rôles (semaine du 23 novembre 2026)

Pour cette semaine, vous devez au minimum disposer d’une **connexion** fonctionnelle (JWT, gestion sécurisée des sessions, hashage des mots de passe, etc.) avec des **rôles différents**. Le professeur vérifiera cet avancement durant la **semaine du 23 novembre 2026**.

### Évaluation du site web final (/100)

Vous serez jugés sur la quantité et la qualité de votre projet. La quantité porte sur les fonctionnalités implémentées et conformes aux spécifications du client, tandis que la qualité concerne la propreté du code, la sécurité, la clarté et le respect des bonnes pratiques.

#### Évaluation de la quantité


| **Critère**                                         | **Description**                                                                                     | **Points** |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------- |
| **1. Fonctionnalités et complétion**                | Respect des besoins du client (notes, documents, validations).                                      | **/40**    |
| **2. Qualité du design**                            | Approche mobile first, interface responsive, claire et adaptée au contexte.                         | **/10**    |
| **3. Utilisation de l'API et gestion de données**   |                                                                                                     | **/40**    |
| - **Appels API bien structurés**                    | Utilisation efficace de l’API pour les requêtes, bonnes pratiques REST respectées (les bonnes méthodes pour les bonnes routes, de bons chemins, ...).                  | 25         |
| - **Gestion de la base de données (SQLite)**        | Intégration correcte et performante, sauvegarde et récupération des données.                        | 15         |
| **4. Originalité et effort additionnel (bonus)**    |                                                                                                     | **/+10**   |
| - **Fonctionnalités supplémentaires ou créativité** | Ajout de fonctionnalités pertinentes ou amélioration notable de l'interface.                        | +10        |
| **Total**                                           |                                                                                                     | **/100**   |


#### Évaluation de la qualité

| **Critère**                        | **Description**                                                                                      | **Points** |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------- |
| **Structure du code**            | Organisation logique, séparation des préoccupations, utilisation appropriée de modules et fonctions. | 25         |
| **Clarté et documentation**      | Code clair, bien commenté, avec des noms de variables et fonctions explicites.                       | 25         |
| **Respect des bonnes pratiques** | Conformité aux bonnes pratiques de développement web (HTML sémantique, CSS organisé, JS efficace).   | 25         |
| **Sécurité**                     | Gestion des sessions (JWT), rôles, protection contre XSS et injection SQL, hashage des mots de passe. | 25         |
| **Total**                          |                                                                                                      | **/100**   |

#### **Points finaux de l'évaluation du site web final**

La qualité pondère la quantité. Un projet complet mais mal codé peut avoir une note inférieure à un projet partiel mais bien codé. Par exemple, si vous codez 50 % des fonctionnalités et que la qualité de votre code est parfaite, vous obtiendrez 50 % de la note maximale. 

Mais si vous implémentez toutes les fonctionnalités mais que la qualité du code est médiocre, la note finale sera inférieure à 50 %. Si vous codez 50% des fonctionnalités et que la qualité de votre code est de 50%, vous obtiendrez une note autour de 25%.

### **Critères de bonus et de pénalités**

- **Bonus (jusqu'à 10 points)** : Améliorations significatives (par exemple, l'ajout d’une fonctionnalité innovante ou une optimisation notable). Il faut cependant que le projet de base soit complet.
- **Pénalités** :
  - **Retard** : Si le code n'est pas rendu (pour quelque raison que ce soit) pour la date définie, vous perdrez une partie des points. Aucune dérogation ne sera prise en considération, puisque vous avez tous les jours avant cette date limite pour déposer au moins une version de votre code.

## 4. Modalités du Q1

- Le projet doit être fait en groupe de 4, ou exceptionnellement seul.
- Tous les membres du groupe doivent participer activement au code du projet (les contributions sur github doivent être visibles et seront analysées).
- **Calendrier :**
  - Point de contrôle (connexion JWT et rôles) : **semaine du 23 novembre 2026**
  - Version finale : **21 décembre 2026**
- Le projet doit être remis sur votre git assigné, sur la branche principale du git (pas une autre branche). Le professeur prendra la dernière version disponible sur cette branche à la date de remise.
- Pour la remise finale, vous réaliserez une vidéo (une par groupe) qui explique explicitement ce qui a été fait dans le projet et ce qui n'a pas été fait. Cette vidéo doit montrer une démonstration complète de votre application. Vous devez également expliquer les grandes lignes de votre code et les choix de conception que vous avez faits. La vidéo doit être déposée sur un service de partage de vidéos (YouTube, OneDrive, etc.). Le lien vers la vidéo doit être inclus dans le README.md de votre projet (faites attention à ce que le lien soit accessible sans connexion ou avec une connexion HELHa).
- **Examen de Q1 :** oral **par groupe**. Chaque membre du groupe doit être capable d'expliquer l'ensemble du code du projet, la documentation, etc. Chaque membre devra aussi répondre à des questions sur les technologies utilisées, les choix que vous avez faits, les difficultés rencontrées, etc. Vous devez également être capable de montrer votre application en fonctionnement.
- Pour rappel, si vous n’obtenez pas au moins 8/20 à l'examen, la note est dite absorbante et devient la note de l'UE, indépendamment de la note obtenue pour le projet en tant que tel.

## 5. Modalités du Q3

- **Date butoir : le 15 août 2027 à 18h maximum.**
- Si vous n'avez pas réussi à obtenir la moyenne à l'examen Q1, vous devrez remettre une version améliorée de votre projet.
- Si vous ne souhaitez **pas modifier le code** de votre projet, vous le pouvez : vous obtiendrez alors **la même note de projet** que celle reçue au Q1 (si une note vous a été attribuée).
- Vous pouvez continuer à travailler en équipe ou seul pour améliorer votre projet. Vous devrez remettre votre projet sur GitHub pour la date butoir indiquée ci-dessus. Si vous n'avez pas de repository GitHub, je dois vous le créer pour vous (merci alors de le demander pour **le 7 août 2027** au plus tard).
- Si vous aviez travaillé en **groupe** au Q1, que **plus d'un membre** doit repasser l'examen en Q3 et que vous ne souhaitez **plus travailler ensemble**, vous devez **absolument** me demander la création d'un **nouveau repository** (pour chaque nouvelle composition d'équipe ou pour un travail individuel).
- L'énoncé de projet reste le même (fonctionnalités et livrables). 
- Vous devrez également remettre une documentation textuelle expliquant les améliorations que vous avez apportées à votre projet depuis le Q1 (le cas échéant).
- Vous devrez remettre **une seule vidéo** de présentation de votre projet (une vidéo par groupe, pas une vidéo par membre). Cette vidéo doit expliquer rapidement les fonctionnalités mises en place, l'architecture de votre code et montrer l'application en fonctionnement. **Si vous avez continué un projet remis en Q1, la vidéo doit surtout mettre en avant les modifications et améliorations apportées depuis le Q1** (en complément d'un bref rappel du contexte). Vous mettrez le lien de la vidéo dans le fichier `README.md` de votre projet.
- Tout ce qui précède est obligatoire pour réussir l'examen Q3 et doit être rendu pour **le 15 août 2027 à 18h maximum**.
- **Examen de Q3 :** oral **par groupe**. Chaque membre du groupe doit être capable d'expliquer l'ensemble du code du projet, la documentation, etc. Chaque membre devra aussi répondre à des questions sur les technologies utilisées, les choix que vous avez faits, les difficultés rencontrées, etc. Vous devez également être capable de montrer votre application en fonctionnement.
- Pour rappel et tout comme au Q1, si vous n'obtenez pas au moins 8/20 à l'examen, la note est dite absorbante et devient la note de l'UE, indépendamment de la note obtenue pour le projet en tant que tel.
