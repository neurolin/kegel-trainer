# 凯格尔跟练 — GitHub Pages PWA

一个手机优先、可离线使用的凯格尔/盆底肌跟练计时器。

## 功能

- 10 轮训练：收缩 → 放松
- 每阶段时长可在 **3–20 秒**之间调整
- 默认 6 秒，并会记住上次设置
- 中文语音提示“收缩 / 放松”并逐秒报数
- 语音可随时关闭
- 暂停、继续、重置、进度显示
- 手机支持时提供震动提示
- PWA，可安装到 iPhone / Android 主屏幕并离线使用

> 语音使用手机/浏览器自带的中文语音合成功能。应用会优先选择常见中文女声；不同手机系统提供的声音名称不同，因此最终音色由设备决定。

## 更新已有 GitHub Pages

如果仓库已经部署过旧版本：

1. 解压 ZIP。
2. 用 ZIP 中的新文件覆盖仓库根目录的旧文件，尤其是 `index.html`、`manifest.webmanifest`、`sw.js`。
3. Commit changes。
4. GitHub Pages 会自动重新部署。
5. 手机上若仍显示旧版，可完全关闭 PWA 后重新打开；必要时在 Safari/Chrome 访问一次网页地址刷新缓存。

## 首次部署

1. 在 GitHub 新建仓库，例如 `kegel-trainer`。
2. 将本 ZIP 解压后，把里面所有文件直接上传到仓库根目录。
3. `Settings` → `Pages` → `Deploy from a branch`。
4. Branch 选择 `main`，Folder 选择 `/ (root)`。
5. 地址通常为：`https://你的GitHub用户名.github.io/kegel-trainer/`

本项目使用相对路径，适配 GitHub Pages 仓库子目录。
