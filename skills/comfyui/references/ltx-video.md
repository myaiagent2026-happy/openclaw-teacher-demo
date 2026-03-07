# LTX-Video Reference

## Baseline goal
Use distilled models for class demos first, then scale quality.

## Core constraints
- Resolution must be divisible by 32.
- Frame count must be `8n+1`.
- Keep FPS consistent across video nodes.

## Practical starter preset
- Resolution: 768x512
- Frames: 121
- FPS: 25
- Steps: 8 (distilled baseline)
- CFG: 3.0

## Model guidance
- 2B distilled: lower VRAM, faster iteration.
- Larger models (13B/19B variants): higher quality, much higher VRAM/time.

## Prompting for video
Include:
1. scene and lighting
2. subject details
3. camera motion
4. motion dynamics

## Typical failures
- OOM: lower resolution/frames; use distilled or FP8 variant.
- Weak motion: add explicit action/camera-motion language.
- Blur/flicker: raise steps moderately (e.g., 8 → 10/12).
