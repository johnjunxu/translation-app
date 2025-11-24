# SnapTranslate

一个简洁、美观且响应式的翻译 Web 应用程序。

## 功能特性

-   **自动语言检测**：自动检测输入文本是中文还是英文，并将其翻译成另一种语言。
-   **文本转语音**：朗读翻译后的文本。
-   **复制到剪贴板**：轻松复制翻译后的文本。
-   **响应式设计**：在桌面和移动设备上都能良好显示。

## 技术栈

-   **前端**：HTML、CSS、JavaScript
-   **后端**：Node.js、Express
-   **翻译 API**：MyMemory API

## 如何在本地运行

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
