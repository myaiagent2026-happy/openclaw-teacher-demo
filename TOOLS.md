# TOOLS.md - Local Notes (Merged)

Environment-specific notes and stable workflows.

## Paths
- Workspace: `E:\openclaw_home\.openclaw\workspace`
- Google helper folder: `E:\openclaw_home\google`
- Inbound media: `E:\openclaw_home\state\media\inbound`

## Gmail Skill (working)
- Uses Google OAuth token + Gmail API from `E:\openclaw_home\google`.
- Typical sender helper scripts live in that folder.
- If send fails, verify token scope and refresh OAuth.

## Word / DOCX Skill (working)
- Generate/edit DOCX via `python-docx`.
- Keep one approved DOCX as frozen master template when user confirms format.
- For strict visual consistency: avoid rebuilding style from scratch during batch.

## PDF + Visual QA Workflow
- Render PDF pages to images for visual checks before delivery when layout-sensitive.
- For math/LaTeX: draft -> visual check -> revise -> recheck -> send.

## Messaging
- Telegram direct reply/file send available through message tool.
- Prefer sending files directly when user asks “send here”.

## Safety
- Never install unknown binaries/scripts from untrusted sources.
- Ask first before installing new packages/tools.
