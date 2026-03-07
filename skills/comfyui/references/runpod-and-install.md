# RunPod and Installation Reference

## RunPod baseline
- GPU: RTX 4090 (24GB) baseline; A100 for heavy video/3D.
- Ports: expose `8188` for ComfyUI UI.
- Storage: at least 100GB if teaching multiple models.

## RunPod install (manual)
```bash
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI
pip install -r requirements.txt
python main.py --listen 0.0.0.0 --port 8188
```

Low-VRAM variant:
```bash
python main.py --listen 0.0.0.0 --port 8188 --reserve-vram 5
```

## Windows local options
1. ComfyUI Desktop (easy for beginners)
2. ComfyUI Windows Portable (`run_nvidia_gpu.bat`)

## ComfyUI-Manager
```bash
cd ComfyUI/custom_nodes
git clone https://github.com/ltdrdata/ComfyUI-Manager comfyui-manager
```
Restart ComfyUI after install.

## Model folder map
- `models/checkpoints/`
- `models/loras/`
- `models/vae/`
- `models/controlnet/`
- `models/text_encoders/`
- `models/upscale_models/`
- `models/embeddings/`

## Download patterns
```bash
# Hugging Face single file
huggingface-cli download REPO_ID FILE --local-dir TARGET_DIR

# Civitai direct
wget -O model.safetensors "https://civitai.com/api/download/models/ID"
```
