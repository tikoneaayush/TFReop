function deleteCookie(name) {
  document.cookie = name + '=; Max-Age=0; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}

function handleLogout() {
  deleteCookie('isLoggedIn');
  deleteCookie('userRole');
  window.location.href = 'index.html';
}