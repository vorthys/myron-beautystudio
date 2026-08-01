# MY R.O.N. beauty studio — web

Jednostránkový web pro salon krásy **MY R.O.N. beauty studio**, Skvrňanská 18, Plzeň.
Nehty, vlasy, řasy, obočí a make-up. Otevřeno Po–Ne 8:00–20:00.

**Živá verze:** https://vorthys.github.io/myron-beautystudio/

---

## Design

Paleta vychází z loga salonu — černý lak a šampaňský kov monogramu:

| token | hex | kde |
|---|---|---|
| `--lacquer` | `#08080a` | pozadí |
| `--panel` | `#131316` | karty |
| `--champagne` | `#dcd0b2` | akcent, ceny |
| `--champagne-deep` | `#8b7850` | nadpisky, linky |
| `--champagne-lit` | `#f7f0de` | světla v gradientu |
| `--porcelain` | `#e8e5dd` | text |

Písma: **Prata** (nadpisy, Cyrilice i latinka s diakritikou) + **Jost** (text, UI, ceny).

Jediná ozdoba na celé stránce je **šestiúhelníkové svítidlo** v hero sekci — stejný tvar
jako kruhová světla nad křesly v salonu. Vykreslí se jednou při načtení a pak už se
nehýbe. Všechno ostatní jsou vlasové linky, prázdný prostor a fotky.

Ceník je postavený na skutečné struktuře salonu: každá služba má cenu pro **Mistra**
a pro **Top mistra**.

Layout je psaný mobile-first — základ je telefon, media queries jen rozšiřují.
Sekce Služby je čistě typografická, takže veškeré fotky nese galerie a na telefonu
není potřeba proscrollovat pět obrázků, než se člověk dostane k cenám.

## Obsah

Všechna data pocházejí z veřejných zdrojů salonu:

- fotky a texty — [Instagram @myron.beautystudio_plzen](https://www.instagram.com/myron.beautystudio_plzen/)
- logo — profilová fotka na Instagramu
- ceny nehtových služeb, tým, hodnocení a počty recenzí — rezervační systém [n803349.alteg.io](https://n803349.alteg.io)

## Jazyky

Čeština (výchozí) a ukrajinština. Přepínač **CZ / UA** v hlavičce, volba se ukládá do
`localStorage`. Česká verze je přímo v HTML, ukrajinská se aplikuje přes slovník
v `assets/js/main.js` — bez JS se stránka zobrazí česky a plně funkční.

Názvy služeb v ceníku zůstávají česky v obou jazycích, protože přesně takto jsou
uvedené v rezervačním systému.

## Struktura

```
index.html
assets/
  css/style.css
  js/main.js
  favicon.svg
  img/          fotky z Instagramu + logo
  img/team/     fotky mistrů z rezervačního systému
```

Žádný build. Statické soubory, jediná externí závislost je Google Fonts.

## Spuštění lokálně

```bash
python -m http.server 5173
```

Pak otevřít http://localhost:5173

## Co ještě doplnit

- **telefon** — na Instagramu ani v rezervačním systému veřejně není, kontakt vede
  přes online rezervaci a Instagram
- **IČO a fakturační údaje** do patičky
- **přesné PSČ** k adrese
- **ceny za vlasy, řasy, obočí a make-up** — v ceníku jsou zatím jen odkazy na
  rezervaci, protože veřejně dostupné jsou pouze ceny nehtových služeb
- **akce −20 %** na vybrané nehtové služby je v rezervačním systému aktivní, ale
  podmínky nejsou veřejné, takže na webu není uvedená
