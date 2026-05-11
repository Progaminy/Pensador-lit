// ===== INTERFACE DO UTILIZADOR =====
const UI = {
    toggleTheme() {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        document.getElementById('themeIcon').textContent = newTheme === 'dark' ? '☀️' : '🌙';
        document.getElementById('themeText').textContent = newTheme === 'dark' ? 'Modo Claro' : 'Modo Escuro';
        
        localStorage.setItem('pensador_theme', newTheme);
    },

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    },

    updateProfile(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profileAvatar').innerHTML = '<img src="' + e.target.result + '" alt="Foto">';
                localStorage.setItem('pensador_profile', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    },

    loadSettings() {
        // Tema
        const theme = localStorage.getItem('pensador_theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.getElementById('themeIcon').textContent = '☀️';
            document.getElementById('themeText').textContent = 'Modo Claro';
        }

        // Foto de perfil
        const profile = localStorage.getItem('pensador_profile');
        if (profile) {
            document.getElementById('profileAvatar').innerHTML = '<img src="' + profile + '" alt="Foto">';
        }
    }
};

// Inicializar
document.addEventListener('DOMContentLoaded', () => UI.loadSettings());
