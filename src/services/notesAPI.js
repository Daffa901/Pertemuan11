import axios from 'axios';


const API_URL = "https://qxaqbnpahjetgznczszl.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4YXFibnBhaGpldGd6bmN6c3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMTkzMTksImV4cCI6MjA2NDU5NTMxOX0.Mz3mhh0UCTM90ND39sCbHiebKgJIXrV45x9OlTC5x-M"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
        }
}