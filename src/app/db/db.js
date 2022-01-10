import Dexie from "dexie";

const db = new Dexie("ShoppingEcommerce");

db.version(1).stores({
    cart: '++id, pruce, title, categoria'
})

export default db;