import { useBulkdDeleteCategories } from "@/features/categories/api/use-bulk-delete-categories";
import { useNewCategory } from "@/features/categories/hooks/use-new-category";

const CategoriesPage = () => {
  const newCategory = useNewCategory();
  const deleteCategories = useBulkdDeleteCategories();
  return (
    <div>
      <h1>Categories Page</h1>
    </div>
  );
};

export default CategoriesPage;
