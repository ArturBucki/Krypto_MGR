import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import OrderModel from "../models/order.Model";
import CourseModel from "../models/course.model";

// Stworz nowe zamowienie
export const newOrder = CatchAsyncError(async (data: any, res: Response) => {
  const order = await OrderModel.create(data);

  res.status(201).json({
    succcess: true,
    order,
  });
});


// Otrzymaj wszystkie kursy
export const getAllCoursesService = async (res: Response) => {
    const courses = await CourseModel.find().sort({createdAt:-1});

    res.status(201).json({
        success:true,
        courses,
    }
    )
};

// Get ALL Orders
export const getAllOrdersService = async (res: Response) => {
    const orders = await OrderModel.find().sort({createdAt:-1});

    res.status(201).json({
        success:true,
        orders,
    });
};

