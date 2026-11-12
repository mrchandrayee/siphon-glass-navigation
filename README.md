# SIPHON — Glass Navigation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/siphon-glass-navigation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 5-second screen recording.

## What appears in the video

- Dark charcoal canvas with four large, soft-focus colored gradient orbs.
- Centered serif page title and small uppercase section eyebrow.
- Floating translucent glass navigation capsule.
- Four navigation options: Home, Work, Notes and About.
- Golden/orange active navigation pill that slides to the selected item.
- Sun/moon control to switch between dark and light presentation.
- Three code preview cards along the bottom: `index.html`, `siphon.css`, `siphon.js`.

The visible recording cycles through Home → Work → About, switches to a light theme, then returns to Work.

## Implemented behavior

- Animated active-pill movement based on the selected navigation item.
- Page title, eyebrow and supporting text update on navigation.
- Theme toggle changes the canvas, orb palette and glass surface.
- Responsive layout for mobile and desktop.
- Respects `prefers-reduced-motion`.
- No external libraries or build step required.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
siphon-glass-navigation/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Source accuracy

The short recording shows the UI and small source previews, but not every original line. This project recreates the visible design and behavior in complete runnable HTML, CSS and JavaScript; it is not a verbatim extraction of the creator's original source.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
