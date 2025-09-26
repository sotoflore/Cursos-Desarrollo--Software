import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostsController } from './controllers/posts.controller';
import { PostsService } from './services/posts.service';
import { Category } from './entities/category.entity';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';
import { AiModule } from 'src/ai/ai.module';

@Module({
    imports: [TypeOrmModule.forFeature([Post, Category]), AiModule],
    controllers: [PostsController, CategoriesController],
    providers: [PostsService, CategoriesService],
    exports: [PostsService, CategoriesService]
})
export class PostsModule { }
