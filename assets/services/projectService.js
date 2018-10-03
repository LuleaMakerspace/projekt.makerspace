import axios from 'axios'
import sr from 'seedrandom'

export default {
    async getProjects() {
        try {
            let spel = await axios.get('https://raw.githubusercontent.com/LuleaMakerspace/projekt-lista/master/projekt.json')
            return spel.data
        } catch (e) {
            return []
        }
    },
    searchProjects(query, projects) {
        query = query.toLowerCase()
        let found = []
        projects.forEach(project => {
            if (project.title && project.title.toLowerCase().includes(query)) {
                found.push(project)
                return
            }
            if (project.description && project.description.toLowerCase().includes(query)) {
                found.push(project)
                return
            }
            if (project.author && project.author.toLowerCase().includes(query)) {
                found.push(project)
                return
            }
        })
        return found
    },
    shuffle(projects) {
        var ny = projects.slice();
        for (let i = ny.length - 1; i > 0; i--) {
            const j = Math.floor(sr(new Date().getDate())() * (i + 1));
            [ny[i], ny[j]] = [ny[j], ny[i]];
        }
        return ny;
    }
}