#!/usr/bin/env python3
"""
AI Debate Orchestrator
Claude Code と Codex CLI による構造化ディベートシステム

使い方:
  python3 debate.py "お題テキスト"
  python3 debate.py               # 対話入力
  python3 debate.py "お題" --rounds 3 --first codex
  python3 debate.py "お題" --claude-model claude-opus-4-7 --codex-effort medium
"""

import subprocess
import argparse
import sys
from pathlib import Path
from datetime import datetime

CLAUDE_EFFORTS = ("low", "medium", "high", "max")
CODEX_EFFORTS  = ("minimal", "low", "medium", "high")
SESSIONS_DIR   = Path(__file__).parent / "sessions"


# ── コマンド構築 ───────────────────────────────────────────
def build_claude_cmd(model: str, effort: str) -> list[str]:
    return [
        "claude", "--print",
        "--model", model,
        "--effort", effort,
        "--allowedTools", "Read,Edit,Write",
        "--disallowedTools", "Bash,WebFetch,WebSearch,computer",
    ]

def build_codex_cmd(model: str, effort: str) -> list[str]:
    return [
        "codex", "exec",
        "--full-auto",
        "--skip-git-repo-check",
        "-m", model,
        "-c", f"model_reasoning_effort={effort}",
    ]


# ── セッションフォルダ ─────────────────────────────────────
def create_session_dir(sessions_root: Path) -> Path:
    name = datetime.now().strftime("%Y%m%d_%H%M%S")
    session_dir = sessions_root / name
    session_dir.mkdir(parents=True, exist_ok=True)
    return session_dir


# ── ファイルI/O ────────────────────────────────────────────
def read_file(path: Path) -> str:
    return path.read_text(encoding="utf-8") if path.exists() else ""

def write_file(path: Path, content: str) -> None:
    path.write_text(content, encoding="utf-8")

def init_session_files(session_dir: Path, topic_text: str) -> None:
    write_file(session_dir / "topic.md", topic_text)
    write_file(session_dir / "claude.md", "")
    write_file(session_dir / "codex.md", "")
    write_file(session_dir / "consensus.md", (
        "# ディベート記録\n\n"
        f"開始日時 : {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n"
        "---\n"
    ))


# ── プロンプト生成 ─────────────────────────────────────────
def build_prompt(
    agent: str,
    topic: str,
    my_notes: str,
    consensus: str,
    round_num: int,
    total_rounds: int,
) -> str:
    opponent       = "Codex" if agent == "Claude" else "Claude"
    my_file        = f"{agent.lower()}.md"
    notes_text     = my_notes.strip()  or "（まだ何も書いていません）"
    consensus_text = consensus.strip() or "（まだ議論は始まっていません）"

    return f"""あなたはAIディベートシステムの参加者「{agent}」です。

# ラウンド {round_num} / {total_rounds}

## お題（読み取り専用・変更禁止）
{topic}

## あなたの非公開メモ（{my_file} の現在の内容）
{notes_text}

## 公開議論の記録（consensus.md の現在の内容）
{consensus_text}

## このターンでやること

**ステップ1 — {my_file} を更新する**
自分の立場・論点・戦略を整理して {my_file} に書いてください。
このファイルは {opponent} には見えません。自由に内部メモとして使ってください。

**ステップ2 — consensus.md に追記する**
以下のフォーマットで consensus.md の末尾に追記してください。
既存の内容は絶対に上書き・削除しないでください。

```
## Round {round_num} - {agent}

[ここに公開する主張を書く。相手の前のラウンドの発言があれば、それへの反論も含めてください]
```

**禁止事項**
- {opponent.lower()}.md を読んだり編集したりしてはいけません
- topic.md を編集してはいけません
- consensus.md の既存内容を削除・変更してはいけません

作業が完了したら「完了しました」と一言だけ答えてください。"""


# ── エージェント呼び出し ───────────────────────────────────
def run_agent(cmd: list[str], prompt: str, session_dir: Path, timeout: int) -> tuple[str, str, int]:
    result = subprocess.run(
        cmd,
        input=prompt,
        cwd=session_dir,
        capture_output=True,
        text=True,
        encoding="utf-8",
        timeout=timeout,
    )
    return result.stdout, result.stderr, result.returncode


# ── メイン ────────────────────────────────────────────────
def main() -> None:
    parser = argparse.ArgumentParser(
        description="Claude Code と Codex CLI によるAIディベートオーケストレーター",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
    )
    parser.add_argument("topic",           nargs="?",                    help="お題テキスト（省略すると対話入力）")
    parser.add_argument("--rounds",        type=int, default=5,          help="議論のラウンド数")
    parser.add_argument("--first",         choices=["claude", "codex"], default="claude", help="先攻エージェント")
    parser.add_argument("--timeout",       type=int, default=300,        help="1エージェントあたりのタイムアウト秒数")
    parser.add_argument("--sessions-dir",  default=str(SESSIONS_DIR),   help="セッション保存先ルートディレクトリ")
    parser.add_argument("--claude-model",  default="claude-sonnet-4-6",  help="Claudeのモデル")
    parser.add_argument("--claude-effort", default="high", choices=CLAUDE_EFFORTS, help="Claudeのエフォートレベル")
    parser.add_argument("--codex-model",   default="gpt-5.5",            help="Codexのモデル")
    parser.add_argument("--codex-effort",  default="high", choices=CODEX_EFFORTS, help="Codexの推論エフォート")
    args = parser.parse_args()

    # お題の取得
    if args.topic:
        topic_text = args.topic.strip()
    else:
        print("お題を入力してください（Enterで確定）: ", end="", flush=True)
        topic_text = input().strip()

    if not topic_text:
        print("[ERROR] お題が空です")
        sys.exit(1)

    # セッションフォルダ作成
    sessions_root = Path(args.sessions_dir)
    session_dir   = create_session_dir(sessions_root)
    init_session_files(session_dir, topic_text)

    claude_cmd = build_claude_cmd(args.claude_model, args.claude_effort)
    codex_cmd  = build_codex_cmd(args.codex_model, args.codex_effort)
    agents     = ["Claude", "Codex"] if args.first == "claude" else ["Codex", "Claude"]

    print("╔══════════════════════════════════════╗")
    print("║        AI Debate Orchestrator        ║")
    print("╚══════════════════════════════════════╝")
    print(f"  セッション      : {session_dir.name}")
    print(f"  お題            : {topic_text[:50]}{'...' if len(topic_text) > 50 else ''}")
    print(f"  ラウンド数      : {args.rounds}")
    print(f"  先攻            : {args.first}")
    print(f"  タイムアウト    : {args.timeout}秒")
    print(f"  Claude          : {args.claude_model}  (effort: {args.claude_effort})")
    print(f"  Codex           : {args.codex_model}  (effort: {args.codex_effort})")
    print()

    for round_num in range(1, args.rounds + 1):
        print(f"── Round {round_num}/{args.rounds} " + "─" * 25)

        for agent in agents:
            print(f"  [{agent}] 考え中...", end="", flush=True)

            my_notes  = read_file(session_dir / f"{agent.lower()}.md")
            consensus = read_file(session_dir / "consensus.md")
            prompt    = build_prompt(agent, topic_text, my_notes, consensus, round_num, args.rounds)
            cmd       = claude_cmd if agent == "Claude" else codex_cmd

            try:
                stdout, stderr, code = run_agent(cmd, prompt, session_dir, args.timeout)

                if code != 0:
                    print(f" [ERROR] 終了コード {code}")
                    if stderr.strip():
                        for line in stderr.strip().splitlines():
                            print(f"         {line}")
                else:
                    print(" 完了")

            except subprocess.TimeoutExpired:
                print(f" [TIMEOUT] {args.timeout}秒を超えました")
            except FileNotFoundError:
                print(f" [ERROR] '{agent.lower()}' コマンドが見つかりません")
                sys.exit(1)

        print()

    print("═" * 42)
    print("  議論終了")
    print(f"  フォルダ     : {session_dir}")
    print(f"  公開記録     : consensus.md")
    print(f"  Claude memo  : claude.md")
    print(f"  Codex memo   : codex.md")
    print("═" * 42)


if __name__ == "__main__":
    main()
