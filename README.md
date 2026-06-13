# Wine&Sofi

## Figma Design
Figma: https://www.figma.com/file/LE2wLWska9Go06pDvnGP4y/Wine%26Sofi 

## Architektúra

A weboldal **Gatsby** (v5) keretrendszerrel készült, és statikusan generált (Static Site Generation - SSG).
A tartalom (blogcikkek és egyedi aloldalak) helyi **Markdown (`.md`)** fájlokban található, így nincs szükség külső adatbázisra vagy headless CMS-re (korábban Sanity.io-t használt a projekt, de az teljesen el lett távolítva).

A tárhely és a folyamatos üzemeltetés (CI/CD) a **Cloudflare Pages** rendszerén fut. Minden GitHub-ra pusholt változtatás automatikusan buildelődik és élesedik.

## Projekt Felépítés

- `src/content/blog/`: Itt találhatóak a blogbejegyzések Markdown fájljai (magyar és angol nyelven külön, pl. `hu-*.md` és `en-*.md`).
- `src/content/pages/`: Itt találhatóak a statikus aloldalak Markdown fájljai (pl. Képzések, Szaktanácsadás).
- `static/images/blog/`: A blogbejegyzésekben és aloldalakon használt képek.
- `src/pages/`: A főoldalak és a termékeket bemutató oldalak.
- `src/templates/`: A Gatsby által dinamikusan generált oldalak sablonjai (`post.js`, `page.js`, `blog-listing.js`).

## Fejlesztés Helyben

1. Függőségek telepítése:
   ```bash
   npm install
   ```

2. Fejlesztői szerver indítása:
   ```bash
   npm run develop
   ```

3. Statikus build generálása és helyi tesztelése:
   ```bash
   npm run clean
   npm run build
   npm run serve
   ```
