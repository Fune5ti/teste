<?php

namespace Tests\Unit\Controllers;

use App\Http\Controllers\UserController;
use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Mockery;
use Tests\TestCase;

class UserControllerTest extends TestCase
{
    use RefreshDatabase;

    protected $userService;
    protected $userController;

    public function setUp(): void
    {
        parent::setUp();
        $this->userService = Mockery::mock(UserService::class);
        $this->userController = new UserController($this->userService);
    }

    public function testAllReturnsUsersJson()
    {
        $users = User::factory()->count(3)->make();

        $this->userService->shouldReceive('getAll')->once()->andReturn($users);

        $response = $this->userController->all();

        $this->assertEquals(200, $response->status());
        $this->assertArrayHasKey('users', $response->getData(true));
        $this->assertArrayHasKey('success', $response->getData(true));
        $this->assertArrayHasKey('message', $response->getData(true));
    }

    public function testShowReturnsUserJson()
    {
        $user = User::factory()->create();

        $this->userService->shouldReceive('getById')->once()->andReturn($user);

        $response = $this->userController->show($user->id);

        $this->assertEquals(200, $response->status());
        $this->assertArrayHasKey('user', $response->getData(true));
        $this->assertArrayHasKey('success', $response->getData(true));
        $this->assertArrayHasKey('message', $response->getData(true));
    }

    public function testStoreCreatesUser()
    {
        // Create a user factory instance
        $user = User::factory()->make(); // use `make` here, as we are testing store

        // Prepare the request data
        $requestData = [
            'name' => $user->name,
            'email' => $user->email,
            'password' => 'password',
            'password_confirmation' => 'password', // include password confirmation
        ];

        $request = Mockery::mock(CreateUserRequest::class)->makePartial();
        $request->shouldReceive('validated')->andReturn($requestData); // Mock validated data

        $this->userService->shouldReceive('store')->once()->andReturn($user);

        $response = $this->userController->store($request);

        $this->assertEquals(200, $response->status());
        $this->assertArrayHasKey('user', $response->getData(true));
        $this->assertArrayHasKey('success', $response->getData(true));
        $this->assertArrayHasKey('message', $response->getData(true));
    }

    public function testUpdateUpdatesUser()
    {
        // Create a user
        $user = User::factory()->create();

        $requestData = [
            'name' => 'Updated Name',
        ];

        $request = Mockery::mock(UpdateUserRequest::class)->makePartial();
        $request->shouldReceive('validated')->andReturn($requestData);

        $this->userService->shouldReceive('update')->once()->andReturnNull();

        $response = $this->userController->update($request, $user->id);

        $this->assertEquals(200, $response->status());
        $this->assertArrayHasKey('success', $response->getData(true));
        $this->assertArrayHasKey('message', $response->getData(true));
    }

    public function testDestroyDeletesUser()
    {
        $user = User::factory()->create();

        $this->userService->shouldReceive('delete')->once()->andReturnNull();

        $response = $this->userController->destroy($user->id);

        $this->assertEquals(200, $response->status());
        $this->assertArrayHasKey('success', $response->getData(true));
        $this->assertArrayHasKey('message', $response->getData(true));
    }
}
