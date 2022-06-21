export class Building {
    constructor(
        public id: number = 0,
        public name: string = "Здание",
        public date: string = "Дата",
        public architector: string = "Архитектор",
        public customer: string = "Заказчик",
        public style: string = "Архитектурный стиль"
    ) { }
}