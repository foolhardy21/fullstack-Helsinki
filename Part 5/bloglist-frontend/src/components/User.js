
const User = (props) => {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.blogsLength}
            </td>
        </tr>
    )
}

export default User