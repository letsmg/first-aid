import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import FormFiller, { registerFormFiller } from '@/Components/FormFiller';

export default function Edit({ customer }) {
    const { data, setData, patch, processing, errors } = useForm({
        name: customer.name,
        tax_id: customer.tax_id,
        phone1: customer.phone1,
        phone2: customer.phone2 || '',
        address: customer.address,
        neighborhood: customer.neighborhood,
        city: customer.city,
        zip_code: customer.zip_code,
    });

    useEffect(() => {
        registerFormFiller({
            fields: ['name', 'tax_id', 'phone1', 'phone2', 'address', 'neighborhood', 'city', 'zip_code'],
            fillData: {
                name: 'Cliente Atualizado Teste',
                tax_id: customer.tax_id,
                phone1: customer.phone1,
                phone2: customer.phone2 || '',
                address: customer.address,
                neighborhood: customer.neighborhood,
                city: customer.city,
                zip_code: customer.zip_code,
            },
        });
        return () => { delete window.fillForm; delete window.clearForm; };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        patch(route('staff.customers.update', customer.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Editar Cliente
                    </h2>
                    <Link
                        href={route('staff.customers.index')}
                        className="rounded-lg bg-gray-500 px-4 py-2 text-sm font-medium text-white hover:bg-gray-600"
                    >
                        Voltar
                    </Link>
                </div>
            }
        >
            <Head title="Editar Cliente" />

            <div className="py-12">
                <div className="mx-auto max-w-3xl sm:px-6 lg:px-8">
                    <div className="bg-white p-6 shadow-sm sm:rounded-lg">
                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div>
                                    <InputLabel htmlFor="name" value="Nome completo" />
                                    <TextInput id="name" type="text" className="mt-1 block w-full" value={data.name} onChange={(e) => setData('name', e.target.value)} required />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="tax_id" value="CPF/CNPJ" />
                                    <TextInput id="tax_id" type="text" className="mt-1 block w-full" value={data.tax_id} onChange={(e) => setData('tax_id', e.target.value)} required />
                                    <InputError message={errors.tax_id} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="phone1" value="Telefone principal" />
                                    <TextInput id="phone1" type="text" className="mt-1 block w-full" value={data.phone1} onChange={(e) => setData('phone1', e.target.value)} required />
                                    <InputError message={errors.phone1} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="phone2" value="Telefone secundário" />
                                    <TextInput id="phone2" type="text" className="mt-1 block w-full" value={data.phone2} onChange={(e) => setData('phone2', e.target.value)} />
                                </div>

                                <div>
                                    <InputLabel htmlFor="zip_code" value="CEP" />
                                    <TextInput id="zip_code" type="text" className="mt-1 block w-full" value={data.zip_code} onChange={(e) => setData('zip_code', e.target.value)} required />
                                    <InputError message={errors.zip_code} className="mt-2" />
                                </div>

                                <div className="md:col-span-2">
                                    <InputLabel htmlFor="address" value="Endereço" />
                                    <TextInput id="address" type="text" className="mt-1 block w-full" value={data.address} onChange={(e) => setData('address', e.target.value)} required />
                                    <InputError message={errors.address} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="neighborhood" value="Bairro" />
                                    <TextInput id="neighborhood" type="text" className="mt-1 block w-full" value={data.neighborhood} onChange={(e) => setData('neighborhood', e.target.value)} required />
                                    <InputError message={errors.neighborhood} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="city" value="Cidade" />
                                    <TextInput id="city" type="text" className="mt-1 block w-full" value={data.city} onChange={(e) => setData('city', e.target.value)} required />
                                    <InputError message={errors.city} className="mt-2" />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <PrimaryButton disabled={processing}>
                                    Salvar Alterações
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