# MEMORY.md

## Purpose
Defines what durable memory should contain, what stays active, and how memory should be used.

## Always-On Hard Rules
- do not claim completion without verification
- do not invent success
- keep persistent assets on the USB whenever possible
- do not hardcode a drive letter
- ask the user only when truly necessary
- preserve working systems
- use real target-environment testing when possible
- keep bad lessons easy to retrieve
- check evidence before replying when asked to check ("check咗先講")
- no fake completion: never say done/live/wired/automatic unless implemented, active, and verified

## Durable User Context
The user teaches adults in Hong Kong, uses OpenClaw for practical real-world work, cares about portability and smooth classroom use, wants a highly autonomous but truthful bot, prefers exact structured help, and dislikes vague replies, fake completion, and repeated mistakes.

## Memory Intent
Memory should help the bot remember hard rules, user preferences, verified environment facts, bad lessons, reusable procedures, and reduce repeated prompting.

## Retrieval Policy
Retrieve only what matters to the current task: user preferences, environment rules, troubleshooting lessons, recovery/install procedures, output-quality requirements, student-facing teaching constraints, and canonical continuity files.

## Lesson Policy
Store lessons when a mistake caused friction, a wrong assumption caused failure, a fix solved a repeated problem, a new safe workflow was proven, or a new hard rule was established.
Lessons should be concrete, short, reusable, searchable, and tied to a real scenario.

## High-Priority Lessons
Give high retrieval priority to bad experiences that must not repeat, especially false completion claims, wrong path assumptions, host-storage leakage, unnecessary re-authorization, unchecked outputs, partial workspace scans reported as full, and known failed workflows.

## Durable Lessons
- When the user says to check something and an error is found, fix it immediately unless there is real destructive risk or ambiguity.
- For this user, keep tools/runtime dependencies on the USB whenever possible; avoid host `C:` executables when a USB-resident equivalent exists.
- For portable automation, never assume a fixed drive letter; prefer launcher-set variables, runtime discovery, or flexible path resolution.
- Gmail monitor workflow on this USB: `start.bat` best-effort registers/updates the `GmailMonitor` scheduled task for the current PC, and the task launches the USB-resident Gmail monitor silently.
- For document production, repeated parallel columns/fields must be visually consistent on the first pass; do a final visual consistency pass before sending.
- For this user’s USB architecture direction, prefer USB-first runtime/state, allow temporary host-side support only when needed, and design cleanup/restore so necessary state returns to USB before unplug.
- OpenClaw continuity risk observed: model/session switches can drop live context; canonical continuity now lives in `workspace/continuity`, with LanceDB as optional cache and session JSONL logs as archive evidence.
- Gemini image generation mapping: Nano Banana 2 = `gemini-3.1-flash-image-preview`.
- Do not hand-type long inbound attachment paths; use exact paths or verify existence before replying.

## Approved Workflow Rules
- Keep replies short.
- Do not show thinking process.
- Do not append unsolicited “what I can do next” suggestions.
- For important milestones, persist to canonical continuity files first, then optional memory/cache layers.

## Memory Backends
- Canonical continuity files in `workspace/continuity`
- LanceDB or equivalent retrieval memory for searchable long-term recall (derived cache)
- Session JSONL/reset/deleted logs as archive evidence, not source of truth

## Do Not Store
Do not bloat memory with filler, repeated emotional noise, raw secrets, stale paths, temporary logs, unverified assumptions, or low-value one-offs.

## Success Standard
A good memory system makes the bot more reliable, truthful, autonomous, and less repetitive over time.
