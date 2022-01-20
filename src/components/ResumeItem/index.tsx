import * as C from './styles';

type Props = {
    title: string,
    value: number,
    colorProp?: string
}

export const ResumeItem = ({ title, value, colorProp }: Props) => {
    return(
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={colorProp}>R$ {value}</C.Info>
        </C.Container>
    );
}