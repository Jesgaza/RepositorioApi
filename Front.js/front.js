<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nebul</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="header-left">
            <h1>NEBUL</h1>
            <p class="by-nebula-tech">By Nebula Tech AI</p>
            <p class="legend">Nebul es una Inteligencia Artificial de uso exclusivo de la empresa Nebula Tech AI.</p>
        </div>
        <div class="header-right">
            <img src="C:/Users/Jesus/OneDrive/Escritorio/pagina nebul/img/icon-settings.png" alt="Ajustes" class="icon">
            <img src="C:/Users/Jesus/OneDrive/Escritorio/pagina nebul/img/icon-notifications.png" alt="Notificaciones" class="icon">
            <img src="C:/Users/Jesus/OneDrive/Escritorio/pagina nebul/img/icon-connect.png" alt="Conectarse/Desconectarse" class="icon">
        </div>
    </header>
    <div class="container">
        <aside class="sidebar">
            <h2>Usuarios Conectados</h2>
            <ul id="users">
                <li><span class="asterisk green">*</span> Mauricio</li>
                <li><span class="asterisk orange">*</span> Enrique</li>
                <li><span class="asterisk yellow">*</span> Fernando</li>
             </ul>
            <h2>Historial</h2>
            <ul id="history"></ul>
            <h2>Botones Funcionales</h2>
            <button>Ver Informes</button>
            <button>Ver Código</button>
            <h2>Fuentes</h2>
            <img src="images/source-icon.png" alt="Fuentes" class="icon-small">
        </aside>
        <main class="main-panel">
            <div class="security-level">
                <h3>Nivel de Seguridad del Usuario: Alto</h3>
            </div>
            <div class="last-update">
                <h3>Última Actualización de Software: 24 de Junio de 2024</h3>
            </div>
            <div class="notes">
                <h3>Notas</h3>
                <p>Esta es una nota importante sobre el uso del sistema.</p>
            </div>
            <div class="chat-section">
                <h3>Nebul IA</h3>
                <div class="chat-window" id="chat-window">
                    <div class="chat-message">Bienvenido Mauricio, ¿en qué puedo ayudarte?</div>
                </div>
                <input type="text" id="chat-input" placeholder="Escribe un mensaje...">
                <button id="chat-send-button">Enviar</button>
            </div>
            <div class="normativas">
                <h3>Normativas</h3>
                <a href="https://www.nebulatech.ai/normativas" target="_blank">Ver Normativas RIA</a>
            </div>
            <div class="charts">
                <div class="chart">
                    <h3>Gráfico Principal</h3>
                    <canvas id="main-chart"></canvas>
                </div>
                <div class="chart">
                    <h3>Gráfico de Barras</h3>
                    <canvas id="bar-chart"></canvas>
                </div>
                <div class="chart">
                    <h3>Gráfico de Líneas</h3>
                    <canvas id="line-chart"></canvas>
                </div>
            </div>
        </main>
    </div>
    <footer>
        <p>&copy; 2024 Nebula Tech. Todos los derechos reservados.</p>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="C:/Users/Jesus/OneDrive/Documentos/Escritorio/pagina nebul/public/chat.js"></script>
</body>
</html>