
export interface Member {
  id: number;
  name: string;
  designation: string;
  phone: string;
  imageUrl: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  caption: string;
}

export interface VideoItem {
  id: number;
  title: string;
  embedUrl: string;
  thumbnail: string;
}
