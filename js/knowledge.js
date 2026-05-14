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

                            </div>
                            
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
                            </div>
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

                        <p>Definir escala e visibilidade da oagina</p>
                        
                        <h4>Viewport:</h4>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p>Para descrever o conteudo da pagina</p>
                        
                        <h4>Description:</h4>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;meta name="description" content="Aprenda HTML grátis com tutoriais práticos."&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p>Para colocar palavras adicionbais</p>
                        
                        <h4>Keywords:</h4>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;meta name="keywords" content="HTML, tutorial, web"&gt;;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p>Para menciuonar os autores</p>
                        
                        <h4>Author:</h4>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;meta name="robots" content="noindex, nofollow"&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p>Para abrir garficos</p>
                        
                        <h4>Open Graph:</h4>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;meta property="og:title" content="Título para partilha"&gt;
&lt;meta property="og:description" content="Descrição para o card social"&gt;
&lt;meta property="og:image" content="https://exemplo.com/imagem.jpg"&gt;
&lt;meta property="og:url" content="https://exemplo.com/pagina"&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                         <p>Paea refrescar a pagina</p>
                        
                        <h4>Refresh/Redirecionamento::</h4>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;meta http-equiv="refresh" content="5; url=https://novosite.com"&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p>link estabelece relacoa com recursos ewxtrnos</p>
                        
                        <h4>link:</h4>

                        <h5>exemplo com link de <strong>css</strong> externo</h5>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;link rel="stylesheet" href="estilos.css"&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <h5>exemplo com link de <strong>Favicon:</strong> externo</h5>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;link rel="icon" type="image/png" href="favicon.png"&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <h5>exemplo com link de <strong>Pré-conexão</strong> externo</h5>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;

                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <h5>exemplo com link de <strong>Pré-conexão</strong> externo</h5>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;link rel="preload" href="fonte.woff2" as="font" type="font/woff2" crossorigin&gt;

                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>
                        <h5>exemplo com link de <strong>Canonical:</strong> externo</h5>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>

&lt;link rel="canonical" href="https://exemplo.com/pagina"&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <h4>Resumo da estrutura inicial completa:</h4>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;!DOCTYPE html&gt;
&lt;html lang="pt"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Título&lt;/title&gt;
    &lt;meta name="description" content="Descrição"&gt;
    &lt;link rel="icon" href="favicon.ico"&gt;
    &lt;link rel="stylesheet" href="estilos.css"&gt;
    &lt;script src="script.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;!-- Tudo aqui é visível (Conteudo) --&gt;

&lt;/body&gt;
&lt;/html&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                    `
                },
                'tags-html': {
                    title: 'Tags em HTML',
                    content: `
                        <h3>Tags em HTML</h3>
                        <p>Tags são os elementos fundamentais do HTML. Elas definem a estrutura e o conteúdo de uma página web.</p>
                        <p>As Tags que tem conteuo interno abri e fecha, as que nao tem conteudo onterno nao fecha:</p>
                        
                        <h4>Estrutura de uma tag que abre e fecha<h4/>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;nome-da-tag&gt;conteúdo&lt;/nome-da-tag&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>


                        <h4>Estrutura de uma tag que que nao fecha, auto auto-fechamento (self-closing)<h4/>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;nome-da-tag&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                         <h4>TAg de Atributo:<h4/>

                         <p>Tags de atributo sao aqueis que podem fornecer informações adicionais</p>


                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;a href="link-ou-caminho-da-informacao" target="_comportamento"&gt;Link&lt;/a&gt;
&lt;img src="caminho ou-link-da-informacao" alt="Texto alternativo" width="tamanho;/a&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <h4>Aninhamento:<h4/>

                         <p>Tags podem ser colocadas dentro de outras, formando uma hierarquia:</p>


                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;nome-da-tag-1&gt;
    &lt;nome-da-tag-2&gt;Título&lt;nome-da-tag-2/&gt;
    &lt;nome-da-tag-3&gt;Parágrafo dentro da div.&lt;/nome-da-tag-3&gt;
&lt;/nome-da-tag-1&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                            <p>Regra de ouro: a última tag a abrir deve ser a primeira a fechar.</p>
                        </div>

                        <h4>Tags Estruturais:<h4/>
                         <p>Tags Estruturais, sao aqueis que fazem parte da estrutura toda da pagina.</p>


                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;html&gt;
&lt;head&gt;
&lt;body&gt;
    &lt;div class="container"&gt;
        &lt;header&gt;
            <p>o conteudo do cabecalho</p>
        &lt;/header&gt;
        &lt;nav&gt;
        <p>conteudo na navegacao</p>
        &lt;/nav&gt;
        &lt;main&gt;
            <p>conteudo da pagina</p>
            &lt;section&gt;
            <p>seccoes podem ter varias</p>
            &lt;/section&gt;
            &lt;article&gt;
                <p>artigos podem ter varios</p>
            &lt;/article&gt;
            &lt;aside&gt;
                <p>conteúdo relacionado ao conteúdo principal, informações complementares. pode tewr varios</p>
            &lt;/aside&gt;
            &lt;div&gt;
                <p>divisoes de site, podem ter vairias</p>
            &lt;/div&gt;
            &lt;span&gt;
                <p>contêiner genérico inline </p>
            &lt;/span&gt;
        &lt;/main&gt;
        &lt;footer&gt;
            <p>Roda pe</p>
        &lt;/footer&gt;
    &lt;div&gt;
&lt;/body&gt;
&lt;/head&gt;
&lt;/html&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                            <p>Regra de ouro: e importamnte manter a estrutura duma forma semantica, isso ajuda o navegador para busca e filtros.</p>
                        </div>


                        <h4>Texto:<h4/>
                        <p><strong>&lt;h&gt;</strong> heraquia de titulo vai de <strong>&lt;h1&gt;</dtrong> ate <strong>&lt;h6&gt;</strong></p>
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;h1&gt;<h1>Titulo 1</h1>&lt;/h1&gt;
&lt;h2&gt;<h2>Titulo 2</h2>&lt;/h2&gt;
&lt;h3&gt;<h3>Titulo 3</h3>&lt;/h3&gt;
&lt;h4&gt;<h4>Titulo 4</h4>&lt;/h4&gt;
&lt;h5&gt;<h5>Titulo 5</h5>&lt;/h5&gt;
&lt;h6&gt;<h6>Titulo 6</h6>&lt;/h6&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p><strong>&lt;p&gt;</strong> difine o paragrafo:</p>
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;p&gt; Conteudo do Paragrafo &lt;/p&gt
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p><strong>&lt;strong&gt;</strong> colocar em nergrito:</p>
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;strong&gt;<strong>Texto em Negrito</strong> &lt;strong&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p><strong>&lt;em&gt;</strong> colocar em italico:</p>
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;em&gt;<em>Texto em Italico</em> &lt;em&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p><strong>&lt;blockquote&gt;</strong> citacoes (citar fontes externas):</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
<h4>&lt;!-- Citacao basica --&gt</h4>
&lt;blockquote&gt;
    <blockquote>
    &lt;p&gt;A citacao .&lt;/p&gt;
    &lt;cite&gt;— Nome do autor&lt;/cite&gt;
    </blockquote>
&lt;/blockquote&gt;

<h4>&lt;!-- Citacao com atributo --&gt;</h4>
&lt;blockquote cite="https://www.exemplo.com/artigo".&gt;
    &lt;p&gt;Escrecer o texto a citacao.&lt;/p&gt;
    &lt;footer&gt; <footer> — Nome ou fonte exeterna </footer>    &lt;/footer&gt;
&lt;/blockquote&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p><strong>&lt;q&gt;</strong> citações curtas inline (citar autores e fontes externas):</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
<h4>&lt;!-- Citacao basica inline --&gt</h4>
&lt;p&gt;nome do autor/ name da fonte disse: &lt;q&gt; <q>a citacao</q>.&lt;/p&gt;

<h4>&lt;!-- Citacao inline com atriibuto --&gt</h4>
&lt;p>Como diz o artigo: 
   &lt;q <q>cite="https://exemplo.com/html/"&gt;o texto citado&lt; </q>/q&gt;.
&lt;/p>
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                   

                        <p><strong>&lt;pre&gt;</strong> colocar textos pre-formatado (manter como foi escrito):</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;pre&gt;
<pre>
Texto 
pre-formatdo
</pre>
&lt/pre&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p><strong>&lt;code&gt;</strong> marcar trechos de código-fonte dentro de um texto, indicando semanticamente que aquele conteúdo é um código de programação:</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;pre&gt;
    &lt;code&gt;
        colocar o 
        código de programaçãoo
    &lt/code&gt;
&lt;/pre&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p><strong>&lt;br&gt;</strong> Quebra de linha, nova linha:</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
<p>&lt;p&gt;Texto quebrado &lt;br&gt; nova linha&lt;/p&gt;</p>
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p><strong>&lt;hr&gt;</strong> linha de separaco horizontal:</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
<p>&lt;p&gt;Texto 1 &lt;/p&gt;</p>
&lt;hr&gt;
<p>&lt;p&gt;Texto 2 &lt;/p&gt;</p>
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <h4>Listas:</h4>

                        <p><strong>&lt;ul&gt;</strong> Listas nao ordenais (nao inumeradas):</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;p&gt;<strong>Lista 1</strong>&lt;/p&gt;
<p>&lt;p&gt;ul;/p&gt;</p>
    &lt;li&gt;intem 1&lt;/li&gt;
    &lt;li&gt;item 2&lt;/li&gt;
    &lt;li&gt;item 3&lt;/li&gt;
<p>&lt;p&gt;ul;/p&gt;</p>
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p><strong>&lt;ol&gt;</strong> Listas ordenadas (numeradas):</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;p&gt;<strong>Lista 1</strong>&lt;/p&gt;
<p>&lt;p&gt;ol;/p&gt;</p>
    &lt;li&gt;intem 1&lt;/li&gt;
    &lt;li&gt;item 2&lt;/li&gt;
    &lt;li&gt;item 3&lt;/li&gt;
<p>&lt;p&gt;ol;/p&gt;</p>
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                        </div>

                        <p><strong>&lt;ol type="tipo de contagem"&gt;</strong> Nas listas ordenadas (numeradas), a contagem pode ser de varios tipos: (type="1", type="I",type="i", type="A" type="a")</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;p&gt;<strong>Lista 1</strong>&lt;/p&gt;
<p>&lt;p&gt;ol type="1";/p&gt;</p>
    &lt;li&gt;intem 1&lt;/li&gt;
    &lt;li&gt;item 2&lt;/li&gt;
    &lt;li&gt;item 3&lt;/li&gt;
<p>&lt;p&gt;ol;/p&gt;</p>
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                            <p>A numeracao sera automatica.</p>
                        </div>


                        <p><strong>&lt;ol start="posicao pretendida para iniciar contagem em nr"&gt;</strong> Nas listas ordenadas (numeradas), a contagem pode comecar em qualq2uer posicao da lista.</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;p&gt;<strong>Lista 1</strong>&lt;/p&gt;
<p>&lt;p&gt;ol type="5";/p&gt;</p>
    &lt;li&gt;intem 1&lt;/li&gt;
    &lt;li&gt;item 2&lt;/li&gt;
    &lt;li&gt;item 3&lt;/li&gt;
<p>&lt;p&gt;ol;/p&gt;</p>
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <span><button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button></span>
                                <span><button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button></span>
                                 <span><button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button></span>
                            </div>
                            <p>A numeracao sera automatica.</p>
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
