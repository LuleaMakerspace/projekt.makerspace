import axios from 'axios'
import sr from 'seedrandom'
import {db} from '~/plugins/firebase.js'

export default {
    async getProjects() {
        let querySnapshot = await db.collection("projects").get()
        /*return querySnapshot.docs.map(doc => {
            console.log(doc.data())
            return doc.data()
        })*/
        return querySnapshot.docs
    },
    async getProject(id) {
        let querySnapshot = await db.collection("projects").doc(id).get()
        //return querySnapshot.data()
        return querySnapshot
    },
    async searchProjects(query, projects) {
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
        /*let querySnapshot = await db.collection("projects").get()
        return querySnapshot.docs.map(doc => {
            return doc.data()
        })*/
    },
    shuffle(projects, seed) {
        let rng = sr(seed)
        return projects.sort(() => 0.5 - rng())
    }
}