import { Head, Link } from '@inertiajs/react';

export default function Termos() {
    return (
        <>
            <Head title="Termos de Uso" />
            <div className="min-h-screen bg-gray-50">
                <header className="bg-white shadow-sm">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            FirstAid
                        </Link>
                        <nav className="flex gap-4">
                            <Link href="/" className="text-gray-600 hover:text-blue-600">Início</Link>
                            <Link href="/servicos" className="text-gray-600 hover:text-blue-600">Serviços</Link>
                            <Link href="/termos" className="font-semibold text-blue-600">Termos</Link>
                            <Link href="/privacidade" className="text-gray-600 hover:text-blue-600">Privacidade</Link>
                            <Link href="/login" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Entrar</Link>
                        </nav>
                    </div>
                </header>

                <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                    <h1 className="mb-8 text-3xl font-bold text-gray-900">Termos de Uso</h1>
                    
                    <div className="prose prose-blue max-w-none">
                        <p className="text-gray-600">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">1. Aceitação dos Termos</h2>
                            <p className="mt-2 text-gray-600">
                                Ao utilizar o sistema FirstAid, você concorda com estes termos de uso. 
                                Se você não concorda com alguma parte destes termos, não utilize nossos serviços.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">2. Descrição dos Serviços</h2>
                            <p className="mt-2 text-gray-600">
                                O FirstAid é um sistema de gerenciamento de atendimentos remotos que oferece:
                            </p>
                            <ul className="mt-2 list-disc pl-6 text-gray-600">
                                <li>Atendimento remoto para suporte técnico</li>
                                <li>Auxílio por telefone para soluções rápidas</li>
                                <li>Visita técnica presencial quando necessário</li>
                                <li>Instalação e configuração de hardware</li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">3. Planos e Assinaturas</h2>
                            <p className="mt-2 text-gray-600">
                                Os serviços são oferecidos através de planos de assinatura mensal. 
                                Cada plano possui limites específicos de solicitações conforme descrito na página de serviços. 
                                O não pagamento da mensalidade resultará na suspensão do plano.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">4. Responsabilidades do Usuário</h2>
                            <p className="mt-2 text-gray-600">
                                O usuário se compromete a:
                            </p>
                            <ul className="mt-2 list-disc pl-6 text-gray-600">
                                <li>Fornecer informações verdadeiras e atualizadas</li>
                                <li>Não compartilhar sua conta com terceiros</li>
                                <li>Utilizar os serviços de forma ética e legal</li>
                                <li>Manter a confidencialidade de sua senha</li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">5. Limitação de Responsabilidade</h2>
                            <p className="mt-2 text-gray-600">
                                O FirstAid não se responsabiliza por danos decorrentes do uso inadequado dos serviços 
                                ou por problemas técnicos fora de nosso controle. O suporte técnico é prestado conforme 
                                disponibilidade e dentro dos limites do plano contratado.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">6. Alterações nos Termos</h2>
                            <p className="mt-2 text-gray-600">
                                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                                Os usuários serão notificados sobre alterações significativas através do e-mail cadastrado.
                            </p>
                        </section>
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