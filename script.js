function redirectFAQs() {
    // Check if the user is on mobile (screen width less than or equal to 768px)
    if (window.innerWidth <= 768) {
        window.location.href = 'https://sites.google.com/view/vcllocalhistoryarchive/faqs-mobile';  // URL for mobile users
    } else {
        window.location.href = 'https://sites.google.com/view/vcllocalhistoryarchive/faqs';  // URL for desktop users
    }
}
function openLink() {
    const selectedLink = document.getElementById("linkSelect").value;

    if (selectedLink) {
        // Open the selected link in a new tab
        window.open(selectedLink, '_blank');

        // Change the current tab to google.com
        window.location.href = 'https://raindrop.io/valleycottagelibrary';
    } else {
        alert("Please select a link first.");
    }
}
