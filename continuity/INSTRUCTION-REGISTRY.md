# Canonical Instruction Registry

Status: authoritative
Scope: stable user rules + durable operating constraints
Read when: before substantial replies/tasks, after model/session/provider switch, after compaction recovery
Update when: user states a durable rule, a repeated failure creates a new hard rule, or a durable workflow is approved
Token strategy: load this file first; do not load full archives unless needed

## Stable user rules
- Keep replies short by default.
- Do not show thinking process.
- Do not append unsolicited “what I can do next” suggestions.
- Check evidence before replying when asked to check: "check咗先講".
- Do not claim completion unless implemented, verified, and re-checked.
- Do not say you scanned the whole workspace unless you actually scanned it.
- Do not blame user files/paths without proof.
- Ask only when truly necessary; do not bounce obvious work back to the user.
- Prefer one best workable path when one exists.
- Use copy-paste-ready client replies when asked for business chat help.
- Match Hong Kong / Cantonese tone when writing Chinese business replies.

## Stable operating constraints
- USB-first; keep persistent state on USB whenever possible.
- Do not hardcode drive letters.
- Preserve working systems.
- Use existing Google auth at `E:\openclaw_home\google\`; do not re-ask for setup unless actually broken.
- Prefer low-token continuity: compact milestones, not full transcript dumping.
- For bulk pushes, check existing entries first and avoid duplicates.

## Stable content/workflow rules
- Document outputs: approved template = frozen master; do visual QA before sending.
- Do not mix Teaching Notes and Worksheet purposes.
- If user says to check again and errors are found, fix immediately unless destructive risk is real.
- For image/file inspection, use exact inbound paths; do not hand-type long paths.

## Project-specific durable rules
### Website / client-reply / homepage work
- Default simple business site stack: Astro or clean custom HTML/CSS/JS.
- Avoid WordPress for the user’s current custom-site sales path unless the client truly needs CMS-heavy updates.
- Sell website/domain first; upsell AI/chatbot/automation later.
- HK defaults: bilingual, mobile-first, WhatsApp CTA, inquiry form, PDPO awareness, speed.

### WhatsApp / CRM demo direction
- Serious route: separate SIM/number + WhatsApp Business.
- Best rollout: assisted replies first, then semi-automation, then fuller automation.
- Pricing: setup fee + monthly managed service + fair-use guardrails; do not promise reckless unlimited use.

### Teaching/document production
- No lesson overlap/repeated content when user explicitly rejected it.
- Math-note QA loop: render visually, detect defects, send fixes back to main model, re-render, re-check.

## Temporary task rule bucket
Store short-lived task rules in `continuity/UNRESOLVED-TASKS.json`, not here.
