# 2026-05-20 docs reorganization manifest

## Scope

- Source workspace: `/Users/aa/Desktop/Antigravity`
- Destination workspace: `/Users/aa/platform/docs`
- Date boundary used for "today": `2026-05-20 00:00:00` to `2026-05-21 00:00:00` in local time.
- VCS/runtime metadata excluded from project sync: `.git/`, `node_modules/`, `__pycache__/`, `.DS_Store`.

## Project Syncs

These Antigravity `01_Projects` projects had non-metadata files edited on 2026-05-20 and were synced into matching `docs/01_Projects/<project>/` folders.

| Source | Destination | Files in destination after sync |
|---|---:|---:|
| `/Users/aa/Desktop/Antigravity/01_Projects/ai-debate/` | `docs/01_Projects/ai-debate/` | 22 |
| `/Users/aa/Desktop/Antigravity/01_Projects/anamorph-voxel/` | `docs/01_Projects/anamorph-voxel/` | 9 |
| `/Users/aa/Desktop/Antigravity/01_Projects/citygml-converter/` | `docs/01_Projects/citygml-converter/` | 12 |
| `/Users/aa/Desktop/Antigravity/01_Projects/minecraft-analyzer/` | `docs/01_Projects/minecraft-analyzer/` | 43 |
| `/Users/aa/Desktop/Antigravity/01_Projects/minecraft-glass-gradient/` | `docs/01_Projects/minecraft-glass-gradient/` | 27 |
| `/Users/aa/Desktop/Antigravity/01_Projects/plateau-viewer/` | `docs/01_Projects/plateau-viewer/` | 18 |

## Markdown Moves

Loose project Markdown files under `docs/01_Projects/` were moved into per-project `PROJECT.md` files.

| Original | New location |
|---|---|
| `docs/01_Projects/ai-debate.md` | `docs/01_Projects/ai-debate/PROJECT.md` |
| `docs/01_Projects/anamorph-voxel.md` | `docs/01_Projects/anamorph-voxel/PROJECT.md` |
| `docs/01_Projects/antigravity-toolkit.md` | `docs/01_Projects/antigravity-toolkit/PROJECT.md` |
| `docs/01_Projects/auto-transcription.md` | `docs/01_Projects/auto-transcription/PROJECT.md` |
| `docs/01_Projects/build-master.md` | `docs/01_Projects/build-master/PROJECT.md` |
| `docs/01_Projects/citiesskymine.md` | `docs/01_Projects/citiesskymine/PROJECT.md` |
| `docs/01_Projects/citygml-converter.md` | `docs/01_Projects/citygml-converter/PROJECT.md` |
| `docs/01_Projects/craftscripts.md` | `docs/01_Projects/CS/PROJECT.md` |
| `docs/01_Projects/discord-codex-bridge.md` | `docs/01_Projects/discord-codex-bridge/PROJECT.md` |
| `docs/01_Projects/glass-gradient.md` | `docs/01_Projects/minecraft-glass-gradient/PROJECT.md` |
| `docs/01_Projects/minecraft-analyzer.md` | `docs/01_Projects/minecraft-analyzer/PROJECT.md` |
| `docs/01_Projects/oyasai-menu.md` | `docs/01_Projects/oyasai-menu/PROJECT.md` |
| `docs/01_Projects/oyasai-pets.md` | `docs/01_Projects/oyasai-pets/PROJECT.md` |
| `docs/01_Projects/oyasai-wiki.md` | `docs/01_Projects/oyasai-wiki/PROJECT.md` |
| `docs/01_Projects/plateau-viewer.md` | `docs/01_Projects/plateau-viewer/PROJECT.md` |
| `docs/01_Projects/sociallikes-analytics.md` | `docs/01_Projects/sociallikes-analytics/PROJECT.md` |
| `docs/01_Projects/uuid-resolver.md` | `docs/01_Projects/uuid-resolver/PROJECT.md` |

## Other Moves

| Original | New location |
|---|---|
| `docs/oyasai-menu-editors-doc/` | `docs/02_Docs/tools/oyasai-menu-editors-doc/` |
| `archive/citiesskymine-buildmaster-integration-plan-2026-05-06.md` | `docs/05_Archives/platform-docs/citiesskymine-buildmaster-integration-plan-2026-05-06.md` |
| `archive/docs/GUIMAKER_GUIDE-20260516-171621.md` | `docs/05_Archives/platform-docs/GUIMAKER_GUIDE-20260516-171621.md` |
| `archive/docs/UX_REFACTOR_PLAN.md` | `docs/05_Archives/platform-docs/UX_REFACTOR_PLAN.md` |
| `/Users/aa/Desktop/Antigravity/01_Projects/03_Outputs/cache/palette_cache_2L_bg255-255-255_a40.pkl` | `docs/03_Outputs/minecraft-glass-gradient/cache/palette_cache_2L_bg255-255-255_a40.pkl` |

## Verification

- `docs/01_Projects` has no direct loose project `.md` files after the move. The later category reorganization added `docs/01_Projects/_MANIFEST.md`.
- `docs` has no `.DS_Store` files after cleanup.

## 2026-05-21 Classification Move

`docs/01_Projects/` was split into project categories after the user clarified that `docs/` should contain both plugin documentation and non-plugin projects.

| Category | Projects |
|---|---|
| `docs/01_Projects/minecraft-plugins/` | `build-master`, `citiesskymine`, `oyasai-menu`, `oyasai-pets` |
| `docs/01_Projects/tools/` | `anamorph-voxel`, `antigravity-toolkit`, `citygml-converter`, `craftscripts`, `minecraft-analyzer`, `minecraft-glass-gradient`, `plateau-viewer`, `sociallikes-analytics`, `uuid-resolver` |
| `docs/01_Projects/automation/` | `ai-debate`, `auto-transcription`, `discord-codex-bridge` |
| `docs/01_Projects/web/` | `oyasai-wiki` |

`docs/04_Resources/` was added for small reference assets, settings examples, and sample inputs.
