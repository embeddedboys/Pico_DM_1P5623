# Pico DM 1P5623

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://embeddedboys.github.io/Pico_DM_1P5623/)

基于树莓派 Pico 的 LVGL 开发/评估板的文档网站。

## 📖 文档

访问：https://embeddedboys.github.io/Pico_DM_1P5623/

## 🚀 项目结构

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 命令

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 安装依赖                                        |
| `npm run dev`             | 启动本地开发服务器 `localhost:4321`            |
| `npm run build`           | 构建生产网站到 `./dist/`                        |
| `npm run preview`         | 本地预览构建结果                                |

## 📦 部署

文档通过 GitHub Actions 自动部署到 GitHub Pages。

- 推送到 `master` 分支会自动触发构建和部署
- 部署配置见 `.github/workflows/deploy.yml`
- 网站地址：https://embeddedboys.github.io/Pico_DM_1P5623/

## 👀 相关链接

- [Starlight 文档](https://starlight.astro.build/)
- [Astro 文档](https://docs.astro.build)
- [项目 GitHub](https://github.com/embeddedboys/Pico_DM_1P5623)
