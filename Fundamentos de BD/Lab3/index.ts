import { PrismaClient, Prisma } from '@prisma/client'
//import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

// Create
async function createClient() {
  const createMany = await prisma.cliente.createMany({
    data: [
      { nome: "caio", cpf: "045.654.089-43", celular: "(92)9454-8528", email: "caio@icomp", nascimento: new Date("1945-01-01")},
      { nome: "maria", cpf: "055.754.083-42", celular: "(92)8538-9564", email: "maria@icomp", nascimento: new Date("1944-01-01")},
      { nome: "joao", cpf: "065.854.088-41", celular: "(92)9454-8528", email: "joao@icomp", nascimento: new Date("1943-01-01")},
    ],
    skipDuplicates: true,
  });
  console.log(createMany)
}

// Read
async function readClient() {
  const user = await prisma.cliente.findMany({
    where: {
      email:
        { contains: 'icomp' }
    }
  })
  console.log(user)
}

// Update
async function updateClient() {
  const updateUser = await prisma.cliente.update({
    where: {
      email: 'maria@icomp',
    },
    data: {
      nome: "maria silva",
    },
  })
  console.log(updateUser)
}

// Delete 
async function deletesClient() {
  const deleteUsers = await prisma.cliente.deleteMany({
    where: {
      email: {
        contains: 'icomp',
      },
    },
  })
  console.log(deleteUsers)
}

// Main
async function main() {
  await createClient()
  await readClient()
  await updateClient()
  await deletesClient()
}

main()