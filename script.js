document.addEventListener('DOMContentLoaded', () => {
    const statusDisplay = document.getElementById('status');
    const originalTextDisplay = document.getElementById('originalText');
    const translatedTextDisplay = document.getElementById('translatedText');
    const textInput = document.getElementById('textInput');
    const translateButton = document.getElementById('translateButton');
    const speakToggle = document.getElementById('speakToggle');
    const copyButton = document.getElementById('copyButton');

    // --- 复制功能 ---
    copyButton.addEventListener('click', () => {
        const textToCopy = translatedTextDisplay.textContent;
        if (textToCopy && textToCopy !== '...') {
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Copied to clipboard!');
            }, (err) => {
                console.error('Could not copy text: ', err);
            });
        }
    });

    // --- 文本翻译功能 ---
    translateButton.addEventListener('click', translateText);

    async function translateText() {
        const text = textInput.value.trim();
        if (!text) {
            alert('Please enter text to translate!');
            return;
        }
        statusDisplay.textContent = 'Translating...';
        originalTextDisplay.textContent = text;
        translatedTextDisplay.textContent = '...';
        try {
            const response = await fetch('/translate-text', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: text }),
            });
            if (!response.ok) {
                throw new Error(`Server error: ${response.statusText}`);
            }
            const data = await response.json();
            statusDisplay.textContent = 'Translation complete!';
            translatedTextDisplay.textContent = data.translatedText;
            if (speakToggle.checked) {
                speak(data.translatedText);
            }
        } catch (error) {
            console.error('Translation failed:', error);
            statusDisplay.textContent = 'Error: Translation failed.';
        }
    }

    // --- 语音合成 ---
    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        // 使用正则表达式检测是否包含中文字符
        const isChinese = /[\u4e00-\u9fa5]/.test(text);
        utterance.lang = isChinese ? 'zh-CN' : 'en-US';
        window.speechSynthesis.speak(utterance);
    }
});
