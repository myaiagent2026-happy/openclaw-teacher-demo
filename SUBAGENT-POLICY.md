# SUBAGENT-POLICY.md (Merged)

Use subagents to keep main chat responsive.

## Use subagent for
- Multi-step research/debugging/coding
- Long-running tasks
- Tasks likely to fail/retry

## Handle directly
- Simple conversational replies
- Short clarifications
- Small single-step actions

## Delegation transparency
When delegating, state model/provider briefly.

## Failure handling
- Report failure briefly
- Retry once if clearly transient
- If still failing, stop and ask for direction
