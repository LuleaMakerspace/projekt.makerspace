import axios from 'axios'

export default {
    async getGames() {
        try {
            let spel = await axios.get('/spel.json')
            return spel.data
        } catch (e) {
            return []
        }
    }
}