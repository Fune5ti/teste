<?php

namespace Tests;

namespace Tests\Unit\Services;

use App\Models\User;
use App\Services\UserService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Mockery;
use Tests\TestCase;

class UserServiceTest extends TestCase
{
    use RefreshDatabase;

    protected ?UserService $userService = null;

    public function setUp(): void
    {
        parent::setUp();
        $this->userService = new UserService();
    }

    public function testGetAllReturnsCollection()
    {
        User::factory()->count(3)->create();
        $result = $this->userService->getAll();
        $this->assertInstanceOf(Collection::class, $result);
        $this->assertCount(3, $result);
    }

    public function testGetByIdReturnsUser()
    {
        $user = User::factory()->create();
        $result = $this->userService->getById($user->id);
        $this->assertInstanceOf(User::class, $result);
        $this->assertEquals($user->id, $result->id);
    }

    public function testStoreCreatesUser()
    {
        $userData = [
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
            'username' => 'testuser',
        ];

        $result = $this->userService->store($userData);
        $this->assertInstanceOf(User::class, $result);
        $this->assertDatabaseHas('users', ['email' => 'test@example.com']);
    }

    public function testUpdateUpdatesUser()
    {
        $user = User::factory()->create([
            'name' => 'Old Name',
        ]);

        $updateData = ['name' => 'New Name'];
        $this->userService->update($user->id, $updateData);

        $this->assertDatabaseHas('users', ['name' => 'New Name']);
    }

    public function testDeleteRemovesUser()
    {
        $user = User::factory()->create();
        $this->userService->delete($user->id);
        $this->assertSoftDeleted('users', ['id' => $user->id]);
    }
}
