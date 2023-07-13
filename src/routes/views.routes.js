import { Router } from 'express';
// import ProductManager from '../dao/managers/ProductsManager.js';
// import productsManagerDB from '../dao/models/products.manager.js';
// const productManager = new productsManagerDB();
import messagesManagerDB from '../dao/models/messages.manager.js';
const messageManager = new messagesManagerDB()

const router = Router();

// router.get("/", async (req, res) => {
//     console.log("estas en /");
//     const products = await productManager.getProducts()
//     console.log("a ver", products);
//     res.render("products", {products})
// })

router.post("/chat/:user/:message", async(req, res) => {
    let user = req.params.user;
    let message = req.params.message;
    const messages = await messageManager.addMessage(user, message)
    res.send(messages)
})

router.get("/chat", async (req, res) => {
    console.log("estas en el chat");
    const chat = await messageManager.getMessages()
    // res.send(chat)
    res.render("chat", {chat})
})

router.get('/register', (req, res) => {
    res.render('register');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/', (req, res) => {
    res.render('profile', {
        user: req.session.user
    });
})



export default router;