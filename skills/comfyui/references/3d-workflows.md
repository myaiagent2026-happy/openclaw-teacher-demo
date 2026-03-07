# 3D Workflow Reference (TRELLIS + Hunyuan3D)

## Reliability-first rule
If uncertain between competing community claims, present TRELLIS/TRELLIS2 items as **version-sensitive** and verify repo/node names before execution.

## Hunyuan3D quick path (easier)
- Good for lower VRAM classroom demos.
- Common flow: `Load Image -> Shape Generator -> (optional Texture Generator) -> Export GLB`.
- If OOM: use mini/turbo variants and shape-only flow first.

## TRELLIS path (advanced)
- Better fidelity potential, typically heavier setup.
- Expect Linux/RunPod preference and larger VRAM.
- Validate custom-node repo and model names before class.

## Input image quality rules
- Single clear object
- Neutral/clean background
- Good lighting
- 512+ resolution

## Export recommendation
- Use GLB as default teaching output.
- Keep OBJ/PLY as secondary outputs for specific software pipelines.
