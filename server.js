const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

// --- Express 服务器配置 ---
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 提供静态文件
app.use(express.static(__dirname));

// 根路径返回 index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// --- API 路由 ---

// 处理文本翻译
app.post('/translate-text', async (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: '没有提供文本' });
    }

    try {
        // 使用正则表达式检测是否包含中文字符
        const isChinese = /[\u4e00-\u9fa5]/.test(text);
        const langpair = isChinese ? 'zh|en' : 'en|zh';

        console.log(`检测到语言: ${isChinese ? '中文' : '英文'}，目标语言: ${isChinese ? '英文' : '中文'}`);
        console.log('接收到文本，开始通过 MyMemory API 翻译:', text);

        // 调用 MyMemory API
        const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API 请求失败: ${response.statusText}`);
        }
        const data = await response.json();
        const translatedText = data.responseData.translatedText;

        console.log('MyMemory 翻译结果:', translatedText);

        res.json({
            originalText: text,
            translatedText: translatedText.trim()
        });

    } catch (error) {
        console.error('调用 MyMemory API 时出错:', error);
        res.status(500).json({ error: '处理文本时发生内部错误' });
    }
});

app.listen(port, () => {
    console.log(`服务器正在运行在 http://localhost:${port}`);
});
