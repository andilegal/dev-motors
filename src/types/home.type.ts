export interface Banner {
  url: string;
  imgix_url: string;
}

export interface CTAButton {
  title: string;
  url: string;
}

export interface About {
  description: string;
  banner: Banner;
}

export interface Service {
  image: Banner;
  description: string;
}

export interface Contact {
  email: string;
  phone: string;
  time: string;
}

export interface HomeMetadata {
  banner: Banner;
  heading: string;
  cta_button: CTAButton;
  about: About;
  services: Service[];
  contact: Contact;
}

export interface TD {
  object: {
    slug: string;
    title: string;
    type: string;
    metadata: HomeMetadata;
  }
}


