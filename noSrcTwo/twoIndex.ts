interface IProps {
    name: string,
    age: number,
    isAdmin: boolean
}

const user: IProps = {
    name: 'Stepan',
    age: 23,
    isAdmin: true
}

console.log('user', user)