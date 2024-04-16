const inputForm = document.querySelector(".inputForm");
const clearBtn = document.querySelector(".clearBtn");

const p = document.querySelector(".pIn");
const ps = document.querySelector(".psIn");
const q = document.querySelector(".qIn");
const qs = document.querySelector(".qsIn");
const pq = document.querySelector(".pqIn");

inputForm.addEventListener("submit", e => {

    

    e.preventDefault();

    if (p.value != "") {
        ps.value = Math.pow(parseFloat(p.value), 2);
        q.value = 1 - parseFloat(p.value);
        qs.value = Math.pow(parseFloat(q.value), 2)
        pq.innerText = parseFloat(p.value) * parseFloat(q.value) * 2
    }

    if (ps.value != "") {
        p.value = Math.sqrt(parseFloat(ps.value))
        q.value = 1 - parseFloat(p.value);
        qs.value = Math.pow(parseFloat(q.value), 2)
        pq.innerText = parseFloat(p.value) * parseFloat(q.value) * 2
    }

    if (q.value != "") {
        p.value = 1 - parseFloat(q.value);
        ps.value = Math.pow(parseFloat(p.value), 2);
        qs.value = Math.pow(parseFloat(q.value), 2)
        pq.innerText = parseFloat(p.value) * parseFloat(q.value) * 2
    }

    if (qs.value != "") {
        q.value = Math.sqrt(parseFloat(qs.value))
        p.value = 1 - parseFloat(q.value);
        ps.value = Math.pow(parseFloat(p.value), 2);
        pq.innerText = parseFloat(p.value) * parseFloat(q.value) * 2
    }

    p.value = Math.round(parseFloat(p.value)*1000)/1000;
    q.value = Math.round(parseFloat(q.value)*1000)/1000;
    ps.value = Math.round(parseFloat(ps.value)*1000)/1000;
    qs.value = Math.round(parseFloat(qs.value)*1000)/1000;
    pq.innerText = Math.round(parseFloat(pq.innerText)*1000)/1000;

    
})

clearBtn.addEventListener("click", e => {
    p.value = "";
    q.value = "";
    ps.value = "";
    qs.value = "";
    pq.innerText = "...";
})