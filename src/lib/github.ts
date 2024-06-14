import { Octokit } from '@octokit/core'

const octokit = new Octokit({
  auth: import.meta.env.TOKEN_GITHUB_API
})

export const getUserData = async () => {
  return await octokit.request('GET /user').then(({ data }) => {
    const { name, bio: description, avatar_url: image } = data
    return { name: `${name}`, description: `${description}`, image }
  })
}

export const getRepositories = async () => {
  return await octokit
    .request('GET /user/repos', {
      visibility: 'public',
      affiliation: 'owner',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      },
      per_page: 4,
      page: 1
    })
    .then(({ data }) => {
      return data.map(({ name, html_url: url, description, topics }) => ({
        name,
        url,
        description,
        topics
      }))
    })
}

export const getPinedRepos = async () => {
  return await octokit.request('GET /user/')
}
