---
name: comfyui
description: Teach and operate ComfyUI for local/free classroom workflows (RunPod + Windows local), including txt2img/img2img, LTX-Video, and 3D (TRELLIS/Hunyuan3D). Use when users ask for ComfyUI setup, node workflow building, model placement/download, VRAM tuning, troubleshooting, or preparing step-by-step lesson delivery without paid API nodes.
---

# ComfyUI Skill

Enforce this rule first: **free + local only**.
- Allow: local models, open-source nodes, RunPod GPU rental.
- Reject: paid API nodes, API keys, credit-based external inference.

## Operating mode
1. Pick one target environment first: **Windows local** or **RunPod**.
2. Keep instructions executable and short.
3. Prefer stable defaults before advanced tuning.
4. For classroom usage, pre-download models before lesson time.

## Core workflow map
- **Setup + install** → read `references/runpod-and-install.md`
- **Image generation (txt2img/img2img/control)** → read `references/image-workflows.md`
- **LTX video generation** → read `references/ltx-video.md`
- **3D generation (TRELLIS / Hunyuan3D)** → read `references/3d-workflows.md`
- **Classroom delivery + troubleshooting** → read `references/teaching-checklists.md`

## Hard constraints
- Keep model files in correct ComfyUI folders.
- Keep video resolution divisible by 32.
- Keep video frame count as `8n+1` (65/97/121/161/257).
- Keep one change at a time when debugging.

## Quality gate before final answer
- Confirm exact model names and file paths.
- Confirm VRAM-fit recommendation (minimum vs recommended).
- Provide one tested baseline preset first, then optional upgrades.
- If source materials conflict, prefer conservative/stable guidance and label experimental items explicitly.
