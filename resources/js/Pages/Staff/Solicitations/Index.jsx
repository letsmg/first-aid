import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';

export default function SolicitationsIndex({ solicitations, filters }) {
    const { flash } = usePage().props;
    const { data, setData, patch, processing, errors } = useForm({});

    const statusMap = { 0: 'Aguardando', 1: 'Em atendimento', 2: 'Finalizado' };
    const tipoMap = { 0: 'Telefone', 1: 'App', 2: 'Presencial' };
    const urgenciaMap = { 0: 'Não', 1: 'Sim' };

    const handleStatusUpdate = (solicitationId, status, diagnostico) => {
        patch(route('staff.solicitations.update', solicitationId), {
            status,
            diagnostico: diagnostico || '',
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Solicitações de Atendimento
                </h2>
            }
        >
            <Head title="Solicitações" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {flash?.success && (
                        <div className="mb-4 rounded-lg bg-green-100 p-4 text-sm text-green-700">
                            {flash.success}
                        </div>
                    )}

                    {/* Filtros */}
                    <div className="mb-6 flex gap-4">
                        <select
                            className="rounded-md border-gray-300 shadow-sm"
                            value={filters?.status ?? ''}
                            onChange={(e) => {
                                const url = new URL(window.location);
                                if (e.target.value) url.searchParams.set('status', e.target.value);
                                else url.searchParams.delete('status');
                                window.location = url.toString();
                            }}
                        >
                            <option value="">Todos os status</option>
                            <option value="0">Aguardando</option>
                            <option value="1">Em atendimento</option>
                            <option value="2">Finalizado</option>
                        </select>
                        <select
                            className="rounded-md border-gray-300 shadow-sm"
                            value={filters?.urgencia ?? ''}
                            onChange={(e) => {
                                const url = new URL(window.location);
                                if (e.target.value) url.searchParams.set('urgencia', e.target.value);
                                else url.searchParams.delete('urgencia');
                                window.location = url.toString();
                            }}
                        >
                            <option value="">Todas urgências</option>
                            <option value="1">Urgente</option>
                            <option value="0">Normal</option>
                        </select>
                    </div>

                    <div className="space-y-4">
                        {solicitations.data?.map((sol) => (
                            <div key={sol.id} className="rounded-lg bg-white p-6 shadow-sm">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="mb-2 flex items-center gap-2">
                                            <span className={`rounded-full px-2 py-1 text-xs font-semibold ${
                                                sol.status === 0 ? 'bg-yellow-100 text-yellow-800' :
                                                sol.status === 1 ? 'bg-blue-100 text-blue-800' :
                                                'bg-green-100 text-green-800'
                                            }`}>
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
                                        <p className="mb-2 font-medium text-gray-900">
                                            {sol.solicitacao}
                                        </p>
                                        <p className="mb-1 text-sm text-gray-500">
                                            Cliente: {sol.customer?.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Data: {new Date(sol.data_solicitacao).toLocaleString('pt-BR')}
                                        </p>
                                        {sol.diagnostico && (
                                            <div className="mt-2 rounded-md bg-gray-50 p-3">
                                                <p className="text-sm font-medium text-gray-700">Diagnóstico:</p>
                                                <p className="text-sm text-gray-600">{sol.diagnostico}</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="ml-4 flex flex-col gap-2">
                                        {sol.status < 2 && (
                                            <>
                                                <button
                                                    onClick={() => handleStatusUpdate(sol.id, 1, '')}
                                                    className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                                                >
                                                    Iniciar Atendimento
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        const diag = prompt('Diagnóstico do atendimento:');
                                                        if (diag) handleStatusUpdate(sol.id, 2, diag);
                                                    }}
                                                    className="rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700"
                                                >
                                                    Finalizar
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                                {sol.attendant && (
                                    <p className="mt-2 text-xs text-gray-400">
                                        Atendente: {sol.attendant.name}
                                    </p>
                                )}
                            </div>
                        ))}
                        {(!solicitations.data || solicitations.data.length === 0) && (
                            <p className="py-8 text-center text-gray-500">Nenhuma solicitação encontrada.</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}