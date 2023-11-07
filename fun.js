function fetchChannelData(channelId) {
    fetch(`http://localhost:3000/fetch-epg/${channelId}`)
        .then(response => response.json())
        .then(data => {
            // Process and display EPG data in your UI
            displayEPGData(data);
        })
        .catch(error => console.error('Error fetching EPG data:', error));
}