function rupiah(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

function parseRupiah(value) {
  return parseInt(value.replace(/[^0-9]/g, "")) || 0;
}

function rupiah(num) {
  return "Rp " + Math.floor(num).toLocaleString("id-ID");
}

function hitung() {
  const monthly = parseRupiah(document.getElementById("monthly").value);
  const needs = parseRupiah(document.getElementById("needs").value);
  const days = parseInt(document.getElementById("days").value);

  if (!monthly || !days) {
    alert("Isi uang bulanan dan jumlah hari dulu!");
    return;
  }

  const sisaSaldo = monthly - needs;
  const daily = sisaSaldo / days;
  const weekly = daily * 7;

  document.getElementById("daily").innerText = rupiah(daily);
  document.getElementById("weekly").innerText = rupiah(weekly);
  document.getElementById("totalNeeds").innerText = rupiah(needs);
  document.getElementById("balance").innerText = rupiah(sisaSaldo);
}
