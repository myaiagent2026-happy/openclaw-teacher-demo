# 3D Workflow Reference (TRELLIS + Hunyuan3D)

## Reliability-first rule
If sources conflict, treat TRELLIS/TRELLIS2 details as **version-sensitive** and verify exact repo/node/model names before class.

## Teaching-first recommendation
Use **Hunyuan3D-2** as primary classroom path, TRELLIS as advanced module.

Why:
- Lower entry VRAM for shape-only demos
- Better ComfyUI ecosystem maturity for teaching
- Faster iteration for students

## RunPod baseline for 3D class
- Preferred: RTX 4090 (value) or A100 (speed/headroom)
- Expose port: `8188`
- Keep persistent volume for model cache

## Hunyuan3D path (primary)

### Common node flow
`Load Image -> Hunyuan3D Shape Generator -> (optional) Hunyuan3D Texture Generator -> Preview/Save Mesh`

### Practical VRAM tiers
- Shape-only demo: ~6GB class (mini/shape flow)
- Shape + texture: ~16GB+ recommended

### Integration options
1. **ComfyUI-3D-Pack** (class-friendly option)
2. **ComfyUI-Hunyuan3DWrapper** (advanced/manual option)

### OOM fallback order
1. Use mini/turbo variant
2. Switch to shape-only
3. Lower resolution
4. Retry with different seed

## TRELLIS path (advanced)
- Use when students need broader 3D representations or research workflow.
- Expect heavier setup and higher VRAM pressure.
- In ComfyUI environments, support quality depends on community node maturity.

## Input image rules
- Single object
- Neutral/clean background
- Clear lighting
- 512+ resolution

## Export defaults
- **GLB** as default teaching/export format
- OBJ/PLY as secondary formats for specialized pipelines

## Quick troubleshooting
- "CUDA out of memory": lower complexity using fallback order above
- "Model download failed": pre-download before class and keep persistent cache
- "Texture slow": use turbo/fast variant first for demos
- "Mesh artifacts": try new seed and cleaner input image
