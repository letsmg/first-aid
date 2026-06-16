<?php

namespace App\Http\Controllers;

use App\Models\Solicitation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SolicitationController extends Controller
{
    /**
     * Lista as solicitações (staff view)
     */
    public function index(Request $request)
    {
        $query = Solicitation::with('customer.user', 'attendant');

        // Filtros
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }
        if ($request->filled('urgencia')) {
            $query->where('urgencia', $request->urgencia);
        }
        if ($request->filled('tipo')) {
            $query->where('tipo', $request->tipo);
        }

        $solicitations = $query->orderBy('urgencia', 'desc')
            ->orderBy('data_solicitacao', 'desc')
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('Staff/Solicitations/Index', [
            'solicitations' => $solicitations,
            'filters' => $request->only(['status', 'urgencia', 'tipo']),
        ]);
    }

    /**
     * Minhas solicitações (cliente view)
     */
    public function mySolicitations()
    {
        $customer = auth()->user()->customer;
        
        if (!$customer) {
            return redirect()->route('dashboard')
                ->with('error', 'Você não possui perfil de cliente.');
        }

        $solicitations = Solicitation::where('customer_id', $customer->id)
            ->with('attendant')
            ->orderBy('data_solicitacao', 'desc')
            ->get();

        return Inertia::render('Customer/Solicitations/Index', [
            'solicitations' => $solicitations,
        ]);
    }

    /**
     * Formulário de nova solicitação (cliente)
     */
    public function create()
    {
        return Inertia::render('Customer/Solicitations/Create');
    }

    /**
     * Salva nova solicitação (cliente)
     */
    public function store(Request $request)
    {
        $customer = auth()->user()->customer;

        if (!$customer) {
            return redirect()->route('dashboard')
                ->with('error', 'Você não possui perfil de cliente.');
        }

        // Verifica se o plano está ativo
        $membership = $customer->membership;
        if (!$membership || !$membership->active) {
            return back()->withErrors([
                'plano' => 'Seu plano está inativo. Renove sua assinatura para fazer solicitações.'
            ]);
        }

        // Verifica limites do plano
        $plan = $membership->plan;
        $monthlyCount = Solicitation::where('customer_id', $customer->id)
            ->whereMonth('data_solicitacao', now()->month)
            ->whereYear('data_solicitacao', now()->year)
            ->count();

        $urgentCount = Solicitation::where('customer_id', $customer->id)
            ->where('urgencia', true)
            ->whereMonth('data_solicitacao', now()->month)
            ->whereYear('data_solicitacao', now()->year)
            ->count();

        $validated = $request->validate([
            'solicitacao' => 'required|string|min:10|max:1000',
            'urgencia' => 'required|boolean',
            'tipo' => 'required|integer|in:0,1,2',
        ], [
            'solicitacao.required' => 'A descrição da solicitação é obrigatória.',
            'solicitacao.min' => 'A descrição deve ter no mínimo 10 caracteres.',
            'solicitacao.max' => 'A descrição deve ter no máximo 1000 caracteres.',
            'urgencia.required' => 'Informe se é urgente ou não.',
            'tipo.required' => 'Selecione o tipo de atendimento.',
        ]);

        // Verifica limite de solicitações urgentes
        if ($validated['urgencia'] && $plan->max_urgent_requests >= 0 && $urgentCount >= $plan->max_urgent_requests) {
            return back()->withErrors([
                'urgencia' => 'Você atingiu o limite mensal de solicitações urgentes do seu plano.'
            ]);
        }

        // Verifica limite total do plano
        if ($plan->app_requests_limit >= 0 && $monthlyCount >= $plan->app_requests_limit) {
            return back()->withErrors([
                'solicitacao' => 'Você atingiu o limite mensal de solicitações do seu plano.'
            ]);
        }

        Solicitation::create([
            'customer_id' => $customer->id,
            'solicitacao' => $validated['solicitacao'],
            'urgencia' => $validated['urgencia'],
            'tipo' => $validated['tipo'],
            'data_solicitacao' => now(),
            'status' => 0, // aguardando atendimento
        ]);

        return redirect()->route('customer.solicitations')
            ->with('success', 'Solicitação enviada com sucesso!');
    }

    /**
     * Atualiza status/diagnóstico (staff)
     */
    public function update(Request $request, Solicitation $solicitation)
    {
        $validated = $request->validate([
            'status' => 'required|integer|in:0,1,2',
            'diagnostico' => 'nullable|string|max:2000',
            'avaliacao' => 'nullable|integer|in:0,1,2,3',
        ], [
            'status.required' => 'O status é obrigatório.',
            'diagnostico.max' => 'O diagnóstico deve ter no máximo 2000 caracteres.',
        ]);

        $data = [
            'status' => $validated['status'],
            'usuario_atendimento_id' => auth()->id(),
        ];

        if (!empty($validated['diagnostico'])) {
            $data['diagnostico'] = $validated['diagnostico'];
        }

        if ($validated['status'] == 2 && $request->has('avaliacao')) {
            $data['avaliacao'] = $validated['avaliacao'];
        }

        $solicitation->update($data);

        return back()->with('success', 'Solicitação atualizada com sucesso!');
    }

    /**
     * Avalia um atendimento (cliente)
     */
    public function evaluate(Request $request, Solicitation $solicitation)
    {
        $validated = $request->validate([
            'avaliacao' => 'required|integer|in:0,1,2,3',
        ], [
            'avaliacao.required' => 'Selecione uma avaliação.',
        ]);

        $solicitation->update(['avaliacao' => $validated['avaliacao']]);

        return back()->with('success', 'Avaliação registrada com sucesso!');
    }
}