export class Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
      id: number;
      name: string;
      image: string;
    };
    images: string[];
  
    constructor(
      id: number,
      title: string,
      price: number,
      description: string,
      category: { id: number; name: string; image: string },
      images: string[]
    ) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.description = description;
      this.category = category;
      this.images = images;
    }
  }
  