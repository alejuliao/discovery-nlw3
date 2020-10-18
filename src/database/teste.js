const Database = require('./db');

Database.then(async db => {
    // inserir dados na tabela para
    // await db.run(`
    //     INSERT INTO orphanages (
    //         lat, 
    //         lng, 
    //         name, 
    //         about,
    //         whatsapp, 
    //         images, 
    //         instructions, 
    //         opening_hours, 
    //         open_on_weekends
    //     ) VALUES (
    //         "-23.6522688",
    //         "-46.7062056",
    //         "Lar das meninas",
    //         "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //         "91839283918293",
    //         "https://source.unsplash.com/random?id=2",
    //         "Venha como se sintir a vontade e traga muito amor e paciência para dar.",
    //         "Horário de visitas Das 18h até 8h",
    //         "0"
    //     )
    // `);
    // //consultar dados da tabela para
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    // console.log(selectedOrphanages)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "7"')
    console.log(orphanage)

})