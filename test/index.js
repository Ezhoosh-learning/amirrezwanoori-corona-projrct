function set_content(tag, data) {
    document.querySelectorAll(tag).forEach(e => e.textContent = data)
}

async function load_statistics() {
    try {
        const res = await fetch("https://disease.sh/v3/covid-19/all")
        const data = await res.json();

        set_content(".st-total-cases", data.cases.toLocaleString())
        set_content(".st-deaths", data.deaths.toLocaleString())
    }
    catch (err) {
        alert("Load statistics failed")
        console.error(err)
    }
}


window.addEventListener("load", () => {
    load_statistics();
})
