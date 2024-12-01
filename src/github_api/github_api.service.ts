import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubApiService {
  async getUserRepositories(username: string) {
    return await fetch(`https://api.github.com/users/${username}/repos`).then(
      (res) => res.json(),
    );
  }

  async getRepositoryLanguages(username: string, repo: string) {
    return await fetch(
      `https://api.github.com/repos/${username}/${repo}/languages`,
    ).then((res) => res.json());
  }

  async getRepositoryReadme(username: string, repo: string) {
    return await fetch(
      `https://api.github.com/repos/${username}/${repo}/contents/README.md`,
    ).then((res) => res.json());
  }
}
