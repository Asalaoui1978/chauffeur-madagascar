# Plan éditorial du blog – 12 mois (nov. 2026 → oct. 2027)

Objectif : un article utile par mois, publié en 4 langues (français, anglais, italien, espagnol), pour faire monter chauffeurmadagascar.com sur Google.
Chaque article cible une requête que tapent les voyageurs, renvoie vers les pages itinéraires et mini-guide, et se termine par un appel à contacter Tripack.

Règles d'écriture (pour chaque article) :
- 900 à 1 400 mots, à la première personne (Patrick « Tripack », chauffeur-guide depuis 20 ans), ton chaleureux et concret.
- Un titre H1 avec le mot-clé principal, des intertitres H2, des listes courtes.
- Au moins 4 liens internes (itinéraires, fiches du mini-guide, infos pratiques, contact).
- Aucun chiffre inventé : prix, horaires, règles de visa, dates d'ouverture des parcs sont indiqués comme « à vérifier » ou appuyés sur une source récente.
- Fichier : `src/pages/blog/<slug>.md` avec le frontmatter :
  `layout: ../../layouts/Article.astro`, `title`, `description` (≈ 155 caractères), `date: "AAAA-MM-JJ"` (entre guillemets), `photo` (clé de `src/data/photos.ts`), `keywords` (liste).
- Traductions OBLIGATOIRES, même nom de fichier (slug français) dans `src/pages/en/blog/`, `src/pages/it/blog/`, `src/pages/es/blog/`, avec `layout: ../../../layouts/Article.astro`, même `date` et même `photo`. Titre, description et mots-clés traduits et adaptés aux recherches de chaque langue (ex. « private driver Madagascar », « autista Madagascar », « chófer Madagascar »).
- Dans les traductions, les liens internes sont préfixés par la langue : `/en/itineraires/...`, `/it/guide/...`, `/es/contact/`. Les noms de chemin restent en français.
- Les 4 versions doivent être publiées ensemble (les balises hreflang supposent que les 4 existent).
- Pages ville à citer quand c'est pertinent : `/chauffeur/antananarivo/`, `/chauffeur/aeroport-ivato/`, `/chauffeur/nosy-be/`, `/chauffeur/morondava/`, `/chauffeur/tulear/` (préfixées par la langue dans les traductions).

| # | Mois | Statut | Titre | Mot-clé principal | Photo | Liens internes clés |
|---|------|--------|-------|-------------------|-------|---------------------|
| 1 | nov. 2026 | publié | Combien coûte un chauffeur à Madagascar ? Prix et ce qui est inclus | prix chauffeur Madagascar | threepac-4x4 | /contact/, /itineraires/ |
| 2 | nov. 2026 | publié | La RN7 en 10 jours : l'itinéraire idéal de Tana à Tuléar avec chauffeur | RN7 itinéraire 10 jours | isalo | /itineraires/rn7-tana-tulear/ |
| 3 | déc. 2026 | à publier | Quand partir à Madagascar ? Le climat mois par mois, région par région | quand partir à Madagascar | coucher-soleil | /infos-pratiques/, les 4 itinéraires |
| 4 | janv. 2027 | à publier | Tsingy de Bemaraha : comment y aller, quand, et combien de jours prévoir | Tsingy de Bemaraha accès | tsingy-de-bemaraha | /guide/tsingy-de-bemaraha/, /itineraires/cote-ouest-tsingy/ |
| 5 | févr. 2027 | à publier | Louer une voiture seul ou avec chauffeur à Madagascar : que choisir ? | location voiture Madagascar sans chauffeur | piste-rouge | /contact/, /infos-pratiques/ |
| 6 | mars 2027 | à publier | Allée des Baobabs : meilleur moment, conseils photo et accès depuis Morondava | allée des baobabs Morondava | allee-des-baobabs | /guide/allee-des-baobabs/, /guide/morondava/, /guide/kirindy/ |
| 7 | avr. 2027 | à publier | Que voir à Madagascar en 2 semaines : 3 itinéraires testés par un chauffeur | Madagascar 2 semaines itinéraire | sifaka-danseur | les 4 itinéraires |
| 8 | mai 2027 | à publier | Où voir des lémuriens à Madagascar ? Les meilleurs parcs, route par route | voir lémuriens Madagascar | sifaka-et-son-petit | /guide/ranomafana/, /guide/ambalavao/, /guide/kirindy/, /guide/ankarafantsika/ |
| 9 | juin 2027 | à publier | De Tana à Nosy Be par la route : carnet de voyage sur la RN4 et la RN6 | Tana Nosy Be par la route | nosy-be | /itineraires/tana-nosy-be/, /guide/mahajanga/ |
| 10 | juil. 2027 | à publier | Budget voyage Madagascar : combien prévoir par jour en 2027 ? | budget voyage Madagascar | baie-pirogues | /contact/, /blog/prix-chauffeur-madagascar/ |
| 11 | août 2027 | à publier | Canal des Pangalanes et train FCE : le Sud-Est authentique de Madagascar | canal des Pangalanes | canal-des-pangalanes | /itineraires/sud-est-manakara-pangalanes/, /guide/manakara/ |
| 12 | sept. 2027 | à publier | Belo-sur-Mer, le village des goélettes : pourquoi s'y arrêter sur la côte Ouest | Belo-sur-Mer | jardin-bord-de-mer | /guide/belo-sur-mer/, visitbelosurmer.com |
| 13 | oct. 2027 | à publier | Sécurité sur les routes de Madagascar : les conseils d'un chauffeur | sécurité route Madagascar | tableau-de-bord | /infos-pratiques/, /tripack/ |

(13 articles au total : les 2 premiers publiés au lancement, puis 1 par mois pendant 11 mois.)
