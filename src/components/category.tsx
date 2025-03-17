type CategoryProps = {
  title: string;
  component: JSX.Element;
};
import { motion } from "framer-motion";

const Category = ({ title, component }: CategoryProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-2xl">{title}</p>
    {component}
    <div className="border-t p-3" />
  </motion.div>
);

export default Category;
