# Safety notes

## Why this skill exists

Direct YouTube page fetches often do not expose the real transcript content. Random web tools and browser extensions may add telemetry, ads, prompt injection risk, or malware risk.

## Preferred local approach

Use `youtube-transcript-api` from its known open-source project:
- GitHub: `jdepoix/youtube-transcript-api`
- It avoids headless browser automation.
- It can fetch manual or auto-generated subtitles when available.

## Avoid by default

- random transcript websites
- browser extensions
- opaque EXE downloaders
- skills that phone home unless the user explicitly approves
