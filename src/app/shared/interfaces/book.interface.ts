export interface Book {
  title: string;
  image: string;
  link: string;
  author: string;
  goodReadsLink: string;
  publisher: string;
  publisherPage: string;
  plot: string;
  innerLink?: string;
  tecInfo?: string;
  curiosities: Curiosity
}

interface Curiosity {
  [key: string]: string;
}
