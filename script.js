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