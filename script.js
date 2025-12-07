function formatDate(date) {
    let diff = (new Date() - date) / 1000;

    if (diff < 1) {
        return "прямо зараз";
    } 
    else if (diff < 60) {
        return Math.floor(diff) + " сек. назад";
    } 
    else if (diff < 3600) {
        return Math.floor(diff / 60) + " хв. назад";
    } 
    else {
        let d = date;

        let day = d.getDate().toString().padStart(2, "0");
        let month = (d.getMonth() + 1).toString().padStart(2, "0");
        let year = d.getFullYear().toString().slice(2);
        let hours = d.getHours().toString().padStart(2, "0");
        let minutes = d.getMinutes().toString().padStart(2, "0");

        return day + "." + month + "." + year + " " + hours + ":" + minutes;
    }
}

document.getElementById("r1").textContent = formatDate(new Date());
document.getElementById("r2").textContent = formatDate(new Date(new Date() - 30000));
document.getElementById("r3").textContent = formatDate(new Date(new Date() - 300000));
document.getElementById("r4").textContent = formatDate(new Date(new Date() - 3000000));
