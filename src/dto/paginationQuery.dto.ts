import { IsOptional, IsInt, Min, Max, IsIn } from 'class-validator';

type SortDirection = 'ASC' | 'DESC'; // Use uppercase strings for SortDirection

export class PaginationQueryDto {
  @IsOptional()
  @IsInt({ message: 'Limit must be an integer number' })
  @Min(1, { message: 'Limit must not be less than 1' })
  @Max(100, { message: 'Limit must not be greater than 100' })
  limit: number = 10; // Default limit is set to 10

  @IsOptional()
  @IsInt()
  @Min(1)
  page: number = 1; // Default page is set to 1

  @IsOptional()
  @IsIn(['ASC', 'DESC'], {
    message: 'Invalid sort direction. Use "ASC" or "DESC".', // Use uppercase strings here
  })
  sortDirection: SortDirection = 'ASC'; // Default sort direction is ascending

  @IsOptional()
  @IsIn(['createdAt', 'updatedAt', 'name'], { message: 'Invalid sort column.' })
  sortField: string = 'createdAt'; // Default sort field is createdAt
}
