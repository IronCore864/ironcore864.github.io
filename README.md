# www.guotiexin.com

Personal website of Tiexin Guo — about, résumé, and project portfolio. Hand-written HTML and CSS, no framework, no build step, no dependencies.

This repo replaces two older ones: the Hugo blog (`blog`, www.guotiexin.com) and the standalone CV (`cv`, cv.guotiexin.com).

Local Preview:  Any static file server works. Root-relative paths (`/assets/...`, `/cv/`) need to be served from the repo root, so opening the files via `file://` will not load the CSS.

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
