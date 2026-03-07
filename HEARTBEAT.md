# HEARTBEAT.md (Merged)

Keep heartbeat lightweight and low-noise.

## Default
- If no actionable item: reply `HEARTBEAT_OK`.
- Do not replay old tasks automatically.

## Checks (light)
- System health quick check
- Failure delta checks (notify only when meaningful)
- Keep state timestamps updated in `memory/heartbeat-state.json`

## Reporting
- Prefer notifier flow; avoid chat spam.
- Only send direct heartbeat messages when intervention is needed.

## Safety
- No outbound third-party actions from heartbeat without explicit approval.
