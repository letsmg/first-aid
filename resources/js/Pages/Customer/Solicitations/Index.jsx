import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function MySolicitations({ solicitations }) {
    const { flash } = usePage().props;

    const statusMap = { 0: 'Aguardando', 1: 'Em atendimento', 2: 'Finalizado' };
    const tipoMap = { 0: 'Telefone', 1: 'App', 2: 'Presencial' };
    const avaliacaoMap = { 0: 'Ruim', 1: 'Boa', 2: 'Ótima', 3: 'Excelente' };

    const statusBadge = (status) => {
        const colors = {
            0: 'bg-yellow-100 text-yellow-800',
            1: 'bg-blue-100 text-blue-800',
            2: 'bg-green-100 text-green-800',
        };
        return `rounded-full px-2 py-1 text-xs font-semibold ${colors[status] || ''}`;
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Minhas Solicitações
                    </h2>
                    <Link
                        href={route('customer.solicitations.create')}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                        Nova Solicitação
                    </Link>
                </div>
            }
        >
            <Head title="Minhas Solicitações" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    {flash?.success && (
                        <div className="mb-4 rounded-lg bg-green-100 p-4 text-sm text-green-700">
                            {flash.success}
                        </div>
                    )}

                    <div className="space-y-4">
                        {solicitations.length === 0 ? (
                            <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                                <p className="text-gray-500">Você ainda não fez nenhuma solicitação.</p>
                                <Link
                                    href={route('customer.solicitations.create')}
                                    className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                                >
                                    Criar primeira solicitação
                                </Link>
                            </div>
                        ) : (
                            solicitations.map((sol) => (
                                <div key={sol.id} className="rounded-lg bg-white p-6 shadow-sm">
                                    <div className="mb-2 flex items-center gap-2">
                                        <span className={statusBadge(sol.status)}>
                                            {statusMap[sol.status]}
                                        </span>
                                        {sol.urgencia && (
                                            <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-800">
                                                Urgente
                                            </span>
                                        )}
                                        <span className="text-xs text-gray-500">
                                            {tipoMap[sol.tipo]}
                                        </span>
                                    </div>

                                    <p className="mb-2 font-medium text-gray-900">{sol.solicitacao}</p>
                                    <p className="mb-2 text-sm text-gray-500">
                                        Data: {new Date(sol.data_solicitacao).toLocaleString('pt-BR')}
                                    </p>

                                    {sol.diagnostico && (
                                        <div className="mb-2 rounded-md bg-gray-50 p-3">
                                            <p className="text-sm font-medium text-gray-700">Diagnóstico:</p>
                                            <p className="text-sm text-gray-600">{sol.diagnostico}</p>
                                        </div>
                                    )}

                                    {sol.attendant && (
                                        <p className="text-xs text-gray-400">
                                            Atendido por: {sol.attendant.name}
                                        </p>
                                    )}

                                    {sol.status === 2 && sol.avaliacao === null && (
                                        <div className="mt-3 border-t pt-3">
                                            <p className="mb-2 text-sm font-medium text-gray-700">Avalie este atendimento:</p>
                                            <div className="flex gap-2">
                                                {[0, 1, 2, 3].map((val) => (
                                                    <button
                                                        key={val}
                                                        onClick={() => {
                                                            const form = document.createElement('form');
                                                            form.method = 'POST';
                                                            form.action = route('customer.solicitations.evaluate', sol.id);
                                                            form.innerHTML = `
                                                                @csrf
                                                                @method('PATCH')
                                                                <input name="avaliacao" value="${val}" />
                                                            `;
                                                            document.body.appendChild(form);
                                                            form.submit();
                                                        }}
                                                        className="rounded bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200"
                                                    >
                                                        {avaliacaoMap[val]}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {sol.avaliacao !== null && (
                                        <div className="mt-2">
                                            <span className="text-sm text-gray-500">
                                                Avaliação: {avaliacaoMap[sol.avaliacao]}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}