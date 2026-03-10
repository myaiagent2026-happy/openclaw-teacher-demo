# TOOLS.md

## Core Rules
- Keep persistent state on the USB when possible.
- Do not hardcode a drive letter.
- Minimize host traces.
- Prefer launcher-set environment variables and portable roots.

## Preferred Roots
- `USB_ROOT`
- `OPENCLAW_HOME = USB_ROOT\\openclaw_home`
- `STATE_DIR = OPENCLAW_HOME\\state`
- `WORKSPACE_DIR = OPENCLAW_HOME\\.openclaw\\workspace`
- `MEMORY_DIR = OPENCLAW_HOME\\memory`
- `TOOLS_DIR = USB_ROOT\\openclaw_tools`

## Usage Rules
- A capability is available only when path, dependencies, and runtime are confirmed.
- Reuse existing Google auth unless clearly broken.
- Retrieve memory by task relevance; do not keep large memory always-on.
- Prefer official docs and auditable sources.
- Test in the real target environment when possible.

## Output Rules
- Outputs must be correct, usable, and verified.
- Preserve structure unless redesign is requested.
- For visual work, inspect sharpness and placement before reporting success.

## Do Not Store
- raw API keys or tokens
- temporary error logs
- guesses as facts
- stale paths
- duplicated policy text