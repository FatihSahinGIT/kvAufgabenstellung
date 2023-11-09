export interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    picture: string;
    address: {
        street: string;
        city: string;
        zip: string;
    };
    orders: Order[];
}

interface Order {
    id: number;
    date: string;
    total: number;
    items: OrderItem[];
}

interface OrderItem {
    name: string;
    quantity: number;
    price: number;
}
