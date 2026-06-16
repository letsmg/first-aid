import { useState } from 'react';

/**
 * Componente utilitário para facilitar testes.
 * Adiciona botões "Preencher formulário" e "Limpar formulário" 
 * que funcionam de forma global em qualquer tela com formulário.
 */
export default function FormFiller({ targetForm }) {
    const [isOpen, setIsOpen] = useState(false);

    const fillForm = () => {
        if (typeof window.fillForm === 'function') {
            window.fillForm();
        }
    };

    const clearForm = () => {
        if (typeof window.clearForm === 'function') {
            window.clearForm();
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Botão principal flutuante */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg transition hover:bg-gray-700"
                title="Ferramentas de teste"
            >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>

            {/* Painel de ferramentas */}
            {isOpen && (
                <div className="absolute bottom-12 right-0 w-48 rounded-lg bg-white p-3 shadow-xl ring-1 ring-gray-200">
                    <p className="mb-2 text-xs font-semibold text-gray-500">Ferramentas de Teste</p>
                    <button
                        type="button"
                        onClick={() => { fillForm(); setIsOpen(false); }}
                        className="mb-1 flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Preencher formulário
                    </button>
                    <button
                        type="button"
                        onClick={() => { clearForm(); setIsOpen(false); }}
                        className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-red-50 hover:text-red-700"
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Limpar formulário
                    </button>
                </div>
            )}
        </div>
    );
}

/**
 * Hook para registrar as funções globais de preenchimento e limpeza.
 * Uso: registerFormFiller({ fields: [...], fillData: {...} })
 * 
 * Exemplo:
 * registerFormFiller({
 *   fields: ['name', 'email'],
 *   fillData: { name: 'João', email: 'joao@email.com' }
 * });
 */
export function registerFormFiller({ fields, fillData }) {
    if (typeof window !== 'undefined') {
        // Função para preencher formulário
        window.fillForm = () => {
            fields.forEach((field) => {
                const input = document.querySelector(`[name="${field}"]`);
                if (input) {
                    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                        window.HTMLInputElement.prototype, 'value'
                    ).set;
                    nativeInputValueSetter.call(input, fillData[field] || '');
                    
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                    input.dispatchEvent(new Event('change', { bubbles: true }));
                    input.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            });
        };

        // Função para limpar formulário
        window.clearForm = () => {
            const form = document.querySelector('form');
            if (form) {
                const inputs = form.querySelectorAll('input, textarea, select');
                inputs.forEach((input) => {
                    const type = input.getAttribute('type');
                    if (type === 'checkbox' || type === 'radio') {
                        input.checked = false;
                    } else {
                        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                            window.HTMLInputElement.prototype, 'value'
                        ).set;
                        nativeInputValueSetter.call(input, '');
                        
                        input.dispatchEvent(new Event('input', { bubbles: true }));
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                });
            }
        };
    }
}