import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
    onAdd: (item: Item) => void
}

export const InputArea = ({ onAdd }: Props) => {
    
    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2022, 2, 27),
            category: "food",
            title: 'item de teste',
            value: 250.25
        };

        onAdd(newItem);
    }
    
    return(
        <C.Container>
            <button onClick={handleAddEvent}>Add</button>
        </C.Container>
    );
}