import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async getOrCreateCategory(name: string): Promise<{ id: number }> {
    const rfCategoryName = name.trim().toLowerCase();
    const CategorySlug = rfCategoryName.replace(/ /g, "-");
    let category = await this.prisma.category.findOne({
      where: { slug: CategorySlug },
      select: { id: true },
    });
    if (!category) {
      category = await this.prisma.category.create({
        data: {
          name: rfCategoryName,
          slug: CategorySlug,
        },
        select: { id: true },
      });
    }
    return category;
  }
}
