import axios from 'axios';

const config = require('../../../config').init();

export default {
    getAuthorizedPlatform: () => {
        return axios.get('/api/db/platform?cid=' + localStorage.clientId
    );
        
    },
    addPlatform: (platform) => {
        localStorage.clientId = platform.clientId;
        return axios.put('/api/db/platform', platform);
    },
    updatePlatform: (platform) => {
        return axios.post('/api/db/platform', platform);
    },
    deletePlatform: (platform) => {
        return axios.delete('/api/db/platform', { data: { id: platform.id }});
    },
    addSourceToCustomer: (customerId, sourceId) => {
        return axios.post('/api/db/platform/addStripeSource', { cId: customerId, sId: sourceId });
    },
    setDefaultSource: (customerId, sourceId) => {
        return axios.post('/api/db/platform/setDefaultSource', { cId: customerId, sId: sourceId });
    },
    removeSource: (customerId, sourceId) => {
        return axios.post('/api/db/platform/removeSource', { cId: customerId, sId: sourceId });
    },
    deployNetlify: (client, templateData) => {
        return axios.post('/api/db/platform/netlify', { client: client, templateData: templateData });
    },
}