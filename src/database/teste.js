const Database = require('./db');

const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
   // inserir dados na tabela para
    await saveOrphanage(db, {
        id: 1, 
        lat: "-23.6522688",
        lng: "-46.7062056",
        name: "Lar do AMOR",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "21312412415",
        images: [
            "https://source.unsplash.com/random?id=2",
            "https://source.unsplash.com/random?id=2"

        ].toString(),
        instructions: "Venha como se sintir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de visitas Das 18h até 8h",
        open_on_weekends:"1"
        })
    //consultar dados da tabela para
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "7"')
    // console.log(orphanage)

    // //deletar dado da tabela 

    // console.log(await db.run('DELETE FROM orphanages WHERE id ="8"'))

}) 