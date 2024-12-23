//Authentication Config
const authOptions = {
    Saas: [
        {
            value: 'Github',
            image: 'github.svg'
        },
        {
            value: 'Bitbucket',
            image: 'bitbucket.svg'
        },
        {
            value: 'Azure Devops',
            image: 'azure.svg'
        },
        {
            value: 'GitLab',
            image: 'gitlab.svg'
        }
    ],
    SelfHosted: [
        {
            value: 'GitLab',
            image: 'gitlab.svg'
        },
        {
            value: 'SSO',
            image: 'sso.svg'
        }
    ]
}

export default authOptions;