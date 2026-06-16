/**
 * Lista de usuários pré-cadastrados pelo sistema (via seeders)
 * para facilitar os testes nas telas de login.
 */
const seedUsers = [
    // Administradores (access_level: 11)
    {
        id: 'admin-master',
        name: 'Admin Master',
        email: 'admin@firstaid.com',
        password: 'password',
        role: 'Administrador',
        badgeClass: 'bg-red-100 text-red-800',
    },
    {
        id: 'admin-suporte',
        name: 'Admin Suporte',
        email: 'admin2@firstaid.com',
        password: 'password',
        role: 'Administrador',
        badgeClass: 'bg-red-100 text-red-800',
    },

    // Staff Padrão (access_level: 10)
    {
        id: 'carlos-tecnico',
        name: 'Carlos Técnico',
        email: 'carlos@firstaid.com',
        password: 'password',
        role: 'Suporte Técnico',
        badgeClass: 'bg-blue-100 text-blue-800',
    },
    {
        id: 'ana-atendente',
        name: 'Ana Atendente',
        email: 'ana@firstaid.com',
        password: 'password',
        role: 'Suporte Técnico',
        badgeClass: 'bg-blue-100 text-blue-800',
    },
    {
        id: 'pedro-suporte',
        name: 'Pedro Suporte',
        email: 'pedro@firstaid.com',
        password: 'password',
        role: 'Suporte Técnico',
        badgeClass: 'bg-blue-100 text-blue-800',
    },

    // Clientes (access_level: 20)
    {
        id: 'maria-silva',
        name: 'Maria Silva',
        email: 'maria@email.com',
        password: 'password',
        role: 'Cliente',
        badgeClass: 'bg-green-100 text-green-800',
    },
    {
        id: 'joao-santos',
        name: 'João Santos',
        email: 'joao@email.com',
        password: 'password',
        role: 'Cliente',
        badgeClass: 'bg-green-100 text-green-800',
    },
    {
        id: 'empresa-tech',
        name: 'Empresa Tech Ltda',
        email: 'contato@techltda.com',
        password: 'password',
        role: 'Cliente',
        badgeClass: 'bg-green-100 text-green-800',
    },
];

export default seedUsers;