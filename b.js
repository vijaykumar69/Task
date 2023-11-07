const axios = require('axios');
const apiKey = 'Y14626e53dfmshc42792ea93e2cf3p139a26jsn109c8fd8f513';

app.get('/fetch-epg/:channelId', async (req, res) => {
    const { channelId } = req.params;
    try {
        const response = await axios.get(`EPG_API_ENDPOINT?channelId=${channelId}`, {
            headers: {
                'X-RapidAPI-Key': apiKey,
            },
        });
        const epgData = response.data;
        res.json(epgData);
    } catch (error) {
        console.error('Error fetching EPG data:', error);
        res.status(500).json({ error: 'Failed to fetch EPG data' });
    }
});
