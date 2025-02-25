import { ID, ImageGravity } from "appwrite"
import { appwriteConfig, storage } from "./config"

// Upload File
export async function uploadFile(file) {
  try {
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file
    )

    return uploadedFile
  } catch (error) {
    console.log(error)
    console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  }
}

// Get File Url
export function getFilePreview(fileId) {
  try {
    const fileUrl = storage.getFilePreview(
      appwriteConfig.storageId,
      fileId,
      2000,
      2000,
      ImageGravity.Top,
      100
    )
    console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID)

    if (!fileUrl) throw Error

    return fileUrl
  } catch (error) {
    console.log(error)
    console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID)
  }
}
