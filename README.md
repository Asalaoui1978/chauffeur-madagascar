# Chauffeur Madagascar – ThreePac

Site de **ThreePac (Patrick)**, chauffeur-guide à Madagascar : mi-vitrine, mi-guide touristique (RN7, côte Ouest, Tsingy).
Fait avec **Astro 6**, sans framework JavaScript, pour un site très rapide et bien référencé.

## Mettre en ligne gratuitement (Cloudflare Pages)

1. Sur dash.cloudflare.com, ouvrez **Workers & Pages**, puis **Create** › **Pages** › **Connect to Git**.
2. Choisissez ce dépôt `chauffeur-madagascar`.
3. Réglages : *Framework preset* : **Astro** · *Build command* : `npm run build` · *Output directory* : `dist`.
4. Cliquez sur **Save and Deploy**. Le site sera en ligne sur `https://chauffeur-madagascar.alexandre-salaoui.workers.dev`, ou une adresse proche si ce nom est pris.
5. Si l'adresse finale est différente, mettez-la à jour dans `astro.config.mjs`, `src/data/site.ts` et `public/robots.txt`.

Chaque modification envoyée sur GitHub remet automatiquement le site à jour.

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Nom du site, WhatsApp, e-mail, langues, véhicule | `src/data/site.ts` |
| Les itinéraires (jour par jour, conseils) | `src/data/itineraires.ts` |
| Les lieux du mini-guide (et leurs thèmes) | `src/data/lieux.ts` |
| Les photos d'illustration et leurs crédits | `src/data/photos.ts` |
| La présentation de ThreePac | `src/pages/threepac.astro` |
| Les tarifs | `src/pages/contact.astro` |
| La FAQ | `src/pages/infos-pratiques.astro` |
| Les couleurs et le style | `src/styles/global.css` |

## Ajouter des photos

1. Déposez les photos dans `public/images/` (ex. `public/images/lieux/isalo.jpg`). Format paysage, 1 600 px de large maximum.
2. Dans `src/data/lieux.ts` ou `src/data/itineraires.ts`, ajoutez `image: '/images/lieux/isalo.jpg'` au lieu ou à l'itinéraire concerné.
3. Pour la photo de ThreePac, remplacez le bloc « Photo de ThreePac à venir » dans `src/pages/index.astro`.

## Travailler en local (facultatif)

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # génère le site dans dist/
```

## SEO déjà en place

- Title et meta description uniques par page, URL canonique, Open Graph
- Données structurées JSON-LD : TravelAgency, Person, TouristTrip, TouristAttraction, FAQPage, BreadcrumbList
- `sitemap-index.xml` automatique et `robots.txt`
- Maillage interne : itinéraires ↔ fiches lieux ↔ demande de devis
- Lien vers le site Belo-sur-Mer

Après la mise en ligne, inscrivez le site dans **Google Search Console** et envoyez le sitemap (`/sitemap-index.xml`).

## Reste à compléter

Cherchez `[À COMPLÉTER]` et `[À VÉRIFIER]` dans le code :
- nom définitif et domaine
- numéro WhatsApp, e-mail, langues, véhicule
- photos (ThreePac, véhicule, lieux)
- origine réelle du surnom, anecdotes personnelles
- tarifs et ce qui est inclus
- vrais avis clients (ne pas en inventer)
- URL exacte du site Belo-sur-Mer
