// import firebase from '~/plugins/firebase.js'

function queryDocumentSnapshotToPOJO(queryDocumentSnapshot) {
    let data = queryDocumentSnapshot.data()
    data.id = queryDocumentSnapshot.id
    return data
}

export const actions = {
    async fetchProjects(context, queryCollection) {
        let querySnapshot = await queryCollection.get()
        let POJOs = querySnapshot.docs.map(x => queryDocumentSnapshotToPOJO(x))
        context.commit("setProjects", {data: POJOs})
    },
    async fetchProject(context, documentReference) {
        let querySnapshot = await documentReference.get()
        let POJO = queryDocumentSnapshotToPOJO(querySnapshot)
        context.commit("setProjects", {data: [POJO]})
    }
}

export const mutations = {
    setProjects(state, payload) {
        state.projectList = payload.data
    }
}

/*
export const getters = () => ({
    fetchProjects: async (context, queryCollection) => {
        let querySnapshot = await queryCollection.get()
        let POJOs = querySnapshot.docs.map(x => queryDocumentSnapshotToPOJO(x))
        context.commit("setProjects", {data: POJOs})
    },
    fetchProject: async (context, documentReference) => {
        let querySnapshot = await documentReference.get()
        let POJO = queryDocumentSnapshotToPOJO(querySnapshot)
        return POJO
    }
})
*/

export const state = () => ({
    projectList: []
})