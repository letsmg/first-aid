import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import FormFiller, { registerFormFiller } from '@/Components/FormFiller';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        accept_terms: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [localErrors, setLocalErrors] = useState({});

    useEffect(() => {
        registerFormFiller({
            fields: ['name', 'email', 'password', 'password_confirmation'],
            fillData: {
                name: 'Usuário Teste',
                email: 'teste@email.com',
                password: 'password',
                password_confirmation: 'password',
            },
        });
        return () => {
            delete window.fillForm;
            delete window.clearForm;
        };
    }, []);

    const togglePassword = () => {
        const newState = !showPassword;
        setShowPassword(newState);
        setShowConfirmPassword(newState);
    };

    const toggleConfirmPassword = () => {
        const newState = !showConfirmPassword;
        setShowConfirmPassword(newState);
        setShowPassword(newState);
    };

    const validateFrontend = () => {
        const msgs = {};
        if (data.password && data.password.length < 8) {
            msgs.password = 'A senha deve ter no mínimo 8 caracteres.';
        }
        if (data.password !== data.password_confirmation) {
            msgs.password_confirmation = 'As senhas não conferem.';
        }
        if (!data.accept_terms) {
            msgs.accept_terms = 'Você precisa aceitar os Termos de Uso e a Política de Privacidade.';
        }
        if (!data.name) {
            msgs.name = 'O nome é obrigatório.';
        }
        if (!data.email) {
            msgs.email = 'O e-mail é obrigatório.';
        }
        return msgs;
    };

    const submit = (e) => {
        e.preventDefault();
        const frontendErrors = validateFrontend();
        if (Object.keys(frontendErrors).length > 0) {
            setLocalErrors(frontendErrors);
            return;
        }
        setLocalErrors({});
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Cadastro" />

            <div className="mb-8 text-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">FirstAid</Link>
                <h1 className="mt-4 text-xl font-semibold text-gray-900">Criar Conta</h1>
                <p className="mt-1 text-sm text-gray-500">Preencha os dados para se cadastrar</p>
            </div>

            <form onSubmit={submit} className="space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Nome completo" />
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    {(localErrors.name || errors.name) && (
                        <p className="mt-2 text-sm text-red-600">{localErrors.name || errors.name}</p>
                    )}
                </div>

                <div>
                    <InputLabel htmlFor="email" value="E-mail" />
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    {(localErrors.email || errors.email) && (
                        <p className="mt-2 text-sm text-red-600">{localErrors.email || errors.email}</p>
                    )}
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Senha" />
                    <div className="relative mt-1">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={data.password}
                            className="block w-full rounded-lg border-gray-300 pr-10 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                            minLength={8}
                        />
                        <button
                            type="button"
                            onClick={togglePassword}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            tabIndex={-1}
                        >
                            {showPassword ? (
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            ) : (
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    {(localErrors.password || errors.password) && (
                        <p className="mt-2 text-sm text-red-600">{localErrors.password || errors.password}</p>
                    )}
                </div>

                <div>
                    <InputLabel htmlFor="password_confirmation" value="Confirmar senha" />
                    <div className="relative mt-1">
                        <input
                            id="password_confirmation"
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="block w-full rounded-lg border-gray-300 pr-10 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={toggleConfirmPassword}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            tabIndex={-1}
                        >
                            {showConfirmPassword ? (
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            ) : (
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    {(localErrors.password_confirmation || errors.password_confirmation) && (
                        <p className="mt-2 text-sm text-red-600">{localErrors.password_confirmation || errors.password_confirmation}</p>
                    )}
                </div>

                {/* Aceite de Termos */}
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                    <label className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            name="accept_terms"
                            checked={data.accept_terms}
                            onChange={(e) => setData('accept_terms', e.target.checked)}
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500"
                        />
                        <div className="text-sm text-gray-700">
                            Li e aceito os{' '}
                            <Link href="/termos" className="font-medium text-blue-600 hover:text-blue-800" target="_blank">
                                Termos de Uso
                            </Link>{' '}
                            e a{' '}
                            <Link href="/privacidade" className="font-medium text-blue-600 hover:text-blue-800" target="_blank">
                                Política de Privacidade
                            </Link>
                        </div>
                    </label>
                    {(localErrors.accept_terms || errors.accept_terms) && (
                        <p className="mt-2 text-sm text-red-600">{localErrors.accept_terms || errors.accept_terms}</p>
                    )}
                </div>

                <PrimaryButton className="w-full justify-center" disabled={processing}>
                    Criar Conta
                </PrimaryButton>

                <p className="text-center text-sm text-gray-500">
                    Já tem conta?{' '}
                    <Link href={route('login')} className="font-medium text-blue-600 hover:text-blue-800">
                        Entrar
                    </Link>
                </p>
            </form>

            <FormFiller />
        </GuestLayout>
    );
}