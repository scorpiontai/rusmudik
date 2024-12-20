import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Users } from './Users/users.dto';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post("/signup")
  async LoginPost(@Body() body: Users): Promise<any> {
    try {
      const { name, password, email } = body

      //this action
    } catch (error) {
      console.error(error.message)
    }
  }
}
