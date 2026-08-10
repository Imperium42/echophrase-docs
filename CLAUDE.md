# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Current date context:** It's 2026. When searching for packages, docs, or solutions, search 2025/2026 (never earlier).

## What This Is

Mintlify documentation site for [Echophrase](https://github.com/dylanh724/echophrase), a privacy-first desktop speech-to-text application. This is a git submodule of the echophrase-mono monorepo.

## Deployment

**Mintlify deploys `main`.** Pushing `main` publishes to https://docs.echophrase.com within
a minute or two; there is no workflow file, the Mintlify GitHub App watches the branch and
reports a "Mintlify Deployment" commit check.

> **Verify the check ran.** If that check says `skipped` instead of `success`, the branch you
> pushed is NOT the configured deployment branch and the site is silently going stale. This
> happened for real: the repo's deployment branch was `dev` while everyone committed to
> `main`, so 24 commits of published-intent docs (Custom Models, CLI & MCP, security, Pro
> trial, macOS Permissions, telemetry disclosure) never reached the public site. Fixed
> 2026-08-10 by pointing both Mintlify and the GitHub default branch at `main`.
>
> ```bash
> gh api repos/dylanh724/echophrase-docs/commits/main/check-runs \
>   --jq '.check_runs[] | "\(.name)=\(.conclusion // .status)"'
> ```

`dev` is a dead mirror kept only for history - do not push it.

## Development Commands

```bash
# Preview docs locally (requires Mintlify CLI)
bunx mintlify dev

# Check for broken links and issues (run before pushing)
bunx mintlify broken-links
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
