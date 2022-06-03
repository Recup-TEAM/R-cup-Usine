module.exports = function (app, session) {
    const api_user = require("./api/api_user")(session);
    const api_entreprise = require("./api/api_entreprise")(session);
    const api_product = require("./api/api_product")(session);

    const bodyParser = require("body-parser");
    const { body, validationResult } = require("express-validator");
    const urlencodedParser = bodyParser.urlencoded({ extended: false });
    
    /***************
     *    User     *
     ***************/
    
    /* GET */
    // Get if user is connected
    app.get("/api/user/get/connected", urlencodedParser, api_user.getConnected);

    // Get data of current user
    app.get("/api/user/get/data", urlencodedParser, api_user.getUserData);

    // Get le level du compte
    app.get("/api/user/get/compteLevel", urlencodedParser, api_user.getCompteLevel);
    
    // Get all users (admin only)
    app.get("/api/user/get/allUsers", urlencodedParser, api_user.getAllUsers);

    // Get current subscription of user
    app.get("/api/user/get/subscription", urlencodedParser, api_user.getSubscription);

    
    
    /* POST */
    // Connexion
    app.post("/api/user/login", urlencodedParser, api_user.login);

    // Deconnexion
    app.post("/api/user/logout", urlencodedParser, api_user.logout);

    // Inscription
    app.post("/api/user/signup", urlencodedParser, api_user.signup);

    // Changer le mot de passe
    app.post("/api/user/update/changePassword", urlencodedParser, api_user.changePassword);

    // Changer le mail
    app.post("/api/user/update/changeMail", urlencodedParser, api_user.changeEmail);

    // Update le level d'un compte (admin only)
    app.post("/api/user/update/updateCompteLevel", urlencodedParser, api_user.updateCompteLevel);

    // Subscribe to a plan
    app.post("/api/user/update/subscribe", urlencodedParser, api_user.subscribe);




    /***************
     * Entreprise  *
     ***************/

    /* GET */
    // Get data entreprise of the current user
    app.get("/api/entreprise/get/data", urlencodedParser, api_entreprise.getEntreprisetDataOfCurrentUser);

    // Get all entreprises 
    app.get("/api/entreprises/get/allEntreprises", urlencodedParser, api_entreprise.getAllEntreprises);

    // Get entreprise by id
    app.get("/api/entreprises/get/entrepriseById", urlencodedParser, api_entreprise.getEntrepriseById);
    
    // Get all entreprises by user
    app.get("/api/entreprises/get/allEntreprisesByUser:id", urlencodedParser, api_entreprise.getAllEntreprisesByUser);


    /* POST */
    // Ajouter une entreprise
    app.post("/api/entreprises/add", urlencodedParser, api_entreprise.addEntreprise);



    /***************
     *   Product   *
     ***************/

    /* GET */
    // Get tout les produits une entreprise
    app.get("/api/products/get/allProductsFrom/:id", urlencodedParser, api_product.getAllProductsFrom);

    // Get tout les produits
    app.get("/api/products/get/allProducts", urlencodedParser, api_product.getAllProducts);

    // Get un produit par son id
    app.get("/api/products/get/productId/:id", urlencodedParser, api_product.getProductById);

    // Get user of product
    app.get("/api/products/get/userOfProduct/:id", urlencodedParser, api_product.getUserOfProduct);


    /* POST */
    // Ajouter un produit
    app.post("/api/products/add", urlencodedParser, api_product.addProduct);

    // delete a product by id
    app.post("/api/products/delete/:id", urlencodedParser, api_product.deleteProduct);
};
