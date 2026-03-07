# Image Workflow Reference

## Minimal txt2img graph (7 nodes)
1. Load Checkpoint
2. CLIP Text Encode (Positive)
3. CLIP Text Encode (Negative)
4. Empty Latent Image
5. KSampler
6. VAE Decode
7. Save Image

## Baseline preset (safe default)
- Steps: 20-30
- CFG: 7-8
- Sampler: `dpmpp_2m` (or `euler`)
- Scheduler: `karras`

Resolution:
- SD1.5: 512x512 baseline
- SDXL: 1024x1024 baseline

## img2img denoise map
- 0.3-0.5: light variation
- 0.5-0.7: style transfer
- 0.7-0.9: strong change

## Control guidance quick picks
- Canny: edge control
- OpenPose: pose control
- Depth: geometry/depth control

## Prompt structure
- Positive: subject + style + lighting + composition
- Negative: `low quality, blurry, deformed, bad anatomy`
