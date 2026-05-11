// ===== GERENCIADOR DE CHAT =====
const Chat = {
    messages: [],

    send() {
        const input = document.getElementById('userInput');
        const text = input.value.trim();
        if (!text) return;

        const lower = text.toLowerCase();
        this.addMessage('user', text);
        input.value = '';

        // Procurar na base de conhecimento
        let found = false;

        for (const catId in KnowledgeBase.topics) {
            if (lower.includes(catId)) {
                const cat = KnowledgeBase.topics[catId];
                for (const topicId in cat.items) {
                    const topic = cat.items[topicId];
                    if (lower.includes(topic.title.toLowerCase()) || lower.includes(topicId.replace(/-/g, ' '))) {
                        this.addMessage('assistant', topic.content);
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    this.showTopicOptions(catId);
                    found = true;
                }
                break;
            }
        }

        if (!found) {
            this.addMessage('assistant', '📚 <strong>Base de Conhecimento</strong><br><br>Não encontrei informações sobre "' + text + '".<br><br>Tente: 🔧 HTML | 📚 CSS | 🤔 JavaScript | 💬 Outros');
        }
    },

    showTopicOptions(categoryId) {
        const cat = KnowledgeBase.topics[categoryId];
        if (!cat) return;

        let html = '<strong style="font-size:1.1rem;">' + cat.title + '</strong>';
        html += '<p style="color:var(--text-secondary);margin:5px 0 10px;">Escolha um tópico:</p>';
        html += '<div class="topic-options">';

        for (const topicId in cat.items) {
            html += '<button class="topic-option-btn" onclick="Chat.showTopicContent(\'' + categoryId + '\',\'' + topicId + '\')">' + cat.items[topicId].title + '</button>';
        }
        html += '</div>';
        this.addMessage('assistant', html);
    },

    showTopicContent(categoryId, topicId) {
        const topic = KnowledgeBase.topics[categoryId].items[topicId];
        if (topic) this.addMessage('assistant', topic.content);
    },

    addMessage(type, content) {
        const container = document.getElementById('messagesContainer');
        const welcome = container.querySelector('.welcome-message');
        if (welcome) welcome.style.display = 'none';

        const msgDiv = document.createElement('div');
        msgDiv.className = 'message ' + type;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = content;
        msgDiv.appendChild(contentDiv);

        const timeDiv = document.createElement('div');
        timeDiv.className = 'message-time';
        timeDiv.textContent = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        msgDiv.appendChild(timeDiv);

        container.appendChild(msgDiv);
        container.scrollTop = container.scrollHeight;

        this.messages.push({ type, content, time: new Date().toISOString() });
    },

    copyCode(btn) {
        const block = btn.closest('.code-block');
        if (!block) return;
        const code = block.querySelector('code').textContent;
        navigator.clipboard.writeText(code).then(() => {
            const orig = btn.textContent;
            btn.textContent = '✅ Copiado!';
            setTimeout(() => btn.textContent = orig, 2000);
        });
    },

    shareCode(btn, platform) {
        const block = btn.closest('.code-block');
        if (!block) return;
        const code = block.querySelector('code').textContent;
        const msg = encodeURIComponent('🧠 Pensador Sem Fronteira\n\n' + code);
        const urls = {
            whatsapp: 'https://wa.me/?text=' + msg,
            telegram: 'https://t.me/share/url?text=' + msg,
            sms: 'sms:?body=' + msg
        };
        if (urls[platform]) window.open(urls[platform], '_blank');
    },

    clear() {
        document.getElementById('messagesContainer').innerHTML = `
            <div class="welcome-message">
                <div class="welcome-icon">🧠</div>
                <h2>Pensador Sem Fronteira</h2>
                <p>Do zero ao Infinito: vamos aprender sobre:</p>
                <div class="quick-actions" id="quickActions"></div>
            </div>`;
        this.messages = [];
        renderNavigation();
    },

    export() {
        if (this.messages.length === 0) {
            alert('Nada para exportar!');
            return;
        }
        let text = '🧠 Pensador Sem Fronteira\n' + '='.repeat(50) + '\n\n';
        this.messages.forEach(m => {
            text += (m.type === 'user' ? '👤 Você' : '🤖 Pensador') + ':\n';
            text += m.content.replace(/<[^>]*>/g, '') + '\n\n' + '-'.repeat(30) + '\n\n';
        });
        const blob = new Blob([text], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'pensador-chat-' + new Date().toISOString().slice(0, 10) + '.txt';
        a.click();
    }
};

// Event listeners
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        Chat.send();
    }
});
