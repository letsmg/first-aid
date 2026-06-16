import { Head, Link } from '@inertiajs/react';

export default function Privacidade() {
    return (
        <>
            <Head title="Política de Privacidade" />
            <div className="min-h-screen bg-gray-50">
                <header className="bg-white shadow-sm">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            FirstAid
                        </Link>
                        <nav className="flex gap-4">
                            <Link href="/" className="text-gray-600 hover:text-blue-600">Início</Link>
                            <Link href="/servicos" className="text-gray-600 hover:text-blue-600">Serviços</Link>
                            <Link href="/termos" className="text-gray-600 hover:text-blue-600">Termos</Link>
                            <Link href="/privacidade" className="font-semibold text-blue-600">Privacidade</Link>
                            <Link href="/login" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Entrar</Link>
                        </nav>
                    </div>
                </header>

                <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                    <h1 className="mb-8 text-3xl font-bold text-gray-900">Política de Privacidade</h1>
                    
                    <div className="prose prose-blue max-w-none">
                        <p className="text-gray-600">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">1. Coleta de Dados</h2>
                            <p className="mt-2 text-gray-600">
                                Coletamos os seguintes dados pessoais para prestação dos serviços:
                            </p>
                            <ul className="mt-2 list-disc pl-6 text-gray-600">
                                <li>Nome completo</li>
                                <li>CPF ou CNPJ (armazenados de forma criptografada)</li>
                                <li>Endereço, bairro, cidade e CEP</li>
                                <li>Telefones de contato</li>
                                <li>E-mail</li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">2. Finalidade do Tratamento</h2>
                            <p className="mt-2 text-gray-600">
                                Seus dados são utilizados exclusivamente para:
                            </p>
                            <ul className="mt-2 list-disc pl-6 text-gray-600">
                                <li>Identificação e autenticação de usuários</li>
                                <li>Prestação dos serviços de assistência técnica</li>
                                <li>Contato para agendamento de visitas e suporte</li>
                                <li>Faturamento e gestão de planos</li>
                                <li>Melhoria contínua dos serviços oferecidos</li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">3. Proteção de Dados</h2>
                            <p className="mt-2 text-gray-600">
                                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados:
                            </p>
                            <ul className="mt-2 list-disc pl-6 text-gray-600">
                                <li>Senhas criptografadas usando algoritmo Argon2id</li>
                                <li>Dados sensíveis (CPF/CNPJ) armazenados com criptografia forte</li>
                                <li>Comunicação via HTTPS</li>
                                <li>Acesso restrito a funcionários autorizados</li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">4. Compartilhamento de Dados</h2>
                            <p className="mt-2 text-gray-600">
                                Não compartilhamos seus dados com terceiros, exceto quando exigido por lei 
                                ou com seu consentimento explícito.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">5. Retenção e Exclusão</h2>
                            <p className="mt-2 text-gray-600">
                                Seus dados serão mantidos enquanto sua conta estiver ativa. 
                                Após o cancelamento, os dados serão excluídos em até 90 dias, 
                                exceto quando houver obrigação legal de retenção.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">6. Seus Direitos (LGPD)</h2>
                            <p className="mt-2 text-gray-600">
                                Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a:
                            </p>
                            <ul className="mt-2 list-disc pl-6 text-gray-600">
                                <li>Acessar seus dados pessoais</li>
                                <li>Corrigir dados incompletos ou desatualizados</li>
                                <li>Solicitar a exclusão dos dados</li>
                                <li>Revogar o consentimento a qualquer momento</li>
                                <li>Solicitar portabilidade dos dados</li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900">7. Contato</h2>
                            <p className="mt-2 text-gray-600">
                                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                                entre em contato através do e-mail: privacidade@firstaid.com
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