import { collection, getDocs, query } from "firebase/firestore";
import db from "../../config/firebase";
import { createProductAdaptedFromFirestore } from "../../adapters/productAdapter"

export const getProduct = async () => {
    const collectionRef = collection(db, "titi");

    const queryRef = query(collectionRef);
    
    const querySnapshot = await getDocs(queryRef);

    const productAdapted = querySnapshot.docs.map((doc) =>
        createProductAdaptedFromFirestore(doc)
    );

    return productAdapted;
};

export default getProduct;
