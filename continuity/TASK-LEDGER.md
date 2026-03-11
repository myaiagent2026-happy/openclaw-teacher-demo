# TASK LEDGER

Status: authoritative exact-task continuity layer
Purpose: preserve file-level working state that is too specific for the active capsule but too important to lose within the active window
Update when: a task meaningfully changes files, produces outputs, or reaches a pause point

## Current active tasks

### Continuity Capsule
- Status: active
- Goal: preserve same-day active work for roughly 24 hours and recover older work from USB daily notes
- Latest milestone: active capsule + daily note layer created and committed
- Current commit: `48e5a91` Add Continuity Capsule active and daily continuity layers
- Exact files changed:
  - `continuity/ACTIVE-CAPSULE.md`
  - `continuity/BOOTSTRAP.md`
  - `continuity/INSTRUCTION-REGISTRY.md`
  - `continuity/LATEST-HANDOFF.json`
  - `continuity/PROJECT-REGISTRY.json`
  - `continuity/UNRESOLVED-TASKS.json`
  - `continuity/daily/2026-03-11.md`
  - `skills/continuity-capsule/SKILL.md`
  - `skills/continuity-capsule/references/daily-note-template.md`
- Outputs created:
  - `skills/continuity-capsule/`
  - `continuity/daily/2026-03-11.md`
  - `continuity/ACTIVE-CAPSULE.md`
  - `continuity/TASK-LEDGER.md`
- Exact current resume point:
  - add a compact per-task file ledger rule
  - investigate official OpenClaw hook/config path for automatic writes before reset/compaction
  - learn/test a YouTube-reading pipeline for continuity research using the two user-provided videos
  - if no official auto-write path is available, keep manual/semi-auto writes honest and minimal
- Working research inputs:
  - `https://youtu.be/rUbQy05Boto?si=fRAOdHzFtTUkL8je`
  - `https://youtu.be/7n9qbuzwS-U?si=1nBaiU53HlO-A3DI`
- Unresolved:
  - no verified automatic pre-reset/pre-compaction writer
  - no verified automatic post-task writer
  - need a clean rule for when to update task ledger vs active capsule vs daily note
  - YouTube reading pipeline learned conceptually but not yet verified live in this environment

## Ledger rule
- `ACTIVE-CAPSULE.md` = smallest same-day overview
- `TASK-LEDGER.md` = exact active task/file state
- `daily/YYYY-MM-DD.md` = dated recovery note for older retrieval

## Immediate capture rule
Promote new task-critical inputs out of live chat context immediately.

Write into `TASK-LEDGER.md` as soon as the user provides any of these:
- exact URLs to test or research
- exact files/paths to edit or inspect
- exact commands, prompts, or examples that define the task
- exact external artifacts that would be annoying or harmful to re-ask for
- new recurring workflow requests, schedules, or standing operating instructions

If the item also matters beyond today or for recovery after reset/compaction, mirror it into the current daily note the same session.

If the user defines a recurring workflow, also add or update an explicit unresolved task / standing job entry the same session.
