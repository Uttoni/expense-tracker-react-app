import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = []
    let [year, month] = date.split('-');

    list.forEach((item) => {
        if(item.date.getFullYear() === parseInt(year) && (item.date.getMonth()+1) === parseInt(month)){
            newList.push(item);
        }
    });

    console.log(newList);
    return newList;
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${addZero(day)}/${addZero(month)}/${addZero(year)}`
}

const addZero = (n: number): string => n<10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (currentMonth: string): string => {

    let [year, month] = currentMonth.split('-');
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return `${months[parseInt(month) - 1]} - ${year}`;
}