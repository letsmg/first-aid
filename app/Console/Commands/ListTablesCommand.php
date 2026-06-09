<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ListTablesCommand extends Command
{
    protected $signature = 'list:tables';

    protected $description = 'List all tables in the database';

    public function handle()
    {
        $tables = DB::select('SELECT table_name FROM information_schema.tables WHERE table_schema = \'public\'');
        
        foreach ($tables as $table) {
            $this->info($table->table_name);
        }
    }
}