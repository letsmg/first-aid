<?php

namespace Database\Seeders;

use App\Models\Solicitation;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SolicitationsTableSeeder extends Seeder
{
    public function run(): void
    {
        $solicitations = [
            // Solicitações finalizadas
            [
                'customer_id' => 1,
                'solicitacao' => 'Computador não liga após queda de energia',
                'urgencia' => true,
                'tipo' => 1, // app
                'diagnostico' => 'Fonte queimada. Substituída com sucesso.',
                'data_solicitacao' => Carbon::now()->subDays(10),
                'usuario_atendimento_id' => 3, // Carlos Técnico
                'status' => 2, // finalizado
                'avaliacao' => 2, // ótima
            ],
            [
                'customer_id' => 2,
                'solicitacao' => 'Problema com conexão de internet',
                'urgencia' => false,
                'tipo' => 0, // telefone
                'diagnostico' => 'Roteador desconfigurado. Orientado a reiniciar.',
                'data_solicitacao' => Carbon::now()->subDays(7),
                'usuario_atendimento_id' => 4, // Ana Atendente
                'status' => 2,
                'avaliacao' => 1, // boa
            ],
            [
                'customer_id' => 3,
                'solicitacao' => 'Servidor de arquivos com acesso lento',
                'urgencia' => true,
                'tipo' => 2, // presencial
                'diagnostico' => 'HD com setores defeituosos. Substituído por SSD.',
                'data_solicitacao' => Carbon::now()->subDays(15),
                'usuario_atendimento_id' => 3,
                'status' => 2,
                'avaliacao' => 3, // excelente
            ],
            // Solicitações em andamento
            [
                'customer_id' => 4,
                'solicitacao' => 'Impressora não imprime em rede',
                'urgencia' => false,
                'tipo' => 0, // telefone
                'diagnostico' => null,
                'data_solicitacao' => Carbon::now()->subHours(2),
                'usuario_atendimento_id' => 4,
                'status' => 1, // sendo atendido
                'avaliacao' => null,
            ],
            [
                'customer_id' => 5,
                'solicitacao' => 'Notebook com tela azul ao iniciar',
                'urgencia' => true,
                'tipo' => 1, // app
                'diagnostico' => null,
                'data_solicitacao' => Carbon::now()->subHour(),
                'usuario_atendimento_id' => 3,
                'status' => 1,
                'avaliacao' => null,
            ],
            // Solicitações aguardando atendimento
            [
                'customer_id' => 7,
                'solicitacao' => 'Instalação de software contábil',
                'urgencia' => false,
                'tipo' => 1,
                'diagnostico' => null,
                'data_solicitacao' => Carbon::now()->subDays(1),
                'usuario_atendimento_id' => null,
                'status' => 0,
                'avaliacao' => null,
            ],
            [
                'customer_id' => 8,
                'solicitacao' => 'Troca de bateria do notebook',
                'urgencia' => false,
                'tipo' => 1,
                'diagnostico' => null,
                'data_solicitacao' => Carbon::now()->subDays(2),
                'usuario_atendimento_id' => null,
                'status' => 0,
                'avaliacao' => null,
            ],
            [
                'customer_id' => 9,
                'solicitacao' => 'Configuração de servidor de e-mail',
                'urgencia' => true,
                'tipo' => 2, // presencial
                'diagnostico' => null,
                'data_solicitacao' => Carbon::now()->subHours(3),
                'usuario_atendimento_id' => null,
                'status' => 0,
                'avaliacao' => null,
            ],
            [
                'customer_id' => 10,
                'solicitacao' => 'Recuperação de arquivos deletados',
                'urgencia' => true,
                'tipo' => 1,
                'diagnostico' => null,
                'data_solicitacao' => Carbon::now()->subDays(1),
                'usuario_atendimento_id' => null,
                'status' => 0,
                'avaliacao' => null,
            ],
            [
                'customer_id' => 6,
                'solicitacao' => 'Limpeza preventiva do desktop',
                'urgencia' => false,
                'tipo' => 2,
                'diagnostico' => null,
                'data_solicitacao' => Carbon::now()->subDays(3),
                'usuario_atendimento_id' => null,
                'status' => 0,
                'avaliacao' => null,
            ],
        ];

        foreach ($solicitations as $solicitation) {
            Solicitation::create($solicitation);
        }
    }
}