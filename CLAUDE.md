# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Mintlify documentation site for [Echophrase](https://github.com/dylanh724/echophrase), a privacy-first desktop speech-to-text application. This is a git submodule of the echophrase-mono monorepo.

## Development Commands

```bash
# Preview docs locally (requires Mintlify CLI)
npx mintlify dev

# Check for broken links and issues
npx mintlify broken-links
```

## Structure

- `docs.json` - Mintlify configuration (theme, navigation, colors, socials)
- `*.mdx` - Documentation pages using MDX (Markdown + JSX components)
- Navigation structure defined in `docs.json` under `navigation.tabs[].groups[].pages`

## Content Organization

| Directory | Purpose |
|-----------|---------|
| Root (`/`) | Getting started pages (introduction, quickstart, download) |
| `features/` | Feature documentation (transcription, hotkeys, modes) |
| `config/` | Configuration guides (settings, models, GPU) |
| `troubleshooting/` | Problem-solving guides (common issues, GPU, audio) |

## Mintlify Components

MDX files use Mintlify components like:
- `<Card>` / `<CardGroup>` - Feature cards with icons
- `<Note>` / `<Warning>` / `<Tip>` - Callout blocks
- Standard markdown tables, code blocks, and links

Reference: https://mintlify.com/docs/content/components

## Adding New Pages

1. Create `.mdx` file with frontmatter (`title`, `description`)
2. Add page path to `docs.json` navigation under appropriate group
