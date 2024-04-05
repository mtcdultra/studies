# Introduction to GitHub administration

[Return Readme](../README.md)

1. [x] Introduction
2. [x] What is GitHub administration?
3. [x] How does GitHub authentication work?
4. [x] How does GitHub organization and permissions work?
5. [x] Knowledge check
6. [x] Summary

## GitHUb administration

- As a GitHub administrator, your goal is to keep everything working smoothly for your users

### Administration at team level

- Each user is an organization member that you can add to a team
- Teams are useful for refining repository permissions on a more granular level and enabling communication and notification between team members
- Additionally, GitHub allows you to sync your teams with **identity provider (IdP)** groups such as Microsoft Entra ID

### Administration at organization level

- In GitHub, organizations are shared spaces enabling users to collaborate across many projects at once
- Is recommend setting up **only one organization** for your users and repositories

### Administration at enterprise level

- Enterprise accounts include GitHub Enterprise Cloud and Enterprise Server instances and enable owners to centrally manage policy and billing for multiple organizations

## How does GitHub authentication work?

### GitHub's authentication options

- GitHub supports several authentication options, including:
  - **Username and password**
  - **Personal access tokens** (PATs)
  - **SSH keys** (secure shell keys)
  - **Deploy keys** (another type of SSH key)
  - **Two-factor authentication** (2FA)
  - **SAML SSO** (security assertion markup language single sign-on)
  - **LDAP** (lightweight directory access protocol)

## How does GitHub organization and permissions work?

### GitHub organization permissions

Permissions level:

- **Repository permissions** (there are five repository-level permissions)
  - Read
  - Triage
  - Write
  - Maintain
  - Admin
- **Team permissions**
  - Member
  - Maintainer
- **Organization permissions**
  - Owner
  - Member
  - Moderator
  - Billing manager
  - Security managers
  - Outside collaborator
- **Enterprise permissions**
  - Owner
  - Member
  - Billing manager

### Repository security and management

1. Create protection rules
2. Add a CODEOWNERS file
   - [How to create CODEOWNERS](https://docs.github.com/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners#codeowners-syntax)
3. View traffic by using insights
