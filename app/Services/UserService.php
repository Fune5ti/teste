<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class UserService
{
    public function getAll(): Collection
    {
        return User::all();
    }

    public function getById(int $id): User
    {
        return User::findOrFail($id);
    }

    public function store($data): User
    {
         return User::create($data);
    }
    public function update(int $id, array $data): void
    {
        $user = $this->getById($id);

        $filteredData = array_filter($data, function ($value) {
            return !is_null($value);
        });

        $user->update($filteredData);
    }


    public function delete(int $id): void
    {
        $user = $this->getById($id);
        $user->delete();
    }
}
