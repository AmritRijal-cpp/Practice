<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LaptopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $brands = ['Asus', 'HP', 'Dell', 'Lenove'];
        foreach($brands as $brand){
            DB::table('laptops')->insert([
                'brand' => $brand,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
    }
}
