import argparse
import json
import os
import re
import sys
from pathlib import Path


def extract_video_id(value: str) -> str:
    value = value.strip()
    patterns = [
        r"(?:v=)([A-Za-z0-9_-]{11})",
        r"youtu\.be/([A-Za-z0-9_-]{11})",
        r"/shorts/([A-Za-z0-9_-]{11})",
        r"/embed/([A-Za-z0-9_-]{11})",
        r"^([A-Za-z0-9_-]{11})$",
    ]
    for p in patterns:
        m = re.search(p, value)
        if m:
            return m.group(1)
    raise ValueError(f"Could not extract YouTube video id from: {value}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("url")
    parser.add_argument("--lang", default="en")
    parser.add_argument("--out")
    args = parser.parse_args()

    try:
        from youtube_transcript_api import YouTubeTranscriptApi
    except Exception as e:
        print(json.dumps({"ok": False, "error": f"youtube_transcript_api import failed: {e}"}, ensure_ascii=False))
        sys.exit(2)

    try:
        video_id = extract_video_id(args.url)
        api = YouTubeTranscriptApi()
        transcript = api.fetch(video_id, languages=[args.lang, 'en'])
        items = transcript.to_raw_data() if hasattr(transcript, 'to_raw_data') else list(transcript)
        text = "\n".join((item.get('text', '') if isinstance(item, dict) else getattr(item, 'text', '')) for item in items).strip()
        out_path = None
        if args.out:
            out_path = str(Path(args.out))
            Path(out_path).parent.mkdir(parents=True, exist_ok=True)
            Path(out_path).write_text(text, encoding='utf-8')
        print(json.dumps({
            "ok": True,
            "videoId": video_id,
            "language": getattr(transcript, 'language_code', args.lang),
            "savedTo": out_path,
            "chars": len(text)
        }, ensure_ascii=False))
    except Exception as e:
        print(json.dumps({"ok": False, "error": str(e)}, ensure_ascii=False))
        sys.exit(1)


if __name__ == "__main__":
    main()
