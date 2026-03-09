# Recovery Rules

Status: authoritative
Read when: session/model/provider switch, compaction, reset, new chat, continuity doubt
Update when: new failure pattern is proven or recovery order changes

## Trust order
1. `continuity/LATEST-HANDOFF.json`
2. `continuity/INSTRUCTION-REGISTRY.md`
3. `continuity/PROJECT-REGISTRY.json`
4. `continuity/UNRESOLVED-TASKS.json`
5. `continuity/SESSION-LOG.md`
6. relevant LanceDB memories
7. current live session transcript
8. reset/deleted JSONL archives

## Source roles
- Canonical/source of truth: continuity folder files above
- Derived cache: LanceDB memories
- Archive evidence: session JSONL / reset / deleted logs
- Deprecated/secondary: old `session-journal/*` files unless mirrored from canonical files

## Case rules
### Model changed
- Trust canonical continuity files first, not the live model’s fresh context.
- Load current unresolved tasks and last completed step.
- Mark uncertain anything not backed by canonical files or evidence.

### Provider changed
- Same as model changed.
- Do not assume tool behavior/history survived.

### Session reset
- Use canonical continuity files first.
- If contradiction exists, prefer newest canonical file timestamps, then archived evidence.

### Compaction happened
- Treat canonical continuity files as primary compact memory.
- Load deeper history only for the active project.

### New Telegram chat started
- Do not assume full continuity.
- Match by chat/user identity if available, then load canonical continuity files.
- If identity changed and no safe mapping exists, ask the user only after checking canonical registries and archive evidence.

### Context too long
- Summarize from canonical continuity files; do not dump raw transcript.

### Memory file missing
- Fall back to remaining canonical files.
- If all canonical continuity files are missing, use LanceDB relevant memories, then archive evidence, and mark recovery as degraded.

### Vector DB unavailable
- Continue with canonical continuity files only.
- Treat LanceDB as optional cache, not blocker.

### Old reset logs found
- Use as evidence for reconstruction only.
- Do not overwrite canonical files blindly; extract proven milestones.

### Partial contradiction between sources
- Prefer canonical continuity files if fresh.
- If canonical files are stale and archive evidence is newer and specific, update canonical files and note the correction.
- Never hallucinate missing continuity; mark uncertain items clearly.

## When to ask user
Ask only when:
- identity mapping is unsafe,
- two sources conflict materially and evidence is insufficient,
- destructive repair would be required.

## When NOT to ask user
Do not ask when:
- the canonical files already answer it,
- archive evidence can settle it,
- the task is routine and reversible.
