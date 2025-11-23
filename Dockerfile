# 使用官方 Node.js 18 LTS 镜像作为基础镜像
FROM node:18-slim

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 并安装依赖
# 这一步单独进行，可以利用 Docker 缓存，加快后续构建速度
COPY package*.json ./
RUN npm install --production

# 复制应用的其他文件
COPY . .

# Cloud Run 默认监听 8080 端口
ENV PORT 8080

# 启动服务器
CMD ["node", "server.js"]
