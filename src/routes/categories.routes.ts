import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlredyExists = categoriesRepository.findByName(name);

  if (categoryAlredyExists) {
    return response.status(400).json({ error: 'Category already exists!' });
  }

  categoriesRepository.create({
    name,
    description,
  });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
