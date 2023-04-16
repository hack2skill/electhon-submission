<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Application>
 */
class ApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'aadhar_id' => random_int(100000000000, 999999999999),
            'phone' => "+917092128101",
            'address' => fake()->address(),
            'dob' => fake()->date()
        ];
    }
}
