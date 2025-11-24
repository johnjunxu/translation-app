# SnapTranslate 开发指南

本指南提供了设置开发环境、理解项目结构和为 SnapTranslate 贡献代码的说明。

## 项目结构

```
.
├── .gitignore          # 指定 Git 忽略的未跟踪文件
├── CHANGELOG.md        # 记录每个版本的显著变化
├── DEVELOPMENT.md      # 本开发指南（英文版）
├── DEVELOPMENT.zh-CN.md# 本开发指南（中文版）
├── Dockerfile          # 定义如何构建 Docker 镜像
├── index.html          # 前端主 HTML 文件
├── package.json        # Node.js 项目元数据和依赖
├── package-lock.json   # 记录精确的依赖树
├── README.md           # 项目概述和使用说明（英文版）
├── README.zh-CN.md     # 项目概述和使用说明（中文版）
├── script.js           # 前端 JavaScript 逻辑
├── server.js           # 后端 Node.js/Express 服务器
└── style.css           # 前端 CSS 样式
```

## 本地开发环境设置

### 先决条件

-   Node.js (推荐 LTS 版本)
-   npm (Node Package Manager)

### 步骤

1.  **克隆仓库：**
    ```bash
    git clone https://github.com/johnjunxu/translation-app.git
    cd translation-app
    ```

2.  **安装依赖：**
    ```bash
    npm install
    ```

3.  **启动本地服务器：**
    ```bash
    node server.js
    ```
    服务器将在 `http://localhost:3000` 启动。

4.  **在浏览器中打开：**
    在您的网络浏览器中导航到 `http://localhost:3000`。

## 部署到 Google Cloud Run

本项目可以部署到 Google Cloud Run，以实现无服务器、可扩展的应用程序。

### 先决条件

-   已配置 Google Cloud SDK 和您的项目。
-   已安装 Docker (如果需要本地构建，尽管 Cloud Build 会处理)。

### 步骤

1.  **确保 `gcloud` 已通过身份验证并为您的项目配置。**
    ```bash
    gcloud auth login
    gcloud config set project [YOUR_PROJECT_ID]
    ```

2.  **构建 Docker 镜像并将其推送到 Google Container Registry (GCR)：**
    ```bash
    gcloud builds submit --tag gcr.io/[YOUR_PROJECT_ID]/translation-app
    ```

3.  **将镜像部署到 Google Cloud Run：**
    ```bash
    gcloud run deploy translation-app --image gcr.io/[YOUR_PROJECT_ID]/translation-app \
        --platform managed \
        --region us-central1 \
        --allow-unauthenticated
    ```
    (如果需要，请将 `us-central1` 替换为您所需的区域。)

## 贡献

我们欢迎贡献！请遵循以下步骤：

1.  Fork 仓库。
2.  创建一个新分支用于您的功能或错误修复 (`git checkout -b feature/your-feature-name`)。
3.  进行您的更改。
4.  提交您的更改 (`git commit -m 'feat: Add your feature'`)。
5.  推送到您的 fork (`git push origin feature/your-feature-name`)。
6.  向原始仓库的 `main` 分支打开一个 Pull Request。

## 联系

如需支持或有疑问，请联系：john.junx@gmail.com
