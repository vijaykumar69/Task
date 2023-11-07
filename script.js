function toggleDropdown(language) {
    const dropdown = document.getElementById(language + "Dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function goToChannel(channelName) {
    // Redirect to the channel's page or perform any other action
    // You can use window.location.href = "channel_page.html?channel=" + channelName; to navigate to a new page.
    alert("Navigating to " + channelName + " channel page.");
}
