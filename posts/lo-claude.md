---
title: Lo-Claude, giving Claude Code superpowers
date: 2026-02-10
category: engineering
---

I've been using Claude Code daily for months now, and at some point I realized I had accumulated a pile of custom integrations, sound effects, and quality-of-life tweaks that made my workflow genuinely enjoyable.

So I packaged it all up and open-sourced it. Meet [lo-claude](https://github.com/jvidalv/lo-claude).

### What is it?

Lo-claude is a modular extension platform for Claude Code. It uses MCP (Model Context Protocol) to give Claude access to services it can't reach on its own — your Gmail inbox, Google Drive, AWS S3, even a Spanish forum called Mediavida.

Each integration is a self-contained module. You enable only what you need.

### Why?

The honest answer is that I got tired of switching tabs.

I was constantly jumping between Claude Code and Gmail to check emails, between Claude and the AWS console to manage files, between Claude and Drive to organize receipt photos. Each context switch is small, but they add up to a surprisingly annoying amount of friction.

With lo-claude, I just ask Claude to do it. "Show me yesterday's emails." "Upload this to S3." "Summarize that forum thread." Done, no tab switching.

### The fun part

Beyond the practical modules, lo-claude ships with a setup wizard that lets you customize your Claude Code experience in ways I didn't expect to enjoy this much:

**OSRS sound effects** — 41 Old School RuneScape sounds mapped to Claude Code events. Task completes? Level up sound. Error? The "wrong" buzzer from the game. Subagent finishes? Teleport sound. It's absurd and I love it.

**Custom spinner verbs** — Instead of the default "Thinking..." you get things like _"Harvesting Garnatxa grapes"_, _"Chasing a Goblin Pringao"_, or _"Haggling at the Konomat"_. These are themed around my hometown in Terra Alta and a tabletop RPG I'm building called [Berrus](https://berrus.app). There's also a developer humor pack if Catalan fantasy isn't your thing.

**Permission presets** — Pre-approve common CLI commands so Claude doesn't ask you every single time if it can run `git status`. Small thing, big quality of life improvement.

### The technical bits

The whole thing is TypeScript, strict mode, no `any` types. Each module follows a simple interface: name, tools, required scopes, optional setup function. Adding a new module is mostly copy-paste and filling in the blanks.

The setup wizard uses zero dependencies beyond Node.js built-ins — just `readline` for the interactive prompts. It deep-merges into your existing `~/.claude/settings.json` so it won't blow away your current configuration, and it backs up your settings before touching anything.

### Fin

If you use Claude Code and want to make the experience a bit more personal (or just want RuneScape sounds playing while you code), give [lo-claude](https://github.com/jvidalv/lo-claude) a try.

Three commands and you're done:

```
git clone https://github.com/jvidalv/lo-claude.git
npm install
npm run setup
```
