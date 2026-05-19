---
name: refactor-delegate
description: >
  Use when the user wants to refactor a large codebase with minimal Claude intervention.
  Triggers: "大規模リファクタ", "リファクタリングを委譲", "GeminiとCodexでリファクタ",
  "自動リファクタパイプライン", or invokes /refactor-delegate.
  Claude orchestrates Gemini for full-context analysis and PatchTaskSet planning,
  then Codex for autonomous implementation and self-verification, intervening only
  at explicit review/failure gates.
version: 1.1.0
---

# refactor-delegate — 最小介在リファクタリングパイプライン

ユーザーから大規模なリファクタリング要求を受けたとき、Claude はオーケストレーターとして最小限だけ介在する。

- Gemini: 広いコンテキストを読み、依存関係つきの `PatchTaskSet` を作る
- Codex: 各タスクを局所的に実装し、自己検証する
- Claude: 5つの Gate だけで判断・調停する

---

## PatchTaskSet スキーマ

Gemini が出力し、Codex ランナーが消費する JSON 中間表現。

```json
{
  "task_id": "string",
  "goal": "string",
  "files": [
    {
      "path": "string",
      "role": "string",
      "allowed_ops": ["read", "edit", "create", "delete", "move"]
    }
  ],
  "deps": ["task_id"],
  "risk": "low|med|high",
  "invariants": ["string"],
  "verification_level": "syntax|module|integration",
  "acceptance": ["string"],
  "evidence": [
    {
      "path": "string",
      "line": 0,
      "claim": "string"
    }
  ],
  "rollback": "string",
  "review_gate": "before_patch|after_patch|none"
}
```

`tasks.json` は初回のみ JSON 配列で生成される。ランナーはこれを読み込み、以降の状態管理は排他制御付きの追記型イベントログ（`tasks.jsonl`）で行う。ランナー起動時は events を replay して状態を再構築する。

---

## Claude Gate

Claude は原則として以下の5箇所だけで介在する。

| Gate | 条件 | 判断 |
|---|---|---|
| Gate 1: 初回スキーマ合意 | Gemini が `tasks.json` を生成した直後 | 分割粒度、依存関係、スコープ逸脱、危険な操作を確認し、必要なら JSON を修正する |
| Gate 2: 高リスク統合判断 | `risk: high` または `review_gate: before_patch` に到達 | DB・API・横断的変更などの影響を確認し、特別指示を足すか `review_gate: none` に変更する |
| Gate 3: 依存衝突 | デッドロック、循環依存、Git コンフリクト、対象ファイル競合 | `deps`、`allowed_ops`、タスク境界を修正し、必要なら一部タスクを再生成する |
| Gate 4: Gemini エラーハンドラ（Claude不介入） | Codex 非ゼロ終了、または acceptance がリトライ後も失敗 | 自動で Gemini を呼び出して原因を分析させ、対応方針（RETRY/SKIP/HUMAN_REQUIRED）を決定する。Gemini が HUMAN_REQUIRED を出したときだけ Claude が介入する |
| Gate 5: 最終レビュー | 全タスク完了 | 全体ビルド、テスト、リンターを実行し、元要求を満たすか確認する |

---

## 実行手順

### Step 1: セッションと環境の初期化

リポジトリ直下で実行する。

```bash
REFACTOR_ID=$(date +%s | tail -c 9)
WORK_DIR="/tmp/refactor-${REFACTOR_ID}"
REPO_DIR="$(pwd)"
mkdir -p "$WORK_DIR"
echo "Refactor Session: $REFACTOR_ID"
echo "Repo: $REPO_DIR"
```

### Step 2: Gemini Phase（全体分析・計画生成）

対象ファイル一覧と実ファイル内容を Gemini に渡し、`PatchTaskSet` を生成させる。

```bash
USER_TASK='{USER_TASK}'
TARGET_ROOTS="${TARGET_ROOTS:-src app packages plugins}"
MAX_FILE_BYTES="${MAX_FILE_BYTES:-200000}"

TARGET_FILES="$WORK_DIR/target-files.txt"
CONTEXT_OUT="$WORK_DIR/context.txt"
TASKS_RAW="$WORK_DIR/tasks_raw.txt"
TASKS_JSON="$WORK_DIR/tasks.json"

find $TARGET_ROOTS \
  \( -path '*/.git/*' -o -path '*/node_modules/*' -o -path '*/build/*' -o -path '*/dist/*' -o -path '*/target/*' \) -prune -o \
  -type f \
  \( -name '*.ts' -o -name '*.tsx' -o -name '*.js' -o -name '*.jsx' -o -name '*.json' -o -name '*.java' -o -name '*.kt' -o -name '*.kts' -o -name '*.py' -o -name '*.go' -o -name '*.rs' -o -name '*.yml' -o -name '*.yaml' -o -name '*.md' \) \
  -print 2>/dev/null | sort > "$TARGET_FILES"

: > "$CONTEXT_OUT"
while IFS= read -r file; do
  [ -f "$file" ] || continue
  bytes=$(wc -c < "$file" | tr -d ' ')
  {
    printf '\n===== FILE: %s =====\n' "$file"
    printf 'bytes: %s\n' "$bytes"
  } >> "$CONTEXT_OUT"

  if [ "$bytes" -le "$MAX_FILE_BYTES" ]; then
    cat "$file" >> "$CONTEXT_OUT"
    printf '\n===== END FILE: %s =====\n' "$file" >> "$CONTEXT_OUT"
  else
    printf '[SKIPPED: file exceeds MAX_FILE_BYTES=%s]\n' "$MAX_FILE_BYTES" >> "$CONTEXT_OUT"
  fi
done < "$TARGET_FILES"

GEMINI_PROMPT="$(cat <<EOF
あなたはシニアアーキテクトです。以下のリファクタリング要求と実ファイル内容を読み、Codex が順次実装できる PatchTaskSet を生成してください。

=== ユーザー要求 ===
${USER_TASK}

=== 対象ファイル一覧 ===
$(cat "$TARGET_FILES")

=== 実ファイル内容 ===
$(cat "$CONTEXT_OUT")

=== 指示 ===
1. コードベースの構造、依存関係、状態変数、公開 API、テスト境界を分析してください。
2. 安全に順次実行可能なタスクへ分割してください。
3. 各タスクの対象ファイル、許可操作、依存、リスク、不変条件、verification_level、acceptance コマンド、根拠、rollback を明示してください。
4. 同じファイルを複数タスクが編集する場合は依存関係を付け、並行変更に見える分割を避けてください。
5. 高リスク変更、DB/API/認証/設定/横断的設計変更は risk: high または review_gate: before_patch にしてください。
6. 出力は JSON 配列のみ。Markdown の説明文は不要です。コードブロックを使う場合も中身は JSON 配列だけにしてください。
7. 各タスクには、変更ファイル種別やAPI接触の有無に基づいて verification_level (syntax, module, integration) を自動判定して付与してください。
8. 大規模ファイル分割ガイドライン: 1つのファイルが700行を超えるような大規模な変更は、安全性を確保するため複数タスクに分割することを推奨します。

=== PatchTaskSet スキーマ ===
[{
  "task_id": "string",
  "goal": "string",
  "files": [{"path": "string", "role": "string", "allowed_ops": ["read", "edit", "create", "delete", "move"]}],
  "deps": ["task_id"],
  "risk": "low|med|high",
  "invariants": ["string"],
  "verification_level": "syntax|module|integration",
  "acceptance": ["実行可能なコマンド"],
  "evidence": [{"path": "string", "line": 0, "claim": "string"}],
  "rollback": "git checkout -- path 等",
  "review_gate": "before_patch|after_patch|none"
}]
EOF
)"

printf '%s' "$GEMINI_PROMPT" | /opt/homebrew/bin/gemini \
  -m gemini-3.1-pro-preview \
  -p "" \
  --output-format text \
  --approval-mode plan \
  > "$TASKS_RAW" 2>&1

python3 - "$TASKS_RAW" "$TASKS_JSON" <<'PYEOF'
import json, re, sys
raw_path, out_path = sys.argv[1], sys.argv[2]
text = open(raw_path, encoding="utf-8", errors="replace").read()
text = "\n".join(
    line for line in text.splitlines()
    if not line.startswith("Warning:") and not line.startswith("Ripgrep")
)
m = re.search(r"```(?:json)?\s*(.*?)```", text, re.S)
candidate = m.group(1).strip() if m else text.strip()
start = candidate.find("[")
end = candidate.rfind("]")
if start == -1 or end == -1 or end < start:
    raise SystemExit("No JSON array found in Gemini output")
data = json.loads(candidate[start:end + 1])
if not isinstance(data, list):
    raise SystemExit("Gemini output must be a JSON array")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print(out_path)
PYEOF

cat "$TASKS_JSON"
```

### Step 3: Claude Gate 1（初回スキーマ合意）

`$WORK_DIR/tasks.json` を確認する。

確認項目:

- `task_id` が一意
- `deps` に存在しない ID や循環がない
- タスク粒度が大きすぎない
- `files[].allowed_ops` が要求スコープに合っている
- `rollback` が対象範囲を戻せる
- acceptance が実行可能なコマンドになっている
- 高リスク変更が `risk: high` または `review_gate: before_patch` になっている

問題があれば Claude が JSON を修正する。判断が要求スコープに関わる場合だけユーザーに確認する。

### Step 4: Codex Phase（自律実装ループ）

ランナーを作成する。

```bash
cat <<'PYEOF' > "$WORK_DIR/runner.py"
import json
import os
import subprocess
import sys
import fcntl
import argparse
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument("tasks_file", help="Initial tasks.json file")
parser.add_argument("--resume", action="store_true", help="Detect orphan running tasks and resume")
args = parser.parse_args()

tasks_file = Path(args.tasks_file)
log_file = tasks_file.with_suffix(".jsonl")
repo_dir = Path(os.environ.get("REFACTOR_REPO_DIR", os.getcwd())).resolve()
max_acceptance_retries = int(os.environ.get("MAX_ACCEPTANCE_RETRIES", "2"))

tasks = {}
state = {"completed": set(), "running": set(), "failures": {}}

if log_file.exists():
    with log_file.open("r", encoding="utf-8") as f:
        for line in f:
            if not line.strip(): continue
            try:
                event = json.loads(line)
            except json.JSONDecodeError:
                continue
            kind = event.get("event")
            if kind == "init":
                for t in event.get("tasks", []):
                    tasks[t["task_id"]] = t
            elif kind == "start":
                state["running"].add(event["task_id"])
            elif kind == "complete" or kind == "skip":
                state["running"].discard(event["task_id"])
                state["completed"].add(event["task_id"])
            elif kind == "fail":
                state["running"].discard(event["task_id"])
                state["failures"][event["task_id"]] = event.get("reason")
            elif kind == "pause":
                state["running"].discard(event["task_id"])

if not tasks and tasks_file.exists():
    with tasks_file.open("r", encoding="utf-8") as f:
        initial_tasks = json.load(f)
    task_list = initial_tasks if isinstance(initial_tasks, list) else initial_tasks.get("tasks", [])
    for t in task_list:
        tasks[t["task_id"]] = t
    
    with log_file.open("a", encoding="utf-8") as f:
        fcntl.flock(f, fcntl.LOCK_EX)
        f.write(json.dumps({"event": "init", "tasks": list(tasks.values())}, ensure_ascii=False) + "\n")
        fcntl.flock(f, fcntl.LOCK_UN)

if args.resume and state["running"]:
    print(f"Resuming orphaned running tasks: {state['running']}")
    for tid in list(state["running"]):
        state["running"].discard(tid)

def append_event(event_dict):
    with log_file.open("a", encoding="utf-8") as f:
        fcntl.flock(f, fcntl.LOCK_EX)
        f.write(json.dumps(event_dict, ensure_ascii=False) + "\n")
        fcntl.flock(f, fcntl.LOCK_UN)

for tid, t in tasks.items():
    for dep in t.get("deps", []):
        if dep not in tasks:
            print(f"GATE_3: UNKNOWN_DEP - {tid} depends on missing task {dep}")
            sys.exit(3)

pending = [t for tid, t in tasks.items() if tid not in state["completed"] and tid not in state["failures"]]

if not pending:
    print("ALL_COMPLETED")
    sys.exit(0)

runnable = None
for t in pending:
    deps = t.get("deps", [])
    if all(d in state["completed"] for d in deps):
        runnable = t
        break

if not runnable:
    print("GATE_3: DEADLOCK - runnable task not found. Check deps for cycles or unresolved dependencies.")
    sys.exit(3)

tid = runnable["task_id"]
print(f"--- Starting Task: {tid} ---")
append_event({"event": "start", "task_id": tid})

if runnable.get("review_gate") == "before_patch" or runnable.get("risk") == "high":
    print(f"GATE_2: APPROVAL_REQUIRED - {tid} requires Claude review before patch.")
    sys.exit(2)

base_prompt = os.environ.get("CODEX_PROMPT", "")
if not base_prompt:
    print("GATE_4_ERROR: CODEX_PROMPT_MISSING")
    sys.exit(4)

task_json = json.dumps(runnable, ensure_ascii=False, indent=2)

def run_acceptance():
    failures = []
    acc_commands = runnable.get("acceptance", [])
    v_level = runnable.get("verification_level", "syntax")
    
    if not acc_commands:
        if v_level == "syntax":
            acc_commands = [f"test -f {f['path']} || echo 'Missing {f['path']}'" for f in runnable.get("files", []) if "delete" not in f.get("allowed_ops", [])]
        elif v_level == "module":
            acc_commands = ["npm run build --if-present", "./gradlew classes"]
        elif v_level == "integration":
            acc_commands = ["npm test", "./gradlew test"]

    for ac in acc_commands:
        if not ac: continue
        print(f"Running acceptance: {ac}")
        res = subprocess.run(ac, shell=True, cwd=repo_dir)
        if res.returncode != 0:
            failures.append({"command": ac, "returncode": res.returncode})
    return failures

def run_codex(attempt, failures):
    retry_section = ""
    if failures:
        retry_section = "\n\n=== 前回の acceptance 失敗 ===\n" + json.dumps(failures, ensure_ascii=False, indent=2)

    prompt = base_prompt.replace("{TASK_JSON}", task_json) + retry_section
    cmd = [
        "/opt/homebrew/bin/codex", "exec",
        "--model", os.environ.get("CODEX_MODEL", "gpt-5.5"),
        "-c", "model_reasoning_effort=\"high\"",
        "--cd", str(repo_dir),
        "--sandbox", os.environ.get("CODEX_SANDBOX", "workspace-write"),
        "--color", "never",
        "-"
    ]
    print(f"Running Codex attempt {attempt} for {tid}")
    return subprocess.run(cmd, input=prompt.encode("utf-8"))

def handle_error_via_gemini(tid, error_context):
    print(f"Invoking Gemini Error Handler for {tid}...")
    gemini_prompt = f"""
    以下のタスク実行でエラーが発生しました。エラーログを分析し、対応方針を決定してください。
    出力は必ず以下のいずれか1つの単語のみにしてください。
    RETRY (一時的またはプロンプト調整で直る場合)
    SKIP (影響が少なくスキップ可能な場合)
    HUMAN_REQUIRED (手動修正や複雑な判断が必要な場合)
    
    === Error Context ===
    {json.dumps(error_context, ensure_ascii=False, indent=2)}
    """
    
    cmd = [
        "/opt/homebrew/bin/gemini", "-m", "gemini-3.1-pro-preview",
        "-p", "", "--output-format", "text", "-"
    ]
    res = subprocess.run(cmd, input=gemini_prompt.encode("utf-8"), capture_output=True, text=True)
    decision = res.stdout.strip().split('\n')[-1].strip()
    if decision not in ["RETRY", "SKIP", "HUMAN_REQUIRED"]:
        decision = "HUMAN_REQUIRED"
    return decision

failures = []
attempt_log = []
codex_failed = False
validation_failed = False

for attempt in range(1, max_acceptance_retries + 2):
    res = run_codex(attempt, failures)
    attempt_log.append({"attempt": attempt, "codex_returncode": res.returncode})

    if res.returncode != 0:
        codex_failed = True
        break

    failures = run_acceptance()
    attempt_log[-1]["acceptance_failures"] = failures

    if not failures:
        break

    if attempt <= max_acceptance_retries:
        print(f"Acceptance failed for {tid}; retrying Codex ({attempt}/{max_acceptance_retries}).")
    else:
        validation_failed = True
        break

if codex_failed or validation_failed:
    error_context = {
        "task_id": tid,
        "kind": "codex_failed" if codex_failed else "validation_failed",
        "attempts": attempt_log
    }
    decision = handle_error_via_gemini(tid, error_context)
    print(f"Gemini Error Handler decision: {decision}")
    
    if decision == "RETRY":
        append_event({"event": "fail", "task_id": tid, "reason": "retry_requested"})
        sys.exit(101)
    elif decision == "SKIP":
        append_event({"event": "skip", "task_id": tid})
        sys.exit(102)
    else:
        append_event({"event": "fail", "task_id": tid, "reason": error_context})
        print(f"GATE_4: HUMAN_REQUIRED - {tid} failed and requires Claude intervention.")
        sys.exit(4)

if runnable.get("review_gate") == "after_patch":
    print(f"GATE_5_LIKE: AFTER_PATCH_REVIEW_REQUIRED - {tid} requires Claude review before completion.")
    append_event({"event": "pause", "task_id": tid, "reason": "after_patch_review"})
    sys.exit(5)

print(f"Task {tid} completed.")
append_event({"event": "complete", "task_id": tid})
sys.exit(100)
PYEOF
```

`runner.py` の先頭に余分なインデントが入っていないか確認する。

```bash
python3 -m py_compile "$WORK_DIR/runner.py"
```

Codex 実行ループを開始する。

```bash
export REFACTOR_REPO_DIR="$REPO_DIR"
export MAX_ACCEPTANCE_RETRIES=2
export CODEX_MODEL="gpt-5.5"
export CODEX_SANDBOX="workspace-write"

export CODEX_PROMPT='あなたは自律実装エージェントです。以下の Task 情報に基づき、許可された範囲だけを編集してください。

=== Task ===
{TASK_JSON}

=== 指示 ===
- files で指定された path と allowed_ops の範囲を守ってください。
- invariants を壊さないでください。
- deps 済みタスクの変更を前提として作業してください。
- 対象外の大規模リライトや別設計への変更は避けてください。
- 必要な場合だけ小さなテストを追加してください。
- 作業後に構文チェック、単体テスト、または task.acceptance に近い検証を実行してください。
- 失敗した検証がある場合は原因と未解決点を最後に明示してください。'

while true; do
  python3 "$WORK_DIR/runner.py" "$WORK_DIR/tasks.json" --resume
  STATUS=$?

  if [ "$STATUS" -eq 0 ]; then
    echo "全タスク完了。"
    break
  elif [ "$STATUS" -eq 100 ] || [ "$STATUS" -eq 101 ] || [ "$STATUS" -eq 102 ]; then
    continue
  else
    echo "ランナー停止 (Exit Code: $STATUS)。Claude Gate による介入が必要です。"
    break
  fi
done
```

### Step 5: Claude Gate 2, 3, 4 への対応

ランナー停止時は終了コードで対応を決める。

| Exit | Gate | 対応 |
|---|---|---|
| 2 | Gate 2 | 該当タスクの影響範囲を確認し、必要なら `CODEX_PROMPT` に追加制約を書く。許可する場合は `review_gate: "none"` または `risk: "med"` に変更して再開 |
| 3 | Gate 3 | `deps`、タスク境界、対象ファイル、`allowed_ops` を修正する。循環や存在しない依存を解消して再開 |
| 4 | Gate 4 | Geminiが HUMAN_REQUIRED と判定したため停止。`tasks.jsonl` と Codex/acceptance ログを見る。手動修正、または `rollback` を選ぶ |
| 5 | after_patch review | 差分を確認し、問題なければイベントログに完了を追記して再開する |

JSON 修正補助:

```bash
python3 - "$WORK_DIR/tasks.json" <<'PYEOF'
import json, sys
path = sys.argv[1]
data = json.load(open(path, encoding="utf-8"))
print(json.dumps(data, ensure_ascii=False, indent=2))
PYEOF
```

特定タスクを承認して再開する例:

```bash
python3 - "$WORK_DIR/tasks.json" "TASK_ID" <<'PYEOF'
import json, sys
path, tid = sys.argv[1], sys.argv[2]
data = json.load(open(path, encoding="utf-8"))
if isinstance(data, list):
    data = {"tasks": data, "completed": []}
for t in data["tasks"]:
    if t["task_id"] == tid:
        t["review_gate"] = "none"
        if t.get("risk") == "high":
            t["risk"] = "med"
json.dump(data, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
PYEOF
```

### Step 6: Claude Gate 5（最終レビュー）

全タスク完了後、Claude が全体品質を確認する。

推奨確認:

```bash
git status --short
git diff --stat
git diff --check
```

プロジェクトに合わせて実行:

```bash
npm test
npm run lint
npm run typecheck
./gradlew test
./gradlew build
cargo test
go test ./...
```

すべての検証結果、未実行の理由、残リスクをまとめて完了報告する。

---

## ユーザーへの表示フォーマット

開始時:

```text
╔══════════════════════════════════════════════════════╗
║ refactor-delegate — セッション: {REFACTOR_ID}
╠══════════════════════════════════════════════════════╣
║ Repo      : {REPO_DIR}
║ Planner   : Gemini
║ Executor  : Codex
║ Work dir  : {WORK_DIR}
║ Gate      : 1 / 初回スキーマ確認
╚══════════════════════════════════════════════════════╝
```

停止時:

```text
╔══════════════════════════════════════════════════════╗
║ refactor-delegate — Gate 停止
╠══════════════════════════════════════════════════════╣
║ Session : {REFACTOR_ID}
║ Exit    : {2|3|4|5}
║ Task    : {task_id}
║ Reason  : {APPROVAL_REQUIRED|DEADLOCK|CODEX_FAILED|VALIDATION_FAILED|AFTER_PATCH_REVIEW}
║ Log     : {WORK_DIR}/tasks.jsonl
╚══════════════════════════════════════════════════════╝

判断:
{Claude の判断と次アクション}
```

完了時:

```text
╔══════════════════════════════════════════════════════╗
║ refactor-delegate — 完了
╠══════════════════════════════════════════════════════╣
║ Session   : {REFACTOR_ID}
║ Tasks     : {completed}/{total}
║ Final test: {passed|failed|partial}
║ Work dir  : {WORK_DIR}
╚══════════════════════════════════════════════════════╝

変更概要:
- {主要変更}

検証:
- {実行したコマンドと結果}

残リスク:
- {未検証・注意点。なければ「なし」}
```

---

## エラーハンドリング

| 状況 | 対応 |
|---|---|
| Gemini が非ゼロ終了 | `tasks_raw.txt` を確認し、対象ファイル数やプロンプトサイズを減らして1回だけ再実行する |
| Gemini 出力から JSON を抽出できない | Markdown や説明文を除去して手動整形する。根本的に壊れていれば Gemini に「JSON配列のみ」で再生成させる |
| `tasks.jsonl` に循環依存がある | Gate 1 または Gate 3 で `deps` を修正する。大きすぎるタスクは分割する |
| `risk: high` に到達 | Gate 2 で停止。影響範囲を見て許可、追加制約、タスク再分割のいずれかを選ぶ |
| Codex が非ゼロ終了 | Gemini エラーハンドラが自動判断し、RETRY/SKIP/HUMAN_REQUIRED を出力する。HUMAN_REQUIRED の場合のみ Gate 4 で停止する |
| acceptance が失敗 | ランナーが最大2回 Codex にリトライする。それでも失敗する場合は Gemini エラーハンドラが自動判断する |
| Git コンフリクト | Gate 3。衝突ファイルを確認し、タスク順序か対象ファイル境界を修正する |
| after_patch review | 差分を Claude が確認し、問題なければイベントログに完了を追記する |
| 全体テストが失敗 | Gate 5。失敗がリファクタ由来なら追加タスクを作る。既存失敗なら根拠を示して残リスクに記録する |
| `/tmp` の作業ディレクトリが消えた | 現在の Git 差分を確認し、必要なら Gemini Phase から再生成する |

---

## 設計メモ（Claude 自身向け）

- このスキルの目的は「Claude が全部考える」ことではなく、Gemini に全体地図を作らせ、Codex に局所工事を任せ、Claude は Gate だけで判断すること。
- Gate を増やさない。通常の進行ログを見て細かく介入し始めると、このスキルの価値が消える。
- `tasks.jsonl` は契約。Codex への自由裁量は `files`、`allowed_ops`、`invariants`、`acceptance` で縛る。
- Gemini の計画はそのまま信用しない。Gate 1 で依存関係、ファイル境界、危険操作だけは必ず見る。
- Codex の acceptance リトライは「同じタスクを自力修復させる」ためのもの。2回を超える失敗は設計か分割が悪い可能性が高い。
- DB、認証、権限、公開 API、データ移行、ビルドシステム、横断的設定は原則 `risk: high`。
- ユーザーに確認するのは、要求スコープの変更、不可逆操作、外部サービス影響、設計方針の分岐がある場合だけ。
- 作業完了後は `WORK_DIR` の場所を伝える。必要なら `tasks.jsonl` を永続保存する提案をする。