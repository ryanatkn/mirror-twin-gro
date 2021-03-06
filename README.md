# mirror-twin-gro

> **!!attention!!** Gro no longer supports an alternative frontend build system to SvelteKit,
> so this comparison is no longer valid, and the projects have been archived

> play with image
> [bilateral symmetry](https://en.wikipedia.org/wiki/Symmetry_in_biology#Bilateral_symmetry),
> with a focus on faces π
> [ryanatkn.github.io/mirror-twin-gro](https://ryanatkn.github.io/mirror-twin-gro)

this is a little one page web app with two implementations:

| π’                                                                                     | tech                                                                                  | πΈοΈ                                                                                                       |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [`mirror-twin-sveltekit-vite`](https://github.com/ryanatkn/mirror-twin-sveltekit-vite) | [SvelteKit](https://github.com/sveltejs/kit) β [Vite](https://github.com/vitejs/vite) | [`ryanatkn.github.io/mirror-twin-sveltekit-vite`](https://ryanatkn.github.io/mirror-twin-sveltekit-vite) |
| `mirror-twin-gro`                                                                      | [Gro](https://github.com/feltcoop/gro)                                                | [ `ryanatkn.github.io/mirror-twin-gro`](https://ryanatkn.github.io/mirror-twin-gro)                      |

## credits π’<sub>π’</sub><sub><sub>π’</sub></sub>

both build on [Svelte](https://github.com/sveltejs/svelte) β
[Rollup](https://github.com/rollup/rollup) β
[esbuild](https://github.com/evanw/esbuild)

![example screenshot of Frida Kahlo mirrored](src/images/screenshot_frida_mirrored.jpg)

## todo

- import from a shared library
- refactor some things, code varies in quality
- there's a 1px black line rendering bug I failed many times to fix -
  I think the numbers are correct but it's tricky because DOM -
  I'll probably change to canvas and hopefully avoid the mess
- add some cool features, like better persistence, better image importing, and exporting

## images

- [`src/images/ada_lovelace.png`](/src/images/ada_lovelace.png):
  [commons.wikimedia.org](https://commons.wikimedia.org/wiki/File:Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped.png)
- [`src/images/alan_turing.jpg`](/src/images/alan_turing.jpg):
  [commons.wikimedia.org](<https://commons.wikimedia.org/wiki/File:Code_breaker_-_Alan_Turing%27s_Life_and_Legacy_at_London_Science_Museum_(Ank_Kumar)_03.jpg>)
- [`src/images/frida_kahlo.jpg`](/src/images/frida_kahlo.jpg):
  [commons.wikimedia.org](<https://commons.wikimedia.org/wiki/File:Mostra_di_Frida_Kahlo_al_Mudec_di_Milano_3_maggio_2018_(12).jpg>)

## license π¦

public domain ([The Unlicense](license))

see software & image credits above

made with the help of infinite turtles
