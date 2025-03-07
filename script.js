function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.container > div').forEach(section => {
        section.classList.add('hidden');
    });

    // Show selected section
    document.getElementById(sectionId).classList.remove('hidden');
}
