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
                        <p><strong>a (âncora)</strong> serve para criar links que permitem a navegação entre páginas, seções ou recursos, seja no próprio site ou em sites externos.</p>

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
