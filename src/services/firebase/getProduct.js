import { getDocs, collection, query, where, doc, getDoc, documentId } from "firebase/firestore"
import  db  from "../../config/firebase";
import { productAdapter } from "../../Adapter/productAdapter";

export const getProductsByCategory = async (categoryId) => {
    try {
        const collectionRef = categoryId
            ? query(collection(db, 'product'), where('category', '==', categoryId))
            : collection(db, 'product');
        const response = await getDocs(collectionRef);
        const productsAdapted = response.docs.map(doc => productAdapter (doc));
        return productsAdapted;
    } catch (error) {
        console.error(error);
    }
};

export const getProductById = async (itemId) => {
    try {
        const docRef = doc(db, 'product', itemId);
        const response = await getDoc(docRef);
        const productAdapted = productAdapter(response);
        return productAdapted;
    } catch (error) {
        console.error(error);
    }
};

export const getProductsInCart = async (cart) => {
    const ids = cart.map(prod => prod.id);
    const productsRef = collection(db, 'product');
    const productsAddFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
    const { docs } = productsAddFromFirestore;
    return docs;
}