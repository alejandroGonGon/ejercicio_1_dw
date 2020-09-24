const names =  [];
const species =  [];


const records = [
    {name:"pepe", specie:"human"},
    {name:"juan", specie:"koala"},
    {name:"pedro", specie:"tigre"}
]
//Una forma
for (let index = 0; index < records.length; index++) {
    names.push(records[i].name);
}
//Segunda forma .map
const names = records.map(record => {return records.name});
    //Version final
        const names = records.map(record => {return records.name+" is a "+records.specie});
        /* Map devuelve una lista*/
/*--------------------------------------------------------------------------------------------*/

// reduce

const orders = [
    {amount:750},
    {amount:530}
]

const orderTotal = orders.reduce((sum, order) => {
    return sum+order.amount
})
    /*se usa cuando no se quiere dvolver una lista sino operar sobre esta.*/