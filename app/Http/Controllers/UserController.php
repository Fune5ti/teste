<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Services\UserService;
use Exception;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected ?UserService $userService = null;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function index()
    {
        return view('users.index');
    }

    public function all()
    {
        $users = $this->userService->getAll();

        return response()->json([
            'users' => $users,
            'success' => true,
            'message' => 'Users retrieved successfully'
        ]);
    }

    public function show(int $id)
    {
        try {
            $user = $this->userService->getById($id);

            return response()->json([
                'user' => $user,
                'success' => true,
                'message' => 'User retrieved successfully'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], $e->getCode());
        }
    }

    public function store(CreateUserRequest $request)
    {
        try {
            $user = $this->userService->store($request->validated());

            return response()->json([
                'success' => true,
                'message' => 'User created successfully',
                'user' => $user
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], $e->getCode());
        }
    }

    public function update(UpdateUserRequest $request, int $id)
    {
        try {
            $this->userService->update($id, $request->validated());

            return response()->json([
                'success' => true,
                'message' => 'User updated successfully'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], $e->getCode());
        }
    }

    public function destroy(int $id)
    {
        try {
            $this->userService->delete($id);

            return response()->json([
                'success' => true,
                'message' => 'User deleted successfully'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], $e->getCode());
        }
    }
}
