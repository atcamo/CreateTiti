export const productAdapter = (doc) =>{
    const data =doc.data()
    const dataAdapted = {id: doc.id, ...data}
    return dataAdapted
};