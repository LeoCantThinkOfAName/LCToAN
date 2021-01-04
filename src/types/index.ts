export interface SEOProps {
  description: string;
  title: string;
  meta?: MetaObject[];
}

export interface MetaObject {
  name: string;
  content: string;
}

export interface RouteObject {
  title: string;
  path: string;
}

export interface WorksData {
  url: string;
  title: string;
  description: string;
  thumbnail: any;
  imgs: any[];
}
