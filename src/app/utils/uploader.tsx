import { storage } from "@/app/firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { UploadResult } from "firebase/storage";


export const uploadFile = async (file: File, folder: string): Promise<string> => {
  try {
    const filename = new Date().getTime();
    const fileExt = file.name.split(".").pop();
    const storageRef = ref(storage, `${folder}/${filename}.${fileExt}`);
    const res: UploadResult = await uploadBytesResumable(storageRef, file);


    return res.metadata.fullPath;
  } catch (error: any) {
    throw error;
  }
};

export const getFile = async (path: string): Promise<string> => {
  try {
    const fileRef = ref(storage, path);
    return getDownloadURL(fileRef);
  } catch (error: any) {
    throw error;
  }
};