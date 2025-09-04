<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    // List all courses
    public function index()
    {
        return response()->json(Course::all());
    }

    // Add a new course
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'video_url' => 'nullable|string',
            'image_url' => 'nullable|string',
            'price' => 'required|numeric'
        ]);

        $course = Course::create($request->all());
        return response()->json($course, 201);
    }

    // Get single course
    public function show($id)
    {
        $course = Course::find($id);
        if(!$course){
            return response()->json(['error' => 'Course not found'], 404);
        }
        return response()->json($course);
    }
}
