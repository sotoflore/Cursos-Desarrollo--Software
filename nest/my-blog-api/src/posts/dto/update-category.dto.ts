import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from '../../posts/dto/create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) { }
