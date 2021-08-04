import { v4 as uuidv4 } from 'uuid';

class Car {
  id: string;

  name: string;

  description: string;

  daily_rate: string;

  license_plate: string;

  available: boolean;

  fine_amount: number;

  brand: string;

  category_id: string;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.available = true;
      this.created_at = new Date();
    }
  }
}

export { Car };
