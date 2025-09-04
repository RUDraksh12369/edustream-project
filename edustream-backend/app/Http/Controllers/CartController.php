<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    // Get current user's cart
    public function index()
    {
        $cart = Cart::firstOrCreate(
            ['user_id' => Auth::id()],
            ['courses' => []]
        );

        return response()->json($cart);
    }

    // Add course to cart
    public function add(Request $request)
    {
        $request->validate([
            'course_id' => 'required|string'
        ]);

        $cart = Cart::firstOrCreate(
            ['user_id' => Auth::id()],
            ['courses' => []]
        );

        // Avoid duplicates
        if (!in_array($request->course_id, $cart->courses)) {
            $cart->courses[] = $request->course_id;
            $cart->save();
        }

        return response()->json($cart);
    }

    // Remove course from cart
    public function remove(Request $request)
    {
        $request->validate([
            'course_id' => 'required|string'
        ]);

        $cart = Cart::firstOrCreate(
            ['user_id' => Auth::id()],
            ['courses' => []]
        );

        $cart->courses = array_filter($cart->courses, function($id) use ($request) {
            return $id !== $request->course_id;
        });

        $cart->save();

        return response()->json($cart);
    }

    // Checkout (clear cart)
    public function checkout()
    {
        $cart = Cart::firstOrCreate(
            ['user_id' => Auth::id()],
            ['courses' => []]
        );

        // For prototype, just clear cart
        $cart->courses = [];
        $cart->save();

        return response()->json(['message' => 'Checkout successful']);
    }
}
