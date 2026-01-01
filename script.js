function rupiah(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

function hitung() {
  const monthly = parseFloat(document.getElementById("monthly").value);
  const days = parseInt(document.getElementById("days").value);
  const needs = parseFloat(document.getElementById("needs").value) || 0;

  if (!monthly || !days) {
    alert("Isi uang bulanan dan jumlah hari dulu ya 🙏");
    return;
  }

  if (days <= 0) {
    alert("Jumlah hari tidak valid!");
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
