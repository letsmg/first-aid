import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-6 sm:justify-center sm:pt-0">
            <div className="mb-4">
                <Link href="/" className="text-3xl font-bold text-blue-600">
                    FirstAid
                </Link>
            </div>

            <div className="w-full overflow-hidden bg-white px-6 py-6 shadow-lg sm:max-w-md sm:rounded-xl">
                {children}
            </div>

            <div className="mt-6 flex gap-4 text-sm text-gray-500">
                <Link href="/termos" className="hover:text-blue-600">Termos de Uso</Link>
                <Link href="/privacidade" className="hover:text-blue-600">Privacidade</Link>
            </div>
        </div>
    );
}