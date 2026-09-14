import { Client, Databases } from "appwrite";

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;

export const appwriteClient = new Client()
  .setEndpoint(endpoint || "https://sgp.cloud.appwrite.io/v1")
  .setProject(project || "6aa76a77000030fd9a0c");

const databases = new Databases(appwriteClient);

export function pingAppwrite() {
  appwriteClient.ping().catch(() => {
    // Ignore network/availability errors on startup; the app still works.
  });
}

export type ContactSubmission = {
  name: string;
  service: string;
  budget: string;
  message: string;
  source: string;
};

export async function createContactSubmission(
  data: ContactSubmission
): Promise<void> {
  if (!databaseId || !collectionId) {
    throw new Error("Appwrite database or collection is not configured.");
  }

  await databases.createDocument(databaseId, collectionId, "unique()", data);
}