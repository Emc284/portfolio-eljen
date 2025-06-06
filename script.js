function showSection(sectionId) {
    var sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.remove('active'));
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('active');
}