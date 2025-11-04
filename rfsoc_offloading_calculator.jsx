{
  "name": "rfsoc-offloading-calculator",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "chart.js": "^4.4.0",
    "react-chartjs-2": "^5.2.0",
    "@/components/ui": "latest"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.15",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.3",
    "gh-pages": "^6.0.0"
  }
}

/* README.md */

# RFSoC Offloading Calculator

A React + Tailwind + Chart.js tool for evaluating the sustainability and OPEX benefits of dynamic DSP offloading on AMD RFSoC-based radio units and base stations.

## 🚀 Quick Start

```bash
# 1. Clone the repo
 git clone https://github.com/<your-username>/rfsoc-offloading-calculator.git
 cd rfsoc-offloading-calculator

# 2. Install dependencies
 npm install

# 3. Run locally
 npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the calculator.

## 🧮 Features
- Parametric estimation of daily and lifetime energy savings.
- Fleet-level OPEX and CO₂ impact modeling.
- Dynamic power modeling of PL/PS offloading and switch-over energy cost.
- Visual feedback with interactive bar charts.

## 🧠 Deployment to GitHub Pages

```bash
npm run deploy
```

Ensure GitHub Pages is enabled in your repository settings (branch: `gh-pages`).

## 📊 Integration
You can embed the calculator as a React component or deploy it standalone (e.g., on Netlify or Vercel). It can easily connect with sustainability dashboards or network management portals.

## ⚙️ Default Parameters
- PL static: 8 W  
- PL FFT active: 6 W  
- PS static: 2 W  
- PS FFT active: 3 W  
- Electricity cost: €0.25/kWh  
- CO₂ intensity: 0.30 kg/kWh  
- Lifetime: 10 years  
- Fleet size: 1000 nodes  

## 📘 Citation
If you use this tool in research, please cite:
> "Radio interface features that can play a critical role in achieving sustainability" (2025).
