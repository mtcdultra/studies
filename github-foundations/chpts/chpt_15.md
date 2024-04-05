# Authenticate and authorize user identities on GitHub

[Return Readme](../README.md)

1. [ ] User identity and access management
2. [ ] User authentication
3. [ ] User authorization
4. [ ] Team synchronization
5. [ ] Knowledge check
6. [ ] Summary

## User identity and access management

- For an individual account, users can log in with only a user name and password, but every GitHub user can and should enable 2FA (two-factor authentication) for a more secure authentication process.

### Organization management through SAML SSO

- An important component of an enterprise security strategy is SAML SSO
- It provides a link between the identity provider (IdP) authorization and access to service providers (SaaS)
- This form of authentication allows users to sign in to all their applications with one set of credentials
- You need to configure SAML SSO for a GitHub organization with the IdP you're using

## User authentication

- There are two recommended authentication methods you can implement when authenticating your users on GitHub:
  - SAML SSO (Security Assertion Markup Language Single Sign-On)
  - Multifactor authentication, also known as 2FA.

### SAML SSO (Security Assertion Markup Language Single Sign-On)

- SAML authentication is a process used to verify user identity and credentials against a known identity provider
- overview of the process that occurs with enabled SAML SSO within your GitHub Enterprise:
  - Before enabling SAML SSO with your GitHub Enterprise, an Administrator needs to connect the GitHub organization to a supported IdP.
  - Next, when a member accesses resources within an organization that uses SAML SSO, GitHub redirects the member to the IdP to authenticate.
  - After successful authentication, the IdP redirects the member back to GitHub, where the member can access the organization's resources. The result means that even after configuring SAML SSO, members of the GitHub organization will continue to be prompted to log into their user accounts on GitHub.

### Multifactor authentication (2FA)

- Two-factor authentication is an extra level of security available to GitHub Enterprise accounts
- With 2FA, a member in your organization is required to log in with username and password, and also provide a secondary form of authentication
- This second form of authentication needs to be something only the user knows or has access to
- **When you require the use of two-factor authentication for your organization, all accounts that do not use 2FA will be removed from the organization and lose access to its repositories. This includes bot accounts.**
- Recommended 2FA methods:
  - SMS
  - TOTP (Time-based One-Time Password)

## User authorization

### Authorization with SAML SSO through SCIM (System for Cross-domain Identity Management)

- SCIM lets you add, manage, or remove organization member access within GitHub
- SCIM was developed to allow synchronization of information between an IdP and multiple applications
- SCIM is a protocol that tells the directory an account has been created and allows you to automate the exchange of user identity information between systems
- SCIM was developed to allow the synchronization of information between an IdP and multiple applications

### SSH key and PAT with SAML SSO

- To access your organization's protected resources using the API and Git on the command line, your users will need to authorize and authenticate with a PAT (personal access token) or SSH key


## Team synchronization

- If your company is using **Microsoft Entra ID** or **Okta** as your IdP for your enterprise in GitHub's cloud, you can use team synchronization to manage team membership within each organization through IdP groups.