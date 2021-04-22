import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

import useStyles from "./styles";

/* const products = [
  {
    id: 1,
    name: "Earrings",
    description: "Silver stud earrings.",
    price: "$5",
    image:
      "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5517942_png/lifelong-heart-pierced-earrings--white--rose-gold-tone-plated-swarovski-5517942.png",
  },
  {
    id: 2,
    name: "Bracelet",
    description: "Artificial Gold bracelet.",
    price: "$10",
    image:
      "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5464948_png/tennis-deluxe-bracelet--white--rose-gold-tone-plated-swarovski-5464948.png",
  },
  {
    id: 3,
    name: "Necklace",
    description: "Fishing line neclace.",
    price: "$15",
    image:
      "https://5.imimg.com/data5/PF/JI/MY-3251241/small-mango-short-necklace-s04226-500x500.png",
  },
  {
    id: 4,
    name: "Ring",
    description: "Zircon ring.",
    price: "$25",
    image:
      "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_500/5149218_png/attract-round-ring--white--rose-gold-tone-plated-swarovski-5149218.png",
  },
]; */
const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
