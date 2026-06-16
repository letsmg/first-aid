import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import FormFiller, { registerFormFiller } from '@/Components/FormFiller';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        solicitacao: '',
        urgencia: false,
        tipo: 1,
    });

    useEffect(() => {
        registerFormFiller({
            fields: ['solicitacao'],
            fillData: {
                solicitacao: 'Meu computador está com problemas ao iniciar o Windows. Aparece uma tela azul com erro.',
            },
        });
        return () => { delete window.fillForm; delete window.clearForm; };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('customer.solicitations.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Nova Solicitação
                    </h2>
                    <Link
                        href={route('customer.solicitations')}
                        className="rounded-lg bg-gray-500 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600"
                    >
                        Voltar
                    </Link>
                </div>
            }
        >
            <Head title="Nova Solicitação" />

            <div className="py-12">
                <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
                    <div className="bg-white p-6 shadow-sm sm:rounded-lg">
                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <InputLabel htmlFor="solicitacao" value="Descreva o problema" />
                                <textarea
                                    id="solicitacao"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    rows={5}
                                    value={data.solicitacao}
                                    onChange={(e) => setData('solicitacao', e.target.value)}
                                    required
                                />
                                <InputError message={errors.solicitacao} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel value="Tipo de atendimento" />
                                <div className="mt-2 grid grid-cols-3 gap-4">
                                    {[
                                        { value: 0, label: '📞 Telefone', desc: 'Suporte por telefone' },
                                        { value: 1, label: '📱 App', desc: 'Atendimento remoto' },
                                        { value: 2, label: '🔧 Presencial', desc: 'Visita técnica' },
                                    ].map((tipo) => (
                                        <button
                                            key={tipo.value}
                                            type="button"
                                            onClick={() => setData('tipo', tipo.value)}
                                            className={`rounded-lg border-2 p-4 text-center transition-all ${
                                                data.tipo === tipo.value
                                                    ? 'border-blue-500 bg-blue-50'
                                                    : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        >
                                            <div className="text-lg">{tipo.label}</div>
                                            <div className="mt-1 text-xs text-gray-500">{tipo.desc}</div>
                                        </button>
                                    ))}
                                </div>
                                <InputError message={errors.tipo} className="mt-2" />
                            </div>

                            <div>
                                <label className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={data.urgencia}
                                        onChange={(e) => setData('urgencia', e.target.checked)}
                                        className="h-5 w-5 rounded border-gray-300 text-red-600 shadow-sm focus:ring-red-500"
                                    />
                                    <div>
                                        <span className="font-medium text-gray-700">É urgente?</span>
                                        <p className="text-sm text-gray-500">
                                            Solicitações urgentes têm prioridade no atendimento.
                                        </p>
                                    </div>
                                </label>
                                <InputError message={errors.urgencia} className="mt-2" />
                            </div>

                            {errors.plano && (
                                <div className="rounded-lg bg-red-100 p-4 text-sm text-red-700">
                                    {errors.plano}
                                </div>
                            )}

                            <div className="flex justify-end">
                                <PrimaryButton disabled={processing}>
                                    Enviar Solicitação
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <FormFiller />
        </AuthenticatedLayout>
    );
}