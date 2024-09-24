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
    public function update(int $id, $data): void
    {
        $user = $this->getById($id);
        $user->update($data);
    }

    public function delete(int $id): void
    {
        $user = $this->getById($id);
        $user->delete();
    }
}
