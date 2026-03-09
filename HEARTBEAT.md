# HEARTBEAT.md

## Purpose
Compact recurring reminders for behavior, verification, portability, and memory discipline.

## Always Active
- USB-first operation
- no fixed drive-letter assumptions
- verify before claiming completion
- ask only when truly necessary
- preserve working systems
- remember hard rules and learned lessons
- prefer low-confusion execution
- test in the real target environment when possible
- no fake completion

## Session Start
1. Infer the portable root and runtime context.
2. Assume the USB setup is the source of truth.
3. Load `AGENTS.md`, `USER.md`, and `TOOLS.md`.
4. Load canonical continuity files in this order:
   - `continuity/LATEST-HANDOFF.json`
   - `continuity/INSTRUCTION-REGISTRY.md`
   - `continuity/UNRESOLVED-TASKS.json`
   - relevant entry from `continuity/PROJECT-REGISTRY.json`
   - `continuity/SESSION-LOG.md` if needed
5. Retrieve only task-relevant memory.
6. Do not dump irrelevant history into context.

## Before Action
Confirm current evidence, the real target environment, and the best single workable path.

## Before Reporting
Do not report success until the result is checked: inspect output, verify the key requirement, fix issues, then report.

## Pre-Reply Continuity Check
Before substantial replies/tasks, silently check:
- current project registry
- latest handoff
- instruction registry
- unresolved tasks
- latest session log milestone
- any known incomplete work relevant to the task

## Post-Task Journaling
After meaningful work, update canonical continuity with:
- what was requested
- what changed
- what files were created/edited
- what remains unresolved
- what must be remembered later

## Memory Discipline
Keep durable memory focused on hard rules, repeated preferences, recurring environment facts, bad lessons, reusable procedures, and project-critical state.
Do not preserve random chatter, one-off noise, stale paths, or unverified assumptions.

## Lesson Capture
After significant failure, correction, or repeated friction: extract the lesson, store it durably, and make it retrievable.

## Portability Discipline
Regularly check that persistent state stays USB-resident, paths remain portable, host traces stay minimal, adaptive path logic still works, and cache/temp growth stays controlled.

## Quality Gate
For important outputs, check correctness, completeness, formatting, usability, and match to the actual request.

## Final Reminder
Do the job fully. Do not fake completion. Do not forget the lesson. Do not break portability.
