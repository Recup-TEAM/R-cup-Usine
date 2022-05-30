module.exports = function() {
    //get db_query from db_config.js'
    db_query = require("../db_config")().db_query;
 
     return {
        /***************
         * Entreprise  *
         ***************/

        /* GET */
        // Get all entreprise
        getAllEntreprises: async () => {
            let sql = "SELECT * FROM entreprise";
            var rq = await db_query(sql);
            resultArray = Object.values(JSON.parse(JSON.stringify(rq)))
            return rq;
        },

        // Get entreprise by id (TODO : test)
        getEntrepriseById: async (id) => {
            let sql = "SELECT * FROM entreprise WHERE id='" + id + "'";
            var rq = await db_query(sql);
            return rq;
        },

        // Get all entreprise by user (TODO : test)
        getAllEntreprisesByUser: async (userId) => {
            let sql = "SELECT * FROM entreprise WHERE id_user='" + userId + "'";
            var rq = await db_query(sql);
            return rq;
        },

       

        /* POST */
        // Ajouter une entreprise
        addEntreprise: async (dataEntreprise) => {
            let sql = "INSERT INTO `entreprise` (`id_entreprise`, `name`, `id_dirigeant`, `adresse`)" +
                        "VALUES (NULL, '" + dataEntreprise.name + "', '" + dataEntreprise.id_dirigeant + "', '" + dataEntreprise.adresse + "');"
            var rq = await db_query(sql);
            return rq;
        },
        
    }
};