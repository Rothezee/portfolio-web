import { GitHubRepo, GitHubUser, GitHubLanguages } from '@/types/github'

const GITHUB_USERNAME = 'rothezee' // Replace with your GitHub username
const GITHUB_API_BASE = 'https://api.github.com'

class GitHubService {
  private async fetchWithErrorHandling<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('GitHub API fetch error:', error)
      throw error
    }
  }

  async getUser(): Promise<GitHubUser> {
    return this.fetchWithErrorHandling<GitHubUser>(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`
    )
  }

  async getRepositories(): Promise<GitHubRepo[]> {
    const repos = await this.fetchWithErrorHandling<GitHubRepo[]>(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    )
    
    // Filter out forks and archived repos, sort by stars and recent activity
    return repos
      .filter(repo => !repo.fork && !repo.archived)
      .sort((a, b) => {
        // Sort by stars first, then by update date
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      })
  }

  async getRepositoryLanguages(repoName: string): Promise<GitHubLanguages> {
    return this.fetchWithErrorHandling<GitHubLanguages>(
      `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/languages`
    )
  }

  async getFeaturedRepositories(): Promise<GitHubRepo[]> {
    const repos = await this.getRepositories()
    
    // Get top repositories based on stars, forks, and recent activity
    return repos
      .filter(repo => repo.stargazers_count > 0 || repo.forks_count > 0 || repo.description)
      .slice(0, 6)
  }

  getLanguageColor(language: string): string {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      'C++': '#f34b7d',
      C: '#555555',
      'C#': '#239120',
      PHP: '#4F5D95',
      Ruby: '#701516',
      Go: '#00ADD8',
      Rust: '#dea584',
      Swift: '#ffac45',
      Kotlin: '#F18E33',
      Dart: '#00B4AB',
      HTML: '#e34c26',
      CSS: '#1572B6',
      Vue: '#4FC08D',
      React: '#61DAFB',
      Angular: '#DD0031',
      Svelte: '#ff3e00',
      Shell: '#89e051',
      PowerShell: '#012456',
      Dockerfile: '#384d54',
      YAML: '#cb171e',
      JSON: '#292929',
      Markdown: '#083fa1',
    }
    
    return colors[language] || '#6b7280'
  }
}

export const githubService = new GitHubService()