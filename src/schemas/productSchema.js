import { z } from "zod";

export const productSchema = z.object({
	name: z.string().min(1, "Tên sản phẩm không được để trống"),
	price: z.coerce.number().positive("Giá phải là số dương"),
	category: z.string().min(1, "Danh mục không được để trống"),
});
