const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const tenant = await prisma.tenant.create({
    data: { name: 'Mairie de Paris' }
  });

  await prisma.device.create({
    data: { name: 'Borne Hall Accueil', identifier: 'KSK-0001', location: 'Entrée Principale', status: 'online', tenantId: tenant.id }
  });

  await prisma.device.create({
    data: { name: 'Borne Bibliothèque', identifier: 'KSK-0002', location: '1er Étage', status: 'offline', tenantId: tenant.id }
  });

  console.log('Seed done!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
