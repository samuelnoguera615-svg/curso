/**
 * Codex Academy - Lógica Principal (Versión 1000 Etapas con Tutoría IA)
 */

// --- CONFIGURACIÓN DE CATEGORÍAS DEL CURSO (1000 ETAPAS) ---
const CATEGORIES = [
    {
        id: "cat-logic",
        title: "1. Lógica y Cimientos de la Programación",
        subtitle: "Etapas 1 a 20 • Pensamiento Computacional y Lógica de Control",
        range: [0, 19]
    },
    {
        id: "cat-html",
        title: "2. Estructura Web - HTML5",
        subtitle: "Etapas 21 a 260 • Creación y Maquetación de Sitios Web",
        range: [20, 259]
    },
    {
        id: "cat-css",
        title: "3. Diseño y Estilos - CSS3",
        subtitle: "Etapas 261 a 500 • Estética, Colores, Posicionamiento y Layouts",
        range: [260, 499]
    },
    {
        id: "cat-html-css-conjunto",
        title: "4. HTML & CSS en Conjunto",
        subtitle: "Etapas 501 a 700 • Integración, Layouts y Componentes Reales",
        range: [500, 699]
    },
    {
        id: "cat-js-java-html",
        title: "5. JS & Java con HTML",
        subtitle: "Etapas 701 a 1000 • Interactividad y Programación Servidor",
        range: [700, 999]
    }
];

// --- MOTOR DE GENERACIÓN PROCEDURAL (CURRICULUM ENGINE) ---
function compileProceduralStage(index, category, concept, depth, difficulty, title) {
    const stageNum = index + 1;
    const xpAward = 100 + (index % 10) * 10;
    
    // 1. Teoría base
    let theory = `
        <h1>Etapa ${stageNum}: ${concept}</h1>
        <p class="stage-number" style="color:var(--accent-light); font-weight:600; text-transform:uppercase; font-size:0.75rem; letter-spacing:0.05em; margin-bottom: 1.5rem;">
            Sección: ${category.toUpperCase()} • Enfoque: ${depth} • Dificultad: ${difficulty}
        </p>
        <h2>Teoría del Módulo</h2>
        <p>En esta etapa profundizaremos en <strong>${concept}</strong> enfocándonos en la perspectiva de <em>${depth}</em>.</p>
        <p>Comprender este concepto es esencial para dominar el desarrollo web profesional y la lógica del lado del cliente y servidor.</p>
    `;
    
    if (category === "logica") {
        theory += `
            <p>La lógica es la base de todo software. Los computadores son secuenciales: leen instrucciones ordenadas y toman decisiones binarias. Al aprender '${concept}', entrenas tu mente para estructurar soluciones paso a paso.</p>
            <div class="info-note">
                <strong>💡 Tip Pedagógico:</strong> Piensa siempre en las tres fases del software: Entrada de datos, Procesamiento y Salida del resultado.
            </div>
        `;
    } else if (category === "html") {
        theory += `
            <p>HTML5 provee la estructura y significado del contenido web. Mediante etiquetas estructuradas como <code>&lt;${concept.toLowerCase().replace(/\s+/g, '')}&gt;</code>, los buscadores y navegadores interpretan de qué trata tu página.</p>
            <div class="info-note">
                <strong>💡 Buenas Prácticas:</strong> Siempre cierra tus etiquetas y mantén la semántica para mejorar el SEO y la accesibilidad.
            </div>
        `;
    } else if (category === "css") {
        theory += `
            <p>CSS3 es el lenguaje de diseño con el que vestimos al HTML. Permite definir colores, fuentes, espaciados externos e internos, y controlar la distribución exacta de las cajas mediante modelos como Flexbox o Grid.</p>
            <pre><code>/* Sintaxis CSS */
selector {
    propiedad: valor;
}</code></pre>
        `;
    } else if (category === "html_css_conjunto") {
        theory += `
            <p>La integración de HTML y CSS es clave para crear componentes profesionales. Al construir un/a <strong>${concept}</strong>, trabajamos de forma progresiva aplicando un flujo de diseño que adapta el contenido a pantallas móviles y de escritorio.</p>
        `;
    } else {
        theory += `
            <p>JavaScript dota de interactividad al navegador. Por otro lado, Java en el backend procesa peticiones mediante Servlets y inyecta datos dinámicos en páginas JSP, interactuando con bases de datos relacionales y conectándose con JS en el frontend.</p>
        `;
    }
    
    // 2. Ejemplos de código
    let examples = `
        <h2>Ejemplos Prácticos</h2>
        <p>A continuación se muestra un caso de aplicación real de <strong>${concept}</strong>:</p>
    `;
    
    let sandboxCode = "";
    if (category === "logica") {
        examples += `
            <pre><code>// Ejemplo lógico de asignación y salida
let a = 10;
let b = 20;
let suma = a + b;
console.log("Resultado de la suma:", suma); // Imprime 30</code></pre>
        `;
        sandboxCode = `// Práctica libre de lógica
let edad = 18;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
    console.log("Puedes conducir un auto.");
} else {
    console.log("No estás autorizado para conducir.");
}`;
    } else if (category === "html") {
        examples += `
            <pre><code>&lt;!-- Ejemplo estructurado en HTML --&gt;
&lt;div class="modulo-html"&gt;
    &lt;p&gt;Demostración práctica de ${concept}&lt;/p&gt;
&lt;/div&gt;</code></pre>
        `;
        sandboxCode = `<!-- Sandbox HTML -->
<div style="padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid var(--border);">
    <h3 style="margin-top:0;">Práctica de HTML: ${concept}</h3>
    <p>Agrega etiquetas HTML y modifícalas aquí.</p>
</div>`;
    } else if (category === "css") {
        examples += `
            <pre><code>/* Estilos de maquetación CSS */
.tarjeta-demo {
    background-color: #0f172a;
    border: 2px solid var(--accent);
    padding: 10px;
    border-radius: 6px;
}</code></pre>
        `;
        sandboxCode = `<!-- Sandbox HTML + CSS -->
<div class="caja-estilada">
    Edita el bloque &lt;style&gt; para cambiar mis colores y espaciados.
</div>

<style>
.caja-estilada {
    background: linear-gradient(135deg, var(--bg-input) 0%, #1e1b4b 100%);
    color: var(--text-primary);
    padding: 20px;
    border: 1px solid var(--accent);
    border-radius: 10px;
    text-align: center;
}
</style>`;
    } else if (category === "html_css_conjunto") {
        examples += `
            <pre><code>&lt;!-- Integración de componentes --&gt;
&lt;section class="contenedor-layout"&gt;
    &lt;div class="tarjeta"&gt;Paso de ${concept}&lt;/div&gt;
&lt;/section&gt;</code></pre>
        `;
        sandboxCode = `<!-- Sandbox de Componentes Completos -->
<div class="tarjeta-perfil">
    <h4>${concept}</h4>
    <p>Construcción progresiva del componente combinando maquetación y estilos.</p>
</div>

<style>
.tarjeta-perfil {
    background: #0f111a;
    border: 2px solid var(--border);
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}
</style>`;
    } else {
        examples += `
            <pre><code>// Integración cliente-servidor conceptual
function enviarPeticion() {
    console.log("Iniciando petición HTTP para ${concept}...");
}</code></pre>
        `;
        sandboxCode = `// Sandbox de JavaScript interactivo
function test() {
    let variableTest = "Ejecutando JS de ${concept}";
    console.log(variableTest);
}
test();`;
    }
    
    // 3. Quiz interactivo de 1 pregunta
    const quizOptions = [
        `Es fundamental para estructurar y dar coherencia a '${concept}'.`,
        `No tiene ninguna utilidad práctica y puede ignorarse.`,
        `Desactiva la ejecución de funciones en el navegador.`,
        `Es un error tipográfico heredado.`
    ];
    
    const quiz = {
        q: `¿Cuál de las siguientes afirmaciones describe mejor el enfoque '${depth}' aplicado a '${concept}'?`,
        options: quizOptions,
        correct: 0,
        explanation: `¡Correcto! Entender '${concept}' desde el enfoque de '${depth}' permite estructurar programas de forma más robusta y adaptada a estándares.`
    };
    
    // 4. Examen final de aprobación (alternamos quiz teórico y reto práctico)
    let evaluation = null;
    const isCodeChallenge = (category === "html" || category === "css" || category === "html_css_conjunto" || (category === "js_java_html" && index % 2 === 0));
    
    if (isCodeChallenge) {
        let file = "index.html";
        let lang = "html";
        let initial = "";
        let instructions = `<h3>Examen Práctico: Desafío de ${concept}</h3>
                            <p>Resuelve el siguiente reto en el editor de la derecha para aprobar la etapa:</p>`;
        
        if (category === "html" || category === "html_css_conjunto") {
            const tagKeyword = concept.toLowerCase().includes("encabezado") ? "h1" : 
                               concept.toLowerCase().includes("párrafo") ? "p" :
                               concept.toLowerCase().includes("lista desordenada") ? "ul" :
                               concept.toLowerCase().includes("lista ordenada") ? "ol" : 
                               concept.toLowerCase().includes("enlace") ? "a" :
                               concept.toLowerCase().includes("imagen") ? "img" : "div";
            
            instructions += `<p>Escribe tu código de modo que contenga al menos una etiqueta HTML de tipo <code>&lt;${tagKeyword}&gt;</code>.</p>`;
            initial = `<!-- Escribe tu código HTML aquí -->\n`;
            if (tagKeyword === "img") {
                initial += `<img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=100" alt="Imagen de muestra">\n`;
            } else if (tagKeyword === "a") {
                initial += `<a href="#">Enlace de prueba</a>\n`;
            } else {
                initial += `<${tagKeyword}>Texto de prueba sobre ${concept}</${tagKeyword}>\n`;
            }
            
            evaluation = {
                type: "code_challenge",
                title: `Examen Etapa ${stageNum}: ${concept}`,
                instructions: instructions,
                initialCode: initial,
                filename: file,
                language: lang,
                validate: function(code) {
                    const doc = new DOMParser().parseFromString(code, 'text/html');
                    const hasTag = doc.querySelector(tagKeyword) !== null;
                    if (!hasTag) {
                        return { success: false, msg: `El código debe contener al menos un elemento <${tagKeyword}>.` };
                    }
                    return { success: true, msg: `¡Perfecto! Hemos detectado la etiqueta <${tagKeyword}> correspondiente a ${concept}.` };
                }
            };
        } else if (category === "css") {
            file = "styles.html";
            lang = "html";
            initial = `<div class="mi-caja">Aplica estilo aquí</div>\n\n<style>\n.mi-caja {\n    /* Agrega color de fondo 'blue' (azul) */\n    \n}\n</style>`;
            instructions += `<p>Modifica los estilos CSS de modo que la clase <code>.mi-caja</code> tenga declarada la propiedad <code>background-color: blue;</code> (azul).</p>`;
            
            evaluation = {
                type: "code_challenge",
                title: `Examen Etapa ${stageNum}: ${concept}`,
                instructions: instructions,
                initialCode: initial,
                filename: file,
                language: lang,
                validate: function(code) {
                    try {
                        const doc = new DOMParser().parseFromString(code, 'text/html');
                        const styleTag = doc.querySelector('style');
                        if (!styleTag) return { success: false, msg: "No se encontró una etiqueta <style>." };
                        const styleContent = styleTag.innerHTML.toLowerCase().replace(/\s+/g, '');
                        const hasBgBlue = /\.mi-caja\{([^}]*background-color:blue|[^}]*background:blue|[^}]*background-color:#0000ff|[^}]*background:#0000ff)/i.test(styleContent);
                        if (!hasBgBlue) {
                            return { success: false, msg: "La clase '.mi-caja' debe tener la propiedad 'background-color' establecida en 'blue'." };
                        }
                    } catch(e) {
                        return { success: false, msg: "Error de lectura CSS: " + e.message };
                    }
                    return { success: true, msg: "¡Estilo CSS validado correctamente!" };
                }
            };
        } else {
            // JS challenge
            file = "script.js";
            lang = "javascript";
            initial = `function evaluar(x) {\n    // Retorna el doble de x (x * 2)\n    \n}`;
            instructions += `<p>Completa la función <code>evaluar</code> para que retorne el doble del parámetro recibido (<code>x * 2</code>).</p>`;
            
            evaluation = {
                type: "code_challenge",
                title: `Examen Etapa ${stageNum}: ${concept}`,
                instructions: instructions,
                initialCode: initial,
                filename: file,
                language: lang,
                validate: function(code) {
                    try {
                        const runner = new Function(code + "\nreturn evaluar;");
                        const userFunc = runner();
                        if (typeof userFunc !== 'function') return { success: false, msg: "La función 'evaluar' no está definida." };
                        if (userFunc(10) !== 20) return { success: false, msg: "evaluar(10) debería retornar 20." };
                        if (userFunc(-3) !== -6) return { success: false, msg: "evaluar(-3) debería retornar -6." };
                    } catch(e) {
                        return { success: false, msg: "Error sintáctico en JS: " + e.message };
                    }
                    return { success: true, msg: "¡Tests unitarios de la función JS aprobados!" };
                }
            };
        }
    } else {
        // Examen de opción múltiple
        evaluation = {
            type: "quiz",
            title: `Examen Teórico Etapa ${stageNum}: ${concept}`,
            questions: [
                {
                    q: `¿Cuál de las siguientes afirmaciones es correcta sobre la optimización de '${concept}' en el nivel '${depth}'?`,
                    options: [
                        "Optimizarlo permite mejorar el rendimiento y la mantenibilidad del código.",
                        "Solo sirve para cambiar colores de fondo.",
                        "Es inútil ya que el navegador maneja todo automáticamente.",
                        "Detiene el funcionamiento de la base de datos."
                    ],
                    correct: 0,
                    explanation: "¡Correcto! Seguir buenas prácticas y optimizar los recursos agiliza el tiempo de carga de las páginas web y facilita la lectura del código."
                }
            ]
        };
    }
    
    return {
        id: `stage-${stageNum}`,
        title: title,
        difficulty: difficulty,
        description: `Módulo progresivo para aprender todo sobre ${concept} (${depth}).`,
        xpAward: xpAward,
        theory: theory,
        examples: examples,
        sandboxCode: sandboxCode,
        requiresSandbox: true,
        quiz: quiz,
        evaluation: evaluation,
        lessons: [
            {
                id: `s${stageNum}-l1`,
                title: `Introducción a ${concept}`,
                content: theory + examples,
                sandboxCode: sandboxCode,
                requiresSandbox: true
            }
        ]
    };
}

function generateCourseData() {
    const data = [];
    
    // 1. LOGIC (1 to 20) -> 20 stages
    const logicConcepts = [
        "Pensamiento Algorítmico", "Pseudocódigo y Diseños", "Variables y Asignaciones", 
        "Constantes y Áreas de Memoria", "Tipos de Datos Primitivos", "Tipos Booleanos y Lógica", 
        "Operadores Matemáticos", "Operaciones de Incremento", "Operadores de Módulo y Residuo", 
        "Condicionales Simples"
    ];
    
    // 2. HTML (21 to 260) -> 240 stages
    const htmlConcepts = [
        "Estructura básica HTML5", "Estructura del Documento", "Etiquetas de Encabezado", "Párrafos y Saltos",
        "Negritas y Énfasis", "Itálicas y Énfasis", "Citas en bloque y citas cortas", "Texto preformateado y código",
        "Listas desordenadas", "Listas ordenadas", "Atributos en Listas", "Listas de descripción",
        "Hipervínculos básicos", "Anclas y enlaces internos", "Enlaces en pestañas nuevas", "Etiqueta de imagen",
        "Texto alternativo accesibilidad", "Tamaños de imágenes", "Bloque vs Línea", "Contenedor div",
        "Contenedor span", "Tablas estructura", "Tablas cabeceras", "Fusión de columnas",
        "Fusión de filas", "Formularios contenedor", "Inputs de texto", "Etiqueta Label",
        "Inputs Password y Email", "Botón Submit y Reset", "Inputs Checkbox", "Inputs Radio",
        "Cuadro TextArea", "Desplegables Select", "Semántica Cabecera y Nav", "Semántica Section y Article",
        "Semántica Footer", "Audio en la Web", "Video en la Web", "Meta tags y SEO"
    ];
    
    // 3. CSS (261 to 500) -> 240 stages
    const cssConcepts = [
        "CSS Línea, Interno y Externo", "Sintaxis CSS básica", "Selector de Etiqueta", "Selector de Clase",
        "Selector de ID", "Selector de Atributos", "Selector Descendiente", "Selector de Hermanos",
        "Pseudo-clases Enlaces", "Pseudo-clases Estado", "Pseudo-clases Estructura", "Pseudo-elementos de Texto",
        "Pseudo-elementos Contenido", "Medidas Absolutas px", "Medidas Relativas em y rem", "Medidas de Pantalla vh y vw",
        "Colores por Nombre y HEX", "Colores RGB y RGBA", "Colores HSL y HSLA", "Propiedades de Fondo",
        "Gradientes de Fondo", "Fuentes tipografías", "Pesos de fuentes", "Interlineado y espaciados",
        "Decoración y alineación", "Ancho y Alto caja", "Padding Modelo Caja", "Bordes Modelo Caja",
        "Bordes redondeados", "Márgenes Modelo Caja", "Box-sizing Border-box", "Desbordamiento Overflow",
        "Posición Static y Relative", "Posición Absolute", "Posición Fixed", "Posición Sticky",
        "Z-Index apilamiento", "Flexbox display", "Flexbox Items", "Grid columns y rows"
    ];
    
    // 4. HTML/CSS CONJUNTO (501 to 700) -> 200 stages
    const projectNames = [
        "Tarjeta de Perfil", "Menú de Navegación", "Landing Page de App", "Formulario Newsletter",
        "Galería Masonry", "Sección de Testimonios", "Tabla de Precios", "Hero Section",
        "Footer Comercial", "Página 404", "Tarjeta de Producto", "Formulario Contacto",
        "Barra de Dashboard", "Línea de Tiempo", "Lista de Tareas", "Acordeón FAQ",
        "Portafolio Personal", "Receta Interactiva", "Reproductor Mockup", "Página de Ventas",
        "Miembros de Equipo", "Formulario Registro", "Widget Clima", "Chatbox Flotante",
        "Boletín Informativo"
    ];
    
    // 5. JS/JAVA TRABAJANDO CON HTML (701 to 1000) -> 300 stages
    const jsJavaConcepts = [
        "JS Consola del Navegador", "JS Variables let y const", "JS Tipos Primitivos", "JS Operadores Matemáticos",
        "JS Operadores Comparación", "JS Operadores Lógicos", "JS Condicionales Simples", "JS Condicionales Dobles",
        "JS Ciclos While", "JS Ciclos For", "JS Declaración Funciones", "JS Parámetros Funciones",
        "JS Retorno Funciones", "JS Arrays Creación", "JS Arrays Métodos", "JS Objetos Literales",
        "JS Métodos de Objetos", "JS Concepto del DOM", "JS Selector getElementById", "JS Selector querySelector",
        "JS textContent y innerHTML", "JS Modificar Estilos", "JS classList add/remove", "JS Evento click",
        "JS Eventos Teclado", "JS Formularios Captura", "JS Formularios Validación", "JS Asincronía",
        "JS Notación JSON", "JS LocalStorage Guardar", "JS LocalStorage Leer", "JS Fetch y HTTP",
        "JS Fetch APIs", "Java Compilación y JVM", "Java Variables", "Java Condicionales",
        "Java Clases y Objetos", "Java Servlet Introducción", "Java Servlets Configuración", "Java Servlets Parámetros",
        "Java Servlets HTML Response", "Java JSP Introducción", "Java JSP Expresiones", "Java JSP Scriptlets",
        "Java JSP Formularios", "Java JDBC Bases de Datos", "Java Guardar en BD", "Java Retornar JSON",
        "Java Servlets Fetch", "Java Proyecto Web Completo"
    ];
    
    for (let i = 0; i < 1000; i++) {
        let category = "";
        let title = "";
        let concept = "";
        let depth = "";
        let difficulty = "Básica";
        
        if (i < 20) {
            category = "logica";
            concept = logicConcepts[Math.floor(i / 2)];
            depth = (i % 2 === 0) ? "Concepto Básico" : "Enfoque Práctico";
            difficulty = "Principiante";
            title = `Lógica: ${concept} (${depth})`;
        } else if (i < 260) {
            category = "html";
            const gIdx = i - 20;
            concept = htmlConcepts[Math.floor(gIdx / 6)];
            const depths = ["Sintaxis Básica", "Atributos Clave", "Accesibilidad", "Buenas Prácticas", "Errores Comunes", "Casos Avanzados"];
            depth = depths[gIdx % 6];
            difficulty = (gIdx % 6 < 3) ? "Básica" : "Intermedia";
            title = `HTML: ${concept} - ${depth}`;
        } else if (i < 500) {
            category = "css";
            const gIdx = i - 260;
            concept = cssConcepts[Math.floor(gIdx / 6)];
            const depths = ["Concepto Básico", "Propiedades de Detalle", "Adaptabilidad", "Errores Comunes", "Buenas Prácticas", "Casos Avanzados"];
            depth = depths[gIdx % 6];
            difficulty = (gIdx % 6 < 3) ? "Básica" : "Intermedia";
            title = `CSS: ${concept} - ${depth}`;
        } else if (i < 700) {
            category = "html_css_conjunto";
            const gIdx = i - 500;
            concept = projectNames[Math.floor(gIdx / 8)];
            const steps = ["Planificación HTML", "Maquetación Semántica", "Estilos Base", "Tipografía y Colores", "Alineación Flex/Grid", "Bordes y Espaciados", "Hovers y Efectos", "Diseño Responsivo"];
            depth = steps[gIdx % 8];
            difficulty = "Intermedia";
            title = `Proyecto: ${concept} (${depth})`;
        } else {
            category = "js_java_html";
            const gIdx = i - 700;
            concept = jsJavaConcepts[Math.floor(gIdx / 6)];
            const depths = ["Fundamento", "Estructura Sintáctica", "Ejemplo Práctico", "Vinculación Web", "Errores Comunes", "Proyecto Completo"];
            depth = depths[gIdx % 6];
            difficulty = "Avanzada";
            title = `JS & Java: ${concept} - ${depth}`;
        }
        
        const stageContent = compileProceduralStage(i, category, concept, depth, difficulty, title);
        data.push(stageContent);
    }
    
    return data;
}

const COURSE_DATA = generateCourseData();

// --- ESTADO DE LA APLICACIÓN (STATE) ---
let userState = {
    name: "",
    xp: 0,
    level: 1,
    currentStageIndex: 0,
    currentLessonIndex: 0,
    completedStages: new Array(1000).fill(false),
    stageGrades: new Array(1000).fill(null), // grades out of 100
    stageAttempts: new Array(1000).fill(0),
    unlockedStages: new Array(1000).fill(false), // Stage 1 unlocked at start
    activeView: "welcome-screen"
};
userState.unlockedStages[0] = true;

// --- CONFIGURACIÓN DE NIVELES ---
const XP_PER_LEVEL = 100;

// --- ELEMENTOS DEL DOM ---
const welcomeScreen = document.getElementById("welcome-screen");
const mainLayout = document.getElementById("main-layout");
const welcomeForm = document.getElementById("welcome-form");
const usernameInput = document.getElementById("username");
const displayName = document.getElementById("display-name");
const userRank = document.getElementById("user-rank");
const userLevel = document.getElementById("user-level");
const userCurrentXp = document.getElementById("user-current-xp");
const userNextLevelXp = document.getElementById("user-next-level-xp");
const xpFill = document.getElementById("xp-fill");
const bannerUsername = document.getElementById("banner-username");
const progressPercentage = document.getElementById("progress-percentage");
const statCompletedStages = document.getElementById("stat-completed-stages");
const statAvgGrade = document.getElementById("stat-avg-grade");
const categoriesContainer = document.getElementById("categories-container");
const navItems = document.querySelectorAll(".nav-item");
const contentSections = document.querySelectorAll(".content-section");
const mobileToggle = document.getElementById("mobile-toggle");
const sidebar = document.querySelector(".sidebar");
const pageTitle = document.getElementById("page-title");
const btnResetData = document.getElementById("btn-reset-data");

// Lesson UI Elements
const lessonStageTitle = document.getElementById("lesson-stage-title");
const lessonsMenu = document.querySelector(".lessons-menu");
const lessonContentCard = document.querySelector(".lesson-content-card");
const tabContentTheory = document.getElementById("tab-content-theory");
const tabContentExamples = document.getElementById("tab-content-examples");
const tabContentSandbox = document.getElementById("tab-content-sandbox");
const tabContentQuiz = document.getElementById("tab-content-quiz");
const tabContentExam = document.getElementById("tab-content-exam");
const btnPrevLesson = document.getElementById("btn-prev-lesson");
const btnNextLesson = document.getElementById("btn-next-lesson");
const toggleAiContent = document.getElementById("toggle-ai-content");

// Sandbox Elements
const sandboxCode = document.getElementById("sandbox-code");
const sandboxOutput = document.getElementById("sandbox-output");
const btnSandboxRun = document.getElementById("btn-sandbox-run");

// Evaluation UI Elements
const evaluationContainer = document.getElementById("evaluation-container");

// Grades UI Elements
const gradesTableBody = document.getElementById("grades-table-body");
const metricCompletedQuizzes = document.getElementById("metric-completed-quizzes");
const metricAverage = document.getElementById("metric-average");
const metricStatus = document.getElementById("metric-status");
const gradesCertBanner = document.getElementById("grades-cert-banner");

// Certificate UI Elements
const navCertificate = document.getElementById("nav-certificate");
const certStudentName = document.getElementById("cert-student-name");
const certGrade = document.getElementById("cert-grade");
const certDate = document.getElementById("cert-date");
const certId = document.getElementById("cert-id");
const btnPrintCert = document.getElementById("btn-print-cert");

// Confetti Overlay
const confettiOverlay = document.getElementById("confetti-overlay");

// Variables globales de Pestañas y Paginación
let activeTab = "theory";
let categoryPages = {
    "cat-logic": 0,
    "cat-html": 0,
    "cat-css": 0,
    "cat-html-css-conjunto": 0,
    "cat-js-java-html": 0
};
let currentQuizSelectedAnswer = null;
let isShowingMegaExam = false;
let megaExamQuestions = [];
let currentMegaExamAnswers = [];

// --- INICIALIZACIÓN ---
document.addEventListener("DOMContentLoaded", () => {
    loadProgress();
    setupEventListeners();
    setupTabNavigation();
    applyState();
    if (userState.name) {
        switchView(userState.activeView || "dashboard");
    }
});

// --- UPGRADE DEL ESTADO (SOPORTA 1000 ETAPAS DESDE 3 O 50 ANTERIORES) ---
function upgradeUserState(loaded) {
    const size = 1000;
    const completed = new Array(size).fill(false);
    const grades = new Array(size).fill(null);
    const attempts = new Array(size).fill(0);
    const unlocked = new Array(size).fill(false);
    unlocked[0] = true;
    
    if (loaded.completedStages) {
        for (let i = 0; i < Math.min(loaded.completedStages.length, size); i++) {
            completed[i] = loaded.completedStages[i];
            grades[i] = loaded.stageGrades ? loaded.stageGrades[i] : null;
            attempts[i] = loaded.stageAttempts ? loaded.stageAttempts[i] : 0;
            unlocked[i] = loaded.unlockedStages ? loaded.unlockedStages[i] : false;
        }
    }
    
    loaded.completedStages = completed;
    loaded.stageGrades = grades;
    loaded.stageAttempts = attempts;
    loaded.unlockedStages = unlocked;
    
    // Asegurar desbloqueo consecutivo de etapas previas aprobadas
    for (let i = 0; i < size - 1; i++) {
        if (completed[i]) {
            loaded.unlockedStages[i + 1] = true;
        }
    }
    
    return loaded;
}

// --- CONFIGURACIÓN DE PESTAÑAS (TABS VISOR) ---
function setupTabNavigation() {
    const tabs = document.querySelectorAll(".lesson-menu-item");
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();
            if (isShowingMegaExam) {
                showToast("⚠️ Debes completar el Examen Total de la Sección primero.", "warning");
                return;
            }
            const tabName = tab.getAttribute("data-tab");
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    activeTab = tabName;
    const tabs = document.querySelectorAll(".lesson-menu-item");
    tabs.forEach(tab => {
        if (tab.getAttribute("data-tab") === tabName) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    const contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => {
        if (content.id === `tab-content-${tabName}`) {
            content.classList.remove("hidden");
            content.classList.add("active");
        } else {
            content.classList.remove("active");
            content.classList.add("hidden");
        }
    });

    // Cargar contenido específico al abrir la pestaña
    if (tabName === "sandbox") {
        const stage = COURSE_DATA[userState.currentStageIndex];
        sandboxCode.value = stage.sandboxCode;
    } else if (tabName === "quiz") {
        renderStageQuiz();
    } else if (tabName === "exam") {
        renderStageExam();
    }
}

// --- SISTEMA DE EVENTOS ---
function setupEventListeners() {
    // Formulario de bienvenida
    welcomeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = usernameInput.value.trim();
        if (name) {
            userState.name = name;
            userState.activeView = "dashboard";
            addXp(20); // Regalo de inicio
            showToast("🚀 ¡Bienvenido a Codex Academy! +20 XP obtenido.", "success");
            saveProgress();
            applyState();
        }
    });

    // Navegación de la barra lateral (Sidebar)
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            if (item.classList.contains("disabled")) {
                showToast("🔒 Esta sección está bloqueada hasta completar el curso.", "warning");
                return;
            }
            const target = item.getAttribute("data-target");
            switchView(target);
            sidebar.classList.remove("mobile-open");
        });
    });

    mobileToggle.addEventListener("click", () => {
        sidebar.classList.toggle("mobile-open");
    });

    document.addEventListener("click", (e) => {
        if (window.innerWidth <= 992 && 
            !sidebar.contains(e.target) && 
            !mobileToggle.contains(e.target) && 
            sidebar.classList.contains("mobile-open")) {
            sidebar.classList.remove("mobile-open");
        }
    });

    // Reiniciar Progreso
    btnResetData.addEventListener("click", () => {
        if (confirm("⚠️ ¿Estás seguro de que deseas borrar todo tu progreso, notas y XP de las 1000 etapas? Esta acción no se puede deshacer.")) {
            localStorage.removeItem("codex_academy_user");
            userState = {
                name: "",
                xp: 0,
                level: 1,
                currentStageIndex: 0,
                currentLessonIndex: 0,
                completedStages: new Array(1000).fill(false),
                stageGrades: new Array(1000).fill(null),
                stageAttempts: new Array(1000).fill(0),
                unlockedStages: new Array(1000).fill(false),
                activeView: "welcome-screen"
            };
            userState.unlockedStages[0] = true;
            isShowingMegaExam = false;
            showToast("Datos borrados. Iniciando de nuevo.", "info");
            applyState();
        }
    });

    btnSandboxRun.addEventListener("click", runSandboxCode);

    btnPrevLesson.addEventListener("click", () => {
        if (userState.currentStageIndex > 0) {
            userState.currentStageIndex -= 1;
            isShowingMegaExam = false;
            saveProgress();
            switchView("lessons-view");
        } else {
            switchView("dashboard");
        }
    });

    btnNextLesson.addEventListener("click", () => {
        const isCompleted = userState.completedStages[userState.currentStageIndex];
        if (!isCompleted) {
            showToast("⚠️ Primero debes aprobar el examen de esta etapa para avanzar.", "warning");
            return;
        }

        // Si la etapa que se acaba de completar es un checkpoint (cada 100 etapas), activamos el examen total
        const nextStageNum = userState.currentStageIndex + 2; // stage index + 1 (current stage) + 1 (next stage)
        const isCheckpoint = (userState.currentStageIndex + 1) % 100 === 0 && !userState.unlockedStages[userState.currentStageIndex + 1];
        
        if (isCheckpoint && !isShowingMegaExam) {
            isShowingMegaExam = true;
            setupMegaExam();
            return;
        }

        if (userState.currentStageIndex < 999) {
            userState.currentStageIndex += 1;
            isShowingMegaExam = false;
            saveProgress();
            switchView("lessons-view");
        } else {
            showToast("🎉 ¡Felicidades! Has completado las 1000 etapas del curso.", "success");
            switchView("dashboard");
        }
    });

    btnPrintCert.addEventListener("click", () => {
        window.print();
    });

    // Guardado de API Key
    const geminiKeyInput = document.getElementById("gemini-api-key");
    const btnSaveKey = document.getElementById("btn-save-key");
    if (geminiKeyInput) {
        const savedKey = localStorage.getItem("gemini_api_key");
        if (savedKey) {
            geminiKeyInput.value = savedKey;
        }
    }
    if (btnSaveKey && geminiKeyInput) {
        btnSaveKey.addEventListener("click", () => {
            const key = geminiKeyInput.value.trim();
            if (key) {
                localStorage.setItem("gemini_api_key", key);
                showToast("🔑 Llave API de Gemini guardada exitosamente.", "success");
            } else {
                localStorage.removeItem("gemini_api_key");
                showToast("🔑 Llave API eliminada.", "info");
            }
        });
    }

    // Botón de tutoría en Sandbox
    const btnSandboxAi = document.getElementById("btn-sandbox-ai");
    if (btnSandboxAi) {
        btnSandboxAi.addEventListener("click", () => {
            const code = sandboxCode.value;
            const output = sandboxOutput.textContent;
            const stage = COURSE_DATA[userState.currentStageIndex];
            consultarTutorIA(`Práctica Sandbox de la etapa: ${stage.title}`, code, output);
        });
    }

    // Cerrar panel de IA
    const btnCloseAi = document.getElementById("btn-close-ai");
    if (btnCloseAi) {
        btnCloseAi.addEventListener("click", () => {
            document.getElementById("ai-tutor-panel").classList.add("hidden");
        });
    }

    // Toggle para contenido de IA
    if (toggleAiContent) {
        toggleAiContent.addEventListener("change", () => {
            loadStageContent();
        });
    }
}

// --- LOGICA DE NAVEGACIÓN Y VISTAS ---
function switchView(targetId) {
    userState.activeView = targetId;
    saveProgress();

    navItems.forEach(item => {
        if (item.getAttribute("data-target") === targetId) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    contentSections.forEach(section => {
        if (section.id === targetId) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });

    let titleText = "Panel de Control";
    if (targetId === "lessons-view") titleText = "Visor de Lecciones";
    else if (targetId === "grades-view") titleText = "Boletín de Calificaciones";
    else if (targetId === "certificate-view") titleText = "Diploma Académico";
    
    pageTitle.textContent = titleText;

    if (targetId === "dashboard") {
        renderDashboard();
    } else if (targetId === "lessons-view") {
        loadStageContent();
    } else if (targetId === "grades-view") {
        renderGrades();
    } else if (targetId === "certificate-view") {
        renderCertificate();
    }
}

// --- GUARDAR Y CARGAR ---
function saveProgress() {
    localStorage.setItem("codex_academy_user", JSON.stringify(userState));
}

function loadProgress() {
    const saved = localStorage.getItem("codex_academy_user");
    if (saved) {
        try {
            const loaded = JSON.parse(saved);
            userState = upgradeUserState(loaded);
        } catch(e) {
            console.error("Error cargando LocalStorage:", e);
        }
    }
}

// --- APLICACIÓN DEL ESTADO ---
function applyState() {
    if (userState.activeView === "welcome-screen" && !userState.name) {
        welcomeScreen.classList.add("active");
        welcomeScreen.style.display = "flex";
        mainLayout.classList.add("hidden");
    } else {
        welcomeScreen.classList.remove("active");
        welcomeScreen.style.display = "none";
        mainLayout.classList.remove("hidden");
        
        displayName.textContent = userState.name;
        bannerUsername.textContent = userState.name;
        userLevel.textContent = userState.level;
        userCurrentXp.textContent = userState.xp;
        
        let rank = "Iniciado de la Web";
        if (userState.level >= 5) rank = "Maestro del Pseudocódigo";
        if (userState.level >= 15) rank = "Desarrollador HTML/CSS";
        if (userState.level >= 30) rank = "Maestro de Interfaces";
        if (userState.level >= 50) rank = "Ingeniero Fullstack Jr";
        userRank.textContent = rank;

        const nextLevelXp = userState.level * XP_PER_LEVEL;
        const currentLevelBaseXp = (userState.level - 1) * XP_PER_LEVEL;
        const levelProgress = userState.xp - currentLevelBaseXp;
        const progressPercent = Math.max(0, Math.min(100, (levelProgress / XP_PER_LEVEL) * 100));
        
        userNextLevelXp.textContent = nextLevelXp;
        xpFill.style.width = `${progressPercent}%`;

        const allCompleted = userState.completedStages.every(stage => stage === true);
        if (allCompleted) {
            navCertificate.classList.remove("disabled");
        } else {
            navCertificate.classList.add("disabled");
        }

        renderDashboard();
    }
}

function addXp(amount) {
    userState.xp += amount;
    const nextLevelThreshold = userState.level * XP_PER_LEVEL;
    if (userState.xp >= nextLevelThreshold) {
        userState.level += 1;
        triggerLevelUpEffects();
    }
    saveProgress();
}

function triggerLevelUpEffects() {
    showToast(`✨ ¡NIVEL UP! Has alcanzado el Nivel ${userState.level} ✨`, "success");
    triggerConfetti();
}

// --- RENDERIZAR DASHBOARD CON PAGINACIÓN DE 20 ETAPAS ---
function renderDashboard() {
    const completedCount = userState.completedStages.filter(Boolean).length;
    statCompletedStages.textContent = `${completedCount}/1000`;
    
    // Porcentaje global
    const overallPercent = Math.min(100, Math.round((completedCount / 1000) * 100));
    progressPercentage.textContent = `${overallPercent}%`;

    const approvedGrades = userState.stageGrades.filter(g => g !== null && g > 0);
    if (approvedGrades.length > 0) {
        const sum = approvedGrades.reduce((a, b) => a + b, 0);
        statAvgGrade.textContent = `${Math.round(sum / approvedGrades.length)}%`;
    } else {
        statAvgGrade.textContent = "-";
    }

    categoriesContainer.innerHTML = "";
    CATEGORIES.forEach(cat => {
        const group = document.createElement("div");
        const isActiveCategory = userState.currentStageIndex >= cat.range[0] && userState.currentStageIndex <= cat.range[1];
        group.className = `category-group ${isActiveCategory ? 'active' : ''}`;
        group.id = cat.id;

        let completedInCat = 0;
        const totalInCat = cat.range[1] - cat.range[0] + 1;
        for (let idx = cat.range[0]; idx <= cat.range[1]; idx++) {
            if (userState.completedStages[idx]) completedInCat++;
        }

        // Paginación
        const numPages = Math.ceil(totalInCat / 20);
        if (categoryPages[cat.id] === undefined || categoryPages[cat.id] >= numPages) {
            categoryPages[cat.id] = 0;
        }

        let paginationHtml = "";
        if (numPages > 1) {
            paginationHtml += `<div class="stages-pagination-container">`;
            for (let p = 0; p < numPages; p++) {
                const isCurrentPage = categoryPages[cat.id] === p;
                paginationHtml += `<button class="btn ${isCurrentPage ? 'btn-primary' : 'btn-outline'} btn-sm btn-page-nav" data-cat="${cat.id}" data-page="${p}">Bloque ${p+1}</button>`;
            }
            paginationHtml += `</div>`;
        }

        group.innerHTML = `
            <div class="category-header">
                <div class="category-title-info">
                    <span class="category-title">${cat.title}</span>
                    <span class="category-subtitle">${cat.subtitle} (${completedInCat} / ${totalInCat} Completadas)</span>
                </div>
                <span class="category-chevron">▼</span>
            </div>
            <div class="category-body">
                ${paginationHtml}
                <div class="category-grid" id="grid-${cat.id}" style="margin-top: 1rem;"></div>
            </div>
        `;

        categoriesContainer.appendChild(group);

        // Renderizar las 20 tarjetas del bloque activo
        const grid = document.getElementById(`grid-${cat.id}`);
        const pageStart = cat.range[0] + categoryPages[cat.id] * 20;
        const pageEnd = Math.min(cat.range[1], pageStart + 19);

        for (let globalIdx = pageStart; globalIdx <= pageEnd; globalIdx++) {
            const stage = COURSE_DATA[globalIdx];
            const isLocked = !userState.unlockedStages[globalIdx];
            const isCompleted = userState.completedStages[globalIdx];

            const card = document.createElement("div");
            card.className = `stage-card card ${isLocked ? 'locked' : ''}`;

            let badgeHtml = "";
            if (isLocked) badgeHtml = `<span class="stage-badge locked-badge">🔒 Bloqueado</span>`;
            else if (isCompleted) badgeHtml = `<span class="stage-badge completed-badge">✓ Aprobado (${userState.stageGrades[globalIdx]}%)</span>`;
            else badgeHtml = `<span class="stage-badge active-badge">⚡ En Curso</span>`;

            let actionButtonHtml = "";
            if (isLocked) {
                actionButtonHtml = `
                    <div class="stage-locked-icon">
                        <span>Bloqueado</span>
                    </div>
                `;
            } else {
                const btnText = isCompleted ? "Repasar" : "Iniciar";
                actionButtonHtml = `
                    <button class="btn btn-outline btn-sm btn-start-stage" data-index="${globalIdx}">
                        <span>${btnText}</span>
                    </button>
                `;
            }

            card.innerHTML = `
                ${badgeHtml}
                <span class="stage-number">Etapa ${globalIdx + 1}</span>
                <h3>${stage.title}</h3>
                <p>${stage.description}</p>
                <div class="stage-meta">
                    <span class="stage-lessons-count">${stage.lessons.length} Lecc.</span>
                    ${actionButtonHtml}
                </div>
            `;
            grid.appendChild(card);
        }

        // Colapsar/Expandir Categoría
        const header = group.querySelector(".category-header");
        header.addEventListener("click", () => {
            group.classList.toggle("active");
        });
    });

    // Manejar clics de paginación
    document.querySelectorAll(".btn-page-nav").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const catId = btn.getAttribute("data-cat");
            const page = parseInt(btn.getAttribute("data-page"));
            categoryPages[catId] = page;
            renderDashboard();
        });
    });

    // Iniciar Etapa
    document.querySelectorAll(".btn-start-stage").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const idx = parseInt(btn.getAttribute("data-index"));
            startStage(idx);
        });
    });
}

function startStage(stageIndex) {
    userState.currentStageIndex = stageIndex;
    isShowingMegaExam = false;
    saveProgress();
    switchView("lessons-view");
}

// --- CARGAR ETAPA Y LECCIÓN (TABS + AI EXTRA CONTENT) ---
async function loadStageContent() {
    if (isShowingMegaExam) {
        renderMegaExamView();
        return;
    }

    // Restablecer el menú de pestañas si venía de un Examen Total
    lessonsMenu.innerHTML = `
        <a href="#" class="lesson-menu-item active" data-tab="theory">
            <span>📚 1. Teoría</span>
        </a>
        <a href="#" class="lesson-menu-item" data-tab="examples">
            <span>💡 2. Ejemplos</span>
        </a>
        <a href="#" class="lesson-menu-item" data-tab="sandbox">
            <span>🧪 3. Práctica Sandbox</span>
        </a>
        <a href="#" class="lesson-menu-item" data-tab="quiz">
            <span>📝 4. Quiz de Etapa</span>
        </a>
        <a href="#" class="lesson-menu-item" data-tab="exam">
            <strong style="color: var(--accent-light)">🏁 5. Examen Final</strong>
        </a>
    `;
    setupTabNavigation();

    const stage = COURSE_DATA[userState.currentStageIndex];
    lessonStageTitle.textContent = `Etapa ${userState.currentStageIndex + 1}: ${stage.title}`;
    
    // Ocultar modal deslizante anterior si estuviera abierto
    document.getElementById("ai-tutor-panel").classList.add("hidden");

    // Limpiar vistas de las pestañas
    tabContentTheory.innerHTML = stage.theory;
    tabContentExamples.innerHTML = stage.examples;
    
    // Cargar contenido avanzado de Gemini si está seleccionado
    const apiKey = localStorage.getItem("gemini_api_key");
    const useAiContent = toggleAiContent ? toggleAiContent.checked : false;

    if (useAiContent && apiKey) {
        // Mostrar cargando en la teoría
        tabContentTheory.innerHTML = `
            ${stage.theory}
            <div class="ai-loading-spinner">
                <div class="spinner"></div>
                <p>Generando teoría extra y explicaciones avanzadas con Gemini...</p>
            </div>
        `;
        
        try {
            const prompt = `
            Genera una sección corta y muy educativa en español con contenido extra avanzado y consejos prácticos de nivel profesional sobre el tema: "${stage.title}".
            Escríbelo usando etiquetas HTML directas (ej: h2, p, pre, code). No devuelvas markdown.
            `;
            
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.candidates && data.candidates[0].content.parts[0].text) {
                    const aiText = data.candidates[0].content.parts[0].text;
                    tabContentTheory.innerHTML = `
                        ${stage.theory}
                        <div class="ai-extra-box card" style="border: 1px dashed var(--accent); background: rgba(139, 92, 246, 0.03); padding: 1.5rem; margin-top: 2rem;">
                            <h3 style="color:var(--accent-light); margin-top:0;">🤖 Teoría Extra Generada por IA</h3>
                            ${aiText}
                        </div>
                    `;
                }
            } else {
                tabContentTheory.innerHTML = stage.theory + "<p style='color:var(--danger)'>No se pudo cargar el contenido de IA. Mostrando teoría básica.</p>";
            }
        } catch(e) {
            console.error("Error al cargar teoría extendida:", e);
            tabContentTheory.innerHTML = stage.theory;
        }
    }

    // Configurar botones de pie
    if (userState.currentStageIndex === 0) {
        btnPrevLesson.disabled = true;
        btnPrevLesson.textContent = "Volver al Panel";
        btnPrevLesson.onclick = () => switchView("dashboard");
    } else {
        btnPrevLesson.disabled = false;
        btnPrevLesson.textContent = "Anterior Etapa";
        btnPrevLesson.onclick = () => {
            userState.currentStageIndex -= 1;
            isShowingMegaExam = false;
            loadStageContent();
        };
    }

    btnNextLesson.textContent = "Siguiente Etapa";
    
    // Reiniciar a la pestaña de Teoría
    switchTab("theory");
}

// --- RENDERIZAR VISTAS INTERACTIVAS DE PESTAÑAS ---
// Pestaña 4: Quiz
function renderStageQuiz() {
    const stage = COURSE_DATA[userState.currentStageIndex];
    const quiz = stage.quiz;
    currentQuizSelectedAnswer = null;

    let optionsHtml = "";
    quiz.options.forEach((opt, oIdx) => {
        optionsHtml += `
            <label class="quiz-option">
                <input type="radio" name="stage-quiz" value="${oIdx}">
                <span>${opt}</span>
            </label>
        `;
    });

    tabContentQuiz.innerHTML = `
        <div class="quiz-container">
            <h2>Pregunta de Autocomprobación</h2>
            <p style="font-size:1rem; margin-bottom: 1.5rem; font-weight: 500;">${quiz.q}</p>
            <div class="quiz-options-container">
                ${optionsHtml}
            </div>
            <div class="quiz-actions" style="margin-top: 1.5rem; display:flex; gap:1rem;">
                <button id="btn-quiz-check" class="btn btn-secondary">Comprobar Respuesta</button>
            </div>
            <div id="quiz-feedback-box" style="margin-top:1.5rem;"></div>
        </div>
    `;

    // Manejar selección visual
    const options = tabContentQuiz.querySelectorAll(".quiz-option");
    options.forEach(opt => {
        opt.addEventListener("click", () => {
            options.forEach(o => o.classList.remove("selected"));
            opt.classList.add("selected");
            const radio = opt.querySelector("input");
            radio.checked = true;
            currentQuizSelectedAnswer = parseInt(radio.value);
        });
    });

    const btnCheck = document.getElementById("btn-quiz-check");
    btnCheck.addEventListener("click", () => {
        if (currentQuizSelectedAnswer === null) {
            showToast("⚠️ Selecciona una opción antes de comprobar.", "warning");
            return;
        }

        const isCorrect = currentQuizSelectedAnswer === quiz.correct;
        const feedbackBox = document.getElementById("quiz-feedback-box");
        
        if (isCorrect) {
            feedbackBox.innerHTML = `
                <div class="card" style="border-left: 4px solid var(--success); background: var(--success-glow); padding: 1.25rem;">
                    <strong style="color:#34d399">✓ ¡Respuesta Correcta!</strong>
                    <p style="margin-top:0.5rem; font-size:0.85rem;">${quiz.explanation}</p>
                </div>
            `;
            addXp(10); // premio de quiz
        } else {
            feedbackBox.innerHTML = `
                <div class="card" style="border-left: 4px solid var(--danger); background: var(--danger-glow); padding: 1.25rem;">
                    <strong style="color:#f87171">✗ Respuesta Incorrecta</strong>
                    <p style="margin-top:0.5rem; font-size:0.85rem;">Inténtalo de nuevo. Analiza el contenido de la pestaña de Teoría.</p>
                </div>
            `;
        }
    });
}

// Pestaña 5: Examen
function renderStageExam() {
    const stage = COURSE_DATA[userState.currentStageIndex];
    const evalData = stage.evaluation;
    
    // Si la etapa ya está aprobada, mostrar éxito
    if (userState.completedStages[userState.currentStageIndex]) {
        tabContentExam.innerHTML = `
            <div class="result-card card" style="max-width:600px; margin: 2rem auto; text-align:center;">
                <div class="result-icon">🎉</div>
                <h2>Examen Aprobado</h2>
                <p>Ya has aprobado la evaluación correspondiente a esta etapa con calificación de 100%.</p>
                <div class="result-grade approved">100%</div>
            </div>
        `;
        return;
    }

    if (evalData.type === "quiz") {
        let optionsHtml = "";
        evalData.questions[0].options.forEach((opt, oIdx) => {
            optionsHtml += `
                <label class="quiz-option">
                    <input type="radio" name="stage-exam-quiz" value="${oIdx}">
                    <span>${opt}</span>
                </label>
            `;
        });

        tabContentExam.innerHTML = `
            <div class="quiz-container" style="max-width: 650px; margin: 0 auto;">
                <h2>Examen Conceptual de la Etapa</h2>
                <p style="font-size:1.05rem; font-weight:500; margin-bottom: 1.5rem;">${evalData.questions[0].q}</p>
                <div class="quiz-options-container">
                    ${optionsHtml}
                </div>
                <div class="quiz-actions" style="margin-top:1.5rem;">
                    <button id="btn-submit-exam-quiz" class="btn btn-primary">Enviar Examen</button>
                </div>
            </div>
        `;

        const options = tabContentExam.querySelectorAll(".quiz-option");
        let selectedAns = null;
        options.forEach(opt => {
            opt.addEventListener("click", () => {
                options.forEach(o => o.classList.remove("selected"));
                opt.classList.add("selected");
                selectedAns = parseInt(opt.querySelector("input").value);
            });
        });

        document.getElementById("btn-submit-exam-quiz").addEventListener("click", () => {
            if (selectedAns === null) {
                showToast("⚠️ Debes seleccionar una respuesta.", "warning");
                return;
            }

            const isCorrect = selectedAns === evalData.questions[0].correct;
            
            userState.stageAttempts[userState.currentStageIndex] += 1;
            if (isCorrect) {
                userState.completedStages[userState.currentStageIndex] = true;
                userState.stageGrades[userState.currentStageIndex] = 100;
                if (userState.currentStageIndex < 999) {
                    const isNextCheckpoint = (userState.currentStageIndex + 1) % 100 === 0;
                    if (!isNextCheckpoint) {
                        userState.unlockedStages[userState.currentStageIndex + 1] = true;
                    }
                }
                addXp(stage.xpAward);
                saveProgress();
                applyState();
                showToast("🎉 ¡Felicidades! Examen de etapa aprobado.", "success");
                renderStageExam(); // recargar vista de aprobado
            } else {
                userState.stageGrades[userState.currentStageIndex] = 0;
                saveProgress();
                applyState();
                showToast("❌ Respuesta incorrecta. Revisa la teoría e inténtalo de nuevo.", "danger");
            }
        });

    } else if (evalData.type === "code_challenge") {
        tabContentExam.innerHTML = `
            <div class="challenge-grid">
                <div class="challenge-instructions">
                    ${evalData.instructions}
                </div>
                
                <div class="challenge-editor-panel">
                    <div class="editor-header">
                        <span class="editor-filename">📁 ${evalData.filename}</span>
                        <span class="editor-lang badge">${evalData.language.toUpperCase()}</span>
                    </div>
                    
                    <div class="editor-workspace">
                        <div class="editor-line-numbers">
                            1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15
                        </div>
                        <textarea id="challenge-editor" class="editor-textarea" spellcheck="false">${evalData.initialCode}</textarea>
                        
                        ${evalData.language === 'html' ? `
                            <div class="preview-panel">
                                <iframe id="html-preview" class="preview-iframe"></iframe>
                            </div>
                        ` : ''}
                    </div>

                    <div class="console-panel">
                        <div class="console-header">Pruebas del Sistema</div>
                        <div class="console-logs" id="challenge-console">
                            <div class="console-line info">Haz clic en "Validar Examen" para correr los tests automáticos.</div>
                        </div>
                    </div>

                    <div class="editor-actions">
                        <button id="btn-challenge-ai" class="btn btn-primary btn-sm btn-ai-action" style="background: linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%);">
                            <span>🤖 Pedir Pista</span>
                        </button>
                        <button id="btn-validate-challenge" class="btn btn-secondary btn-sm">Validar Examen</button>
                    </div>
                </div>
            </div>
        `;

        const editor = document.getElementById("challenge-editor");
        const consoleLogs = document.getElementById("challenge-console");
        const btnValidate = document.getElementById("btn-validate-challenge");
        const btnAi = document.getElementById("btn-challenge-ai");

        if (evalData.language === 'html') {
            const previewFrame = document.getElementById("html-preview");
            const updatePreview = () => {
                const content = editor.value;
                const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
                doc.open();
                doc.write(content);
                doc.close();
            };
            editor.addEventListener("input", updatePreview);
            updatePreview();
        }

        btnAi.addEventListener("click", () => {
            const code = editor.value;
            const lastError = consoleLogs.textContent;
            consultarTutorIA(`Examen práctico de la etapa: ${stage.title}\nReto: ${evalData.instructions}`, code, lastError);
        });

        btnValidate.addEventListener("click", () => {
            const code = editor.value;
            consoleLogs.innerHTML = `<div class="console-line info">🚀 Corriendo validador de código...</div>`;
            
            setTimeout(() => {
                const result = evalData.validate(code);
                userState.stageAttempts[userState.currentStageIndex] += 1;
                
                if (result.success) {
                    consoleLogs.innerHTML = `
                        <div class="console-line success">✓ Test Exitoso: ${result.msg}</div>
                        <div class="console-line success">🎉 Examen aprobado con 100% de efectividad!</div>
                    `;
                    
                    userState.completedStages[userState.currentStageIndex] = true;
                    userState.stageGrades[userState.currentStageIndex] = 100;
                    if (userState.currentStageIndex < 999) {
                        const isNextCheckpoint = (userState.currentStageIndex + 1) % 100 === 0;
                        if (!isNextCheckpoint) {
                            userState.unlockedStages[userState.currentStageIndex + 1] = true;
                        }
                    }
                    addXp(stage.xpAward);
                    saveProgress();
                    applyState();
                    
                    setTimeout(() => {
                        renderStageExam();
                    }, 1500);
                } else {
                    consoleLogs.innerHTML = `
                        <div class="console-line error">❌ Test Fallido: ${result.msg}</div>
                        <div class="console-line error">Revisa tu lógica o solicita ayuda con el tutor de IA.</div>
                    `;
                    userState.stageGrades[userState.currentStageIndex] = 0;
                    saveProgress();
                    applyState();
                }
            }, 800);
        });
    }
}

// --- RENDERIZAR EXAMEN TOTAL (MEGAPRUEBA CADA 100 ETAPAS) ---
let activeMegaQuestionIdx = 0;

function setupMegaExam() {
    switchView("lessons-view"); // Cargar visor
    renderMegaExamView();
}

function renderMegaExamView() {
    isShowingMegaExam = true;
    
    // Generar las 5 preguntas del examen de forma aleatoria a partir de los quizzes del bloque anterior
    const blockIndex = Math.floor(userState.currentStageIndex / 100);
    const startRange = blockIndex * 100;
    const endRange = startRange + 98; // Excluimos la etapa 100 en sí misma
    
    lessonStageTitle.textContent = `🏆 Examen Total: Sección ${blockIndex + 1}`;
    
    // Inundar la barra lateral de pestañas para inhabilitar navegación
    lessonsMenu.innerHTML = `
        <div class="current-stage-badge" style="background:var(--warning-glow); color:var(--warning); border-color:rgba(245,158,11,0.2);">
            ⚠️ Control Activo
        </div>
        <p style="font-size:0.75rem; color:var(--text-muted); padding:1rem 0.5rem; text-align:center;">
            Completa esta megaprueba para desbloquear las próximas 100 etapas.
        </p>
    `;

    // Seleccionar 5 preguntas únicas de las etapas anteriores de esta sección
    if (megaExamQuestions.length === 0) {
        const pool = [];
        for (let i = startRange; i <= endRange; i++) {
            const stage = COURSE_DATA[i];
            if (stage && stage.quiz) {
                pool.push({
                    q: stage.quiz.q,
                    options: stage.quiz.options,
                    correct: stage.quiz.correct,
                    explanation: stage.quiz.explanation,
                    originTitle: stage.title
                });
            }
        }
        
        // Barajar y tomar 5
        const shuffled = pool.sort(() => 0.5 - Math.random());
        megaExamQuestions = shuffled.slice(0, 5);
        currentMegaExamAnswers = new Array(5).fill(null);
        activeMegaQuestionIdx = 0;
    }

    renderMegaQuestionCard();
}

function renderMegaQuestionCard() {
    const qData = megaExamQuestions[activeMegaQuestionIdx];
    const isLast = activeMegaQuestionIdx === 4;

    let optionsHtml = "";
    qData.options.forEach((opt, oIdx) => {
        const isSelected = currentMegaExamAnswers[activeMegaQuestionIdx] === oIdx;
        optionsHtml += `
            <label class="quiz-option ${isSelected ? 'selected' : ''}">
                <input type="radio" name="mega-exam-radio" value="${oIdx}" ${isSelected ? 'checked' : ''}>
                <span>${opt}</span>
            </label>
        `;
    });

    // Dibujar en el bloque de Teoría directamente, ocultando los demás contenidos
    tabContentTheory.innerHTML = `
        <div class="mega-exam-card card">
            <span class="mega-exam-badge">🎖️</span>
            <h2>Evaluación Acumulativa: Pregunta ${activeMegaQuestionIdx + 1} de 5</h2>
            <p style="font-size:0.75rem; color:var(--accent-light); text-transform:uppercase; font-weight:700;">Origen: ${qData.originTitle}</p>
            
            <p style="font-size:1.1rem; font-weight:500; margin: 1.5rem 0;">${qData.q}</p>
            <div class="quiz-options-container">
                ${optionsHtml}
            </div>
            
            <div class="quiz-actions" style="margin-top:1.5rem; display:flex; justify-content:space-between;">
                ${activeMegaQuestionIdx > 0 ? `<button id="btn-mega-prev" class="btn btn-outline">Anterior</button>` : '<div></div>'}
                <button id="btn-mega-next" class="btn btn-primary">${isLast ? 'Finalizar Megaprueba' : 'Siguiente Pregunta'}</button>
            </div>
        </div>
    `;

    // Ocultar resto de pestañas
    tabContentExamples.classList.add("hidden");
    tabContentSandbox.classList.add("hidden");
    tabContentQuiz.classList.add("hidden");
    tabContentExam.classList.add("hidden");

    // Eventos de selección
    const options = tabContentTheory.querySelectorAll(".quiz-option");
    options.forEach(opt => {
        opt.addEventListener("click", () => {
            options.forEach(o => o.classList.remove("selected"));
            opt.classList.add("selected");
            const radio = opt.querySelector("input");
            radio.checked = true;
            currentMegaExamAnswers[activeMegaQuestionIdx] = parseInt(radio.value);
        });
    });

    // Control de navegación
    const btnNext = document.getElementById("btn-mega-next");
    const btnPrev = document.getElementById("btn-mega-prev");

    if (btnPrev) {
        btnPrev.addEventListener("click", () => {
            activeMegaQuestionIdx -= 1;
            renderMegaQuestionCard();
        });
    }

    btnNext.addEventListener("click", () => {
        if (currentMegaExamAnswers[activeMegaQuestionIdx] === null) {
            showToast("⚠️ Selecciona una opción antes de proceder.", "warning");
            return;
        }

        if (isLast) {
            evaluateMegaExam();
        } else {
            activeMegaQuestionIdx += 1;
            renderMegaQuestionCard();
        }
    });
}

function evaluateMegaExam() {
    let score = 0;
    megaExamQuestions.forEach((q, idx) => {
        if (currentMegaExamAnswers[idx] === q.correct) score++;
    });

    const passed = score >= 4; // Requiere al menos 4 de 5 respuestas correctas (80%)
    
    if (passed) {
        // Aprobado: Desbloquea la etapa 101, 201, etc.
        showToast("🎉 ¡Excelente! Has aprobado la Megaprueba Acumulativa.", "success");
        userState.completedStages[userState.currentStageIndex] = true;
        userState.stageGrades[userState.currentStageIndex] = Math.round((score / 5) * 100);
        if (userState.currentStageIndex < 999) {
            userState.unlockedStages[userState.currentStageIndex + 1] = true;
        }
        addXp(300); // Super XP bonus
        saveProgress();
        applyState();
        
        // Limpiar estados de megaprueba
        isShowingMegaExam = false;
        megaExamQuestions = [];
        currentMegaExamAnswers = [];
        
        switchView("dashboard");
    } else {
        // Reprobado
        showToast("❌ Has reprobado el Examen Total. Necesitas 4 aciertos mínimos.", "danger");
        
        tabContentTheory.innerHTML = `
            <div class="result-card card" style="max-width: 500px; margin: 2rem auto; text-align:center;">
                <div class="result-icon">💀</div>
                <h2>Examen Total Reprobado</h2>
                <p>Obtuviste <strong>${score} de 5</strong> aciertos. Requieres un mínimo de 4 respuestas correctas para proceder.</p>
                <button id="btn-retry-mega" class="btn btn-primary" style="margin-top: 1.5rem;">Reintentar Examen</button>
            </div>
        `;
        
        document.getElementById("btn-retry-mega").addEventListener("click", () => {
            megaExamQuestions = []; // resetear pool para generar preguntas nuevas
            renderMegaExamView();
        });
    }
}

// --- VISOR DE PESTAÑAS (SANDBOX RUNNER) ---
function runSandboxCode() {
    const code = sandboxCode.value;
    sandboxOutput.textContent = "";

    const originalLog = console.log;
    let loggedOutput = [];
    console.log = function(...args) {
        loggedOutput.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(" "));
        originalLog.apply(console, args);
    };

    try {
        const run = new Function(code);
        run();
        if (loggedOutput.length > 0) {
            sandboxOutput.textContent = loggedOutput.join("\n");
        } else {
            sandboxOutput.textContent = "Ejecución finalizada con éxito (la consola no arrojó salidas).";
        }
    } catch(e) {
        sandboxOutput.textContent = "❌ Error sintáctico:\n" + e.message;
    } finally {
        console.log = originalLog;
    }
}

// --- RENDERIZAR BOLETÍN DE NOTAS ---
function renderGrades() {
    const completedCount = userState.completedStages.filter(Boolean).length;
    metricCompletedQuizzes.textContent = `${completedCount} / 1000`;

    const approvedGrades = userState.stageGrades.filter(g => g !== null && g > 0);
    let avg = 0;
    if (approvedGrades.length > 0) {
        avg = Math.round(approvedGrades.reduce((a, b) => a + b, 0) / approvedGrades.length);
    }
    metricAverage.textContent = `${avg}%`;

    const allCompleted = userState.completedStages.every(stage => stage === true);
    metricStatus.textContent = allCompleted ? "Graduado" : "Cursando";

    // Paginación en la tabla para evitar colapsar la memoria al listar 1000 filas
    // Mostraremos un desplegable o un buscador
    gradesTableBody.innerHTML = `
        <tr>
            <td colspan="6" style="text-align:center; padding: 2rem;">
                <p style="margin-bottom:1rem;">Buscador Académico: Selecciona el rango de etapas que deseas visualizar:</p>
                <select id="select-grade-range" class="btn btn-outline btn-sm" style="background:var(--bg-input); padding: 0.5rem 1rem;">
                    <option value="0-99">Etapas 1 a 100</option>
                    <option value="100-199">Etapas 101 a 200</option>
                    <option value="200-299">Etapas 201 a 300</option>
                    <option value="300-399">Etapas 301 a 400</option>
                    <option value="400-499">Etapas 401 a 500</option>
                    <option value="500-599">Etapas 501 a 600</option>
                    <option value="600-699">Etapas 601 a 700</option>
                    <option value="700-799">Etapas 701 a 800</option>
                    <option value="800-899">Etapas 801 a 900</option>
                    <option value="900-999">Etapas 901 a 1000</option>
                </select>
            </td>
        </tr>
    `;

    const select = document.getElementById("select-grade-range");
    select.addEventListener("change", () => {
        const val = select.value.split("-");
        const start = parseInt(val[0]);
        const end = parseInt(val[1]);
        renderGradesRows(start, end);
    });

    renderGradesRows(0, 99); // Render inicial

    if (allCompleted) {
        gradesCertBanner.innerHTML = `
            <div class="grades-cert-unlocked-banner">
                <h3>🎖️ ¡DIPLOMA DESBLOQUEADO!</h3>
                <p>Has aprobado con éxito las 1000 etapas de la academia. Tu promedio final es del <strong>${avg}%</strong>.</p>
                <button class="btn btn-primary" onclick="switchView('certificate-view')">Ver mi Certificado</button>
            </div>
        `;
    } else {
        gradesCertBanner.innerHTML = `
            <p style="color: var(--text-muted); font-size: 0.9rem;">
                🔓 Completa las 1000 etapas curriculares de Codex Academy para desbloquear tu certificado oficial.
            </p>
        `;
    }
}

function renderGradesRows(start, end) {
    // Eliminar filas anteriores que no sean el selector
    const rows = gradesTableBody.querySelectorAll("tr:not(:first-child)");
    rows.forEach(r => r.remove());

    for (let idx = start; idx <= end; idx++) {
        const stage = COURSE_DATA[idx];
        const isLocked = !userState.unlockedStages[idx];
        const isCompleted = userState.completedStages[idx];
        const maxGrade = userState.stageGrades[idx];
        const attempts = userState.stageAttempts[idx];

        let stateText = "Bloqueada";
        let stateClass = "locked";
        if (isCompleted) {
            stateText = "Aprobada";
            stateClass = "approved";
        } else if (!isLocked) {
            stateText = "Cursando";
            stateClass = "pending";
        }

        const row = document.createElement("tr");
        row.innerHTML = `
            <td><strong>Etapa ${idx + 1}</strong></td>
            <td>${stage.title}</td>
            <td>${stage.evaluation.type === 'quiz' ? 'Conceptual' : 'Reto de Código'}</td>
            <td>${attempts}</td>
            <td>${maxGrade !== null ? `${maxGrade}%` : '-'}</td>
            <td><span class="status-badge ${stateClass}">${stateText}</span></td>
        `;
        gradesTableBody.appendChild(row);
    }
}

// --- RENDERIZAR CERTIFICADO ---
function renderCertificate() {
    const approvedGrades = userState.stageGrades.filter(g => g !== null && g > 0);
    let avg = 0;
    if (approvedGrades.length > 0) {
        avg = Math.round(approvedGrades.reduce((a, b) => a + b, 0) / approvedGrades.length);
    }

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    
    certStudentName.textContent = userState.name;
    certGrade.textContent = `${avg}%`;
    certDate.textContent = `${day}/${month}/${year}`;
    
    const hash = Math.floor(1000 + Math.random() * 8999);
    certId.textContent = `CDX-1K-${hash}-WEB`;
}

// --- EFECTOS DE CONFETI ---
function triggerConfetti() {
    confettiOverlay.innerHTML = "";
    const colors = ["#8b5cf6", "#06b6d4", "#10b981", "#fbbf24", "#f43f5e"];
    
    for (let i = 0; i < 80; i++) {
        const particle = document.createElement("div");
        particle.className = "confetti-particle";
        
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDelay = `${Math.random() * 2}s`;
        particle.style.animationDuration = `${1.5 + Math.random() * 2}s`;
        particle.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        confettiOverlay.appendChild(particle);
    }

    setTimeout(() => {
        confettiOverlay.innerHTML = "";
    }, 5000);
}

// --- SISTEMA DE TOASTS ---
function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let icon = "🔔";
    if (type === "success") icon = "✓";
    else if (type === "danger") icon = "❌";
    else if (type === "warning") icon = "⚠️";
    
    toast.innerHTML = `
        <span>${icon}</span>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(100%)";
        toast.style.transition = "all 0.5s ease-out";
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3500);
}

// --- SISTEMA DE TUTOR DE IA (GEMINI API) ---
function parseMarkdown(text) {
    let escaped = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    
    // Code blocks
    escaped = escaped.replace(/```(?:javascript|html|css|js)?([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    // Inline code
    escaped = escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
    // Bold
    escaped = escaped.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // Headers
    escaped = escaped.replace(/###\s+([^\n]+)/g, '<h3>$1</h3>');
    escaped = escaped.replace(/##\s+([^\n]+)/g, '<h2>$1</h2>');
    
    // Paragraphs
    return escaped.split('\n').map(line => {
        const trimmed = line.trim();
        if (!trimmed) return '';
        if (trimmed.startsWith('<pre>') || trimmed.endsWith('</pre>') || trimmed.startsWith('<h') || trimmed.startsWith('<code')) {
            return line;
        }
        return `<p>${line}</p>`;
    }).join('\n');
}

async function consultarTutorIA(contextoReto, codigoAlumno, mensajeError) {
    const apiKey = localStorage.getItem("gemini_api_key");
    const aiPanel = document.getElementById("ai-tutor-panel");
    const aiResponseBody = document.getElementById("ai-response-body");

    if (!apiKey) {
        showToast("⚠️ Configura primero tu Gemini API Key en la barra lateral para usar el tutor de IA.", "warning");
        return;
    }

    aiPanel.classList.remove("hidden");
    aiResponseBody.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding: 3rem 0; gap:1rem;">
            <div class="badge-dot" style="width:12px; height:12px; background-color:var(--accent-light);"></div>
            <p style="color:var(--text-secondary); font-size:0.9rem; font-weight:500;">Pensando... El tutor de IA está analizando tu código.</p>
        </div>
    `;

    const prompt = `
    Actúa como un tutor de programación extremadamente amable, pedagógico y comprensivo en español.
    El estudiante está resolviendo un reto o estudiando una lección en la Etapa ${userState.currentStageIndex + 1} de Codex Academy.
    
    CONTEXTO Y TEMA:
    ${contextoReto}

    CÓDIGO ACTUAL DEL ALUMNO:
    \`\`\`
    ${codigoAlumno}
    \`\`\`

    RESULTADO O ERROR ACTUAL DE LA EJECUCIÓN/CONSOLA:
    "${mensajeError}"

    INSTRUCCIONES PARA TI (EL TUTOR):
    1. Analiza el error y el código del alumno.
    2. Explícale qué está haciendo mal y por qué ocurre ese comportamiento, de manera clara y didáctica.
    3. Proporciónale una o dos pistas prácticas sobre cómo avanzar.
    4. ¡IMPORTANTE! No le des el código completo corregido directamente. Deja que piense y corrija su solución por sí mismo.
    `;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`Código de estado HTTP: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
            const rawText = data.candidates[0].content.parts[0].text;
            aiResponseBody.innerHTML = parseMarkdown(rawText);
        } else {
            aiResponseBody.innerHTML = `<p style="color:var(--danger)">⚠️ La API de Gemini no devolvió una respuesta válida. Verifica tu clave de API e inténtalo de nuevo.</p>`;
        }
    } catch(error) {
        console.error("Error consultando el tutor de IA:", error);
        aiResponseBody.innerHTML = `
            <p style="color:var(--danger); font-weight:bold;">❌ Error de conexión con el tutor</p>
            <p style="font-size:0.85rem;">No se pudo realizar la consulta. Detalles: ${error.message}</p>
            <p style="font-size:0.85rem; margin-top:1rem;">Por favor, asegúrate de que la <strong>Gemini API Key</strong> guardada en la barra lateral sea correcta y activa, y que tengas conexión a internet.</p>
        `;
    }
}
