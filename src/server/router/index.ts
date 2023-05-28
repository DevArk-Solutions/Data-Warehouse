import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { trpc } from "../trpc";
import s3Client from "@/libs/s3Client";
import IFileSystemItem from "@/types/FileSystemItem";
import { getFilesController } from "../controller/getFiles.controller";
import { getStorageController } from "../controller/getStorage.controller";

export const appRouter = trpc.router({
    getFiles: getFilesController,
    getStorage: getStorageController,
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
