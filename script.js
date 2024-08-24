
    function sim() {
        alert("Você aceitou namorar comigo! :D Hoje é 24/08/2024, não esquece hein! ")
    }

    function desvia(t) {
        var btn = t;
        btn.style.position = 'absolute';
        btn.style.bottom = geraPosicao(20, 90);
        btn.style.left = geraPosicao(20, 90);
        console.log("opa, rsrsrs...");
    }

    function geraPosicao(min, max) {
        return (Math.random() * (max - min) + min) + "%";
    }
