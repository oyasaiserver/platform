# ai-debate

Python CLI orchestrator for structured debates between Claude Code and Codex (OpenAI) CLI.

Each AI responds to the other's arguments across multiple rounds. Sessions are saved as JSON files.

## Requirements

- [`claude` CLI](https://claude.ai/code) — installed and authenticated
- [`codex` CLI](https://github.com/openai/codex) — installed and authenticated

No pip dependencies required.

## Usage

```bash
python debate.py "Your debate topic here"
python debate.py "Topic" --rounds 3 --first codex
python debate.py "Topic" --claude-model claude-opus-4-7 --codex-effort medium
```

## Options

| Option | Default | Description |
|--------|---------|-------------|
| `--rounds N` | 2 | Number of debate rounds |
| `--first claude\|codex` | claude | Which AI speaks first |
| `--claude-model` | claude-sonnet-4-6 | Claude model to use |
| `--codex-effort` | high | Codex reasoning effort |

Sessions are saved under `sessions/<timestamp>/`.

## License

MIT
