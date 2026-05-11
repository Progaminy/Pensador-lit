// ===== INTERFACE DO UTILIZADOR =====
const UI = {
    // Estado
    isDark: false,
    isSidebarOpen: false,

    // ===== INICIALIZAÇÃO =====
    init() {
        this.loadSettings();
        this.setupEventListeners();
        this.setupMobileFixes();
        console.log('✅ UI inicializada');
    },

    // ===== TEMA =====
    toggleTheme() {
        this.isDark = !this.isDark;
        const theme = this.isDark ? 'dark' : 'light';

        // Aplicar tema ao HTML
        document.documentElement.setAttribute('data-theme', theme);

        // Atualizar ícone e texto do botão
        const icon = document.getElementById('themeIcon');
        const text = document.getElementById('themeText');

        if (icon) {
            icon.textContent = this.isDark ? '☀️' : '🌙';
        }
        if (text) {
            text.textContent = this.isDark ? 'Modo Claro' : 'Modo Escuro';
        }

        // Salvar preferência
        localStorage.setItem('pensador_theme', theme);

        console.log('🌓 Tema alterado para:', theme);
    },

    // ===== SIDEBAR MOBILE =====
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');

        if (!sidebar || !overlay) return;

        this.isSidebarOpen = !this.isSidebarOpen;

        if (this.isSidebarOpen) {
            sidebar.classList.add('open');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        console.log('📱 Sidebar:', this.isSidebarOpen ? 'aberta' : 'fechada');
    },

    closeSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');

        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
        this.isSidebarOpen = false;
    },

    // ===== FOTO DE PERFIL =====
    updateProfile(event) {
        const file = event.target.files[0];
        if (!file) return;

        // Verificar se é imagem
        if (!file.type.startsWith('image/')) {
            alert('⚠️ Por favor, selecione uma imagem.');
            return;
        }

        // Verificar tamanho (máx 2MB)
        if (file.size > 2 * 1024 * 1024) {
            alert('⚠️ Imagem muito grande. Máximo 2MB.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const avatar = document.getElementById('profileAvatar');
            if (avatar) {
                avatar.innerHTML = '<img src="' + e.target.result + '" alt="Foto de perfil" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">';
                localStorage.setItem('pensador_profile', e.target.result);
                console.log('📸 Foto de perfil atualizada');
            }
        };
        reader.onerror = function () {
            alert('❌ Erro ao carregar a imagem.');
        };
        reader.readAsDataURL(file);
    },

    removeProfile() {
        const avatar = document.getElementById('profileAvatar');
        if (avatar) {
            avatar.innerHTML = '<span>🧠</span>';
            localStorage.removeItem('pensador_profile');
            console.log('🗑️ Foto de perfil removida');
        }
    },

    // ===== CARREGAR CONFIGURAÇÕES =====
    loadSettings() {
        // Carregar tema
        const savedTheme = localStorage.getItem('pensador_theme');
        if (savedTheme === 'dark') {
            this.isDark = true;
            document.documentElement.setAttribute('data-theme', 'dark');
            const icon = document.getElementById('themeIcon');
            const text = document.getElementById('themeText');
            if (icon) icon.textContent = '☀️';
            if (text) text.textContent = 'Modo Claro';
        }

        // Carregar foto de perfil
        const savedProfile = localStorage.getItem('pensador_profile');
        if (savedProfile) {
            const avatar = document.getElementById('profileAvatar');
            if (avatar) {
                avatar.innerHTML = '<img src="' + savedProfile + '" alt="Foto de perfil" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">';
            }
        }

        console.log('📂 Configurações carregadas:', {
            tema: savedTheme || 'light',
            foto: savedProfile ? 'sim' : 'não'
        });
    },

    // ===== CORREÇÕES MOBILE =====
    setupMobileFixes() {
        const userInput = document.getElementById('userInput');
        const messagesContainer = document.getElementById('messagesContainer');
        const chatHeader = document.querySelector('.chat-header');

        if (!userInput) return;

        // 1. Corrigir teclado que tapa o input
        userInput.addEventListener('focus', function () {
            setTimeout(function () {
                // Scroll suave para mostrar o input
                userInput.scrollIntoView({ behavior: 'smooth', block: 'end' });

                // Garantir que as mensagens vão para o fim
                if (messagesContainer) {
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
                }
            }, 300);
        });

        // 2. Quando o input perde o foco, garantir topo visível
        userInput.addEventListener('blur', function () {
            setTimeout(function () {
                // Scroll para mostrar o topo se necessário
                if (messagesContainer && messagesContainer.scrollTop < 50) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 200);
        });

        // 3. Detetar teclado
        let lastHeight = window.innerHeight;
        window.addEventListener('resize', function () {
            const currentHeight = window.innerHeight;

            if (currentHeight < lastHeight) {
                // Teclado abriu
                document.body.classList.add('keyboard-open');
                setTimeout(function () {
                    userInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 150);
            } else {
                // Teclado fechou
                document.body.classList.remove('keyboard-open');
                // Garantir que o header fica visível
                if (chatHeader && window.scrollY > 100) {
                    chatHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }

            lastHeight = currentHeight;
        });

        // 4. Fechar sidebar ao clicar fora
        document.addEventListener('click', function (e) {
            const overlay = document.getElementById('sidebarOverlay');
            if (e.target === overlay) {
                UI.closeSidebar();
            }

            // Fechar sidebar ao selecionar tópico (mobile)
            if (e.target.closest('.nav-item') || e.target.closest('.quick-btn')) {
                if (window.innerWidth <= 768) {
                    setTimeout(() => UI.closeSidebar(), 200);
                }
            }
        });

        // 5. iOS fix
        if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
            document.documentElement.style.height = window.innerHeight + 'px';
            window.addEventListener('resize', function () {
                document.documentElement.style.height = window.innerHeight + 'px';
            });
        }

        console.log('📱 Correções mobile aplicadas');
    },

    // ===== EVENT LISTENERS =====
    setupEventListeners() {
        // Tecla ESC fecha sidebar
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && UI.isSidebarOpen) {
                UI.closeSidebar();
            }
        });

        // Clique no avatar para trocar foto
        const avatar = document.getElementById('profileAvatar');
        if (avatar) {
            avatar.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                if (confirm('Remover foto de perfil?')) {
                    UI.removeProfile();
                }
            });
        }

        console.log('👂 Event listeners configurados');
    },

    // ===== UTILITÁRIOS =====
    isMobile() {
        return window.innerWidth <= 768;
    },

    getTheme() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    }
};

// ===== INICIALIZAR =====
document.addEventListener('DOMContentLoaded', function () {
    UI.init();
});

// Expor para uso global (onclick nos botões)
window.UI = UI;