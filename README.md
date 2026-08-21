# 凯格尔跟练 — GitHub Pages 专用版

当前训练：**收缩 6 秒 → 放松 6 秒 × 10 轮**。

## 部署到 GitHub Pages

1. 在 GitHub 新建一个仓库，例如 `kegel-trainer`。
2. 将本 ZIP **解压后**，把里面所有文件直接上传到仓库根目录。不要把 ZIP 本身上传后就结束。
3. 仓库结构应类似：

   ```text
   kegel-trainer/
   ├── index.html
   ├── manifest.webmanifest
   ├── sw.js
   ├── icon-192.png
   ├── icon-512.png
   ├── .nojekyll
   └── README.md
   ```

4. 打开仓库 `Settings` → `Pages`。
5. `Source` 选择 `Deploy from a branch`。
6. Branch 选择 `main`，Folder 选择 `/ (root)`，然后保存。
7. 发布后地址通常是：

   `https://你的GitHub用户名.github.io/kegel-trainer/`

本版本使用相对路径，因此适配 GitHub Pages 的仓库子目录地址，不要求仓库名固定为 `kegel-trainer`。

## 安装到手机

### iPhone
Safari 打开 GitHub Pages 地址 → 分享 → **添加到主屏幕**。

### Android
Chrome 打开 GitHub Pages 地址 → 菜单 → **安装应用** 或 **添加到主屏幕**。

首次在线打开并加载完成后，应用资源会缓存，可在离线状态下继续使用。
