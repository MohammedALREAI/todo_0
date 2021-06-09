import { Button } from '../Button/Button'
import './Styles.css'

export interface IPropsListItem {
    id: string;
    todo: string;
    handleDeleteAction(): void;
}

export const ListItem = (props: IPropsListItem) => {
    return (
        <section className="list-item">
            <span className="task-title">{props.todo}</span>
            <Button text="remove" handleEventAction={props.handleDeleteAction} />
        </section>
    )
}
