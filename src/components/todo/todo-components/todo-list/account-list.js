import AccountListItem from "../todo-list-item/account-list-item";

const AccountList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <AccountListItem {...itemProps} onDeleted={() => onDeleted(id)}
                             onToggleDone={() => onToggleDone(id)}/>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};


export default AccountList;