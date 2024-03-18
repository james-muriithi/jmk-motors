import type { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

interface DocData extends DocumentData {
  id: string;
}

export const firestoreDocToJson = (doc: QueryDocumentSnapshot): DocData => {
  return {
    id: doc.id,
    ...doc.data(),
  };
};
