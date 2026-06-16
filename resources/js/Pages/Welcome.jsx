import { Head, Link } from '@inertiajs/react';

export default function Welcome({ canLogin, canRegister }) {
    return (
        <>
            <Head title="FirstAid - Assistência Técnica" />
            <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
                {/* Header com menu responsivo */}
                <header className="relative z-10">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white">FirstAid</span>
                            <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs text-white">Assistência Técnica</span>
                        </Link>
                        {/* Menu Desktop */}
                        <nav className="hidden items-center gap-6 md:flex">
                            <Link href="/servicos" className="text-sm font-medium text-white/80 transition hover:text-white">
                                Serviços
                            </Link>
                            <Link href="/termos" className="text-sm font-medium text-white/80 transition hover:text-white">
                                Termos
                            </Link>
                            <Link href="/privacidade" className="text-sm font-medium text-white/80 transition hover:text-white">
                                Privacidade
                            </Link>
                            {canLogin && (
                                <Link
                                    href="/login"
                                    className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
                                >
                                    Entrar
                                </Link>
                            )}
                            {canRegister && (
                                <Link
                                    href="/register"
                                    className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                                >
                                    Cadastre-se
                                </Link>
                            )}
                        </nav>
                        {/* Menu Mobile */}
                        <div className="md:hidden">
                            <details className="group relative">
                                <summary className="flex cursor-pointer items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-white">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </summary>
                                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-xl">
                                    <Link href="/servicos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                        Serviços
                                    </Link>
                                    <Link href="/termos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                        Termos
                                    </Link>
                                    <Link href="/privacidade" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                        Privacidade
                                    </Link>
                                    <hr className="my-1" />
                                    <Link href="/login" className="block px-4 py-2 text-sm font-medium text-blue-700 hover:bg-gray-50">
                                        Entrar
                                    </Link>
                                    <Link href="/register" className="block px-4 py-2 text-sm font-medium text-blue-700 hover:bg-gray-50">
                                        Cadastre-se
                                    </Link>
                                </div>
                            </details>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Assistência Técnica
                            <span className="block text-blue-200">Rápida e Confiável</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
                            Soluções completas em suporte técnico para sua empresa ou residência. 
                            Atendimento remoto, presencial e suporte por telefone.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-4">
                            <Link
                                href="/servicos"
                                className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-700 shadow-lg transition hover:bg-blue-50"
                            >
                                Nossos Serviços
                            </Link>
                            <Link
                                href="/register"
                                className="rounded-lg border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                Criar Conta
                            </Link>
                        </div>
                    </div>

                    {/* Serviços em destaque */}
                    <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icone: '🖥️', titulo: 'Atendimento Remoto', desc: 'Suporte técnico à distância' },
                            { icone: '📞', titulo: 'Auxílio por Telefone', desc: 'Orientação técnica rápida' },
                            { icone: '🔧', titulo: 'Visita Técnica', desc: 'Atendimento presencial' },
                            { icone: '⚙️', titulo: 'Instalação de Hardware', desc: 'Montagem e configuração' },
                        ].map((servico, i) => (
                            <div key={i} className="rounded-xl bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/15">
                                <div className="text-3xl">{servico.icone}</div>
                                <h3 className="mt-3 font-semibold text-white">{servico.titulo}</h3>
                                <p className="mt-1 text-sm text-blue-100">{servico.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Planos */}
                    <div className="mt-24">
                        <h2 className="text-center text-3xl font-bold text-white">Nossos Planos</h2>
                        <div className="mt-10 grid gap-8 lg:grid-cols-3">
                            {[
                                { nome: 'Básico', preco: 'R$ 49', recursos: ['2 urgentes/mês', '5 solicitações app/mês', 'Suporte por telefone'] },
                                { nome: 'Pro', preco: 'R$ 99', destaque: true, recursos: ['5 urgentes/mês', '15 solicitações app/mês', '5 visitas presenciais'] },
                                { nome: 'Master', preco: 'R$ 199', recursos: ['Urgentes ilimitadas', 'Solicitações ilimitadas', '15 visitas presenciais'] },
                            ].map((plano, i) => (
                                <div key={i} className={`rounded-xl p-8 ${plano.destaque ? 'scale-105 bg-white text-blue-900 shadow-2xl' : 'bg-white/10 text-white backdrop-blur-sm'}`}>
                                    <h3 className="text-xl font-bold">{plano.nome}</h3>
                                    <p className={`mt-2 text-3xl font-bold ${plano.destaque ? 'text-blue-700' : 'text-white'}`}>{plano.preco}<span className="text-sm font-normal">/mês</span></p>
                                    <ul className="mt-6 space-y-3">
                                        {plano.recursos.map((r, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm">
                                                <svg className={`h-4 w-4 ${plano.destaque ? 'text-blue-600' : 'text-blue-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/register"
                                        className={`mt-6 block rounded-lg py-2 text-center font-semibold ${plano.destaque ? 'bg-blue-700 text-white hover:bg-blue-800' : 'border border-white/30 text-white hover:bg-white/10'}`}
                                    >
                                        Contratar
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contato */}
                    <div className="mt-24 rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-white">Precisa de ajuda?</h2>
                        <p className="mt-2 text-blue-100">Entre em contato conosco</p>
                        <a href="tel:+5511999999999" className="mt-4 inline-block text-lg font-semibold text-white">
                            📞 (11) 99999-9999
                        </a>
                        <br />
                        <a href="mailto:contato@firstaid.com" className="mt-2 inline-block text-blue-200">
                            ✉️ contato@firstaid.com
                        </a>
                    </div>
                </main>

                {/* Footer */}
                <footer className="relative z-10 border-t border-white/10 py-8">
                    <div className="mx-auto max-w-7xl px-4 text-center text-sm text-blue-200 sm:px-6 lg:px-8">
                        <p>&copy; {new Date().getFullYear()} FirstAid. Todos os direitos reservados.</p>
                        <div className="mt-2 flex justify-center gap-4">
                            <Link href="/termos" className="hover:text-white">Termos de Uso</Link>
                            <Link href="/privacidade" className="hover:text-white">Política de Privacidade</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}