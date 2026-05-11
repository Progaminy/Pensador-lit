// ===== BASE DE CONHECIMENTO =====
// 🔧 EDITA AQUI PARA ADICIONAR MAIS CONTEÚDO!

const KnowledgeBase = {
    // Lista de categorias (aparecem na sidebar)
    categories: [
        { id: 'html', name: '🔧 HTML', cssClass: 'html-nav' },
        { id: 'css', name: '📚 CSS', cssClass: 'css-nav' },
        { id: 'javascript', name: '🤔 JavaScript', cssClass: 'js-nav' },
        { id: 'outros', name: '💬 Outros', cssClass: 'outros-nav' }
    ],

    // Conteúdo das bibliotecas
    topics: {
        html: {
            title: '🔧 HTML - HyperText Markup Language',
            description: 'Aprenda a estrutura da web com HTML',
            items: {
                'tags-html': {
                    title: 'Tags HTML Básicas',
                    content: `
                        <h3>🏗️ Estrutura HTML</h3>
                        <p>HTML é a base de toda página web. Aqui estão as tags essenciais:</p>
                        <div class="code-block">
                            <div class="code-body"><pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Minha Página&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Título Principal&lt;/h1&gt;
    &lt;h2&gt;Subtítulo&lt;/h2&gt;
    &lt;p&gt;Parágrafo de texto&lt;/p&gt;
    &lt;a href="https://exemplo.com"&gt;Link&lt;/a&gt;
    &lt;img src="foto.jpg" alt="Descrição"&gt;
    
    &lt;ul&gt;
        &lt;li&gt;Item da lista&lt;/li&gt;
    &lt;/ul&gt;
    
    &lt;div&gt;Container de bloco&lt;/div&gt;
    &lt;span&gt;Container inline&lt;/span&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre></div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>
                        <p>📌 <strong>Dica:</strong> Sempre feche as tags e use indentação!</p>
                    `
                },
                'tags-semanticas': {
                    title: 'Tags Semânticas HTML5',
                    content: `
                        <h3>📐 HTML Semântico</h3>
                        <p>Tags semânticas dão significado ao conteúdo, melhorando SEO e acessibilidade:</p>
                        <div class="code-block">
                            <div class="code-body"><pre><code>&lt;header&gt;
    &lt;nav&gt;Menu de navegação&lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
    &lt;article&gt;
        &lt;h1&gt;Título do Artigo&lt;/h1&gt;
        &lt;section&gt;
            &lt;h2&gt;Seção&lt;/h2&gt;
            &lt;p&gt;Conteúdo...&lt;/p&gt;
        &lt;/section&gt;
    &lt;/article&gt;
    
    &lt;aside&gt;Conteúdo lateral&lt;/aside&gt;
&lt;/main&gt;

&lt;footer&gt;© 2026&lt;/footer&gt;</code></pre></div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                            </div>
                        </div>
                    `
                },
                'box-model': {
                    title: 'Box Model (Modelo de Caixa)',
                    content: `
                        <h3>📦 Box Model CSS</h3>
                        <p>Todo elemento HTML é uma caixa retangular:</p>
                        <div class="code-block">
                            <div class="code-body"><pre><code>.elemento {
    /* Conteúdo */
    width: 300px;
    height: 200px;
    
    /* Preenchimento interno */
    padding: 20px;
    
    /* Borda */
    border: 2px solid #333;
    
    /* Margem externa */
    margin: 30px;
    
    /* Box sizing recomendado */
    box-sizing: border-box;
}</code></pre></div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>
                        <p>📏 <strong>Ordem:</strong> Content → Padding → Border → Margin</p>
                    `
                }
            }
        },
        css: {
            title: '📚 CSS - Cascading Style Sheets',
            description: 'Estilize suas páginas com CSS',
            items: {
                'flexbox': {
                    title: 'Flexbox Layout',
                    content: `
                        <h3>🎯 Flexbox</h3>
                        <p>Layout moderno e flexível:</p>
                        <div class="code-block">
                            <div class="code-body"><pre><code>.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.item {
    flex: 1;
    min-width: 200px;
    padding: 20px;
}</code></pre></div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                            </div>
                        </div>
                    `
                },
                'grid': {
                    title: 'CSS Grid',
                    content: `
                        <h3>📊 Grid Layout</h3>
                        <div class="code-block">
                            <div class="code-body"><pre><code>.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.grid-item {
    padding: 30px;
    background: #f0f0f0;
}</code></pre></div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                            </div>
                        </div>
                    `
                }
            }
        },
        javascript: {
            title: '🤔 JavaScript - Linguagem da Web',
            description: 'Dê vida às suas páginas',
            items: {
                'fundamentos': {
                    title: 'Fundamentos JavaScript',
                    content: `
                        <h3>⚡ Variáveis e Funções</h3>
                        <div class="code-block">
                            <div class="code-body"><pre><code>// Variáveis modernas
const nome = "Pensador";
let contador = 0;

// Arrow Function
const saudacao = (nome) => {
    return \`Olá \${nome}! 🚀\`;
};

// Template Literals
console.log(\`Bem-vindo, \${nome}!\`);</code></pre></div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                            </div>
                        </div>
                    `
                },
                'arrays': {
                    title: 'Arrays e Métodos',
                    content: `
                        <h3>📚 Manipulação de Arrays</h3>
                        <div class="code-block">
                            <div class="code-body"><pre><code>const numeros = [1, 2, 3, 4, 5];

// Map, Filter, Reduce
const dobrados = numeros.map(n => n * 2);
const pares = numeros.filter(n => n % 2 === 0);
const soma = numeros.reduce((a, b) => a + b, 0);</code></pre></div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                            </div>
                        </div>
                    `
                }
            }
        },
        outros: {
            title: '💬 Outros Tópicos',
            description: 'Tópicos adicionais',
            items: {
                'acessibilidade': {
                    title: 'Acessibilidade Web',
                    content: '<h3>♿ Web para Todos</h3><p>Use ARIA labels, contraste adequado e navegação por teclado.</p>'
                },
                'performance': {
                    title: 'Performance Web',
                    content: '<h3>⚡ Otimização</h3><p>Minificar CSS/JS, usar lazy loading e cache eficiente.</p>'
                }
            }
        }
    },

    // 🔧 Função para ADICIONAR nova categoria
    addCategory(id, name, cssClass) {
        this.categories.push({ id, name, cssClass });
        this.topics[id] = { title: name, description: '', items: {} };
    },

    // 🔧 Função para ADICIONAR novo tópico
    addTopic(categoryId, topicId, title, content) {
        if (this.topics[categoryId]) {
            this.topics[categoryId].items[topicId] = { title, content };
        }
    }
};

// ===== RENDERIZAR MENUS =====
function renderNavigation() {
    const navHTML = KnowledgeBase.categories.map(cat => 
        `<button class="nav-item ${cat.cssClass}" onclick="Chat.showTopicOptions('${cat.id}')">${cat.name}</button>`
    ).join('');
    
    document.getElementById('navButtons').innerHTML = navHTML;

    const quickHTML = KnowledgeBase.categories.slice(0, 3).map(cat =>
        `<button class="quick-btn" onclick="Chat.showTopicOptions('${cat.id}')">${cat.name}</button>`
    ).join('');
    
    document.getElementById('quickActions').innerHTML = quickHTML;
}

// Inicializar menus quando a página carregar
document.addEventListener('DOMContentLoaded', renderNavigation);
