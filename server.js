import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()


const app = express()
app.use(express.json())



app.post('/usuarios', async (req, res) =>{

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.send('ok aqui deu certo')
})

app.put('/usuarios/:id',async (req, res) =>{

        await prisma.user.update({
            where: {
                id:req.params.id
        },
        data:{
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
    })

    res.status(200).json({message: 'Usuario Modificado com Sucesso'})
})

app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)

})

app.delete('/usuarios/:id',  async (req, res) =>{
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: 'Usuario Deletado com Sucesso'})
})

app.listen(3000)


/*app.get('/usuarios') // requisição get trás todos os usuarios
app.post('/usuarios') //requisição post cria um novo usuario
app.delete('/usuarios') //deleta um usuario
app.put('/usuarios') //Edita varios usuarios
app.patch('/usuarios') //Edita um usuario
*/

/*
    1) - Tipo de Rota / Método HTTP
    2) - Endereço exemplo www.lojadoseuzé/produtos/alimentos
*/

/*
login user_admin
senha 2905Cg@#..
*/