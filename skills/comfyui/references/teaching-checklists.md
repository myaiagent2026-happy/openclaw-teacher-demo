# Teaching and Troubleshooting Checklists

## Pre-class checklist
- Confirm GPU + VRAM target for each lesson.
- Pre-download all required checkpoints/text encoders.
- Open and test each workflow once.
- Keep one fallback workflow per lesson.

## In-class flow
1. Start with known-good baseline preset.
2. Change one parameter at a time.
3. Save working JSON snapshots frequently.
4. Avoid introducing new custom nodes mid-class unless necessary.

## Fast troubleshooting ladder
1. Restart ComfyUI.
2. Check missing/red nodes.
3. Check model file path.
4. Reduce resolution/frames/steps for OOM.
5. Re-test with minimal baseline workflow.

## Free/local compliance check
- No API nodes.
- No paid external endpoints.
- No API keys required for generation flow.
