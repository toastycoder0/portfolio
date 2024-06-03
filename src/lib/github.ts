import { Octokit } from '@octokit/core'

const octokit = new Octokit({
  auth: import.meta.env.GITHUB_API_TOKEN
})

export const getRepositories = async () => {
  return await octokit.request('GET /user/repos', {
    visibility: 'public',
    affiliation: 'owner',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}
