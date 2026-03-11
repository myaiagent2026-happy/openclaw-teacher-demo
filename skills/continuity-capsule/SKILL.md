---
name: continuity-capsule
description: Preserve and recover practical continuity across long chats, compaction risk, resets, and model/session switches using a small active-memory layer plus dated USB notes. Use when improving memory/continuity behavior, creating handoff notes, deciding what to retain for the next 24 hours, or reconstructing older work from local archives without loading full history.
---

# Continuity Capsule

Keep continuity in four layers:

1. **24-hour active layer** for current work that should not be forgotten
2. **Exact task ledger** for file-level active state
3. **Daily USB notes** for durable dated recovery
4. **Targeted retrieval** for older work only when needed

## Core rule

Do not rely on live context alone. Before reset/compaction risk, compress active work into a small capsule that can be reloaded fast.

## Workflow

### 1. Decide what belongs in the 24-hour active layer

Keep only items that matter for immediate continuation:
- current task(s)
- exact files touched
- what was changed
- what remains unresolved
- latest important instruction/constraint
- latest milestone or handoff

Do **not** dump full transcripts into the active layer.

### 2. Write a dated daily note on USB

For work that may matter after 24 hours, record a dated summary with enough detail to reconstruct the task.

Include:
- date/time window
- project/task name
- user intent
- files/paths involved
- actions taken
- outputs produced
- unresolved items
- next resume point

Prefer one larger coherent note instead of many tiny fragmented notes.

### 3. Keep an exact task ledger for file-level work

Use a separate task ledger when the task involves exact files, outputs, or resume points that would be too detailed for the active capsule.

Include:
- exact files changed
- outputs created
- current commit/checkpoint if relevant
- exact unresolved items
- smallest useful resume point
- exact task-defining inputs from the user (for example: URLs, file paths, commands, prompts, test cases)
- recurring workflow requests or standing operating instructions (for example: daily checks, scheduled summaries, monitoring routines)

Do not leave task-defining inputs in live chat context only. Promote them into the task ledger in the same session.

If those inputs may matter after the active window or after reset/compaction, mirror them into the dated daily note as well.

If the user defines a recurring workflow, also create or update an explicit unresolved task / standing-job record in the same session.

### 4. Keep the active capsule small

The active capsule should be short enough to reload cheaply before substantial replies. It should answer:
- What are we doing now?
- What must not be forgotten today?
- What is blocked or unfinished?
- What changed most recently?

### 5. Retrieve older work from USB notes

If the work is older than the active window, search the dated notes, canonical continuity files, and other local evidence. Load only the minimum relevant note sections.

### 6. Be honest about recovery

If the exact task state was not preserved in the capsule, say so clearly. Recover from notes/logs instead of pretending to remember.

## Naming

Use **Continuity Capsule** as the human-facing name for this system.

Use this phrase consistently when discussing:
- active memory repair
- reset-safe handoff
- daily continuity notes
- 24-hour retention vs older retrieval

## File pattern

Use a simple dated-note pattern such as:
- `continuity/daily/YYYY-MM-DD.md`

Each date file should contain compact sections by task/project.

## Quality standard

A good continuity capsule is:
- small
- reloadable
- specific
- honest
- enough to continue real work without making the user repeat everything
