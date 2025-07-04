export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  archived: boolean;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  language: string | null;
  topics?: string[]; // ✅ nuevo: temas de cada repo
  homepage?: string; // ✅ nuevo: link del sitio del proyecto
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  location: string;
  blog: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubLanguages {
  [language: string]: number;
}
