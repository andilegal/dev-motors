export interface ServiceObject {
  slug: string;
  title: string;
}

export interface ServiceObjectsResponse {
  objects: ServiceObject[];
  total: number;
}