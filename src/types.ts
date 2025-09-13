export type Site = {
  TITLE: string;
  FULL_URL: string;
  BASE: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
  URL: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];
