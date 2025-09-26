import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, Req } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PostsService } from '../services/posts.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { Payload } from 'src/auth/models/payload.model';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body() createPostDto: CreatePostDto, @Req() req: Request) {

        const payload = req.user as Payload;
        const userId = payload.sub;
        return this.postsService.create(createPostDto, userId);
    }

    @Get()
    findAll() {
        return this.postsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.postsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updatePostDto: UpdatePostDto) {
        return this.postsService.update(id, updatePostDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.postsService.remove(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post(':id/publish')
    publish(@Param('id', ParseIntPipe) id: number, @Req() req: Request) {

        const payload = req.user as Payload;
        const userId = payload.sub;
        return this.postsService.publish(id, userId);
    }
}
