// Evento de envio do formulário
document.getElementById("curriculoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    // Formações
    const formacoes = [];
    document.querySelectorAll("#formacoes-container textarea").forEach(campo => {
        if (campo.value.trim() !== "") {
            formacoes.push(campo.value.trim());
        }
    });

    // Cursos
    const cursos = [];
    document.querySelectorAll("#cursos-container textarea").forEach(campo => {
        if (campo.value.trim() !== "") {
            cursos.push(campo.value.trim());
        }
    });

    // Experiências
    const experiencias = [];
    document.querySelectorAll("#experiencias-container textarea").forEach(campo => {
        if (campo.value.trim() !== "") {
            experiencias.push(campo.value.trim());
        }
    });

    // Validação
    if (!nome || !email || !telefone || formacoes.length === 0 || cursos.length === 0 || experiencias.length === 0) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    const dados = {
        nome,
        email,
        telefone,
        formacoes,
        cursos,
        experiencias
    };

    localStorage.setItem("curriculo", JSON.stringify(dados));
    window.location.href = "curriculo.html";
});


// ===== FORMAÇÃO =====
function adicionarFormacao() {
    const container = document.getElementById("formacoes-container");

    const div = document.createElement("div");
    div.classList.add("formacao-item");

    div.innerHTML = `
        <textarea placeholder="Outra formação acadêmica"></textarea>
        <button type="button" class="btn-remover" onclick="removerFormacao(this)">−</button>
    `;

    container.appendChild(div);
}

function removerFormacao(botao) {
    const container = document.getElementById("formacoes-container");

    if (container.children.length === 1) {
        alert("É necessário pelo menos uma formação.");
        return;
    }

    botao.parentElement.remove();
}


// ===== CURSOS =====
function adicionarCurso() {
    const container = document.getElementById("cursos-container");

    const div = document.createElement("div");
    div.classList.add("cursos-item");

    div.innerHTML = `
        <textarea placeholder="Outro curso"></textarea>
        <button type="button" class="btn-remover" onclick="removerCurso(this)">−</button>
    `;

    container.appendChild(div);
}

function removerCurso(botao) {
    const container = document.getElementById("cursos-container");

    if (container.children.length === 1) {
        alert("É necessário pelo menos um curso.");
        return;
    }

    botao.parentElement.remove();
}


// ===== EXPERIÊNCIA =====
function adicionarExperiencia() {
    const container = document.getElementById("experiencias-container");

    const div = document.createElement("div");
    div.classList.add("experiencia-item");

    div.innerHTML = `
        <textarea placeholder="Outra experiência profissional"></textarea>
        <button type="button" class="btn-remover" onclick="removerExperiencia(this)">−</button>
    `;

    container.appendChild(div);
}

function removerExperiencia(botao) {
    const container = document.getElementById("experiencias-container");

    if (container.children.length === 1) {
        alert("É necessário pelo menos uma experiência.");
        return;
    }

    botao.parentElement.remove();
}
