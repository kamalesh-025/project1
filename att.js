    // Sidebar toggle
    function toggleSidebar() {
      const sidebar = document.getElementById("sidebar");
      sidebar.classList.toggle("active");
    }

  // Attendance Counter Script
document.addEventListener("DOMContentLoaded", () => {
  const presentCountEl = document.getElementById("present-count");
  const absentCountEl = document.getElementById("absent-count");
  const totalCountEl = document.getElementById("total-count");

  const checkboxes = document.querySelectorAll('.attendance-checkbox');
  const totalStudents = checkboxes.length;

  // Initialize counts
  totalCountEl.textContent = totalStudents;
  presentCountEl.textContent = 0;
  absentCountEl.textContent = 0;

  let isInteracted = false; // Flag to check interaction

  function updateCounts() {
    const presentCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;

    // Only update absent count after first interaction
    if (isInteracted) {
      presentCountEl.textContent = presentCount;
      absentCountEl.textContent = totalStudents - presentCount;
    }
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      isInteracted = true; // Set interaction flag
      updateCounts(); // Update counts after interaction
    });
  });

  // Initially, absent count is 0 regardless of total students
  absentCountEl.textContent = 0;
});
