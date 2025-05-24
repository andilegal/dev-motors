export interface PostBanner {
  url: string;
  imgix_url: string;
}

export interface PostButton {
  title: string;
  url: string | null;
}

export interface PostDescription {
  title: string;
  text: string;
  banner: {
    url: string
  }
  button_active: boolean;
  button_title: string | null;
  button_url: string | null;
}

export interface PostMetadata {
  banner: PostBanner;
  button: PostButton;
  description: PostDescription;
}

export interface PostProps {
  objects: [{
    slug: string;
    title: string;
    content: string;
    metadata: PostMetadata;
  }]


}

