import axios from 'axios'
import sr from 'seedrandom'

export default {
    async getProjects() {
        try {
            let result = await axios.get('https://raw.githubusercontent.com/LuleaMakerspace/projekt-lista/master/projekt.json')
            return result.data
        } catch (e) {
            return []
        }
    },
    searchProjects(query, projects) {
        query = query.toLowerCase()
        return projects.filter((project) => {
            if (project.title && project.title.toLowerCase().includes(query)) {
                return true
            }
            else if (project.description && project.description.toLowerCase().includes(query)) {
                return true
            }
            else if (project.author && project.author.toLowerCase().includes(query)) {
                return true
            }
            return false
        })
    },
    shuffle(projects, seed) {
        let rng = sr(seed)
        return projects.sort(() => 0.5 - rng())
    }
}