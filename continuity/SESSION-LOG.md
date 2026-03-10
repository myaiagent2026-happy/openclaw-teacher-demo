# Canonical Session Log

Status: compact milestone log only.

## 2026-03-09
- User reported major continuity loss after model/session changes.
- Decision: create a low-token canonical continuity layer under `workspace/continuity`.
- LanceDB stays secondary retrieval only.

## 2026-03-10
- Confirmed the preferred direction is a tiny bootstrap first, not full-history loading.
- Official built-in bootstrap behavior is preferred over custom plugin-heavy approaches.
- Current limitation: no verified native automatic pre-reply/post-task continuity hook writable from this chat session.

## 2026-03-11
- Investigated Gmail push monitor reliability.
- Confirmed stale PID/lock files can falsely suggest the monitor is alive when it is not.
- Hardened Gmail monitor logging and verified a fresh `pythonw.exe` launch processed a real test email.