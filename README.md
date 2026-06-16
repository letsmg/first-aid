# FirstAid - Sistema de Gerenciamento de Atendimentos Remotos

Sistema web para gerenciamento de atendimentos técnicos remotos, com suporte a planos de assinatura, solicitações de serviço e avaliações.

## Tecnologias

- **Backend:** Laravel 13.8 (PHP 8.3+)
- **Frontend:** React + Inertia.js + Tailwind CSS
- **Banco de Dados:** PostgreSQL
- **Autenticação:** Laravel Breeze (com hash Argon2id)
- **Criptografia:** Dados sensíveis (CPF/CNPJ) criptografados

## Funcionalidades

### Visitante
- Página inicial
- Visualizar serviços disponíveis
- Termos de Uso e Política de Privacidade
- Login e cadastro (com aceite obrigatório de termos)

### Cliente (access_level: 20)
- Criar solicitações de atendimento
- Acompanhar status das solicitações
- Avaliar atendimentos finalizados
- Visualizar limites do plano contratado

### Staff Padrão (access_level: 10)
- Gerenciar clientes (CRUD)
- Visualizar e gerenciar solicitações
- Atualizar status e diagnóstico dos atendimentos
- Resetar senha de outros usuários padrão

### Admin (access_level: 11)
- Acesso total ao sistema

## Planos

| Recurso | Básico | Pro | Master |
|---------|--------|-----|--------|
| Urgentes/mês | 2 | 5 | Ilimitado |
| App/mês | 5 | 15 | Ilimitado |
| Presenciais/mês | 0 | 5 | 15 |

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/letsmg/first-aid.git
cd first-aid

# Instalar dependências PHP
composer install

# Configurar ambiente
cp .env.example .env
php artisan key:generate

# Configurar banco PostgreSQL no .env:
# DB_CONNECTION=pgsql
# DB_HOST=127.0.0.1
# DB_PORT=5432
# DB_DATABASE=first_aid_db
# DB_USERNAME=first_aid_user
# DB_PASSWORD=sua_senha

# Criar banco de dados
sudo -u postgres psql -c "CREATE USER first_aid_user WITH PASSWORD 'sua_senha';"
sudo -u postgres psql -c "CREATE DATABASE first_aid_db;"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE first_aid_db TO first_aid_user;"
sudo -u postgres psql -d first_aid_db -c "GRANT ALL ON SCHEMA public TO first_aid_user;"

# Executar migrations e seeders
php artisan migrate:fresh --seed

# Instalar dependências Node.js e build
npm install
npm run build

# Iniciar servidor de desenvolvimento
composer run dev
```

## Credenciais Padrão (Seeds)

### Administradores
- admin@firstaid.com / password
- admin2@firstaid.com / password

### Staff
- carlos@firstaid.com / password
- ana@firstaid.com / password
- pedro@firstaid.com / password

### Clientes
- maria@email.com / password
- joao@email.com / password
- contato@techltda.com / password

## Testes

```bash
# Executar todos os testes
php artisan test

# Executar apenas testes de feature
php artisan test --testsuite=Feature
```

## Estrutura do Projeto

```
app/
├── Http/Controllers/
│   ├── Auth/          # Controllers de autenticação (Breeze)
│   ├── CustomerController.php
│   └── SolicitationController.php
├── Models/
│   ├── User.php
│   ├── Customer.php
│   ├── Plan.php
│   ├── Membership.php
│   └── Solicitation.php
database/
├── migrations/        # 7 migrations (cache, jobs, users, customers, plans, memberships, solicitations)
├── factories/         # Factories para testes
└── seeders/           # Seeders com 10+ registros cada
resources/js/Pages/
├── Auth/             # Páginas de autenticação
├── Staff/            # Área do staff
│   ├── Customers/
│   └── Solicitations/
├── Customer/         # Área do cliente
│   └── Solicitations/
├── Termos.jsx        # Termos de uso
├── Privacidade.jsx   # Política de privacidade
└── Servicos.jsx      # Página de serviços
routes/
├── web.php           # Rotas principais
└── auth.php          # Rotas de autenticação