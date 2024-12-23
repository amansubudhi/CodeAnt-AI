const sideBarItems = [
    {
        displayName: 'Repositories',
        href: '#',
        iconName: 'home.svg'
    },
    {
        displayName: 'AI Code Review',
        href: '#',
        iconName: 'code.svg'
    },
    {
        displayName: 'Cloud Security',
        href: '#',
        iconName: 'cloud.svg'
    },
    {
        displayName: 'How to Use',
        href: '#',
        iconName: 'book.svg'
    },
    {
        displayName: 'Settings',
        href: '#',
        iconName: 'gear.svg'
    },
]
const sideBarSecondaryItems = [
    {
        displayName: 'Support',
        href: '#',
        iconName: 'support.svg'
    },
    {
        displayName: 'Logout',
        href: '#',
        iconName: 'sign-out.svg'
    },
]

const navBarItems = sideBarItems.concat(sideBarSecondaryItems);

export { sideBarItems, sideBarSecondaryItems, navBarItems };