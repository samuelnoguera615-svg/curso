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
            <p>JavaScript dota de interactividad al navegador. Por otro lado, Java en el backend procesa peticiones mediante Servlets e inyecta datos dinámicos en páginas JSP, interactuando con bases de datos relacionales y conectándose con JS en el frontend.</p>
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
    
    // 4. Examen Oficial Completo con Variación de Contenido (Formato de Evaluación Académica)
    const examCode = `EX-${stageNum.toString().padStart(4, '0')}-${category.toUpperCase().slice(0, 4)}`;
    
    // Determinación de keywords y elementos según categoría y concepto
    let targetTag = "div";
    if (category === "html" || category === "html_css_conjunto") {
        const lower = concept.toLowerCase();
        if (lower.includes("encabezado")) targetTag = "h1";
        else if (lower.includes("párrafo") || lower.includes("parrafo")) targetTag = "p";
        else if (lower.includes("desordenada")) targetTag = "ul";
        else if (lower.includes("ordenada")) targetTag = "ol";
        else if (lower.includes("enlace") || lower.includes("hipervínculo") || lower.includes("ancla")) targetTag = "a";
        else if (lower.includes("imagen")) targetTag = "img";
        else if (lower.includes("tabla")) targetTag = "table";
        else if (lower.includes("formulario")) targetTag = "form";
        else if (lower.includes("textarea")) targetTag = "textarea";
        else if (lower.includes("select") || lower.includes("desplegable")) targetTag = "select";
        else if (lower.includes("audio")) targetTag = "audio";
        else if (lower.includes("video")) targetTag = "video";
        else if (lower.includes("nav")) targetTag = "nav";
        else if (lower.includes("section")) targetTag = "section";
        else if (lower.includes("article")) targetTag = "article";
        else if (lower.includes("footer")) targetTag = "footer";
        else targetTag = "div";
    }

    // Parte I: 2 Preguntas de Selección y Análisis (15 pts c/u = 30 pts)
    let p1Q1 = "";
    let p1Q1Options = [];
    let p1Q1Correct = 0;
    let p1Q1Explanation = "";

    let p1Q2 = "";
    let p1Q2Options = [];
    let p1Q2Correct = 0;
    let p1Q2Explanation = "";

    if (category === "logica") {
        p1Q1 = `¿Cuál es el rol principal de '${concept}' al estructurar un algoritmo bajo el enfoque de '${depth}'?`;
        p1Q1Options = [
            `Garantizar un flujo secuencial, lógico y predecible en el procesamiento de datos.`,
            `Ejecutar instrucciones de forma aleatoria sin control del programador.`,
            `Borrar la memoria RAM automáticamente en cada instrucción.`,
            `Omitir la necesidad de comparar variables o condiciones.`
        ];
        p1Q1Correct = 0;
        p1Q1Explanation = `En programación, ${concept} asegura que el algoritmo tome caminos lógicos consistentes.`;

        p1Q2 = `Si evaluamos una condición con '${concept}', ¿qué resultado o buena práctica es indispensable?`;
        p1Q2Options = [
            `Usar comparaciones estrictas (como ===) para verificar tanto valor como tipo de dato.`,
            `Modificar los tipos de datos de forma impredecible en tiempo de ejecución.`,
            `Evitar colocar condiciones booleanas en bucles o condicionales.`,
            `Usar variables globales no inicializadas en todas las expresiones.`
        ];
        p1Q2Correct = 0;
        p1Q2Explanation = `La comparación estricta y el manejo de tipos previenen fallos lógicos sutiles.`;
    } else if (category === "html") {
        p1Q1 = `En HTML5, ¿qué estándar semántico se debe respetar al implementar '${concept}' (${depth})?`;
        p1Q1Options = [
            `Usar etiquetas estructurales semánticas (como <${targetTag}>) con su correspondiente cierre o atributos válidos.`,
            `Escribir todo el documento dentro de una sola etiqueta <script>.`,
            `Reemplazar el texto legible con imágenes estáticas para evitar el parseo del DOM.`,
            `Eliminar el <!DOCTYPE html> y omitir la jerarquía del body.`
        ];
        p1Q1Correct = 0;
        p1Q1Explanation = `HTML5 exige semántica clara para accesibilidad y correcto renderizado del DOM.`;

        p1Q2 = `¿Qué atributo o consideración técnica es clave al manipular '${concept}' en el navegador?`;
        p1Q2Options = [
            `Incluir identificadores o clases descriptivas para accesibilidad (ARIA) y vinculación con estilos/scripts.`,
            `Nunca utilizar atributos en las etiquetas HTML.`,
            `Escribir los nombres de las etiquetas en mayúsculas arbitrarias sin respetar el estándar.`,
            `Anidar etiquetas sin cerrarlas adecuadamente.`
        ];
        p1Q2Correct = 0;
        p1Q2Explanation = `Los atributos bien estructurados permiten enlazar estilos, interactividad y soporte de accesibilidad.`;
    } else if (category === "css") {
        p1Q1 = `Al diseñar reglas de estilo para '${concept}' (${depth}), ¿qué principio de especificidad es correcto?`;
        p1Q1Options = [
            `Definir selectores claros mediante clases en lugar de abusar de la regla !important.`,
            `Colocar !important en absolutamente todas las propiedades CSS.`,
            `Evitar el uso de hojas de estilo externas y poner todo en atributos inline.`,
            `Ocultar todos los contenedores con visibility: hidden por defecto.`
        ];
        p1Q1Correct = 0;
        p1Q1Explanation = `Una arquitectura CSS mantenible utiliza selectores de clase con especificidad balanceada.`;

        p1Q2 = `Respecto al modelo de caja y disposición visual en '${concept}', ¿cuál es la mejor práctica?`;
        p1Q2Options = [
            `Configurar márgenes, paddings y tipos de display (flex/grid/block) de forma coherente y responsiva.`,
            `Fijar dimensiones en píxeles fijos que desborden cualquier pantalla móvil.`,
            `No declarar colores ni tipografías en el archivo CSS.`,
            `Asignar z-index: 999999 a todos los elementos de la interfaz.`
        ];
        p1Q2Correct = 0;
        p1Q2Explanation = `El control del modelo de caja y propiedades de flujo garantiza un diseño adaptable.`;
    } else if (category === "html_css_conjunto") {
        p1Q1 = `Al integrar HTML y CSS para '${concept}' en su fase '${depth}', ¿cuál es la regla de arquitectura base?`;
        p1Q1Options = [
            `Separar la estructura semántica en el HTML y la presentación visual en el archivo CSS.`,
            `Colocar los estilos visuales directamente en el texto del documento sin etiquetas.`,
            `No usar clases ni identificadores para conectar HTML con CSS.`,
            `Renderizar toda la interfaz con un archivo de audio.`
        ];
        p1Q1Correct = 0;
        p1Q1Explanation = `La separación de responsabilidades entre contenido (HTML) y diseño (CSS) es la base del desarrollo web.`;

        p1Q2 = `¿Cómo se asegura que el componente '${concept}' se adapte a distintas resoluciones?`;
        p1Q2Options = [
            `Mediante media queries (@media) y unidades flexibles como %, rem o fr.`,
            `Obligando al usuario a no redimensionar la ventana de su navegador.`,
            `Duplicando el código HTML 10 veces para cada pantalla.`,
            `Desactivando el soporte para hojas de estilo en dispositivos móviles.`
        ];
        p1Q2Correct = 0;
        p1Q2Explanation = `El responsive design se logra con media queries y unidades relativas.`;
    } else {
        p1Q1 = `En el flujo interactivo de '${concept}' (${depth}), ¿cómo interactúa JavaScript con el DOM o el backend?`;
        p1Q1Options = [
            `Captura eventos del usuario (click, input, submit) y manipula el DOM o realiza peticiones asíncronas.`,
            `El navegador bloquea cualquier intento de manipular la interfaz con código.`,
            `Las funciones de JavaScript no pueden leer valores de elementos HTML.`,
            `El servidor web procesa la interfaz gráfica sin enviar código al cliente.`
        ];
        p1Q1Correct = 0;
        p1Q1Explanation = `JavaScript permite dinamismo mediante la escucha de eventos y actualización del árbol DOM.`;

        p1Q2 = `Al manejar datos o lógica en '${concept}', ¿qué principio garantiza estabilidad?`;
        p1Q2Options = [
            `Validar los datos de entrada antes de procesarlos y manejar posibles excepciones o errores.`,
            `Confiar en que cualquier entrada del usuario siempre vendrá en el formato correcto sin verificar.`,
            `Utilizar bucles infinitos no controlados para pausar la ejecución del navegador.`,
            `Eliminar las funciones y escribir todo el código en una sola línea no formateada.`
        ];
        p1Q2Correct = 0;
        p1Q2Explanation = `La validación de datos y el manejo de excepciones evitan caídas en la aplicación.`;
    }

    let p2ItemA_Prompt = "";
    let p2ItemA_Expected = [];
    let p2ItemA_Placeholder = "";
    let p2ItemA_Explanation = "";

    let p2ItemB_Prompt = "";
    let p2ItemB_Expected = [];
    let p2ItemB_Placeholder = "";
    let p2ItemB_Explanation = "";
    const p2TrueFalse = `Verdadero o falso: aplicar '${concept}' desde el enfoque '${depth}' ayuda a construir soluciones más claras y mantenibles.`;
    const p2TrueFalseCorrect = true;
    const p2TrueFalseExplanation = "La afirmación es verdadera: comprender el concepto y aplicarlo con un enfoque definido mejora la calidad de la solución.";

    if (category === "logica") {
        p2ItemA_Prompt = `Pregunta A: Escribe la palabra clave de JavaScript para declarar una variable de ámbito de bloque reasignable (ej: <code>let</code>):`;
        p2ItemA_Expected = ["let", "const", "var"];
        p2ItemA_Placeholder = "Ej: let";
        p2ItemA_Explanation = "La palabra clave 'let' permite declarar variables de ámbito local/bloque reasignables.";

        p2ItemB_Prompt = `Pregunta B: Escribe el operador de comparación estricta de igualdad en JavaScript:`;
        p2ItemB_Expected = ["===", "==", "!=="];
        p2ItemB_Placeholder = "Ej: ===";
        p2ItemB_Explanation = "El operador '===' comprueba tanto la igualdad de valor como la concordancia de tipo de dato.";
    } else if (category === "html" || category === "html_css_conjunto") {
        p2ItemA_Prompt = `Pregunta A: Escribe el nombre de la etiqueta HTML semántica para <strong>${concept}</strong> (sin signos &lt;&gt;):`;
        p2ItemA_Expected = [targetTag, `<${targetTag}>`, `${targetTag}>`, `<${targetTag}`];
        p2ItemA_Placeholder = `Ej: ${targetTag}`;
        p2ItemA_Explanation = `La etiqueta estándar correspondiente es <${targetTag}>.`;

        p2ItemB_Prompt = `Pregunta B: Escribe el nombre de la etiqueta raíz que envuelve el contenido visible de una página web (sin signos):`;
        p2ItemB_Expected = ["body", "<body>", "html", "<html>", "main", "<main>"];
        p2ItemB_Placeholder = "Ej: body";
        p2ItemB_Explanation = "La etiqueta <body> delimita el cuerpo de contenido visible en el navegador.";
    } else if (category === "css") {
        let cssProp = concept.toLowerCase().includes("color") ? "color" :
                      concept.toLowerCase().includes("fondo") || concept.toLowerCase().includes("background") ? "background-color" :
                      concept.toLowerCase().includes("flex") ? "display" :
                      concept.toLowerCase().includes("grid") ? "display" :
                      concept.toLowerCase().includes("margin") || concept.toLowerCase().includes("márgen") ? "margin" :
                      concept.toLowerCase().includes("padding") ? "padding" :
                      concept.toLowerCase().includes("border") || concept.toLowerCase().includes("borde") ? "border" : "color";
        p2ItemA_Prompt = `Pregunta A: Escribe la propiedad CSS utilizada para definir el aspecto o disposición de <strong>${concept}</strong>:`;
        p2ItemA_Expected = [cssProp, "color", "background", "background-color", "display", "margin", "padding", "border", "font-size", "width", "height", "border-radius", "overflow"];
        p2ItemA_Placeholder = `Ej: ${cssProp}`;
        p2ItemA_Explanation = `La propiedad clave es '${cssProp}'.`;

        p2ItemB_Prompt = `Pregunta B: Escribe el valor CSS que activa el modelo de caja flexible moderno en la propiedad <code>display</code>:`;
        p2ItemB_Expected = ["flex", "inline-flex", "grid", "block"];
        p2ItemB_Placeholder = "Ej: flex";
        p2ItemB_Explanation = "El valor 'flex' activa el contenedor flexible Flexbox.";
    } else {
        p2ItemA_Prompt = `Pregunta A: Escribe el método de <code>document</code> para seleccionar un elemento por su selector CSS:`;
        p2ItemA_Expected = ["queryselector", "document.queryselector", "getelementbyid", "queryselectorall"];
        p2ItemA_Placeholder = "Ej: querySelector";
        p2ItemA_Explanation = "El método 'querySelector' busca el primer elemento coincidente en el DOM.";

        p2ItemB_Prompt = `Pregunta B: Escribe la instrucción de JavaScript para enviar un valor de salida desde una función:`;
        p2ItemB_Expected = ["return", "console.log", "yield"];
        p2ItemB_Placeholder = "Ej: return";
        p2ItemB_Explanation = "La sentencia 'return' finaliza la ejecución de una función y especifica el valor devuelto.";
    }

    // Parte III: Reto Práctico de Desarrollo de Código (40 pts)
    let p3Title = `Desafío Práctico: ${concept}`;
    let p3Lang = (category === "html" || category === "html_css_conjunto") ? "html" :
                 (category === "css") ? "css" : "javascript";
    let p3Filename = (p3Lang === "html") ? "index.html" : (p3Lang === "css") ? "styles.html" : "main.js";
    let p3Initial = "";
    let p3Instructions = "";
    let p3Validate = null;

    if (category === "html" || category === "html_css_conjunto") {
        p3Instructions = `<p>Desarrolla o completa la estructura HTML para que contenga correctamente al menos una etiqueta <code>&lt;${targetTag}&gt;</code> con texto descriptivo.</p>`;
        p3Initial = `<!-- Examen Práctico: Escribe tu código HTML -->\n<${targetTag}>Evaluación de ${concept}</${targetTag}>\n`;
        p3Validate = function(code) {
            const doc = new DOMParser().parseFromString(code, 'text/html');
            const el = doc.querySelector(targetTag);
            if (!el) return { success: false, msg: `Falta incluir el elemento <${targetTag}> en el código.` };
            return { success: true, msg: `Elemento <${targetTag}> detectado y validado en el DOM.` };
        };
    } else if (category === "css") {
        p3Instructions = `<p>En el bloque <code>&lt;style&gt;</code>, asigna estilos válidos a la clase <code>.caja-examen</code> (por ejemplo <code>color: white;</code> y un color de fondo).</p>`;
        p3Initial = `<div class="caja-examen">Evaluación CSS: ${concept}</div>\n\n<style>\n.caja-examen {\n    /* Escribe aquí tus propiedades CSS */\n    color: white;\n    background-color: #8b5cf6;\n    padding: 16px;\n    border-radius: 8px;\n}\n</style>`;
        p3Validate = function(code) {
            try {
                const doc = new DOMParser().parseFromString(code, 'text/html');
                const style = doc.querySelector('style');
                if (!style) return { success: false, msg: "Falta la etiqueta <style> con las reglas CSS." };
                const text = style.innerHTML.toLowerCase();
                if (!text.includes(".caja-examen") || text.indexOf('{') === -1) {
                    return { success: false, msg: "La clase '.caja-examen' debe tener reglas CSS definidas." };
                }
                return { success: true, msg: "Reglas CSS para '.caja-examen' validadas correctamente." };
            } catch(e) {
                return { success: false, msg: e.message };
            }
        };
    } else {
        p3Instructions = `<p>Crea o completa la función <code>solucionExamen(x)</code> que reciba un número y devuelva su doble (<code>x * 2</code>).</p>`;
        p3Initial = `function solucionExamen(x) {\n    // Retorna el doble del parámetro recibido\n    return x * 2;\n}`;
        p3Validate = function(code) {
            try {
                const runner = new Function(code + "\nreturn solucionExamen;");
                const fn = runner();
                if (typeof fn !== 'function') return { success: false, msg: "La función 'solucionExamen' no está declarada." };
                if (fn(5) !== 10) return { success: false, msg: "solucionExamen(5) debería retornar 10." };
                if (fn(-2) !== -4) return { success: false, msg: "solucionExamen(-2) debería retornar -4." };
                return { success: true, msg: "Función JavaScript validada con batería de tests automáticos." };
            } catch(e) {
                return { success: false, msg: "Error de ejecución en JS: " + e.message };
            }
        };
    }

    const evaluation = {
        examCode: examCode,
        title: `Examen Oficial: ${concept}`,
        category: category,
        depth: depth,
        part1: {
            title: "Parte I: Análisis Teórico y Detección de Errores (30 Puntos)",
            q1: { question: p1Q1, options: p1Q1Options, correct: p1Q1Correct, explanation: p1Q1Explanation, weight: 15 },
            q2: { question: p1Q2, options: p1Q2Options, correct: p1Q2Correct, explanation: p1Q2Explanation, weight: 15 }
        },
        part2: {
            title: "Parte II: Respuesta Escrita y Verdadero o Falso (30 Puntos)",
            itemA: { prompt: p2ItemA_Prompt, expected: p2ItemA_Expected, placeholder: p2ItemA_Placeholder, explanation: p2ItemA_Explanation, weight: 10 },
            itemB: { prompt: p2ItemB_Prompt, expected: p2ItemB_Expected, placeholder: p2ItemB_Placeholder, explanation: p2ItemB_Explanation, weight: 10 },
            trueFalse: { prompt: p2TrueFalse, correct: p2TrueFalseCorrect, explanation: p2TrueFalseExplanation, weight: 10 }
        },
        part3: {
            title: "Parte III: Ejercicio Práctico de Desarrollo y Reto de Código (40 Puntos)",
            weight: 40,
            instructions: p3Instructions,
            filename: p3Filename,
            language: p3Lang,
            initialCode: p3Initial,
            validate: p3Validate
        }
    };
    
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

// Variables globales de Pestañas, Categorías y Paginación
let activeTab = "theory";
let openCategories = new Set();
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
        tab.addEventListenger("click", (e) => {
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
    if (document.body.classList.contains("exam-mode") && tabName !== "exam") {
        showToast("⚠️ Debes entregar el examen antes de volver al contenido.", "warning");
        return;
    }

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

function enterExamMode() {
    document.body.classList.add("exam-mode");
    lessonContentCard.classList.add("exam-mode-content");
}

function exitExamMode() {
    document.body.classList.remove("exam-mode");
    lessonContentCard.classList.remove("exam-mode-content");
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
            openCategories.clear();
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
            loadStageContent();
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
                if (toggleAiContent) {
                    toggleAiContent.checked = true;
                    loadStageContent();
                }
            } else {
                localStorage.removeItem("gemini_api_key");
                if (toggleAiContent) {
                    toggleAiContent.checked = false;
                }
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
    if (targetId !== "lessons-view") {
        exitExamMode();
    }

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

// --- RENDERIZAR DASHBOARD CON CONTROL DE ACORDEÓN Y PAGINACIÓN ---
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

    // Inicializar categoría abierta si el conjunto está vacío
    if (openCategories.size === 0) {
        const defaultCat = CATEGORIES.find(cat => userState.currentStageIndex >= cat.range[0] && userState.currentStageIndex <= cat.range[1]);
        if (defaultCat) openCategories.add(defaultCat.id);
    }

    categoriesContainer.innerHTML = "";
    CATEGORIES.forEach(cat => {
        const group = document.createElement("div");
        const isOpen = openCategories.has(cat.id);
        group.className = `category-group ${isOpen ? 'active' : ''}`;
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
            if (openCategories.has(cat.id)) {
                openCategories.delete(cat.id);
                group.classList.remove("active");
            } else {
                openCategories.add(cat.id);
                group.classList.add("active");
            }
        });
    });

    // Manejar clics de paginación (Mantiene la categoría abierta sin cerrarla)
    document.querySelectorAll(".btn-page-nav").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const catId = btn.getAttribute("data-cat");
            const page = parseInt(btn.getAttribute("data-page"));
            openCategories.add(catId);
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

    exitExamMode();

    // Menú de pestañas
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
    
    document.getElementById("ai-tutor-panel").classList.add("hidden");

    tabContentTheory.innerHTML = stage.theory;
    tabContentExamples.innerHTML = stage.examples;
    
    // Cargar contenido avanzado de Gemini si está seleccionado
    const apiKey = localStorage.getItem("gemini_api_key");
    const useAiContent = toggleAiContent ? toggleAiContent.checked : false;

    if (useAiContent && apiKey) {
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
            
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${encodeURIComponent(apiKey)}`, {
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
                } else {
                    throw new Error("La API no devolvió contenido generado.");
                }
            } else {
                const errorData = await response.json().catch(() => ({}));
                const errorMessage = errorData.error?.message || `HTTP ${response.status}`;
                tabContentTheory.innerHTML = stage.theory + `
                    <div class="card" style="border-color:var(--warning); margin-top:1rem;">
                        <p style="color:var(--warning)"><strong>Gemini está temporalmente ocupado.</strong> ${errorMessage}</p>
                        <button class="btn btn-secondary btn-sm" style="margin-top:0.75rem;" onclick="loadStageContent()">Reintentar</button>
                    </div>
                `;
            }
        } catch(e) {
            console.error("Error al cargar teoría extendida:", e);
            tabContentTheory.innerHTML = stage.theory + `
                <div class="card" style="border-color:var(--warning); margin-top:1rem;">
                    <p style="color:var(--warning)"><strong>No se pudo completar la consulta.</strong> ${e.message}</p>
                    <button class="btn btn-secondary btn-sm" style="margin-top:0.75rem;" onclick="loadStageContent()">Reintentar</button>
                </div>
            `;
        }
    }

    if (userState.currentStageIndex === 0) {
        btnPrevLesson.disabled = true;
        btnPrevLesson.textContent = "Volver al Panel";
    } else {
        btnPrevLesson.disabled = false;
        btnPrevLesson.textContent = "Anterior Etapa";
    }

    btnNextLesson.textContent = "Siguiente Etapa";
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

    const options = tabContentQuiz.querySelectorAll(".quiz-option");
    options.forEach(opt => {
        opt.addEventListener("click", () => {
            options.forEach(o => o.classList.remove("selected"));
            opt.classList.add("selected");
            currentQuizSelectedAnswer = parseInt(opt.querySelector("input").value);
        });
    });

    document.getElementById("btn-quiz-check").addEventListener("click", () => {
        const feedback = document.getElementById("quiz-feedback-box");
        if (currentQuizSelectedAnswer === null) {
            showToast("⚠️ Selecciona una respuesta primero.", "warning");
            return;
        }

        if (currentQuizSelectedAnswer === quiz.correct) {
            feedback.innerHTML = `
                <div class="card" style="border: 1px solid var(--success); background: rgba(16, 185, 129, 0.05); padding: 1rem;">
                    <strong style="color: var(--success);">✓ ¡Correcto!</strong>
                    <p style="margin-top: 0.5rem; font-size: 0.9rem;">${quiz.explanation}</p>
                </div>
            `;
            showToast("✓ Respuesta correcta.", "success");
        } else {
            feedback.innerHTML = `
                <div class="card" style="border: 1px solid var(--danger); background: rgba(244, 63, 94, 0.05); padding: 1rem;">
                    <strong style="color: var(--danger);">✗ Respuesta Incorrecta</strong>
                    <p style="margin-top: 0.5rem; font-size: 0.9rem;">Revisa la teoría del módulo y vuelve a intentarlo.</p>
                </div>
            `;
            showToast("✗ Inténtalo de nuevo.", "danger");
        }
    });
}

// Pestaña 5: Hoja Oficial de Examen Completo con Variación de Contenido
function renderStageExam() {
    const stage = COURSE_DATA[userState.currentStageIndex];
    const exam = stage.evaluation;
    const isAlreadyCompleted = userState.completedStages[userState.currentStageIndex];
    const currentGrade = userState.stageGrades[userState.currentStageIndex];

    enterExamMode();

    // Opciones para Pregunta 1 de Parte 1
    let q1OptionsHtml = "";
    exam.part1.q1.options.forEach((opt, oIdx) => {
        q1OptionsHtml += `
            <label class="quiz-option" data-p1-q1="${oIdx}">
                <input type="radio" name="sheet-p1-q1" value="${oIdx}">
                <span>${opt}</span>
            </label>
        `;
    });

    // Opciones para Pregunta 2 de Parte 1
    let q2OptionsHtml = "";
    exam.part1.q2.options.forEach((opt, oIdx) => {
        q2OptionsHtml += `
            <label class="quiz-option" data-p1-q2="${oIdx}">
                <input type="radio" name="sheet-p1-q2" value="${oIdx}">
                <span>${opt}</span>
            </label>
        `;
    });

    const isHtmlOrCss = (exam.part3.language === 'html' || exam.part3.language === 'css');

    tabContentExam.innerHTML = `
        <div class="exam-sheet">
            ${isAlreadyCompleted ? `<div class="exam-grade-stamp">APROBADO<br><span style="font-size:0.9rem;">${currentGrade !== null ? currentGrade : 100}%</span></div>` : ''}
            
            <div class="exam-sheet-header">
                <div>
                    <span class="exam-sheet-badge">📋 Hoja Oficial de Evaluación</span>
                    <h2 class="exam-sheet-title">${exam.title}</h2>
                    <div class="exam-sheet-meta-grid">
                        <span class="exam-sheet-meta-item">Código: <strong>${exam.examCode}</strong></span>
                        <span class="exam-sheet-meta-item">Estudiante: <strong>${userState.name || 'Cadete'}</strong></span>
                        <span class="exam-sheet-meta-item">Ponderación Total: <strong>100 Puntos</strong></span>
                        <span class="exam-sheet-meta-item">Mínimo Aprobatorio: <strong>70%</strong></span>
                    </div>
                </div>
            </div>

            <!-- PARTE I: ANÁLISIS TEÓRICO Y DETECCIÓN -->
            <div class="exam-section-card" id="exam-card-part1">
                <div class="exam-section-header">
                    <span class="exam-section-title">🔍 ${exam.part1.title}</span>
                    <span class="exam-section-weight">30 Pts</span>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <p class="exam-prompt"><strong>1.1.</strong> ${exam.part1.q1.question}</p>
                    <div class="quiz-options-container" id="p1-q1-options">
                        ${q1OptionsHtml}
                    </div>
                    <div id="p1-q1-feedback" style="margin-top: 0.5rem;"></div>
                </div>

                <div>
                    <p class="exam-prompt"><strong>1.2.</strong> ${exam.part1.q2.question}</p>
                    <div class="quiz-options-container" id="p1-q2-options">
                        ${q2OptionsHtml}
                    </div>
                    <div id="p1-q2-feedback" style="margin-top: 0.5rem;"></div>
                </div>
            </div>

            <!-- PARTE II: COMPLETACIÓN TÉCNICA Y SINTAXIS -->
            <div class="exam-section-card" id="exam-card-part2">
                <div class="exam-section-header">
                    <span class="exam-section-title">✏️ ${exam.part2.title}</span>
                    <span class="exam-section-weight">30 Pts</span>
                </div>

                <div style="margin-bottom: 1.25rem;">
                    <p class="exam-prompt"><strong>2.1.</strong> ${exam.part2.itemA.prompt}</p>
                    <input type="text" id="p2-itemA-input" class="exam-fill-input" placeholder="${exam.part2.itemA.placeholder}" autocomplete="off" spellcheck="false">
                    <div id="p2-itemA-feedback"></div>
                </div>

                <div>
                    <p class="exam-prompt"><strong>2.2.</strong> ${exam.part2.itemB.prompt}</p>
                    <input type="text" id="p2-itemB-input" class="exam-fill-input" placeholder="${exam.part2.itemB.placeholder}" autocomplete="off" spellcheck="false">
                    <div id="p2-itemB-feedback"></div>
                </div>

                <div style="margin-top: 1.25rem;">
                    <p class="exam-prompt"><strong>2.3.</strong> ${exam.part2.trueFalse.prompt}</p>
                    <div class="quiz-options-container exam-true-false-options">
                        <label class="quiz-option">
                            <input type="radio" name="p2-true-false" value="true">
                            <span>Verdadero</span>
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="p2-true-false" value="false">
                            <span>Falso</span>
                        </label>
                    </div>
                    <div id="p2-true-false-feedback"></div>
                </div>
            </div>

            <!-- PARTE III: RETO PRÁCTICO Y LABORATORIO DE CÓDIGO -->
            <div class="exam-section-card" id="exam-card-part3">
                <div class="exam-section-header">
                    <span class="exam-section-title">💻 ${exam.part3.title}</span>
                    <span class="exam-section-weight">${exam.part3.weight} Pts</span>
                </div>
                <div class="exam-prompt">${exam.part3.instructions}</div>
                
                <div class="challenge-editor-panel" style="height: 380px; margin-top: 1rem;">
                    <div class="editor-header">
                        <span class="editor-filename">📁 ${exam.part3.filename}</span>
                        <span class="editor-lang badge">${exam.part3.language.toUpperCase()}</span>
                    </div>
                    
                    <div class="editor-workspace">
                        <div class="editor-line-numbers">
                            1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12
                        </div>
                        <textarea id="p3-editor" class="editor-textarea" spellcheck="false">${exam.part3.initialCode}</textarea>
                        
                        ${isHtmlOrCss ? `
                            <div class="preview-panel">
                                <iframe id="p3-html-preview" class="preview-iframe"></iframe>
                            </div>
                        ` : ''}
                    </div>

                    <div class="console-panel" style="height: 100px;">
                        <div class="console-header">Consola de Evaluación de Código</div>
                        <div class="console-logs" id="p3-console">
                            <div class="console-line info">Modifica tu solución si es necesario y entrega la hoja para calificarla.</div>
                        </div>
                    </div>
                </div>
                <div id="p3-feedback" style="margin-top:0.75rem;"></div>
            </div>

            <!-- ACCIONES Y CALIFICACIÓN -->
            <div class="exam-summary-banner">
                <div style="display:flex; justify-content:center; gap: 1rem; flex-wrap:wrap;">
                    <button id="btn-exam-ai" class="btn btn-outline">
                        <span>🤖 Tutor de Examen (Pistas)</span>
                    </button>
                    <button id="btn-submit-exam-sheet" class="btn btn-primary btn-glow">
                        <span>📝 Entregar y Calificar Hoja de Examen</span>
                    </button>
                </div>
                <div id="exam-overall-result" style="margin-top: 1.5rem;"></div>
            </div>
        </div>
    `;

    // Selección interactiva en Parte 1 - Pregunta 1
    let selectedP1Q1 = null;
    const p1q1OptionsEls = tabContentExam.querySelectorAll("#p1-q1-options .quiz-option");
    p1q1OptionsEls.forEach(opt => {
        opt.addEventListener("click", () => {
            p1q1OptionsEls.forEach(o => o.classList.remove("selected"));
            opt.classList.add("selected");
            const radio = opt.querySelector("input");
            radio.checked = true;
            selectedP1Q1 = parseInt(radio.value);
        });
    });

    // Selección interactiva en Parte 1 - Pregunta 2
    let selectedP1Q2 = null;
    const p1q2OptionsEls = tabContentExam.querySelectorAll("#p1-q2-options .quiz-option");
    p1q2OptionsEls.forEach(opt => {
        opt.addEventListener("click", () => {
            p1q2OptionsEls.forEach(o => o.classList.remove("selected"));
            opt.classList.add("selected");
            const radio = opt.querySelector("input");
            radio.checked = true;
            selectedP1Q2 = parseInt(radio.value);
        });
    });

    let selectedP2TrueFalse = null;
    const trueFalseOptionsEls = tabContentExam.querySelectorAll(".exam-true-false-options .quiz-option");
    trueFalseOptionsEls.forEach(opt => {
        opt.addEventListener("click", () => {
            trueFalseOptionsEls.forEach(o => o.classList.remove("selected"));
            opt.classList.add("selected");
            selectedP2TrueFalse = opt.querySelector("input").value === "true";
        });
    });

    // Preview en vivo para HTML/CSS en Parte 3
    const p3Editor = document.getElementById("p3-editor");
    if (isHtmlOrCss) {
        const previewIframe = document.getElementById("p3-html-preview");
        const updateP3Preview = () => {
            const content = p3Editor.value;
            const doc = previewIframe.contentDocument || previewIframe.contentWindow.document;
            doc.open();
            doc.write(content);
            doc.close();
        };
        p3Editor.addEventListener("input", updateP3Preview);
        updateP3Preview();
    }

    // Tutor de IA en examen
    const btnExamAi = document.getElementById("btn-exam-ai");
    btnExamAi.addEventListener("click", () => {
        const itemAVal = document.getElementById("p2-itemA-input").value;
        const itemBVal = document.getElementById("p2-itemB-input").value;
        const codeVal = p3Editor.value;
        const context = `Hoja de Examen: ${exam.title}\nParte I:\nQ1: ${exam.part1.q1.question}\nQ2: ${exam.part1.q2.question}\nParte II:\nA: ${exam.part2.itemA.prompt}\nB: ${exam.part2.itemB.prompt}\nParte III:\n${exam.part3.instructions}`;
        consultarTutorIA(context, `Respuestas Parte 2: A=${itemAVal}, B=${itemBVal}\nCódigo Parte 3:\n${codeVal}`, "Orientación pedagógica y pistas para el examen oficial.");
    });

    // Envío y calificación de la Hoja de Examen
    const btnSubmit = document.getElementById("btn-submit-exam-sheet");
    btnSubmit.addEventListener("click", () => {
        const itemAInput = document.getElementById("p2-itemA-input");
        const itemBInput = document.getElementById("p2-itemB-input");
        const itemAVal = itemAInput.value.trim().toLowerCase().replace(/['"`;]/g, '');
        const itemBVal = itemBInput.value.trim().toLowerCase().replace(/['"`;]/g, '');
        const p3Code = p3Editor.value;
        const p3Console = document.getElementById("p3-console");

        let earnedP1Q1 = 0;
        let earnedP1Q2 = 0;
        let earnedP2A = 0;
        let earnedP2B = 0;
        let earnedP2TrueFalse = 0;
        let earnedP3 = 0;

        // Validar Parte 1 - Q1
        const p1q1Fb = document.getElementById("p1-q1-feedback");
        if (selectedP1Q1 === exam.part1.q1.correct) {
            earnedP1Q1 = exam.part1.q1.weight;
            p1q1Fb.innerHTML = `<div class="exam-feedback-item correct">✓ Correcto (+${earnedP1Q1} pts): ${exam.part1.q1.explanation}</div>`;
        } else {
            earnedP1Q1 = 0;
            p1q1Fb.innerHTML = `<div class="exam-feedback-item incorrect">✗ Incorrecto (0/${exam.part1.q1.weight} pts): ${selectedP1Q1 === null ? 'No seleccionaste ninguna opción.' : 'La opción elegida no es la correcta.'}</div>`;
        }

        // Validar Parte 1 - Q2
        const p1q2Fb = document.getElementById("p1-q2-feedback");
        if (selectedP1Q2 === exam.part1.q2.correct) {
            earnedP1Q2 = exam.part1.q2.weight;
            p1q2Fb.innerHTML = `<div class="exam-feedback-item correct">✓ Correcto (+${earnedP1Q2} pts): ${exam.part1.q2.explanation}</div>`;
        } else {
            earnedP1Q2 = 0;
            p1q2Fb.innerHTML = `<div class="exam-feedback-item incorrect">✗ Incorrecto (0/${exam.part1.q2.weight} pts): ${selectedP1Q2 === null ? 'No seleccionaste ninguna opción.' : 'La opción elegida no es la correcta.'}</div>`;
        }

        // Validar Parte 2 - Item A
        const p2aFb = document.getElementById("p2-itemA-feedback");
        const isMatchA = exam.part2.itemA.expected.some(exp => itemAVal === exp.toLowerCase() || itemAVal.includes(exp.toLowerCase()));
        if (itemAVal.length > 0 && isMatchA) {
            earnedP2A = exam.part2.itemA.weight;
            p2aFb.innerHTML = `<div class="exam-feedback-item correct">✓ Correcto (+${earnedP2A} pts): ${exam.part2.itemA.explanation}</div>`;
        } else {
            earnedP2A = 0;
            p2aFb.innerHTML = `<div class="exam-feedback-item incorrect">✗ Incorrecto (0/${exam.part2.itemA.weight} pts): ${itemAVal.length === 0 ? 'Campo vacío.' : 'Término incorrecto.'} Pista: ${exam.part2.itemA.explanation}</div>`;
        }

        // Validar Parte 2 - Item B
        const p2bFb = document.getElementById("p2-itemB-feedback");
        const isMatchB = exam.part2.itemB.expected.some(exp => itemBVal === exp.toLowerCase() || itemBVal.includes(exp.toLowerCase()));
        if (itemBVal.length > 0 && isMatchB) {
            earnedP2B = exam.part2.itemB.weight;
            p2bFb.innerHTML = `<div class="exam-feedback-item correct">✓ Correcto (+${earnedP2B} pts): ${exam.part2.itemB.explanation}</div>`;
        } else {
            earnedP2B = 0;
            p2bFb.innerHTML = `<div class="exam-feedback-item incorrect">✗ Incorrecto (0/${exam.part2.itemB.weight} pts): ${itemBVal.length === 0 ? 'Campo vacío.' : 'Término incorrecto.'} Pista: ${exam.part2.itemB.explanation}</div>`;
        }

        // Validar Parte 2 - Verdadero o Falso
        const trueFalseFb = document.getElementById("p2-true-false-feedback");
        if (selectedP2TrueFalse === exam.part2.trueFalse.correct) {
            earnedP2TrueFalse = exam.part2.trueFalse.weight;
            trueFalseFb.innerHTML = `<div class="exam-feedback-item correct">✓ Correcto (+${earnedP2TrueFalse} pts): ${exam.part2.trueFalse.explanation}</div>`;
        } else {
            trueFalseFb.innerHTML = `<div class="exam-feedback-item incorrect">✗ Incorrecto (0/${exam.part2.trueFalse.weight} pts): ${selectedP2TrueFalse === null ? 'No seleccionaste ninguna opción.' : 'La respuesta elegida no es correcta.'}</div>`;
        }

        // Validar Parte 3 - Código
        const p3Fb = document.getElementById("p3-feedback");
        const p3Result = exam.part3.validate(p3Code);
        if (p3Result.success) {
            earnedP3 = exam.part3.weight;
            p3Console.innerHTML = `<div class="console-line success">✓ ${p3Result.msg}</div>`;
            p3Fb.innerHTML = `<div class="exam-feedback-item correct">✓ Laboratorio Aprobado (+${earnedP3} pts): Pruebas automáticas superadas con éxito.</div>`;
        } else {
            earnedP3 = 0;
            p3Console.innerHTML = `<div class="console-line error">❌ ${p3Result.msg}</div>`;
            p3Fb.innerHTML = `<div class="exam-feedback-item incorrect">✗ Laboratorio Incorrecto (0/${exam.part3.weight} pts): ${p3Result.msg}</div>`;
        }

        const totalScore = earnedP1Q1 + earnedP1Q2 + earnedP2A + earnedP2B + earnedP2TrueFalse + earnedP3;
        const passed = totalScore >= 70;

        exitExamMode();

        userState.stageAttempts[userState.currentStageIndex] += 1;
        userState.stageGrades[userState.currentStageIndex] = totalScore;

        const overallBox = document.getElementById("exam-overall-result");
        if (passed) {
            userState.completedStages[userState.currentStageIndex] = true;
            if (userState.currentStageIndex < 999) {
                const isNextCheckpoint = (userState.currentStageIndex + 1) % 100 === 0;
                if (!isNextCheckpoint) {
                    userState.unlockedStages[userState.currentStageIndex + 1] = true;
                }
            }
            addXp(stage.xpAward);
            saveProgress();
            applyState();

            overallBox.innerHTML = `
                <div class="card" style="border: 2px solid var(--success); background: rgba(16, 185, 129, 0.08); padding: 1.5rem; text-align:center;">
                    <h3 style="color:#34d399; font-size:1.4rem; margin-bottom:0.5rem;">🎉 ¡EXAMEN OFICIAL APROBADO!</h3>
                    <p style="font-size:1.1rem; font-weight:700;">Calificación Final: <span style="color:#34d399;">${totalScore} / 100 Pts (${totalScore}%)</span></p>
                    <p style="color:var(--text-secondary); font-size:0.85rem; margin-top:0.5rem;">Desglose: Parte I (${earnedP1Q1 + earnedP1Q2} pts) • Parte II (${earnedP2A + earnedP2B + earnedP2TrueFalse} pts) • Parte III (${earnedP3} pts)</p>
                    <button class="btn btn-primary" style="margin-top:1.25rem;" onclick="document.getElementById('btn-next-lesson').click()">Avanzar a la Siguiente Etapa →</button>
                </div>
            `;
            showToast(`🎉 ¡Etapa aprobada con éxito! Nota: ${totalScore}% (+${stage.xpAward} XP)`, "success");
            triggerConfetti();
        } else {
            saveProgress();
            applyState();
            overallBox.innerHTML = `
                <div class="card" style="border: 2px solid var(--danger); background: rgba(244, 63, 94, 0.08); padding: 1.5rem; text-align:center;">
                    <h3 style="color:#f87171; font-size:1.3rem; margin-bottom:0.5rem;">❌ Evaluación No Aprobada</h3>
                    <p style="font-size:1.1rem; font-weight:700;">Puntaje Obtenido: <span style="color:#f87171;">${totalScore} / 100 Pts</span> (Se requiere mínimo 70%)</p>
                    <p style="color:var(--text-secondary); font-size:0.85rem; margin-top:0.5rem;">Revisa las correcciones marcadas en rojo en cada sección, ajusta tus respuestas y vuelve a entregar la hoja.</p>
                </div>
            `;
            showToast(`❌ Calificación insuficiente (${totalScore}%). Revisa las correcciones marcadas.`, "danger");
        }
    });
}

// --- RENDERIZAR EXAMEN TOTAL (MEGAPRUEBA CADA 100 ETAPAS) ---
let activeMegaQuestionIdx = 0;

function setupMegaExam() {
    switchView("lessons-view");
    renderMegaExamView();
}

function renderMegaExamView() {
    const currentCheckpoint = Math.floor((userState.currentStageIndex + 1) / 100);
    const startStage = (currentCheckpoint - 1) * 100 + 1;
    const endStage = currentCheckpoint * 100;
    
    lessonStageTitle.textContent = `🏆 Examen Integral de Sección: Etapas ${startStage} a ${endStage}`;
    
    lessonsMenu.innerHTML = `
        <a href="#" class="lesson-menu-item active" data-tab="mega-exam">
            <span>🏁 Examen Total de Certificación</span>
        </a>
    `;

    if (megaExamQuestions.length === 0) {
        megaExamQuestions = [];
        currentMegaExamAnswers = new Array(10).fill(null);
        
        for (let i = 0; i < 10; i++) {
            const randomStageIdx = (currentCheckpoint - 1) * 100 + Math.floor(Math.random() * 100);
            const st = COURSE_DATA[randomStageIdx];
            megaExamQuestions.push({
                stageTitle: st.title,
                q: st.quiz.q,
                options: st.quiz.options,
                correct: st.quiz.correct
            });
        }
    }

    const currentQ = megaExamQuestions[activeMegaQuestionIdx];
    let optionsHtml = "";
    currentQ.options.forEach((opt, idx) => {
        const isSelected = currentMegaExamAnswers[activeMegaQuestionIdx] === idx;
        optionsHtml += `
            <label class="quiz-option ${isSelected ? 'selected' : ''}">
                <input type="radio" name="mega-exam-radio" value="${idx}" ${isSelected ? 'checked' : ''}>
                <span>${opt}</span>
            </label>
        `;
    });

    tabContentExam.classList.remove("hidden");
    tabContentExam.classList.add("active");
    tabContentTheory.classList.add("hidden");
    tabContentExamples.classList.add("hidden");
    tabContentSandbox.classList.add("hidden");
    tabContentQuiz.classList.add("hidden");

    tabContentExam.innerHTML = `
        <div class="exam-sheet" style="max-width: 800px;">
            <div class="exam-sheet-header">
                <div>
                    <span class="exam-sheet-badge">🏆 Gran Evaluación de Sección</span>
                    <h2 class="exam-sheet-title">Examen Integral de 100 Etapas (Checkpoint ${currentCheckpoint})</h2>
                    <p style="color:var(--text-secondary); font-size:0.9rem; margin-top:0.25rem;">Pregunta ${activeMegaQuestionIdx + 1} de 10 • Se requiere 80% (8/10) para superar el checkpoint y desbloquear el siguiente bloque.</p>
                </div>
            </div>

            <div class="exam-section-card">
                <span class="badge badge-accent" style="margin-bottom:0.75rem; display:inline-block;">Tema: ${currentQ.stageTitle}</span>
                <p class="exam-prompt" style="font-size:1.1rem; font-weight:600;">${currentQ.q}</p>
                <div class="quiz-options-container">
                    ${optionsHtml}
                </div>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 1.5rem; flex-wrap:wrap; gap:1rem;">
                <button id="btn-prev-mega" class="btn btn-outline" ${activeMegaQuestionIdx === 0 ? 'disabled' : ''}>← Anterior</button>
                <span style="font-size:0.9rem; color:var(--text-muted);">Respondidas: ${currentMegaExamAnswers.filter(a => a !== null).length} / 10</span>
                ${activeMegaQuestionIdx < 9 ? 
                    `<button id="btn-next-mega" class="btn btn-primary">Siguiente →</button>` : 
                    `<button id="btn-finish-mega" class="btn btn-primary btn-glow">Finalizar Examen Integral</button>`
                }
            </div>
            <div id="mega-exam-result" style="margin-top:1.5rem;"></div>
        </div>
    `;

    // Event listeners para opciones
    const opts = tabContentExam.querySelectorAll(".quiz-option");
    opts.forEach(opt => {
        opt.addEventListener("click", () => {
            opts.forEach(o => o.classList.remove("selected"));
            opt.classList.add("selected");
            const val = parseInt(opt.querySelector("input").value);
            currentMegaExamAnswers[activeMegaQuestionIdx] = val;
        });
    });

    const btnPrevMega = document.getElementById("btn-prev-mega");
    if (btnPrevMega) {
        btnPrevMega.addEventListener("click", () => {
            if (activeMegaQuestionIdx > 0) {
                activeMegaQuestionIdx -= 1;
                renderMegaExamView();
            }
        });
    }

    const btnNextMega = document.getElementById("btn-next-mega");
    if (btnNextMega) {
        btnNextMega.addEventListener("click", () => {
            if (activeMegaQuestionIdx < 9) {
                activeMegaQuestionIdx += 1;
                renderMegaExamView();
            }
        });
    }

    const btnFinishMega = document.getElementById("btn-finish-mega");
    if (btnFinishMega) {
        btnFinishMega.addEventListener("click", () => {
            let correctCount = 0;
            megaExamQuestions.forEach((q, idx) => {
                if (currentMegaExamAnswers[idx] === q.correct) {
                    correctCount++;
                }
            });

            const percent = Math.round((correctCount / 10) * 100);
            const passed = percent >= 80;
            const resBox = document.getElementById("mega-exam-result");

            if (passed) {
                userState.unlockedStages[userState.currentStageIndex + 1] = true;
                addXp(500);
                saveProgress();
                applyState();

                resBox.innerHTML = `
                    <div class="card" style="border:2px solid var(--success); background:rgba(16,185,129,0.08); padding:1.5rem; text-align:center;">
                        <h3 style="color:#34d399;">🎉 ¡CHECKPOINT SUPERADO CON ÉXITO!</h3>
                        <p style="font-size:1.1rem; font-weight:700;">Nota Obtenida: ${percent}% (${correctCount}/10 correctas)</p>
                        <p style="color:var(--text-secondary); margin-top:0.5rem;">Has desbloqueado el siguiente gran bloque curricular. +500 XP otorgados.</p>
                        <button class="btn btn-primary" style="margin-top:1rem;" onclick="switchView('dashboard')">Regresar al Panel Principal</button>
                    </div>
                `;
                showToast(`🏆 ¡Checkpoint ${currentCheckpoint} Aprobado! (+500 XP)`, "success");
                triggerConfetti();
            } else {
                resBox.innerHTML = `
                    <div class="card" style="border:2px solid var(--danger); background:rgba(244,63,94,0.08); padding:1.5rem; text-align:center;">
                        <h3 style="color:#f87171;">❌ No alcanzaste el puntaje mínimo (80%)</h3>
                        <p style="font-size:1.1rem; font-weight:700;">Nota Obtenida: ${percent}% (${correctCount}/10 correctas)</p>
                        <p style="color:var(--text-secondary); margin-top:0.5rem;">Repasa los conceptos de las etapas previas y vuelve a presentar la prueba.</p>
                        <button class="btn btn-secondary" style="margin-top:1rem;" onclick="activeMegaQuestionIdx=0; currentMegaExamAnswers.fill(null); renderMegaExamView();">Reintentar Examen</button>
                    </div>
                `;
                showToast(`❌ Examen integral no aprobado (${percent}%).`, "danger");
            }
        });
    }
}

// --- EJECUCIÓN DEL SANDBOX ---
function runSandboxCode() {
    const code = sandboxCode.value;
    const stage = COURSE_DATA[userState.currentStageIndex];
    sandboxOutput.innerHTML = "";

    if (stage.category === "html" || stage.category === "css" || stage.category === "html_css_conjunto") {
        const iframe = document.createElement("iframe");
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        sandboxOutput.appendChild(iframe);
        
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
        doc.write(code);
        doc.close();
    } else {
        // Javascript console runner
        let logs = [];
        const originalLog = console.log;
        console.log = function(...args) {
            logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(" "));
            originalLog.apply(console, args);
        };

        try {
            const run = new Function(code);
            run();
            if (logs.length === 0) {
                sandboxOutput.innerHTML = `<span style="color:var(--text-muted); font-style:italic;">Código ejecutado sin salida en consola.</span>`;
            } else {
                sandboxOutput.innerHTML = logs.map(l => `<div>> ${l}</div>`).join("");
            }
        } catch(e) {
            sandboxOutput.innerHTML = `<span style="color:var(--danger);">> Error: ${e.message}</span>`;
        } finally {
            console.log = originalLog;
        }
    }
}

// --- TUTOR DE INTELIGENCIA ARTIFICIAL (FLOTANTE) ---
async function consultarTutorIA(contexto, codigo, errorOutput) {
    const panel = document.getElementById("ai-tutor-panel");
    const aiMessage = document.getElementById("ai-tutor-message");
    const apiKey = localStorage.getItem("gemini_api_key");

    panel.classList.remove("hidden");
    aiMessage.innerHTML = `
        <div class="ai-loading-spinner" style="padding:1rem 0;">
            <div class="spinner"></div>
            <p style="font-size:0.85rem; margin-top:0.5rem;">Analizando tu código y generando orientación pedagógica...</p>
        </div>
    `;

    if (!apiKey) {
        setTimeout(() => {
            aiMessage.innerHTML = `
                <p><strong>💡 Tutor de Codex Academy (Modo Offline):</strong></p>
                <p>Revisa la teoría del módulo para verificar la sintaxis de las etiquetas, propiedades o funciones requeridas.</p>
                <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.5rem;">Para recibir respuestas generadas en vivo con IA, configura tu <em>Gemini API Key</em> en el campo de configuración superior.</p>
            `;
        }, 600);
        return;
    }

    try {
        const prompt = `
        Eres el tutor de programación de Codex Academy.
        El estudiante está en el siguiente contexto:
        ${contexto}
        
        Su código actual es:
        ${codigo}
        
        Salida / error observado:
        ${errorOutput}
        
        Instrucciones:
        Explica de manera pedagógica y alentadora en español cuál es el error o qué le falta, dándole una pista clara sin darle la respuesta completa copiada, para que aprenda a razonar. Sé breve (máximo 2 párrafos). Formatea con etiquetas HTML directas (p, strong, code).
        `;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${encodeURIComponent(apiKey)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        if (response.ok) {
            const data = await response.json();
            const text = data.candidates[0].content.parts[0].text;
            aiMessage.innerHTML = text;
        } else {
            aiMessage.innerHTML = `<p style="color:var(--danger)">No se pudo conectar con la API de Gemini. Verifica tu llave API.</p>`;
        }
    } catch(e) {
        aiMessage.innerHTML = `<p style="color:var(--danger)">Error al consultar al tutor: ${e.message}</p>`;
    }
}

// --- BOLETÍN DE CALIFICACIONES ---
function renderGrades() {
    const completedList = userState.completedStages.map((c, i) => c ? i : null).filter(i => i !== null);
    metricCompletedQuizzes.textContent = `${completedList.length} / 1000`;

    const approvedGrades = userState.stageGrades.filter(g => g !== null && g > 0);
    if (approvedGrades.length > 0) {
        const sum = approvedGrades.reduce((a, b) => a + b, 0);
        const avg = Math.round(sum / approvedGrades.length);
        metricAverage.textContent = `${avg}%`;
        metricStatus.textContent = avg >= 70 ? "Sobresaliente" : "En Recuperación";
    } else {
        metricAverage.textContent = "-";
        metricStatus.textContent = "Sin Evaluaciones";
    }

    renderGradesRows(0, 49); // Primeras 50 etapas

    if (completedList.length === 1000) {
        gradesCertBanner.innerHTML = `
            <div class="card" style="border: 2px solid var(--accent); background: rgba(139, 92, 246, 0.08); text-align:center; padding: 1.5rem;">
                <h3>🎓 ¡Has completado todas las 1000 etapas del curso!</h3>
                <p style="margin: 0.5rem 0 1rem 0;">Tu diploma oficial de graduación está listo para su emisión.</p>
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
            <td>Hoja de Evaluación</td>
            <td>${attempts}</td>
            <td>${maxGrade !== null ? maxGrade + '%' : '-'}</td>
            <td><span class="grade-status ${stateClass}">${stateText}</span></td>
        `;
        gradesTableBody.appendChild(row);
    }
}

// --- DIPLOMA / CERTIFICADO ---
function renderCertificate() {
    certStudentName.textContent = userState.name || "Estudiante";
    const approvedGrades = userState.stageGrades.filter(g => g !== null && g > 0);
    const avg = approvedGrades.length > 0 ? Math.round(approvedGrades.reduce((a, b) => a + b, 0) / approvedGrades.length) : 100;
    certGrade.textContent = `${avg}%`;
    certDate.textContent = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    certId.textContent = `CODEX-1000-${Math.floor(100000 + Math.random() * 900000)}`;
}

// --- UTILIDADES (TOAST & CONFETTI) ---
function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = message;
    
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.style.cssText = "position:fixed; bottom:20px; right:20px; z-index:9999; display:flex; flex-direction:column; gap:10px;";
        document.body.appendChild(container);
    }
    
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

function triggerConfetti() {
    if (!confettiOverlay) return;
    confettiOverlay.classList.remove("hidden");
    confettiOverlay.innerHTML = "";
    
    const colors = ["#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", "#ec4899", "#ffffff"];
    for (let i = 0; i < 70; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = `${Math.random() * 2}s`;
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiOverlay.appendChild(piece);
    }
    
    setTimeout(() => {
        confettiOverlay.classList.add("hidden");
        confettiOverlay.innerHTML = "";
    }, 4500);
}