import { Head, Link } from '@inertiajs/react';

export default function Servicos() {
    const servicos = [
        {
            titulo: 'Atendimento Remoto',
            descricao: 'Suporte técnico realizado à distância com acesso remoto ao seu computador, permitindo diagnóstico e resolução rápida de problemas de software.',
            icone: '🖥️',
            disponivel: true,
        },
        {
            titulo: 'Auxílio por Telefone',
            descricao: 'Orientação técnica por telefone para solução de problemas simples, configurações e instruções passo a passo.',
            icone: '📞',
            disponivel: true,
        },
        {
            titulo: 'Visita Técnica',
            descricao: 'Atendimento presencial para reparos em hardware, instalação de equipamentos e problemas que exigem intervenção física.',
            icone: '🔧',
            disponivel: true,
        },
        {
            titulo: 'Instalação de Hardware',
            descricao: 'Instalação e configuração de componentes físicos como memórias, HDs/SSDs, placas de vídeo, fontes e periféricos.',
            icone: '⚙️',
            disponivel: true,
        },
    ];

    return (
        <>
            <Head title="Serviços" />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            FirstAid
                        </Link>
                        <nav className="flex gap-4">
                            <Link href="/" className="text-gray-600 hover:text-blue-600">Início</Link>
                            <Link href="/servicos" className="font-semibold text-blue-600">Serviços</Link>
                            <Link href="/termos" className="text-gray-600 hover:text-blue-600">Termos</Link>
                            <Link href="/privacidade" className="text-gray-600 hover:text-blue-600">Privacidade</Link>
                            <Link href="/login" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Entrar</Link>
                        </nav>
                    </div>
                </header>

                <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold text-gray-900">Nossos Serviços</h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Soluções completas em assistência técnica para sua empresa ou residência
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {servicos.map((servico, index) => (
                            <div
                                key={index}
                                className="transform rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mb-4 text-5xl">{servico.icone}</div>
                                <h2 className="mb-3 text-2xl font-bold text-gray-900">{servico.titulo}</h2>
                                <p className="mb-4 text-gray-600">{servico.descricao}</p>
                                {servico.disponivel ? (
                                    <span className="inline-flex items-center gap-2 text-sm font-medium text-green-600">
                                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                        Disponível
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400">
                                        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                                        Em breve
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white">
                        <h2 className="text-2xl font-bold">Pronto para contratar?</h2>
                        <p className="mt-2">Cadastre-se e escolha o plano ideal para você</p>
                        <Link
                            href="/register"
                            className="mt-4 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100"
                        >
                            Cadastre-se Agora
                        </Link>
                    </div>
                </main>

                <footer className="bg-white py-8">
                    <div className="mx-auto max-w-7xl px-4 text-center text-gray-500 sm:px-6 lg:px-8">
                        <p>&copy; {new Date().getFullYear()} FirstAid. Todos os direitos reservados.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}