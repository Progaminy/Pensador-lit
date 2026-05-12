// ===== BASE DE CONHECIMENTO =====
// 🔧 EDITA AQUI PARA ADICIONAR MAIS CONTEÚDO!

const KnowledgeBase = {
    // Lista de categorias (aparecem na sidebar)
    categories: [
        { id: 'html', name: '🔧 HTML', cssClass: 'html-nav' },
        { id: 'css', name: '📚 CSS', cssClass: 'css-nav' },
        { id: 'javascript', name: '🤔 JavaScript', cssClass: 'js-nav' },
        { id: 'outros', name: '💬 Outros', cssClass: 'outros-nav' },
        { id: 'brev', name: 'Brevimente', cssClass: 'brev-nav' }
    ],

    // Conteúdo das bibliotecas
    topics: {
        html: {
            title: '🔧 HTML - HyperText Markup Language',
            description: 'Aprenda a estrutura da web com HTML',
            items: {
                'comentario-html5': {
                    title: 'Comentario em HTML',
                    content: `
                        <h3>🏗️ Comenatarios em HTML</h3>
                        <p>Em HTML, comentários são trechos de texto que são ignorados pelo navegador. Eles servem para desenvolvedores organizarem o código, fazerem anotações ou desativarem partes do código temporariamente.</p>

                        <h4> Comentário de uma linha:</h4>

                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
&lt;!-- Comentario --&gt;
                                    </code>
                                </pre>
                            <div class="code-actions">
                            
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                         <h4> Comentário de múltiplas linhas:</h4>
                         
                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
&lt;!--
    Seção de depoimentos
    Autor: Pensadoe Sem Fronteiras
    Atualizado em: 12/05/2026
    TODO: Adicionar mais depoimentos
--&gt;
                                    </code>
                                </pre>
                            <div class="code-actions">
                            
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h4> Desativando código temporariamente:</h4>
                         
                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
&lt;!--
&lt;div class="banner-antigo"&gt;
    &lt;p&gt;Este banner está desativado para testes&lt;/p&gt;
&lt;/div&gt;
--&gt;
                                    </code>
                                </pre>
                            <div class="code-actions">
                            
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>
                         <p>📌 <strong>Dica:</strong> Comente sempre o texo do codigo para que serve!</p>
                    `
                },

                'codigo-base-html5': {
                    title: 'Codigo base em HTML5',
                    content: `
                        <h3>Codigo base em HTML5</h3>
                        <p>Para programar em HTML 5 e necessario o codigo base:</p>
                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
&lt;!DOCTYPE html&gt;
&lt;html lang="pt-pt"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;!-- Conteudo --&gt;
    
&lt;/body&gt;
&lt;/html&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>
                         <p>📌 <strong>Dica:</strong> Sempre feche as tags e use indentação!</p>
                    `
                },
                'tags-html': {
                    title: 'Tags em HTML',
                    content: `
                        <h3>Tags em HTML</h3>
                        <p>Tags são os elementos fundamentais do HTML. Elas definem a estrutura e o conteúdo de uma página web.</p>
                        <p>As Tags sao classificadas em Categorias que sao:</p>
                        <p><strong>Meta/head</strong> sao aquelas que fazem parte, head a extrutura base ou iniciaal do html</p>
                        <p>O elemento &lt;head&gt; é a secção de metadados do HTML. Invisível ao utilizador, mas essencial para navegadores e motores de busca.</p>
                        <h4>&lt;head&gt; Estrutura base inicial:</h4>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;!DOCTYPE html&gt;
&lt;html lang="pt"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;title&gt;Título da Página&lt;/title&gt;
&lt;meta name="description" content="Descrição da página"&gt;
&lt;link rel="stylesheet" href="estilos.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- Conteúdo visível --&gt;
&lt;/body&gt;
&lt;/html&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <p>Tag para Definir o título da página. Aparece no separador do navegador. Obrigatória</p>
                        
                        <h4>&lt;title&gt; title - titulo da pagina:</h4>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;title&gt;Título da Página&lt;/title&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <p>Tag para Definir letras que aceitam acentos</p>
                        
                        <h4>&lt;title&gt; Charset::</h4>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;meta charset="UTF-8"&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>
                    `

                },






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
        },
        brev: {
            title: 'Brevimente',
            description: 'Tópicos breves adicionais',
            items: {
                'breve acessar': {
                    title: 'aula 1 breve',
                    content: '<h3>todo mundo quer aprender brevimwnte.</p>'
                },
                'andar breve': {
                    title: 'aula2',
                    content: '<h3>⚡ anadr</h3><p>ir ao esudio.</p>'
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

    const quickHTML = KnowledgeBase.categories.slice(0, 4).map(cat =>
        `<button class="quick-btn" onclick="Chat.showTopicOptions('${cat.id}')">${cat.name}</button>`
    ).join('');

    document.getElementById('quickActions').innerHTML = quickHTML;
}

// Inicializar menus quando a página carregar
document.addEventListener('DOMContentLoaded', renderNavigation);
