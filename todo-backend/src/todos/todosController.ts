import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { Todo } from "./todo";
import { TodoCreationParams, TodoService } from "./todoService";

@Route("todo")
export class TodoController extends Controller {
  /**
   * Todo Route
   */
  @Get("{todoId}")
  public async getTodo(@Path("todoId") todoId: string): Promise<Todo> {
    const todoService = new TodoService();
    return await todoService.get(todoId);
  }
}
