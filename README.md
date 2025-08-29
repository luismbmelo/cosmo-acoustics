# cosmo-acoustics
Sound cosmology simulation 


# 🌌 Looping Constellations

**Cosmo Acoustics** is a web-based musical instrument that lets you compose beats and ambient soundscapes by arranging planets, stars, and other cosmic objects in orbit. Inspired by hip-hop, dub, techno, and ambient/drone music, it combines rhythm with cosmic visuals into a playful, generative sound environment.

---

## ✨ Features

- **Planetary Sequencer**: Place planets on orbital paths — when they cross the pulse line, sounds are triggered.
- **Cosmic Objects**: Extend beyond beats with stars (drones), moons (subdivisions), comets (irregular hits), nebulae (effect zones), and black holes (time warps).
- **Real-Time Audio**: Powered by [Tone.js](https://tonejs.github.io/) for low-latency sample playback and synthesis.
- **Cosmic Visuals**: Canvas2D rendering of orbits and trails (designed to be swappable with WebGL/Three.js in the future).
- **Dub/Techno Flavor**: Live gestures like delay throws, reverb swells, and filter sweeps.
- **Save/Load**: Serialize constellations as JSON for local storage and sharing.
- **Cross-Platform**: Runs in modern browsers, with support for desktop and mobile touch gestures.

---

## 🏗️ Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) for UI & state management.
- [Vite](https://vitejs.dev/) for fast development and optimized builds.
- [Tone.js](https://tonejs.github.io/) for audio synthesis, samples, and effects.
- **Canvas2D** for visuals (with an abstraction layer for future WebGL expansion).

---

## 📂 Project Structure

```
src/
├─ components/       # React UI components (controls, palettes, panels)
├─ engine/           # Core instrument logic
│   ├─ audio/        # AudioEngine (Tone.js integration)
│   ├─ orbit/        # OrbitEngine (math + scheduling)
│   ├─ render/       # Renderer (Canvas2D now, WebGL later)
│   └─ interaction/  # Input/gesture handling
├─ state/            # React Context + global app state
├─ App.tsx           # Root component
└─ main.tsx          # Entry point
public/              # Static assets (samples, large audio files)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (>= 18)

### Installation

```bash
git clone https://github.com/your-username/looping-constellations.git
cd looping-constellations
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🎮 Usage

- Add objects from the **palette** (planets, moons, stars, etc.).
- Drag to set orbit radius (loop length).
- Adjust parameters (sound, FX, volume, color).
- Use the **controls panel** to set BPM, global delay, reverb, and filters.
- Save your constellation as JSON to reload later.

---

## 🌠 Roadmap

- [ ] PWA support for offline use.
- [ ] Collaborative sharing of constellations.
- [ ] MIDI/OSC support for external control.
- [ ] Expanded sound libraries and effect chains.
- [ ] 3D/WebGL renderer (Three.js)? 

---

## 🤝 Contributing

Contributions are welcome!  Reach out!

---

## 📜 License

MIT License — feel free to use, modify, and share.

---

## 🙏 Acknowledgments

- [Tone.js](https://tonejs.github.io/) for making web audio accessible.
- Cosmic inspiration from the hip-hop, dub (techno), and ambient/drone cultures.



