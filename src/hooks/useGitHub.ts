import { useState, useEffect } from 'react'
import { GitHubRepo, GitHubUser } from '@/types/github'
import { githubService } from '@/services/github'
import toast from 'react-hot-toast'

export const useGitHubUser = () => {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const userData = await githubService.getUser()
        setUser(userData)
        setError(null)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch user data'
        setError(errorMessage)
        toast.error('Failed to load GitHub profile')
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  return { user, loading, error }
}

export const useGitHubRepositories = () => {
  const [repositories, setRepositories] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true)
        const repos = await githubService.getRepositories()
        setRepositories(repos)
        setError(null)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch repositories'
        setError(errorMessage)
        toast.error('Failed to load repositories')
      } finally {
        setLoading(false)
      }
    }

    fetchRepositories()
  }, [])

  return { repositories, loading, error, refetch: () => window.location.reload() }
}

export const useFeaturedRepositories = () => {
  const [repositories, setRepositories] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFeaturedRepositories = async () => {
      try {
        setLoading(true)
        const repos = await githubService.getFeaturedRepositories()
        setRepositories(repos)
        setError(null)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch featured repositories'
        setError(errorMessage)
        toast.error('Failed to load featured projects')
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedRepositories()
  }, [])

  return { repositories, loading, error }
}