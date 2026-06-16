import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { auth } = usePage().props;
    const user = auth.user;
    const isStaff = user.access_level <= 11;
    const isAdmin = user.access_level === 11;
    const isCustomer = user.access_level === 20;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Boas-vindas */}
                    <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Bem-vindo, {user.name}!
                        </h1>
                        <p className="mt-1 text-gray-500">
                            {isAdmin && 'Você tem acesso administrativo total ao sistema.'}
                            {!isAdmin && isStaff && 'Você tem acesso de suporte técnico.'}
                            {isCustomer && 'Acesse seus serviços e solicitações de atendimento.'}
                        </p>
                    </div>

                    {/* Cards de Acesso Rápido */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {isCustomer && (
                            <>
                                <Link href={route('customer.solicitations.create')} className="transform rounded-lg bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                                    <div className="text-3xl">📝</div>
                                    <h3 className="mt-3 font-semibold text-gray-900">Nova Solicitação</h3>
                                    <p className="mt-1 text-sm text-gray-500">Abra um chamado de atendimento</p>
                                </Link>
                                <Link href={route('customer.solicitations')} className="transform rounded-lg bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                                    <div className="text-3xl">📋</div>
                                    <h3 className="mt-3 font-semibold text-gray-900">Minhas Solicitações</h3>
                                    <p className="mt-1 text-sm text-gray-500">Acompanhe seus chamados</p>
                                </Link>
                            </>
                        )}
                        {isStaff && (
                            <>
                                <Link href={route('staff.solicitations')} className="transform rounded-lg bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                                    <div className="text-3xl">🔧</div>
                                    <h3 className="mt-3 font-semibold text-gray-900">Solicitações</h3>
                                    <p className="mt-1 text-sm text-gray-500">Gerencie os atendimentos</p>
                                </Link>
                                <Link href={route('staff.customers.index')} className="transform rounded-lg bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                                    <div className="text-3xl">👥</div>
                                    <h3 className="mt-3 font-semibold text-gray-900">Clientes</h3>
                                    <p className="mt-1 text-sm text-gray-500">Cadastro e gerenciamento</p>
                                </Link>
                            </>
                        )}
                        <Link href={route('profile.edit')} className="transform rounded-lg bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                            <div className="text-3xl">👤</div>
                            <h3 className="mt-3 font-semibold text-gray-900">Meu Perfil</h3>
                            <p className="mt-1 text-sm text-gray-500">Editar dados da conta</p>
                        </Link>
                    </div>

                    {/* Info do plano (cliente) */}
                    {isCustomer && user.customer?.membership && (
                        <div className="mt-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-6 text-white shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">Meu Plano</h3>
                                    <p className="text-2xl font-bold">{user.customer.membership.plan?.name}</p>
                                    {user.customer.membership.active ? (
                                        <span className="mt-1 inline-block rounded-full bg-green-400 px-3 py-1 text-xs font-semibold text-green-900">
                                            Plano Ativo
                                        </span>
                                    ) : (
                                        <span className="mt-1 inline-block rounded-full bg-red-400 px-3 py-1 text-xs font-semibold text-red-900">
                                            Plano Inativo
                                        </span>
                                    )}
                                </div>
                                <div className="text-right text-sm">
                                    <p>Vencimento:</p>
                                    <p className="font-semibold">
                                        {new Date(user.customer.membership.due_date).toLocaleDateString('pt-BR')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}