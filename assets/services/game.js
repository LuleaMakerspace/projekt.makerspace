import axios from 'axios'

export default {
    async getGames() {
        try {
            let spel = await axios.get('https://raw.githubusercontent.com/LuleaMakerspace/projekt-lista/master/projekt.json')
            return spel.data
        } catch (e) {
            return []
        }
    }
}