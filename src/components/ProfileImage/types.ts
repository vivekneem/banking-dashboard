export interface ProfileImageProps {
  imageUrl: string;
  onImageUpdate: (file: File) => void;
  isUploading: boolean;
}
