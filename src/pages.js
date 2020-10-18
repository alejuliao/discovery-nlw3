// const orphanages = require('./database/fakedata.js');
const db = require('./database/db');
const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {
    index(request, response) {
        return response.render('index')
    },

    async orphanage(request, response) {
        const id = request.query.id 

        try{
            const db = await Database; 
            const results = await db.all(`SELECT * FROM orphanages WHERE id ="${id}"`)
            const orphanage = results[0]
            
            orphanage.images = orphanage.images.split(',')
            orphanage.firstImage = orphanage.images[0]

            if(orphanage.open_on_weekends == "0"){
                orphanage.open_on_weekends = false
            } else {
                orphanage.open_on_weekends = true
            }

            return response.render('orphanage',  { orphanage})
        }catch(error){
            console.log(error);
            return response.send('Error databaassee')
        }
    },
    async orphanages(request, response) {

        //colocar o orphanage pelo banco de dados
        try{
        const db = await Database; 
        const orphanages = await db.all("SELECT * FROM orphanages")
        return response.render('orphanages', { orphanages })
    } catch(error){
        console.log(error)
        return response.send('Erro no banco De DADOSSSS')
    }
    },
    createOrphanage(request, response) {
        return response.render('create-orphanage')
    },

    
    async saveOrphanage(request, response) {
        const fields = request.body

        //validar se todos os campos estao preenchidos
        if(Object.values(fields).includes('')){
            return response.send('Todods os campos deve ser preenchidos')
        }
        try {
            //salvar um orfanato
            const db = await Database

            await saveOrphanage(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsaap: fields.whatsaap,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends
                })

                //redirecionamento
                return response.redirect('/orphanages')
        } catch (error) {
            console.log(error)
            return response.send('Errood NO BAnCOOd')
        }
    }
}