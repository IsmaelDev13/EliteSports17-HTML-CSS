const smHeader = document.getElementById("timeHeader");
const time = Date.now();
const today = new Date(time);

smHeader.innerHTML = `[${today.toDateString()}]`;
