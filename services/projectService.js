function queryDocumentSnapshotToPOJO(queryDocumentSnapshot) {
    let data = queryDocumentSnapshot.data()
    data.id = queryDocumentSnapshot.id
    return data
}

export const getProjects = async (queryCollection) => {
    let querySnapshot = await queryCollection.get()
    let POJOs = querySnapshot.docs.map(x => queryDocumentSnapshotToPOJO(x))
    return POJOs
}

export const getProject = async (documentReference) => {
    let querySnapshot = await documentReference.get()
    if (!querySnapshot.data()) return null
    let POJO = queryDocumentSnapshotToPOJO(querySnapshot)
    return POJO
}