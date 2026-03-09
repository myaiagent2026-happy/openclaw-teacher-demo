# Continuity Contract

## Canonical architecture

### 1) Canonical instruction registry
- Path: `continuity/INSTRUCTION-REGISTRY.md`
- Purpose: stable user rules, durable operating constraints, durable workflow rules
- Read: before substantial replies/tasks; after model/provider/session switch
- Update: when a durable rule is proven/approved
- Authority: authoritative
- Token strategy: tiny first-load file

### 2) Canonical project registry
- Path: `continuity/PROJECT-REGISTRY.json`
- Purpose: major projects, goals, milestones, unresolved issues, key paths/links
- Read: when task touches project continuity
- Update: after meaningful project milestone or status change
- Authority: authoritative
- Token strategy: structured JSON, project-specific retrieval

### 3) Canonical latest handoff
- Path: `continuity/LATEST-HANDOFF.json`
- Purpose: quickest recovery state for next session/model/provider switch
- Read: first continuity file to load
- Update: after major task, session/model/provider change, recovery, or interruption risk
- Authority: authoritative
- Token strategy: tiny always-load index

### 4) Canonical session log
- Path: `continuity/SESSION-LOG.md`
- Purpose: compact milestone/event log
- Read: after latest handoff if more detail needed
- Update: after meaningful tasks only
- Authority: authoritative for recent milestone history
- Token strategy: milestone-only

### 5) Canonical unresolved-task tracker
- Path: `continuity/UNRESOLVED-TASKS.json`
- Purpose: open risks/incomplete work/next evidence needed
- Read: before substantial resumed work
- Update: whenever something remains incomplete
- Authority: authoritative
- Token strategy: short structured list

### 6) Recovery rules
- Path: `continuity/RECOVERY-RULES.md`
- Purpose: exact trust order and recovery behavior
- Read: on continuity doubt or switch/reset/compaction
- Update: when failure modes are proven
- Authority: authoritative
- Token strategy: compact rules

## Secondary layers
- LanceDB memory: derived retrieval cache for facts/decisions/preferences/lessons
- Session JSONL/reset/deleted logs: archive evidence only
- Legacy `session-journal/*`: secondary/manual mirror for backward compatibility

## What is NOT true
- Automatic pre-reply continuity loading is not newly wired by code from this chat session.
- Automatic post-task journaling is not newly wired by code from this chat session.
- Existing plugins are active, but this repair does not overclaim new automation beyond files and rules actually created.

## Practical operating behavior
Before substantial replies/tasks, consult in this order:
1. `LATEST-HANDOFF.json`
2. `INSTRUCTION-REGISTRY.md`
3. `UNRESOLVED-TASKS.json`
4. relevant project entry in `PROJECT-REGISTRY.json`
5. `SESSION-LOG.md`
6. only then retrieve LanceDB/archives if needed
