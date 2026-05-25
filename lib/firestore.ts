import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  type: "student" | "client";
}

export async function saveLead(data: LeadData) {
  const colName = data.type === "student" ? "studentLeads" : "clientLeads";
  const docRef = await addDoc(collection(db, colName), {
    ...data,
    createdAt: serverTimestamp(),
    status: "new",
  });
  return docRef.id;
}

export async function saveContactForm(data: Record<string, string>) {
  const docRef = await addDoc(collection(db, "contactForms"), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}
