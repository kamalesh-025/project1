document.getElementById('login-btn').addEventListener('click', function () {
  document.getElementById('login-form').style.display = 'flex';
});

function closePopup() {
  document.getElementById('login-form').style.display = 'none';
}

function showStudentForm() {
  document.getElementById('student-form').classList.remove('hidden');
  document.getElementById('tutor-form').classList.add('hidden');
  document.getElementById('student-header').classList.add('active');
  document.getElementById('tutor-header').classList.remove('active');
}

function showTutorForm() {
  document.getElementById('tutor-form').classList.remove('hidden');
  document.getElementById('student-form').classList.add('hidden');
  document.getElementById('tutor-header').classList.add('active');
  document.getElementById('student-header').classList.remove('active');
}
// Redirect Tutor to Dashboard
document.getElementById('tutor-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission
  window.location.href = 'dashboard.html'; // Redirect to the dashboard
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");

  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    content.style.marginLeft = "0";
  } else {
    sidebar.classList.add("active");
    content.style.marginLeft = "250px";
  }
}