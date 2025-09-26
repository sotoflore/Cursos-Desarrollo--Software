import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {

    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) { }


    async findAll() {
        const categories = await this.categoryRepository.find();
        return categories;
    }
    
    async findOne(id: number) {
        const category = await this.categoryRepository.findOne({
            where: { id }
        });
        
        if (!category) {
            throw new NotFoundException(`Category with id ${id} not found`);
        }
        return category;
    }

    async create(createCategoryDto: CreateCategoryDto) {
        try {
            const newCategory = await this.categoryRepository.save(createCategoryDto);
            return this.findOne(newCategory.id);

        } catch (error) {
            throw new BadRequestException('Error creating category');
        }
    }

   async update(id: number, updateCategoryDto: UpdateCategoryDto) {
        try {
            const category = await this.findOne(id);
            const updatedCategory = this.categoryRepository.merge(category, updateCategoryDto);
            const savedCategory = await this.categoryRepository.save(updatedCategory);
            return savedCategory;
        } catch (error) {
            throw new BadRequestException('Error updating category');
        }
    }

    async remove(id: number) {
       try {
         await this.categoryRepository.delete(id);
         return {message: 'Category deleted successfully'};
       } catch (error) {
        throw new BadRequestException('Error deleting category');
       }
    }
}
