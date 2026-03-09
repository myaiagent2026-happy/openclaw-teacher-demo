# LanceDB Pro2 Memory Plan

## Purpose
Add a stronger, low-token memory protection layer on top of the current LanceDB setup so important task state survives model switches, fallback, session resets, and OpenClaw continuity bugs.

## Goals
- preserve important working state
- reduce loss after model/session switches
- keep token burn low
- keep everything USB-resident
- avoid storing full noisy transcripts

## Existing Layers
### 1. Policy memory
Workspace files such as:
- `AGENTS.md`
- `USER.md`
- `MEMORY.md`
- `HEARTBEAT.md`
- `TOOLS.md`

Purpose:
- hard rules
- user preferences
- operating policy

### 2. Retrieval memory
Current LanceDB memory store:
- `E:\openclaw_home\memory\lancedb-pro`

Purpose:
- searchable facts
- decisions
- preferences
- lessons

### 3. Session memory
OpenClaw live/session state:
- `state\agents\main\sessions\...`

Purpose:
- current chat context
- temporary live conversation state

Problem:
- can break on model switch or session split

## New Pro2 Layers
### 4. Compact recovery checkpoints
After each important task, save one compact checkpoint containing:
- task name
- result
- changed files
- important ids/links
- next step
- unresolved risk

Store checkpoint in two places:
- LanceDB memory
- local USB checkpoint file

Checkpoint example:
- task: Gmail push fixed
- result: scheduled task active
- file: `E:\openclaw_home\google\gmail_monitor.py`
- auth: existing Google auth reused
- next: watch for next alert

### 5. USB session journal
Maintain a short local journal for important milestones only.

Suggested path:
- `E:\openclaw_home\.openclaw\workspace\session-journal\telegram-8181930583.md`

Journal entry should contain:
- timestamp
- current task
- what changed
- important output
- next step
- model if known

Rules:
- do not log every message
- do not dump full transcripts
- log only important milestones

### 6. Model-switch handoff note
When model changes or fallback happens, save a small handoff note.

Contents:
- previous model
- new model
- active task
- last completed step
- next required step
- latest checkpoint reference

Suggested path:
- `E:\openclaw_home\.openclaw\workspace\session-journal\handoff-latest.json`

### 7. Session continuity anchor
Use stable identity fields to reconnect work after resets:
- channel = telegram
- chat id / user id
- topic/project name
- latest checkpoint id
- latest journal path

Purpose:
- help rebuild context in a new session

### 8. Startup recovery recall
On important new sessions or after a detected switch, recall only:
- latest checkpoint
- latest unresolved task
- latest user preferences
- latest handoff note

Rules:
- do not recall too much
- prefer the newest relevant items only

### 9. Emergency fallback summary
If session continuity looks at risk, save a tiny emergency summary:
- what we are doing
- what is already done
- what must not be lost

Use only when needed.

## Save Rules
Save memory/checkpoint when:
- a setup is completed
- a bug is fixed
- an important user preference is stated
- a technical/business decision is made
- a task reaches a meaningful milestone
- model/session instability is detected

Do not save:
- random chatter
- filler
- unverified guesses
- every message
- stale temporary noise

## Memory Types
### fact
Confirmed system/project state.

### decision
A chosen direction or plan.

### preference
How the user wants the assistant to behave.

### lesson
A mistake, correction, or rule that must not repeat.

## Token Cost Strategy
### Almost no token burn
- local USB journal writes
- local handoff notes
- local continuity anchors

### Low token burn
- compact checkpoints
- latest-state recall
- emergency summary

### Higher token burn
- trying to preserve long conversations in memory
- storing too many verbose memory items

## Best Operating Rule
For every important task, create:
1. one compact LanceDB memory item
2. one local USB checkpoint/journal entry
3. one handoff update if session/model continuity changed

## Expected Result
If the model switches again:
- exact wording may still be lost
- but important working state should survive
- recovery should be fast
- token waste should stay low

## Current Limitation
This plan improves continuity but does not replace true full transcript persistence.

## Recommended Next Build Steps
1. create `session-journal` folder
2. create `telegram-8181930583.md`
3. create `handoff-latest.json`
4. use compact checkpoint format for important tasks only
5. keep LanceDB for searchable long-term memory, not full transcript storage
