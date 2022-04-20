import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertRate = payload => api.post(`/rate`, payload)
export const getAllRates = () => api.get(`/rates`)
export const updateRateById = (id, payload) => api.put(`/rate/${id}`, payload)
export const deleteRateById = id => api.delete(`/rate/${id}`)
export const getRateById = id => api.get(`/rate/${id}`)

const apis = {
    insertRate,
    getAllRates,
    updateRateById,
    deleteRateById,
    getRateById,
}

export default apis