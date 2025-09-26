import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { OpenaiService } from 'src/ai/services/openai.service';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
        private readonly openaiService: OpenaiService
    ){}

    async create(createPostDto: CreatePostDto, userId: number) {
        try {
            const newPost = await this.postRepository.save({
                ...createPostDto,
                user: { id: userId },
                categories: createPostDto.categoryIds?.map(categoryId => ({ id: categoryId }))
            });
            return this.findOne(newPost.id)
        } catch (error) {
            throw new BadRequestException('Error creating post')
        }
    }

    async findAll() {
        const posts = await this.postRepository.find({
            relations: ['user.profile', 'categories']
        });
        return posts;
    }

    async findOne(id: number) {
        const post = await this.postRepository.findOne({
            where: { id },
            relations:['user.profile', 'categories']
        });

        if (!post) {
            throw new NotFoundException(`Post with id ${id} not found`);
        }
        return post;
    }

    async update(id: number, updatePostDto: UpdatePostDto) {
        try {
            const post = await this.findOne(id);
            const updatedPost = this.postRepository.merge(post, updatePostDto);
            const savedPost = await this.postRepository.save(updatedPost);
            return savedPost;
        } catch (error) {
            throw new BadRequestException('Error updating post')
        }
    }

    async remove(id: number) {
        try {
            await this.postRepository.delete(id);
            return {message: 'Post deleted successfully'}
        } catch (error) {
            throw new BadRequestException('Error deleting post')
        }
    }

    async getPostsByCategoryId(categoryId: number) {

        const posts = await this.postRepository.find({
            where: { categories: { id: categoryId } },
            relations: ['user.profile']
        });

        if (!posts) {
            throw new NotFoundException(`Posts with category id ${categoryId} not found`);
        }

        return posts
    }

    async publish(id: number, userId: number) {
        const post = await this.findOne(id);

        if (post.user.id !== userId) {
            throw new ForbiddenException('You are not allowed to publish this post');
        }

        if (!post.content || !post.title || post.categories.length === 0) {
            throw new BadRequestException('Post must have content, title and categories');
        }

        const summary = await this.openaiService.generateSummary(post.content);
        const image = await this.openaiService.generateImage(summary);
 
        const publishedPost = await this.postRepository.merge(post, {
            isDraft: false,
            summary,
            coverImage: image
        });
        const savedPost = await this.postRepository.save(publishedPost)
        return this.findOne(savedPost.id);
    }

}
