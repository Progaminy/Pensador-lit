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

                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
<h4> Comentário de uma linha:</h4>
&lt;!-- Comentario --&gt;

<h4> Comentário de múltiplas linhas:</h4>
&lt;!--
    Seção de depoimentos
    Autor: Pensadoe Sem Fronteiras
    Atualizado em: 12/05/2026
    TODO: Adicionar mais depoimentos
--&gt;

<h4> Desativando código temporariamente:</h4>
&lt;!--
&lt;div class="banner-antigo"&gt;
    &lt;p&gt;Este banner está desativado para testes&lt;/p&gt;
&lt;/div&gt;
--&gt;
                                    </code>
                                </pre>

                            </div>
                            
                            <div class="code-actions">
                            
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                            <p>📌 <strong>Dica:</strong> Comente sempre o texo do codigo para que serve!</p>
                        </div>

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
                            <p>📌 <strong>Dica:</strong> Sempre feche as tags e use indentação!</p
                        </div>
                        
                        <h4>&lt;title&gt; title - titulo da pagina:</h4>
                        <p><strong>title</strong> titulo para Definir o título da página. Aparece no separador do navegador. Obrigatória</p>
                       
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

                        <h4>&lt;Charset&gt; Charset:</h4>
                        <p><strong>Tipografia</strong> para Definir letras que aceitam acentos</p>
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

                        <h4>Viewport:</h4>
                        <p><strong>Escala</strong> Definir escala e visibilidade da oagina</p>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>
                        
                        <h4>Description:</h4>
                        <p><strong>Descricao</strong> Para descrever o conteudo da pagina</p>
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;meta name="description" content="Aprenda HTML grátis com tutoriais práticos."&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>
                        
                        <h4>Keywords:</h4>
                        <p><strong>Informacao adicional</strong> Para colocar palavras adicionais</p>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;meta name="keywords" content="HTML, tutorial, web"&gt;;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>
                        
                        <h4>Author:</h4>
                        <p><strong>Referencias</strong> Para menciuonar os autores</p>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;meta name="robots" content="noindex, nofollow"&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h4>Open Graph:</h4> 
                        <p><strong>graficos</strong> abrir grafiocos</p>
                       
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
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>
                        
                        <h4>Refresh/Redirecionamento:</h4>
                        <p><strong>refrescar</strong> a pagina</p>
                       
                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
&lt;meta http-equiv="refresh" content="5; url=https://novosite.com"&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>
                        
                        <h3>link:</h3>
                        <p>link estabelece relacoa com recursos ewxtrnos</p>
                        

                        <h4>link de CSS externo</h4>
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;link rel="stylesheet" href="estilos.css"&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h4>Favicon</h4>
                        <p>Favicon pode ser com imagem externa ou interna</p>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;link rel="icon" type="image/png" href="favicon.png"&gt;
ou
<link rel="icon" href="caminho/para/favicon.ico" type="image/x-icon">
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h4>link de Pré-conexão externo</h4>
                       
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;
ou
&lt;link rel="preload" href="fonte.woff2" as="font" type="font/woff2" crossorigin&gt;

                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h4>link de Canonical: externo</h4>
                       
                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
&lt;link rel="canonical" href="https://exemplo.com/pagina"&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h3>Resumo da estrutura inicial completa:</h3>
                       
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
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                    `
                },

                'boxe-model': {
                    title: 'Boxe Model (modelo de Caixa)',
                    content: `
                        <h3>Boxe Model (Modelo de Caixa)</h3>
                        <p>Todo elemento HTML é uma caixa retangular, controlado por display (display: block, display: block-inline),</p>
                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
<h4>display: block</h4>
<p>Ocupa toda a largura disponível e quebra linha antes e depois.</p>

<style>
  .bloco {
    display: block;
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
    background: lightblue;
  }
</style>

<h4>display: inline</h4>
<p>Ocupa apenas o espaço do conteúdo, não quebra linha.</p>

<style>
  .inline {
    display: inline;
    width: 200px;     /* ❌ IGNORADO */
    height: 100px;    /* ❌ IGNORADO */
    padding: 20px;    /* ⚠️ Aplica mas não empurra outros elementos */
    margin: 10px;     /* ⚠️ Apenas horizontal funciona */
    border: 1px solid red;
    background: lightgreen;
  }
</style>

<span class="inline">Inline 1</span>
<span class="inline">Inline 2</span>
<span class="inline">Inline 3</span>
<!-- Resultado: todos na mesma linha -->

<h4>display: inline-block</h4>
<p>Fica inline mas comporta-se como block</p>

<style>
  .inline-bloco {
    display: inline-block;
    width: 150px;      /* ✅ FUNCIONA */
    height: 80px;      /* ✅ FUNCIONA */
    padding: 10px;
    margin: 10px;      /* ✅ FUNCIONA nos 4 lados */
    border: 2px solid blue;
    background: lightyellow;
  }
</style>

<h4>display: flex (Tornar a cixaa Flexivel)</h4>
<p>O Flexbox é um modelo de layout unidimensional que permite distribuir espaços e alinhar itens de forma eficiente dentro de um container, mesmo quando os tamanhos são dinâmicos ou desconhecidos.</p>

<style>
  .container {
    display: flex;  /* Ativa o Flexbox */
    background: lightblue;
    padding: 20px;
  }
  
  .item {
    background: coral;
    padding: 20px;
    margin: 10px;
    color: white;
  }
</style>

<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>

<h4>flex-direction - Direção dos itens</h4>
.container {
  display: flex;
  flex-direction: row;        /* Padrão: linha horizontal (→) */
  flex-direction: row-reverse; /* Linha reversa (←) */
  flex-direction: column;      /* Coluna vertical (↓) */
  flex-direction: column-reverse; /* Coluna reversa (↑) */
}

<h4>justify-content - Alinhamento horizontal (eixo principal)</h4>
.container {
  display: flex;
  justify-content: flex-start;   /* Início (padrão) */
  justify-content: flex-end;     /* Final */
  justify-content: center;       /* Centro */
  justify-content: space-between; /* Espaço entre itens */
  justify-content: space-around;  /* Espaço ao redor */
  justify-content: space-evenly;  /* Espaço igual */
}

<h4>align-items - Alinhamento vertical (eixo cruzado)</h4>
.container {
  display: flex;
  height: 300px;  /* Precisa de altura para ver efeito */
  align-items: stretch;    /* Estica (padrão) */
  align-items: flex-start; /* Topo */
  align-items: flex-end;   /* Base */
  align-items: center;     /* Centro */
  align-items: baseline;   /* Alinha pelo texto */
}

<h4>flex-wrap - Quebra de linha</h4>

.container {
  display: flex;
  flex-wrap: nowrap;       /* Não quebra (padrão) */
  flex-wrap: wrap;         /* Quebra linha */
  flex-wrap: wrap-reverse; /* Quebra reversa */
}

<h4>align-content - Alinhamento de múltiplas linhas</h4>
.container {
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  align-content: flex-start;    /* Topo */
  align-content: flex-end;      /* Base */
  align-content: center;        /* Centro */
  align-content: space-between; /* Espaço entre linhas */
  align-content: space-around;  /* Espaço ao redor */
}

<h4>flex-shrink - Fator de encolhimento</h4>
.item1 { flex-shrink: 1; } /* Pode encolher (padrão) */
.item2 { flex-shrink: 0; } /* NÃO encolhe */

<h4>flex-basis - Tamanho base</h4>
.item1 { flex-basis: 200px; } /* Tamanho inicial */
.item2 { flex-basis: auto; }   /* Baseado no conteúdo */

<h4>flex - Atalho (grow shrink basis)</h4>
/* Atalho mais comum */
.item {
  flex: 1;           /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
  flex: 0 1 auto;    /* Padrão */
  flex: 1 0 200px;   /* Pode crescer, não encolhe, base 200px */
}

<h4>align-self - Alinhamento individual</h4>
.item1 { align-self: flex-start; }
.item2 { align-self: center; }
.item3 { align-self: flex-end; }



                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                            <h4>Quando usar Flexbox:</h4>
                            <h5>Menus e navegação</h5>
                            <ul>
                                <li>Cards em linha</li>
                                <li>Centralizar elementos</li>
                                <li>Layouts unidimensionais</li>
                                <li>Barras laterais simples</li>
                                <li>Formulários e inputs</li>
                            </ul>
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
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
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
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
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
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
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
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
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
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                            <p>Regra de ouro: e importamnte manter a estrutura duma forma semantica, isso ajuda o navegador para busca e filtros.</p>
                        </div>

                        <h3>Texto:<h3/>
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
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h4>&lt;p&gt;</h4> 
                        <p>Conteudo do paragrafo:</p>

                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
&lt;p&gt; Conteudo do Paragrafo &lt;/p&gt
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h3>&lt;strong&gt;</h3>
                        <p>Para colocar em <strong>negrito</strong>:</p>
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;strong&gt;<strong>Texto em Negrito</strong> &lt;strong&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h4>&lt;em&gt;</h4>
                        <p>Colocar em <em>italico</em>:</p>
                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;em&gt;<em>Texto em Italico</em> &lt;em&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h4>&lt;blockquote&gt;</h4> 
                        <p>Citacoes (citar fontes externas):</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
<h4> Citacao basica </h4>
&lt;blockquote&gt;
    &lt;p&gt;A citacao .&lt;/p&gt;
    &lt;cite&gt;— Nome do autor&lt;/cite&gt;
&lt;/blockquote&gt;

<h4> Citacao com atributo </h4>
&lt;blockquote cite="https://www.exemplo.com/artigo".&gt;
    &lt;p&gt;Escrecer o texto a citacao.&lt;/p&gt;
    &lt;footer&gt; — Nome ou fonte exeterna &lt;/footer&gt;
&lt;/blockquote&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h4>&lt;q&gt;</h4>
                        <p>Citações curtas inline (citar autores e fontes externas):</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
<h4> Citacao basica inline </h4>
&lt;p&gt;nome do autor/ name da fonte disse: &lt;q&gt;a citacao.&lt;/p&gt;

<h4> Citacao inline com atriibuto </h4>
&lt;p&gt;Como diz o artigo: 
   &lt;q cite="https://exemplo.com/html/"&gt;o texto citado &lt;/q&gt;.
&lt;/p&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h4>&lt;pre&gt;</h3>
                        <p>Colocar textos pre-formatado (manter como foi escrito):</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;pre&gt;
Texto 
pre-formatdo
&lt/pre&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h4>&lt;code&gt;</h4>
                        <p>Para marcar trechos de código-fonte dentro de um texto, indicando semanticamente que aquele conteúdo é um código de programação:</p>

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
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <p><strong>&lt;br&gt;</strong> Quebra de linha, nova linha:</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;p&gt; Texto quebrado &lt;br&gt; nova linha &lt;/p&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <p><strong>&lt;hr&gt;</strong> linha de separaco horizontal:</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;p&gt; Texto 1 &lt;/p&gt;
&lt;hr&gt;
&lt;p&gt;Texto 2 &lt;/p&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h4>Listas:</h4>

                        <p><strong>&lt;ul&gt;</strong> Listas nao ordenais (nao inumeradas):</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
<h4>Lista nao ordenadas</h4>

&lt;p&gt;<strong>Lista 1</strong>&lt;/p&gt;
&lt;ul&gt;
    &lt;li&gt;intem 1&lt;/li&gt;
    &lt;li&gt;item 2&lt;/li&gt;
    &lt;li&gt;item 3&lt;/li&gt;
&lt;/ul&gt;

<h4>Mudar tipos de marcadores de listas nao ordenadas</h4>
<p>Atributos poara usar marcadores de ksta nao ordedenadas (type="disc", type="circle", type="squere", type="none") </p>

&lt;p&gt;<strong>Lista 1</strong>&lt;/p&gt;
&lt;ul&gt type="disc";
    &lt;li&gt;intem 1&lt;/li&gt;
    &lt;li&gt;item 2&lt;/li&gt;
    &lt;li&gt;item 3&lt;/li&gt;
&lt;/ul&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h3><strong>&lt;ol&gt;</strong> Listas ordenadas (numeradas):</h3>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;p&gt;<strong>Lista 1</strong>&lt;/p&gt;
&lt;ol;gt;
    &lt;li&gt;intem 1&lt;/li&gt;
    &lt;li&gt;item 2&lt;/li&gt;
    &lt;li&gt;item 3&lt;/li&gt;
&lt;/ol&gt;

<h4>Mudar tipo de Contagem nas listas ordenadas</h4>
<p>para mudar tipos de Contagem (type"="1, type="I",type="i", type="A" type="a")</p>

&lt;ol type"="1;gt;
    &lt;li&gt;intem 1&lt;/li&gt;
    &lt;li&gt;item 2&lt;/li&gt;
    &lt;li&gt;item 3&lt;/li&gt;
&lt;/ol&gt;


<h4>Posoicao especifica para Contagem type="nr da posicao"</h4>

&lt;ol type="5" &gt;
    &lt;li&gt;intem 1&lt;/li&gt;
    &lt;li&gt;item 2&lt;/li&gt;
    &lt;li&gt;item 3&lt;/li&gt;
&lt;/ol&gt;
                                    </vcode>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                            <p>A numeracao e automatica.</p>
                        </div>

                        <h4>Junca de listas</h4>

                        <p> Para juntar duas ou mais listas pode se usar tanto a lista ul ou ol, utilizando a forma anunhada:</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;p&gt;<strong>Lista 1</strong>&lt;/p&gt;

&lt;ol&gt;
    &lt;li&gt; lista 1 &lt;/li&gt;
    &lt;ul&gt; 
        &lt;li&gt; lista 1.1 &lt;/li&gt;
        &lt;li&gt; lista 1.2 &lt;/li&gt;
    &lt;/ul&gt;
    &lt;li&gt; lista 2 &lt;/li&gt;
    &lt;ul&gt;
        &lt;li&gt; lista 2.1 &lt;/li&gt;
        &lt;li&gt; lista 2.2 &lt;/li&gt;
    &lt;/ul&gt;
&lt;/ol&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h4>Listas de definicao</h4>
                        
                        <p>Para criar uma lista de definicao utilizasse a tag &lt;dl&gt; - para as definicoes, &lt;dt&gt; - o termo a ser definido &lt;dd&gt; - para a definicao:</p>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
&lt;p&gt;<strong>Lista 1</strong>&lt;/p&gt;

&lt;dl&gt;
    &lt;dt&gt; Termo 1 &lt;/dt&gt;
    &lt;dd&gt; Definição do termo 1 &lt;/dd&gt;
    &lt;dt&gt; Termo 2 &lt;/dt&gt;
    &lt;dd&gt; Definição do termo 2 &lt;/dd&gt;
&lt;/dl&gt;
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                            <p>A numeracao sera automatica.</p>
                        </div>

                            <h3>Links e mídia</h3>

                            <p><strong>a (âncora)</strong> serve para criar links que permitem a navegação entre páginas, seções ou recursos, seja no próprio site ou em sites externos.</p>

                            <div class="code-block">

                                <div class="code-body">
                                    <pre>
                                        <code>
<h4>Link para site externo</h4>

&lt;a href="https://www.google.com"&gt;Visitar o Google&lt;/a&gt;

<h4>Link entre páginas do mesmo site</h4>

&lt;a href="caminho-da-pagina.html">Página do caminho referido&lt;/a>

<h4>Navegação interna da mesma pagina (âncoras)</h4>

&lt;!-- Links de navegação --&gt;
&lt;a href="#secao1"&gt;Ir para Seção 1&lt;/a&gt;
&lt;a href="#secao2"&gt;Ir para Seção 2&lt;/a&gt;

&lt;!-- Destino da âncora --&gt;
&lt;h2 id="secao1">Seção 1&lt;/h2&gt;
&lt;p&gt;Conteúdo da seção 1...&lt;/p&gt;

&lt;h2 id="secao2"&gt;Seção 2&lt;/h2&gt;
&lt;p&gt;Conteúdo da seção 2...&lt;/p&gt;
                                        </code>
                                    </pre>
                                </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                        </div>

                        <h3>Imagem</h3>

                            <p><strong>a (âncora)</strong> serve para criar links que permitem a navegação entre páginas, seções ou recursos, seja no próprio site ou em sites externos.</p>

                            <div class="code-block">

                                <div class="code-body">
                                    <pre>
                                        <code>
<h4>Link para site externo</h4>

<picture>
    <img src="caminho/para/imagem.png" alt="Descrição da imagem">
    <img src="caminho/para/imagem.jpg" alt="Descrição da imagem">
</picture>

<h4>Imagem Responssivo</h4>

<<picture>
  <!-- Mobile: imagem pequena -->
  <source 
    media="(max-width: 768px)" 
    srcset="imagem-pequena.jpg">
  
  <!-- Tablet: imagem média -->
  <source 
    media="(max-width: 1024px)" 
    srcset="imagem-media.jpg">
  
  <!-- Desktop: imagem grande -->
  <img src="imagem-grande.jpg" alt="Imagem responsiva">
</picture>

<h4>Srcset (para resoluções diferentes)</h4>
<!-- Carrega imagem conforme resolução da tela -->
<img 
  src="imagem-pequena.jpg"
  srcset="
    imagem-pequena.jpg 480w,
    imagem-media.jpg 768w,
    imagem-grande.jpg 1200w
  "
  sizes="(max-width: 600px) 480px,
         (max-width: 900px) 768px,
         1200px"
  alt="Imagem responsiva"
>

<h4>Baixar imagem</h4>
<!-- Funciona apenas para imagens do mesmo domínio -->
<a href="imagem.jpg" download="meu-arquivo.jpg">
  Baixar Imagem
</a>

<!-- Com nome personalizado -->
<a href="foto.png" download="minha-foto.png">
  Clique para baixar
</a>
<p>
    ✅ Funciona no mesmo domínio
    
    ❌ Não funciona para imagens de outros sites (cross-origin)
    
    ❌ Navegadores antigos ignoram
    
    ⚠️ Alguns navegadores abrem a imagem em vez de baixar
</p>


                                      </code>
                                    </pre>
                                </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                            <p>Recomendacao: melhor colocar 10px de menor em relacao a imagem</p>
                        </div>

                        <h3>Video</h3>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
<h4>Inserir Vdeio de forma Simples</h4>
<video src="video.mp4" controls></video>

<h4>Inserir com unico formato - forma completa</h4>
<video 
  src="meu-video.mp4" 
  width="640" 
  height="360" 
  controls
>
  Seu navegador não suporta a tag de vídeo.
</video>

<h4>Vídeo simples com controles</h4>
<video width="800" height="450" controls>
  <source src="video.mp4" type="video/mp4">
  Seu navegador não suporta vídeo.
</video>

<h4>Múltiplos formatos (fallback)</h4>
<video controls width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
  <p>Seu navegador não suporta HTML5 video.</p>
</video>

<h4>Vídeo com autoplay (precisa muted)</h4>
<video 
  src="background.mp4" 
  autoplay 
  muted 
  loop 
  playsinline
  poster="thumbnail.jpg"
>
</video>

 <h4>Vídeo com imagem de capa (poster)</h4>
 <video 
  controls 
  poster="capa-do-video.jpg" 
  width="640" 
  height="360"
>
  <source src="video.mp4" type="video/mp4">
</video>

<h4>Atributos avançados:</h4>
<!-- Vídeo com legendas -->
<video controls width="640">
  <source src="video.mp4" type="video/mp4">
  
  <!-- Legendas -->
  <track 
    src="legendas-pt.vtt" 
    kind="subtitles" 
    srclang="pt" 
    label="Português"
  >
  <track 
    src="legendas-en.vtt" 
    kind="subtitles" 
    srclang="en" 
    label="English"
  >
</video>

<!-- Vídeo com faixas descritivas -->
<video controls>
  <source src="video.mp4">
  <track kind="descriptions" src="descricao.vtt">
</video>

<h4>Incorporar vídeos externos (YouTube, Vimeo)</h4>
<!-- YouTube -->
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" 
  allowfullscreen
>
</iframe>

<!-- Vimeo -->
<iframe 
  src="https://player.vimeo.com/video/VIDEO_ID" 
  width="640" 
  height="360" 
  frameborder="0" 
  allowfullscreen
>
</iframe>

<video src="caminho/do/video" type="video/mp4" poster="images/caminho/da/imagem" controls preload="metadata" width="400"></video>

<h4>inserir video de forma mais completa</h4>
<video controls preload="metadata">
    <source src="videos/video.mp4" type="video/mp4">
    <source src="videos/video.webm" type="video/webm">
    <source src="videos/video.ogv" type="video/ogg">
</video>
<p>Seu navegador incompativel par vídeo.</p>




                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                            
                        </div>


                        <h4>Tabela de atributos para videos</h4>

                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
<div class="container">
        <h1>🎬 Atributos do Elemento &lt;video&gt; em HTML5</h1>
        <table>
            <thead>
                <tr>
                    <th>Atributo</th>
                    <th>Descrição</th>
                    <th>Exemplo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="atributo">src</td>
                    <td class="descricao">Caminho do vídeo</td>
                    <td><code class="exemplo">src="video.mp4"</code></td>
                </tr>
                <tr>
                    <td class="atributo">controls</td>
                    <td class="descricao">Mostra controles de play/pause/volume</td>
                    <td><code class="exemplo">controls</code></td>
                </tr>
                <tr>
                    <td class="atributo">autoplay</td>
                    <td class="descricao">Começa a tocar automaticamente</td>
                    <td><code class="exemplo">autoplay</code></td>
                </tr>
                <tr>
                    <td class="atributo">loop</td>
                    <td class="descricao">Repete o vídeo em loop</td>
                    <td><code class="exemplo">loop</code></td>
                </tr>
                <tr>
                    <td class="atributo">muted</td>
                    <td class="descricao">Vídeo mudo (necessário para autoplay)</td>
                    <td><code class="exemplo">muted</code></td>
                </tr>
                <tr>
                    <td class="atributo">poster</td>
                    <td class="descricao">Imagem de capa antes de tocar</td>
                    <td><code class="exemplo">poster="capa.jpg"</code></td>
                </tr>
                <tr>
                    <td class="atributo">width</td>
                    <td class="descricao">Largura do player</td>
                    <td><code class="exemplo">width="640"</code></td>
                </tr>
                <tr>
                    <td class="atributo">height</td>
                    <td class="descricao">Altura do player</td>
                    <td><code class="exemplo">height="360"</code></td>
                </tr>
                <tr>
                    <td class="atributo">preload</td>
                    <td class="descricao">Pré-carregar vídeo</td>
                    <td><code class="exemplo">preload="auto"</code></td>
                </tr>
            </tbody>
        </table>
    </div>

                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                <button class="code-btn whatsapp-btn" onclick="Chat.shareCode(this,'whatsapp')">💬 WhatsApp</button>
                                 <button class="code-btn telegram-btn" onclick="Chat.shareCode(this,'telegram')">📨 Telegram</button>
                            </div>
                            
                        </div>

                        <h3>Audio</h3>

                        <div class="code-block">

                            <div class="code-body">
                                <pre>
                                    <code>
<!-- Exemplo mais simples -->
<audio src="musica.mp3" controls></audio>

<h4>Estrutura básica completa:</h4>
<audio 
  src="minha-musica.mp3" 
  controls
  autoplay
>
  Seu navegador não suporta a tag de áudio.
</audio>

<h4>Áudio simples com controles</h4>
<audio controls>
  <source src="musica.mp3" type="audio/mpeg">
  Seu navegador não suporta áudio.
</audio>

<h4>Múltiplos formatos (fallback)</h4>
<!-- Autoplay só funciona com muted ou após interação -->
<audio src="background.mp3" autoplay muted loop>
  <!-- Navegadores modernos bloqueiam autoplay com som -->
</audio>

<!-- Corrigir: precisa de interação do usuário -->
<button onclick="tocarAudio()">Tocar música</button>
<audio id="meuAudio" src="musica.mp3"></audio>

<script>
function tocarAudio() {
  const audio = document.getElementById('meuAudio');
  audio.play();
}
</script>

<h4>Áudio com loop (repetir)</h4>
<audio controls loop>
  <source src="efeito-sonoro.mp3" type="audio/mpeg">
</audio>

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
                'introducao-css': {
                    title: 'Introducao ao CSS',
                    content: `
                        <h3>📊 CSS - Introducao</h3>

                        <dl>
                            <dt> <strong>C</strong> </dt>
                            <dd> Cascading (Cascata)</dd>
                            <dt> <strong>S</strong> </dt>
                            <dd> Style (Estilo)</dd>
                            <dt> <strong>S</strong> </dt>
                            <dd> Sheets (Folha)</dd>
                        </dl>
                                    
                        <h4>Sintaxe básica</h4>

                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
seletor {
  propriedade: valor;
  propriedade2: valor;
}
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                            </div>
                        </div>

                        <h3>Três formas de aplicar CSS</h3>

                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
 <h4>CSS Inline (dentro da tag HTML)</h4>
<p style="color: blue;">Texto azul</p>

<h4>CSS Interno (dentro do <head> do HTML)</h4>
<p>No HTML (<head>):</p>
<style>
  p {
    color: green;
  }
</style>

<h4>CSS Externo (arquivo separado .css) – MELHOR PRÁTICA</h4>
<p>No HTML (<head>):</p>
<link rel="stylesheet" href="estilo.css">
<p>Arquivo estilo.css:</p>
p {
  color: purple;
}
                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                            </div>
                        </div>

                        <h3>Tipos de seletores (mais usados)</h3>

                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>


<h1>🎨 Seletores CSS - Guia Completo</h1>
        <table>
            <thead>
                <tr>
                    <th>Seletor</th>
                    <th>HTML</th>
                    <th>CSS</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="seletor">Elemento</span></td>
                    <td><code class="html-code">&lt;p&gt;</code></td>
                    <td><code class="css-code">p { }</code></td>
                    <td class="descricao">Seleciona todos os elementos &lt;p&gt;</td>
                </tr>
                <tr>
                    <td><span class="seletor">Classe (.)</span></td>
                    <td><code class="html-code">class="destaque"</code></td>
                    <td><code class="css-code">.destaque { }</code></td>
                    <td class="descricao">Seleciona elementos com class="destaque"</td>
                </tr>
                <tr>
                    <td><span class="seletor">ID (#)</span></td>
                    <td><code class="html-code">id="cabecalho"</code></td>
                    <td><code class="css-code">#cabecalho { }</code></td>
                    <td class="descricao">Seleciona o elemento com id="cabecalho"</td>
                </tr>
                <tr>
                    <td><span class="seletor">Universal (*)</span></td>
                    <td><code class="html-code">*</code></td>
                    <td><code class="css-code">* { }</code></td>
                    <td class="descricao">Seleciona todos os elementos da página</td>
                </tr>
            </tbody>
        </table>

                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                            </div>
                        </div>

                        <h3>Cores em CSS</h3>

                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formas de Definir Cores em CSS</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .container {
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
            max-width: 1200px;
            width: 100%;
            margin: 20px;
        }
        
        h1 {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0;
            padding: 25px;
            text-align: center;
            font-size: 1.8em;
        }
        
        h4 {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0;
            padding: 15px 25px;
            text-align: center;
            font-size: 1.2em;
            border-top: 1px solid rgba(255,255,255,0.2);
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
        }
        
        th {
            background: #4a5568;
            color: white;
            padding: 15px;
            font-weight: 600;
            font-size: 1.1em;
            text-align: left;
        }
        
        td {
            padding: 12px 15px;
            border-bottom: 1px solid #e2e8f0;
        }
        
        tr:hover {
            background: #f7fafc;
        }
        
        .tipo {
            font-family: 'Courier New', monospace;
            font-weight: bold;
            color: #e53e3e;
            background: #fff5f5;
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-block;
        }
        
        .exemplo-cor {
            font-family: 'Courier New', monospace;
            color: #38a169;
            background: #f0fff4;
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-block;
        }
        
        .descricao {
            color: #2d3748;
        }
        
        .color-preview {
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 6px;
            margin-right: 10px;
            vertical-align: middle;
            border: 1px solid #cbd5e0;
        }
        
        @media (max-width: 768px) {
            table {
                font-size: 14px;
            }
            
            th, td {
                padding: 8px 10px;
            }
            
            h1, h4 {
                font-size: 1.4em;
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 Formas de Definir Cores em CSS</h1>
        <h4>📌 5 maneiras diferentes de aplicar cores</h4>
        <table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Exemplo</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="tipo">Nome</span></td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                            <div class="color-preview" style="background: tomato;"></div>
                            <code class="exemplo-cor">red, blue, tomato</code>
                        </div>
                    </td>
                    <td class="descricao">140+ nomes pré-definidos</td>
                </tr>
                <tr>
                    <td><span class="tipo">Hex</span></td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                            <div class="color-preview" style="background: #FF0000;"></div>
                            <code class="exemplo-cor">#FF0000</code>
                        </div>
                    </td>
                    <td class="descricao">6 dígitos (RRGGBB)</td>
                </tr>
                <tr>
                    <td><span class="tipo">RGB</span></td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                            <div class="color-preview" style="background: rgb(255, 0, 0);"></div>
                            <code class="exemplo-cor">rgb(255, 0, 0)</code>
                        </div>
                    </td>
                    <td class="descricao">0–255 cada canal</td>
                </tr>
                <tr>
                    <td><span class="tipo">RGBA</span></td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                            <div class="color-preview" style="background: rgba(255, 0, 0, 0.5);"></div>
                            <code class="exemplo-cor">rgba(255,0,0,0.5)</code>
                        </div>
                    </td>
                    <td class="descricao">Com transparência</td>
                </tr>
                <tr>
                    <td><span class="tipo">HSL</span></td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                            <div class="color-preview" style="background: hsl(0, 100%, 50%);"></div>
                            <code class="exemplo-cor">hsl(0, 100%, 50%)</code>
                        </div>
                    </td>
                    <td class="descricao">Matiz, Saturação, Luminosidade</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>

                                    </code>
                                </pre>
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                            </div>
                        </div>

                         <h3>Unidades de medida básicas</h3>

                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unidades de Medida em CSS</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .container {
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
            max-width: 1000px;
            width: 100%;
            margin: 20px;
        }
        
        h1 {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0;
            padding: 25px;
            text-align: center;
            font-size: 1.8em;
        }
        
        h4 {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0;
            padding: 15px 25px;
            text-align: center;
            font-size: 1.2em;
            border-top: 1px solid rgba(255,255,255,0.2);
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
        }
        
        th {
            background: #4a5568;
            color: white;
            padding: 15px;
            font-weight: 600;
            font-size: 1.1em;
            text-align: left;
        }
        
        td {
            padding: 12px 15px;
            border-bottom: 1px solid #e2e8f0;
        }
        
        tr:hover {
            background: #f7fafc;
        }
        
        .unidade {
            font-family: 'Courier New', monospace;
            font-weight: bold;
            color: #e53e3e;
            background: #fff5f5;
            padding: 4px 12px;
            border-radius: 4px;
            display: inline-block;
        }
        
        .tipo {
            font-weight: 600;
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-block;
        }
        
        .tipo.absoluta {
            background: #fef3c7;
            color: #d69e2e;
        }
        
        .tipo.relativa {
            background: #e0f2fe;
            color: #0284c7;
        }
        
        .exemplo {
            font-family: 'Courier New', monospace;
            color: #38a169;
            background: #f0fff4;
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-block;
        }
        
        .descricao {
            color: #2d3748;
        }
        
        @media (max-width: 768px) {
            table {
                font-size: 14px;
            }
            
            th, td {
                padding: 8px 10px;
            }
            
            h1, h4 {
                font-size: 1.4em;
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📏 Unidades de Medida em CSS</h1>
        <h4>📐 Unidades absolutas e relativas</h4>
        <table>
            <thead>
                <tr>
                    <th>Unidade</th>
                    <th>Tipo</th>
                    <th>Exemplo de uso</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="unidade">px</span></td>
                    <td><span class="tipo absoluta">Absoluta</span></td>
                    <td><code class="exemplo">font-size: 16px;</code></td>
                    <td class="descricao">Pixel - unidade fixa para tela</td>
                </tr>
                <tr>
                    <td><span class="unidade">%</span></td>
                    <td><span class="tipo relativa">Relativa</span></td>
                    <td><code class="exemplo">width: 50%;</code></td>
                    <td class="descricao">Relativa ao elemento pai</td>
                </tr>
                <tr>
                    <td><span class="unidade">em</span></td>
                    <td><span class="tipo relativa">Relativa</span></td>
                    <td><code class="exemplo">margin: 2em;</code></td>
                    <td class="descricao">Relativa ao font-size do elemento</td>
                </tr>
                <tr>
                    <td><span class="unidade">rem</span></td>
                    <td><span class="tipo relativa">Relativa</span></td>
                    <td><code class="exemplo">padding: 1rem;</code></td>
                    <td class="descricao">Relativa ao font-size do &lt;html&gt; (root)</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>

                                    </code>
                                </pre>
                            </div>
                        </div>    

                    `
                },
                'Cores-Css': {
                    title: 'Cores em Css',
                    content: `<h3>Cores em CSS - Aplicar cor nos elemetos</h3>

                        <h4>Manusear cores em elentos em cad propriedade</h4>

                         <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📊 Tabela de Cores em CSS - Versão Expansiva</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .container {
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow-x: auto;
            max-width: 1400px;
            width: 100%;
            margin: 20px;
        }
        
        h1 {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0;
            padding: 25px;
            text-align: center;
            font-size: 1.8em;
        }
        
        .subtitle {
            background: #edf2f7;
            color: #4a5568;
            padding: 12px 25px;
            text-align: center;
            font-size: 1em;
            border-bottom: 1px solid #e2e8f0;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
        }
        
        th {
            background: #4a5568;
            color: white;
            padding: 15px;
            font-weight: 600;
            font-size: 1.1em;
            text-align: left;
            position: sticky;
            top: 0;
        }
        
        td {
            padding: 12px 15px;
            border-bottom: 1px solid #e2e8f0;
            vertical-align: top;
        }
        
        tr:hover {
            background: #f7fafc;
        }
        
        .numero {
            font-family: 'Courier New', monospace;
            font-weight: bold;
            color: #e53e3e;
            background: #fff5f5;
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-block;
            text-align: center;
            min-width: 35px;
        }
        
        .o-que-muda {
            font-weight: 600;
            color: #2d3748;
        }
        
        .propriedade {
            font-family: 'Courier New', monospace;
            color: #3182ce;
            background: #ebf8ff;
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-block;
            font-size: 0.9em;
        }
        
        .exemplo-css {
            font-family: 'Courier New', monospace;
            color: #38a169;
            background: #f0fff4;
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-block;
            font-size: 0.85em;
        }
        
        .badge {
            background: #edf2f7;
            color: #4a5568;
            padding: 2px 6px;
            border-radius: 3px;
            font-size: 0.75em;
            margin-left: 5px;
        }
        
        .note {
            background: #fef3c7;
            color: #92400e;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.85em;
            display: inline-block;
        }
        
        @media (max-width: 768px) {
            table {
                font-size: 13px;
            }
            
            th, td {
                padding: 8px 10px;
            }
            
            h1 {
                font-size: 1.4em;
                padding: 15px;
            }
            
            .propriedade, .exemplo-css {
                font-size: 0.8em;
                padding: 2px 5px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📊 TABELA DE CORES EM CSS</h1>
        <div class="subtitle">🎨 Versão Expansiva - 35 formas de aplicar cores</div>
        
        <div style="overflow-x: auto;">
            <table>
                <thead>
                    <tr>
                        <th style="width: 5%;">#</th>
                        <th style="width: 35%;">O que muda de cor</th>
                        <th style="width: 30%;">Propriedade / Seletor</th>
                        <th style="width: 30%;">Exemplo CSS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><span class="numero">1</span></td><td class="o-que-muda">Texto comum</td><td><code class="propriedade">color</code></td><td><code class="exemplo-css">p { color: blue; }</code></td></tr>
                    <tr><td><span class="numero">2</span></td><td class="o-que-muda">Fundo do elemento</td><td><code class="propriedade">background-color</code></td><td><code class="exemplo-css">div { background-color: yellow; }</code></td></tr>
                    <tr><td><span class="numero">3</span></td><td class="o-que-muda">Borda completa</td><td><code class="propriedade">border-color</code></td><td><code class="exemplo-css">img { border: 2px solid red; }</code></td></tr>
                    <tr><td><span class="numero">4</span></td><td class="o-que-muda">Apenas uma borda</td><td><code class="propriedade">border-top-color</code></td><td><code class="exemplo-css">h1 { border-top-color: green; }</code></td></tr>
                    <tr><td><span class="numero">5</span></td><td class="o-que-muda">Sombra da caixa (box)</td><td><code class="propriedade">box-shadow <span class="badge">inclui cor</span></code></td><td><code class="exemplo-css">div { box-shadow: 0 0 10px rgba(0,0,0,0.5); }</code></td></tr>
                    <tr><td><span class="numero">6</span></td><td class="o-que-muda">Sombra do texto</td><td><code class="propriedade">text-shadow <span class="badge">inclui cor</span></code></td><td><code class="exemplo-css">h1 { text-shadow: 2px 2px 4px gray; }</code></td></tr>
                    <tr><td><span class="numero">7</span></td><td class="o-que-muda">Sublinhado / linha decorativa</td><td><code class="propriedade">text-decoration-color</code></td><td><code class="exemplo-css">a { text-decoration: underline; text-decoration-color: red; }</code></td></tr>
                    <tr><td><span class="numero">8</span></td><td class="o-que-muda">Marcador de lista (•, 1., etc)</td><td><code class="propriedade">::marker</code></td><td><code class="exemplo-css">li::marker { color: orange; }</code></td></tr>
                    <tr><td><span class="numero">9</span></td><td class="o-que-muda">Placeholder de input</td><td><code class="propriedade">::placeholder</code></td><td><code class="exemplo-css">input::placeholder { color: gray; }</code></td></tr>
                    <tr><td><span class="numero">10</span></td><td class="o-que-muda">Texto selecionado</td><td><code class="propriedade">::selection</code></td><td><code class="exemplo-css">p::selection { background: black; color: lime; }</code></td></tr>
                    <tr><td><span class="numero">11</span></td><td class="o-que-muda">Link não visitado</td><td><code class="propriedade">a:link</code></td><td><code class="exemplo-css">a:link { color: blue; }</code></td></tr>
                    <tr><td><span class="numero">12</span></td><td class="o-que-muda">Link já visitado</td><td><code class="propriedade">a:visited</code></td><td><code class="exemplo-css">a:visited { color: purple; }</code></td></tr>
                    <tr><td><span class="numero">13</span></td><td class="o-que-muda">Link com mouse em cima</td><td><code class="propriedade">a:hover</code></td><td><code class="exemplo-css">a:hover { color: gold; }</code></td></tr>
                    <tr><td><span class="numero">14</span></td><td class="o-que-muda">Link no momento do clique</td><td><code class="propriedade">a:active</code></td><td><code class="exemplo-css">a:active { color: red; }</code></td></tr>
                    <tr><td><span class="numero">15</span></td><td class="o-que-muda">Fundo da barra de rolagem</td><td><code class="propriedade">::-webkit-scrollbar-track</code></td><td><code class="exemplo-css">::-webkit-scrollbar-track { background: #f1f1f1; }</code></td></tr>
                    <tr><td><span class="numero">16</span></td><td class="o-que-muda">Polegar da barra de rolagem</td><td><code class="propriedade">::-webkit-scrollbar-thumb</code></td><td><code class="exemplo-css">::-webkit-scrollbar-thumb { background: #888; }</code></td></tr>
                    <tr><td><span class="numero">17</span></td><td class="o-que-muda">Bolinha do slider (range)</td><td><code class="propriedade">::-webkit-slider-thumb</code></td><td><code class="exemplo-css">input[type="range"]::-webkit-slider-thumb { background: red; }</code></td></tr>
                    <tr><td><span class="numero">18</span></td><td class="o-que-muda">Trilha do slider</td><td><code class="propriedade">::-webkit-slider-runnable-track</code></td><td><code class="exemplo-css">input[type="range"]::-webkit-slider-runnable-track { background: blue; }</code></td></tr>
                    <tr><td><span class="numero">19</span></td><td class="o-que-muda">Checkbox/radio nativo</td><td><code class="propriedade">accent-color</code></td><td><code class="exemplo-css">input[type="checkbox"] { accent-color: green; }</code></td></tr>
                    <tr><td><span class="numero">20</span></td><td class="o-que-muda">Linha &lt;hr&gt;</td><td><code class="propriedade">border-color</code></td><td><code class="exemplo-css">hr { border-color: magenta; }</code></td></tr>
                    <tr><td><span class="numero">21</span></td><td class="o-que-muda">Cor de fundo do &lt;body&gt;</td><td><code class="propriedade">background-color</code></td><td><code class="exemplo-css">body { background-color: #f0f0f0; }</code></td></tr>
                    <tr><td><span class="numero">22</span></td><td class="o-que-muda">Cor de fundo de tabela</td><td><code class="propriedade">background-color</code></td><td><code class="exemplo-css">td { background-color: lightblue; }</code></td></tr>
                    <tr><td><span class="numero">23</span></td><td class="o-que-muda">Cor da borda de tabela</td><td><code class="propriedade">border-color</code></td><td><code class="exemplo-css">table, th, td { border-color: navy; }</code></td></tr>
                    <tr><td><span class="numero">24</span></td><td class="o-que-muda">Cor do foco no campo (focus)</td><td><code class="propriedade">outline-color</code></td><td><code class="exemplo-css">input:focus { outline-color: blue; }</code></td></tr>
                    <tr><td><span class="numero">25</span></td><td class="o-que-muda">Cor do campo inválido</td><td><code class="propriedade">border-color + :invalid</code></td><td><code class="exemplo-css">input:invalid { border-color: red; }</code></td></tr>
                    <tr><td><span class="numero">26</span></td><td class="o-que-muda">Cor do campo válido</td><td><code class="propriedade">border-color + :valid</code></td><td><code class="exemplo-css">input:valid { border-color: green; }</code></td></tr>
                    <tr><td><span class="numero">27</span></td><td class="o-que-muda">Cor de itens de menu suspenso</td><td><code class="propriedade">background-color / color</code></td><td><code class="exemplo-css">select option { background-color: beige; }</code></td></tr>
                    <tr><td><span class="numero">28</span></td><td class="o-que-muda">Cor de tooltip (title)</td><td><code class="propriedade note">Não muda facilmente (nativo)</code></td><td><code class="exemplo-css note">precisa de pseudo-elemento customizado</code></td></tr>
                    <tr><td><span class="numero">29</span></td><td class="o-que-muda">Cor do ícone de detalhes (&lt;details&gt;)</td><td><code class="propriedade">::marker</code></td><td><code class="exemplo-css">summary::marker { color: red; }</code></td></tr>
                    <tr><td><span class="numero">30</span></td><td class="o-que-muda">Cursor (imagem personalizada)</td><td><code class="propriedade">cursor</code></td><td><code class="exemplo-css">* { cursor: url('meu-cursor.png'), auto; }</code></td></tr>
                    <tr><td><span class="numero">31</span></td><td class="o-que-muda">Fundo de elemento desabilitado</td><td><code class="propriedade">background-color + :disabled</code></td><td><code class="exemplo-css">input:disabled { background-color: lightgray; }</code></td></tr>
                    <tr><td><span class="numero">32</span></td><td class="o-que-muda">Cor do texto de elemento desabilitado</td><td><code class="propriedade">color + :disabled</code></td><td><code class="exemplo-css">input:disabled { color: gray; }</code></td></tr>
                    <tr><td><span class="numero">33</span></td><td class="o-que-muda">Cor da borda de foco de acessibilidade</td><td><code class="propriedade">outline-color</code></td><td><code class="exemplo-css">button:focus-visible { outline-color: blue; }</code></td></tr>
                    <tr><td><span class="numero">34</span></td><td class="o-que-muda">Cor de fundo de linha alternada (zebra)</td><td><code class="propriedade">:nth-child(even/odd)</code></td><td><code class="exemplo-css">tr:nth-child(even) { background-color: #f2f2f2; }</code></td></tr>
                    <tr><td><span class="numero">35</span></td><td class="o-que-muda">Cor da sombra de foco</td><td><code class="propriedade">box-shadow</code></td><td><code class="exemplo-css">input:focus { box-shadow: 0 0 0 3px rgba(0,100,255,0.3); }</code></td></tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
                                    </code>
                                </pre> 
                            </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                            </div>
                        </div>
                    `
                },
                'pseudo-classe': {
                    title: 'Pseudo-classes - CSS',
                    content: `
                            <h3>Pseudo-classes - CSS</h3>
                            <h4>O que são pseudo-classes</h4>
                            <p><strong>Pseudo-classes</strong> são palavras-chave em CSS que definem um estado especial de um elemento HTML. Não são tags, não estão no HTML. Existem apenas no CSS para estilizar elementos com base em condições que não podem ser expressas apenas com seletores simples.</p>

                             <h4>Sintaxe de pseudo-classe</h4>

                            <div class="code-block">
                                <div class="code-body">
                                    <pre>
                                        <code>
seletor:pseudo-classe {
  propriedade: valor;
}
                                        </code>
                                    </pre>
                                </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                </div>
                            </div>

                            <h4>Para que servem</h4>
                            <ol>
                                <p>Servem para aplicar estilos quando o elemento está num determinado estado, como:</p>
                                
                                <li>Rato por cima (hover)</li>
                                <li>Elemento selecionado (checked)</li>
                                <li>Primeiro filho de um pai (first-child)</li>
                                <li>Campo de formulário inválido (invalid)</li>
                                <li>Link já visitado (visited)</li>
                            </ol>

                            <p>Sem pseudo-classes, seria necessário JavaScript para muitos destes comportamentos.</p>

                            <h4>Tags HTML onde se aplicam</h4>
                            <p>As pseudo-classes aplicam-se a qualquer elemento HTML que possa estar no estado correspondente.</p>

                        <div class="code-block">
                            <div class="code-body">
                                <pre>
                                    <code>
<table> <thead> <tr> <th>Pseudo-classe</th> <th>Aplica-se a</th> <th>Descrição</th> </tr> </thead> <tbody> <tr> <td>:hover</td> <td>Qualquer elemento</td> <td>Rato por cima do elemento</td> </tr> <tr> <td>:active</td> <td>Qualquer elemento</td> <td>Elemento a ser clicado</td> </tr> <tr> <td>:focus</td> <td>Elementos focáveis</td> <td>Elemento com foco (teclado/rato)</td> </tr> <tr> <td>:focus-visible</td> <td>Elementos focáveis</td> <td>Foco apenas via teclado</td> </tr> <tr> <td>:focus-within</td> <td>Elemento pai</td> <td>Quando algum filho tem foco</td> </tr> <tr> <td>:visited</td> <td>&lt;a&gt;</td> <td>Link já visitado</td> </tr> <tr> <td>:link</td> <td>&lt;a&gt;</td> <td>Link não visitado</td> </tr> <tr> <td>:any-link</td> <td>&lt;a&gt;</td> <td>Qualquer link</td> </tr> <tr> <td>:target</td> <td>Qualquer elemento</td> <td>Elemento com id igual ao hash do URL</td> </tr> <tr> <td>:checked</td> <td>&lt;input&gt; checkbox/radio, &lt;option&gt;</td> <td>Elemento selecionado</td> </tr> <tr> <td>:disabled</td> <td>&lt;input&gt;, &lt;button&gt;, &lt;select&gt;, &lt;textarea&gt;</td> <td>Elemento desativado</td> </tr> <tr> <td>:enabled</td> <td>&lt;input&gt;, &lt;button&gt;, &lt;select&gt;, &lt;textarea&gt;</td> <td>Elemento ativo</td> </tr> <tr> <td>:required</td> <td>&lt;input&gt;, &lt;select&gt;, &lt;textarea&gt;</td> <td>Campo obrigatório</td> </tr> <tr> <td>:optional</td> <td>&lt;input&gt;, &lt;select&gt;, &lt;textarea&gt;</td> <td>Campo opcional</td> </tr> <tr> <td>:read-only</td> <td>&lt;input&gt;, &lt;textarea&gt;</td> <td>Campo apenas de leitura</td> </tr> <tr> <td>:read-write</td> <td>&lt;input&gt;, &lt;textarea&gt;</td> <td>Campo editável</td> </tr> <tr> <td>:valid</td> <td>&lt;input&gt;, &lt;form&gt;</td> <td>Valor válido</td> </tr> <tr> <td>:invalid</td> <td>&lt;input&gt;, &lt;form&gt;</td> <td>Valor inválido</td> </tr> <tr> <td>:in-range</td> <td>&lt;input&gt;</td> <td>Valor dentro do intervalo</td> </tr> <tr> <td>:out-of-range</td> <td>&lt;input&gt;</td> <td>Valor fora do intervalo</td> </tr> <tr> <td>:placeholder-shown</td> <td>&lt;input&gt;, &lt;textarea&gt;</td> <td>Placeholder visível</td> </tr> <tr> <td>:default</td> <td>&lt;input&gt;, &lt;button&gt;, &lt;option&gt;</td> <td>Elemento padrão</td> </tr> <tr> <td>:first-child</td> <td>Qualquer elemento</td> <td>Primeiro filho do pai</td> </tr> <tr> <td>:last-child</td> <td>Qualquer elemento</td> <td>Último filho do pai</td> </tr> <tr> <td>:only-child</td> <td>Qualquer elemento</td> <td>Único filho do pai</td> </tr> <tr> <td>:first-of-type</td> <td>Qualquer elemento</td> <td>Primeiro do seu tipo</td> </tr> <tr> <td>:last-of-type</td> <td>Qualquer elemento</td> <td>Último do seu tipo</td> </tr> <tr> <td>:only-of-type</td> <td>Qualquer elemento</td> <td>Único do seu tipo</td> </tr> <tr> <td>:nth-child(n)</td> <td>Qualquer elemento</td> <td>Enésimo filho</td> </tr> <tr> <td>:nth-last-child(n)</td> <td>Qualquer elemento</td> <td>Enésimo filho a contar do fim</td> </tr> <tr> <td>:nth-of-type(n)</td> <td>Qualquer elemento</td> <td>Enésimo do seu tipo</td> </tr> <tr> <td>:nth-last-of-type(n)</td> <td>Qualquer elemento</td> <td>Enésimo do seu tipo a contar do fim</td> </tr> <tr> <td>:empty</td> <td>Qualquer elemento</td> <td>Elemento sem filhos (nem texto)</td> </tr> <tr> <td>:not(seletor)</td> <td>Qualquer elemento</td> <td>Negação</td> </tr> <tr> <td>:has(seletor)</td> <td>Qualquer elemento</td> <td>Elemento que contém determinado filho</td> </tr> <tr> <td>:is(seletor)</td> <td>Qualquer elemento</td> <td>Agrupa seletores</td> </tr> <tr> <td>:where(seletor)</td> <td>Qualquer elemento</td> <td>Agrupa com especificidade zero</td> </tr> <tr> <td>:root</td> <td>&lt;html&gt;</td> <td>Raiz do documento</td> </tr> <tr> <td>:lang(código)</td> <td>Qualquer elemento</td> <td>Elemento com idioma específico</td> </tr> <tr> <td>:playing</td> <td>&lt;audio&gt;, &lt;video&gt;</td> <td>Média em reprodução</td> </tr> <tr> <td>:paused</td> <td>&lt;audio&gt;, &lt;video&gt;</td> <td>Média pausada</td> </tr> </tbody> </table>
                                </code>
                            </pre>
                        </div>
                        <div class="code-actions">
                            <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                            </div>
                        </div>
                    `
                },

                'pseudo-elementos': {
                    title: 'Pseudo-elementos - CSS',
                    content: `
                        <h3>Pseudo-elementos - CSS</h3>
                        <p><strong>Pseudo-elementos</strong> são palavras-chave adicionadas a seletores que permitem estilizar partes específicas de um elemento HTML, sem precisar de adicionar mais tags no HTML.</p>

                        <h4>Sintaxe de pseudo-elemento</h4>
                        <p>No CSS3, usa-se dois pontos duplos para diferenciar de pseudo-classes:</p>

                            <div class="code-block">
                                <div class="code-body">
                                    <pre>
                                        <code>
seletor::<pseudo-elemento> {
propriedade: valor;
}
                                        </code>
                                    </pre>
                                </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                </div>
                            </div>

                        <h4>Tabela de pseudo-elementos</h4>

                        <div class="code-block">
                                <div class="code-body">
                                    <pre>
                                        <code>
<h4>Tabela de pseudo-elementos</h4>

<table> <thead> <tr> <th>Pseudo-elemento</th> <th>Exemplo</th> <th>Descrição</th> </tr> </thead> <tbody> <tr> <td>::before</td> <td>h1::before</td> <td>Conteúdo antes do elemento</td> </tr> <tr> <td>::after</td> <td>p::after</td> <td>Conteúdo depois do elemento</td> </tr> <tr> <td>::first-letter</td> <td>p::first-letter</td> <td>Primeira letra do texto</td> </tr> <tr> <td>::first-line</td> <td>p::first-line</td> <td>Primeira linha do texto</td> </tr> <tr> <td>::selection</td> <td>::selection</td> <td>Texto selecionado pelo utilizador</td> </tr> <tr> <td>::placeholder</td> <td>input::placeholder</td> <td>Texto do placeholder</td> </tr> <tr> <td>::marker</td> <td>li::marker</td> <td>Marcador de item de lista</td> </tr> <tr> <td>::backdrop</td> <td>dialog::backdrop</td> <td>Fundo de elementos em fullscreen</td> </tr> <tr> <td>::file-selector-button</td> <td>input::file-selector-button</td> <td>Botão de upload de ficheiro</td> </tr> </tbody> </table>
                                        </code>
                                    </pre>
                                </div>
                            <div class="code-actions">
                                <button class="code-btn copy-btn" onclick="Chat.copyCode(this)">📋 Copiar</button>
                                </div>
                            </div>
                    `
                },


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
