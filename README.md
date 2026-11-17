# Paseo themes: Aura

Three light themes for [Paseo](https://paseo.sh) that share a soft pastel palette built around a single accent color. Each theme is its own plugin.

| Theme          | Plugin directory | Palette                                |
| -------------- | ---------------- | -------------------------------------- |
| Aura Iris        | `aura-iris`      | Periwinkle sidebar, indigo accent      |
| Aura Moss        | `aura-moss`      | Sage sidebar, forest green accent      |
| Aura Lagoon      | `aura-lagoon`    | Pale aqua sidebar, deep teal accent    |

## Install

Requires Paseo 0.16 or newer. Install any or all of them:

```bash
paseo plugin install git:iosx/paseo-themes:aura-iris
paseo plugin install git:iosx/paseo-themes:aura-moss
paseo plugin install git:iosx/paseo-themes:aura-lagoon
```

Then select the theme under Settings, Appearance.

## Development

Every directory is a standalone plugin with its own dependencies:

```bash
cd aura-iris
npm install
npm run typecheck
paseo plugin install .
```

Apply source changes with `paseo plugin reload paseo-theme-aura-iris`.
