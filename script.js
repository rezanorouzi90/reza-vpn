
function unlock() {
  document.getElementById('form').classList.remove('hidden');
}
function activate() {
  document.getElementById('form').classList.add('hidden');
  document.getElementById('notif').classList.remove('hidden');
  document.getElementById('qr').classList.remove('hidden');
}
function copyConfig() {
  navigator.clipboard.writeText('vless://example');
  alert('کانفیگ کپی شد!');
}
