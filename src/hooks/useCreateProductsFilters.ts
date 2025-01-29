import { SHOP_DATA } from "@/assets/data";
import { genderType, ProductProps, sportType } from "@/types";

type mainCategoryFilter = "gender" | "sport" | "brand";
type subCategoryFilter = "sizes" | "colors";

export function useCreateProductsFilters() {
  const filterProducts = (
    key: "gender" | "sport" | "brand" | "featured" | "sale",
    targetCategory: genderType | sportType | string | boolean
  ) => SHOP_DATA.filter((product) => product[key] === targetCategory);
  const MEN_PRODUCTS = SHOP_DATA.filter((product) => product.gender === "men");
  const WOMEN_PRODUCTS = SHOP_DATA.filter(
    (product) => product.gender === "women"
  );

  const WOMEN_RUNNING_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.sport === "running"
  );
  const WOMEN_TRAINING_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.sport === "training"
  );
  const WOMEN_HIKING_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.sport === "hiking"
  );
  const WOMEN_CLIMBING_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.sport === "climbing"
  );
  const MEN_RUNNING_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.sport === "running"
  );
  const MEN_TRAINING_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.sport === "training"
  );
  const MEN_HIKING_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.sport === "hiking"
  );
  const MEN_CLIMBING_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.sport === "climbing"
  );

  const MEN_FEATURED_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.featured === true
  );
  const MEN_SALE_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.sale === true
  );
  const WOMEN_FEATURED_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.featured === true
  );
  const WOMEN_SALE_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.sale === true
  );

  const MEN_ADIDAS_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.brand === "adidas"
  );
  const MEN_ALTRA_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.brand === "altra"
  );
  const MEN_ASICS_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.brand === "asics"
  );
  const MEN_BROOKS_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.brand === "brooks"
  );
  const MEN_LA_SPORTIVA_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.brand === "la sportiva"
  );
  const MEN_NEW_BALANCE_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.brand === "new balance"
  );
  const MEN_NIKE_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.brand === "nike"
  );
  const MEN_ON_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.brand === "on"
  );
  const MEN_RED_CHILI_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.brand === "red chili"
  );
  const MEN_REEBOK_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.brand === "reebok"
  );
  const MEN_SALAMON_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.brand === "salomon"
  );
  const MEN_SAUCONY_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.brand === "saucony"
  );
  const MEN_SCARPA_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.brand === "scarpa"
  );
  const MEN_UNDER_ARMOUR_PRODUCTS = MEN_PRODUCTS.filter(
    (product) => product.brand === "under armour"
  );

  const WOMEN_ADIDAS_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.brand === "adidas"
  );
  const WOMEN_ALTRA_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.brand === "altra"
  );
  const WOMEN_ASICS_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.brand === "asics"
  );
  const WOMEN_BROOKS_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.brand === "brooks"
  );
  const WOMEN_LA_SPORTIVA_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.brand === "la sportiva"
  );
  const WOMEN_NEW_BALANCE_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.brand === "new balance"
  );
  const WOMEN_NIKE_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.brand === "nike"
  );
  const WOMEN_ON_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.brand === "on"
  );
  const WOMEN_RED_CHILI_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.brand === "red chili"
  );
  const WOMEN_REEBOK_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.brand === "reebok"
  );
  const WOMEN_SALAMON_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.brand === "salomon"
  );
  const WOMEN_SAUCONY_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.brand === "saucony"
  );
  const WOMEN_SCARPA_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.brand === "scarpa"
  );
  const WOMEN_UNDER_ARMOUR_PRODUCTS = WOMEN_PRODUCTS.filter(
    (product) => product.brand === "under armour"
  );

  const RUNNING_PRODUCTS = SHOP_DATA.filter(
    (product) => product.sport === "running"
  );
  const TRAINING_PRODUCTS = SHOP_DATA.filter(
    (product) => product.sport === "training"
  );
  const HIKING_PRODUCTS = SHOP_DATA.filter(
    (product) => product.sport === "hiking"
  );
  const CLIMBING_PRODUCTS = SHOP_DATA.filter(
    (product) => product.sport === "climbing"
  );
  const RUNNING_FEATURED_PRODUCTS = RUNNING_PRODUCTS.filter(
    (product) => product.featured === true
  );
  const RUNNING_SALE_PRODUCTS = RUNNING_PRODUCTS.filter(
    (product) => product.sale === true
  );
  const TRAINING_FEATURED_PRODUCTS = TRAINING_PRODUCTS.filter(
    (product) => product.featured === true
  );
  const TRAINING_SALE_PRODUCTS = TRAINING_PRODUCTS.filter(
    (product) => product.sale === true
  );
  const HIKING_FEATURED_PRODUCTS = HIKING_PRODUCTS.filter(
    (product) => product.featured === true
  );
  const HIKING_SALE_PRODUCTS = HIKING_PRODUCTS.filter(
    (product) => product.sale === true
  );
  const CLIMBING_FEATURED_PRODUCTS = CLIMBING_PRODUCTS.filter(
    (product) => product.featured === true
  );
  const CLIMBING_SALE_PRODUCTS = CLIMBING_PRODUCTS.filter(
    (product) => product.sale === true
  );
  const getMainCategory = (
    products: ProductProps[],
    mainCategory: mainCategoryFilter
  ) => [...new Set(products.map((product) => product[mainCategory]))];
  const getSubCategory = (
    products: ProductProps[],
    subCategory: subCategoryFilter
  ) => [...new Set(products.map((product) => product[subCategory]).flat(1))];

  const filters = {
    // GENDER
    // men: {
    //   gender: getMainCategory(filterProducts("gender", "men"), "gender"),
    //   sport: getMainCategory(filterProducts("gender", "men"), "sport"),
    //   brand: getMainCategory(filterProducts("gender", "men"), "brand").sort(),
    //   sizes: getSubCategory(filterProducts("gender", "men"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(filterProducts("gender", "men"), "colors").sort(),
    // },
    // women: {
    //   gender: getMainCategory(filterProducts("gender", "women"), "gender"),
    //   sport: getMainCategory(filterProducts("gender", "women"), "sport"),
    //   brand: getMainCategory(filterProducts("gender", "women"), "brand").sort(),
    //   sizes: getSubCategory(filterProducts("gender", "women"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(
    //     filterProducts("gender", "women"),
    //     "colors"
    //   ).sort(),
    // },

    // // SPORTS
    // running: {
    //   gender: getMainCategory(filterProducts("sport", "running"), "gender"),
    //   sport: getMainCategory(filterProducts("sport", "running"), "sport"),
    //   brand: getMainCategory(
    //     filterProducts("sport", "running"),
    //     "brand"
    //   ).sort(),
    //   sizes: getSubCategory(filterProducts("sport", "running"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(
    //     filterProducts("sport", "running"),
    //     "colors"
    //   ).sort(),
    // },
    // training: {
    //   gender: getMainCategory(filterProducts("sport", "training"), "gender"),
    //   sport: getMainCategory(filterProducts("sport", "training"), "sport"),
    //   brand: getMainCategory(
    //     filterProducts("sport", "training"),
    //     "brand"
    //   ).sort(),
    //   sizes: getSubCategory(filterProducts("sport", "training"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(
    //     filterProducts("sport", "training"),
    //     "colors"
    //   ).sort(),
    // },
    // hiking: {
    //   gender: getMainCategory(filterProducts("sport", "hiking"), "gender"),
    //   sport: getMainCategory(filterProducts("sport", "hiking"), "sport"),
    //   brand: getMainCategory(filterProducts("sport", "hiking"), "brand").sort(),
    //   sizes: getSubCategory(filterProducts("sport", "hiking"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(
    //     filterProducts("sport", "hiking"),
    //     "colors"
    //   ).sort(),
    // },
    // climbing: {
    //   gender: getMainCategory(filterProducts("sport", "climbing"), "gender"),
    //   sport: getMainCategory(filterProducts("sport", "climbing"), "sport"),
    //   brand: getMainCategory(
    //     filterProducts("sport", "climbing"),
    //     "brand"
    //   ).sort(),
    //   sizes: getSubCategory(filterProducts("sport", "climbing"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(
    //     filterProducts("sport", "climbing"),
    //     "colors"
    //   ).sort(),
    // },

    // // COLLECTIONS
    // featured: {
    //   gender: getMainCategory(filterProducts("featured", true), "gender"),
    //   sport: getMainCategory(filterProducts("featured", true), "sport"),
    //   brand: getMainCategory(filterProducts("featured", true), "brand").sort(),
    //   sizes: getSubCategory(filterProducts("featured", true), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(filterProducts("featured", true), "colors").sort(),
    // },
    // sale: {
    //   gender: getMainCategory(filterProducts("sale", true), "gender"),
    //   sport: getMainCategory(filterProducts("sale", true), "sport"),
    //   brand: getMainCategory(filterProducts("sale", true), "brand").sort(),
    //   sizes: getSubCategory(filterProducts("sale", true), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(filterProducts("sale", true), "colors").sort(),
    // },

    // // BRANDS
    // adidas: {
    //   gender: getMainCategory(filterProducts("brand", "adidas"), "gender"),
    //   sport: getMainCategory(filterProducts("brand", "adidas"), "sport"),
    //   brand: getMainCategory(filterProducts("brand", "adidas"), "brand").sort(),
    //   sizes: getSubCategory(filterProducts("brand", "adidas"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(
    //     filterProducts("brand", "adidas"),
    //     "colors"
    //   ).sort(),
    // },
    // altra: {
    //   gender: getMainCategory(filterProducts("brand", "altra"), "gender"),
    //   sport: getMainCategory(filterProducts("brand", "altra"), "sport"),
    //   brand: getMainCategory(filterProducts("brand", "altra"), "brand").sort(),
    //   sizes: getSubCategory(filterProducts("brand", "altra"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(filterProducts("brand", "altra"), "colors").sort(),
    // },
    // asics: {
    //   gender: getMainCategory(filterProducts("brand", "asics"), "gender"),
    //   sport: getMainCategory(filterProducts("brand", "asics"), "sport"),
    //   brand: getMainCategory(filterProducts("brand", "asics"), "brand").sort(),
    //   sizes: getSubCategory(filterProducts("brand", "asics"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(filterProducts("brand", "asics"), "colors").sort(),
    // },
    // brooks: {
    //   gender: getMainCategory(filterProducts("brand", "brooks"), "gender"),
    //   sport: getMainCategory(filterProducts("brand", "brooks"), "sport"),
    //   brand: getMainCategory(filterProducts("brand", "brooks"), "brand").sort(),
    //   sizes: getSubCategory(filterProducts("brand", "brooks"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(
    //     filterProducts("brand", "brooks"),
    //     "colors"
    //   ).sort(),
    // },
    // "la sportiva": {
    //   gender: getMainCategory(filterProducts("brand", "la sportiva"), "gender"),
    //   sport: getMainCategory(filterProducts("brand", "la sportiva"), "sport"),
    //   brand: getMainCategory(
    //     filterProducts("brand", "la sportiva"),
    //     "brand"
    //   ).sort(),
    //   sizes: getSubCategory(
    //     filterProducts("brand", "la sportiva"),
    //     "sizes"
    //   ).sort((a, b) => Number(a) - Number(b)),
    //   colors: getSubCategory(
    //     filterProducts("brand", "la sportiva"),
    //     "colors"
    //   ).sort(),
    // },
    // new_balance: {
    //   gender: getMainCategory(filterProducts("brand", "new balance"), "gender"),
    //   sport: getMainCategory(filterProducts("brand", "new balance"), "sport"),
    //   brand: getMainCategory(
    //     filterProducts("brand", "new balance"),
    //     "brand"
    //   ).sort(),
    //   sizes: getSubCategory(
    //     filterProducts("brand", "new balance"),
    //     "sizes"
    //   ).sort((a, b) => Number(a) - Number(b)),
    //   colors: getSubCategory(
    //     filterProducts("brand", "new balance"),
    //     "colors"
    //   ).sort(),
    // },
    // nike: {
    //   gender: getMainCategory(filterProducts("brand", "nike"), "gender"),
    //   sport: getMainCategory(filterProducts("brand", "nike"), "sport"),
    //   brand: getMainCategory(filterProducts("brand", "nike"), "brand").sort(),
    //   sizes: getSubCategory(filterProducts("brand", "nike"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(filterProducts("brand", "nike"), "colors").sort(),
    // },
    // on: {
    //   gender: getMainCategory(filterProducts("brand", "on"), "gender"),
    //   sport: getMainCategory(filterProducts("brand", "on"), "sport"),
    //   brand: getMainCategory(filterProducts("brand", "on"), "brand").sort(),
    //   sizes: getSubCategory(filterProducts("brand", "on"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(filterProducts("brand", "on"), "colors").sort(),
    // },
    // red_chili: {
    //   gender: getMainCategory(filterProducts("brand", "red chili"), "gender"),
    //   sport: getMainCategory(filterProducts("brand", "red chili"), "sport"),
    //   brand: getMainCategory(
    //     filterProducts("brand", "red chili"),
    //     "brand"
    //   ).sort(),
    //   sizes: getSubCategory(filterProducts("brand", "red chili"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(
    //     filterProducts("brand", "red chili"),
    //     "colors"
    //   ).sort(),
    // },
    // reebok: {
    //   gender: getMainCategory(filterProducts("brand", "reebok"), "gender"),
    //   sport: getMainCategory(filterProducts("brand", "reebok"), "sport"),
    //   brand: getMainCategory(filterProducts("brand", "reebok"), "brand").sort(),
    //   sizes: getSubCategory(filterProducts("brand", "reebok"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(
    //     filterProducts("brand", "reebok"),
    //     "colors"
    //   ).sort(),
    // },
    // salomon: {
    //   gender: getMainCategory(filterProducts("brand", "salomon"), "gender"),
    //   sport: getMainCategory(filterProducts("brand", "salomon"), "sport"),
    //   brand: getMainCategory(
    //     filterProducts("brand", "salomon"),
    //     "brand"
    //   ).sort(),
    //   sizes: getSubCategory(filterProducts("brand", "salomon"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(
    //     filterProducts("brand", "salomon"),
    //     "colors"
    //   ).sort(),
    // },
    // saucony: {
    //   gender: getMainCategory(filterProducts("brand", "saucony"), "gender"),
    //   sport: getMainCategory(filterProducts("brand", "saucony"), "sport"),
    //   brand: getMainCategory(
    //     filterProducts("brand", "saucony"),
    //     "brand"
    //   ).sort(),
    //   sizes: getSubCategory(filterProducts("brand", "saucony"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(
    //     filterProducts("brand", "saucony"),
    //     "colors"
    //   ).sort(),
    // },
    // scarpa: {
    //   gender: getMainCategory(filterProducts("brand", "scarpa"), "gender"),
    //   sport: getMainCategory(filterProducts("brand", "scarpa"), "sport"),
    //   brand: getMainCategory(filterProducts("brand", "scarpa"), "brand").sort(),
    //   sizes: getSubCategory(filterProducts("brand", "scarpa"), "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(
    //     filterProducts("brand", "scarpa"),
    //     "colors"
    //   ).sort(),
    // },
    // under_armour: {
    //   gender: getMainCategory(
    //     filterProducts("brand", "under armour"),
    //     "gender"
    //   ),
    //   sport: getMainCategory(filterProducts("brand", "under armour"), "sport"),
    //   brand: getMainCategory(
    //     filterProducts("brand", "under armour"),
    //     "brand"
    //   ).sort(),
    //   sizes: getSubCategory(
    //     filterProducts("brand", "under armour"),
    //     "sizes"
    //   ).sort((a, b) => Number(a) - Number(b)),
    //   colors: getSubCategory(
    //     filterProducts("brand", "under armour"),
    //     "colors"
    //   ).sort(),
    // },

    // GENDER_SPORT
    // menrunning: {
    //   gender: getMainCategory(MEN_RUNNING_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_RUNNING_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_RUNNING_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_RUNNING_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_RUNNING_PRODUCTS, "colors").sort(),
    // },
    // mentraining: {
    //   gender: getMainCategory(MEN_TRAINING_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_TRAINING_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_TRAINING_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_TRAINING_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_TRAINING_PRODUCTS, "colors").sort(),
    // },
    // menhiking: {
    //   gender: getMainCategory(MEN_HIKING_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_HIKING_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_HIKING_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_HIKING_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_HIKING_PRODUCTS, "colors").sort(),
    // },
    // menclimbing: {
    //   gender: getMainCategory(MEN_CLIMBING_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_CLIMBING_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_CLIMBING_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_CLIMBING_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_CLIMBING_PRODUCTS, "colors").sort(),
    // },
    // womenrunning: {
    //   gender: getMainCategory(WOMEN_RUNNING_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_RUNNING_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_RUNNING_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_RUNNING_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_RUNNING_PRODUCTS, "colors").sort(),
    // },
    // womentraining: {
    //   gender: getMainCategory(WOMEN_TRAINING_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_TRAINING_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_TRAINING_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_TRAINING_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_TRAINING_PRODUCTS, "colors").sort(),
    // },
    // womenhiking: {
    //   gender: getMainCategory(WOMEN_HIKING_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_HIKING_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_HIKING_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_HIKING_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_HIKING_PRODUCTS, "colors").sort(),
    // },
    // womenclimbing: {
    //   gender: getMainCategory(WOMEN_CLIMBING_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_CLIMBING_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_CLIMBING_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_CLIMBING_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_CLIMBING_PRODUCTS, "colors").sort(),
    // },
    // menfeatured: {
    //   gender: getMainCategory(MEN_FEATURED_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_FEATURED_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_FEATURED_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_FEATURED_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_FEATURED_PRODUCTS, "colors").sort(),
    // },
    // mensale: {
    //   gender: getMainCategory(MEN_SALE_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_SALE_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_SALE_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_SALE_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_SALE_PRODUCTS, "colors").sort(),
    // },
    // womenfeatured: {
    //   gender: getMainCategory(WOMEN_FEATURED_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_FEATURED_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_FEATURED_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_FEATURED_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_FEATURED_PRODUCTS, "colors").sort(),
    // },
    // womensale: {
    //   gender: getMainCategory(WOMEN_SALE_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_SALE_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_SALE_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_SALE_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_SALE_PRODUCTS, "colors").sort(),
    // },

    // GENDER_BRAND
    // menadidas: {
    //   gender: getMainCategory(MEN_ADIDAS_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_ADIDAS_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_ADIDAS_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_ADIDAS_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_ADIDAS_PRODUCTS, "colors").sort(),
    // },
    // menaltra: {
    //   gender: getMainCategory(MEN_ALTRA_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_ALTRA_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_ALTRA_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_ALTRA_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_ALTRA_PRODUCTS, "colors").sort(),
    // },
    // menasics: {
    //   gender: getMainCategory(MEN_ASICS_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_ASICS_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_ASICS_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_ASICS_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_ASICS_PRODUCTS, "colors").sort(),
    // },
    // menbrooks: {
    //   gender: getMainCategory(MEN_BROOKS_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_BROOKS_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_BROOKS_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_BROOKS_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_BROOKS_PRODUCTS, "colors").sort(),
    // },
    // menlasportiva: {
    //   gender: getMainCategory(MEN_LA_SPORTIVA_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_LA_SPORTIVA_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_LA_SPORTIVA_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_LA_SPORTIVA_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_LA_SPORTIVA_PRODUCTS, "colors").sort(),
    // },
    // mennewbalance: {
    //   gender: getMainCategory(MEN_NEW_BALANCE_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_NEW_BALANCE_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_NEW_BALANCE_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_NEW_BALANCE_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_NEW_BALANCE_PRODUCTS, "colors").sort(),
    // },
    // mennike: {
    //   gender: getMainCategory(MEN_NIKE_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_NIKE_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_NIKE_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_NIKE_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_NIKE_PRODUCTS, "colors").sort(),
    // },
    // menon: {
    //   gender: getMainCategory(MEN_ON_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_ON_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_ON_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_ON_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_ON_PRODUCTS, "colors").sort(),
    // },
    // menredchili: {
    //   gender: getMainCategory(MEN_RED_CHILI_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_RED_CHILI_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_RED_CHILI_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_RED_CHILI_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_RED_CHILI_PRODUCTS, "colors").sort(),
    // },
    // menreebok: {
    //   gender: getMainCategory(MEN_REEBOK_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_REEBOK_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_REEBOK_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_REEBOK_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_REEBOK_PRODUCTS, "colors").sort(),
    // },
    // mensalomon: {
    //   gender: getMainCategory(MEN_SALAMON_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_SALAMON_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_SALAMON_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_SALAMON_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_SALAMON_PRODUCTS, "colors").sort(),
    // },
    // mensaucony: {
    //   gender: getMainCategory(MEN_SAUCONY_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_SAUCONY_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_SAUCONY_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_SAUCONY_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_SAUCONY_PRODUCTS, "colors").sort(),
    // },
    // menscarpa: {
    //   gender: getMainCategory(MEN_SCARPA_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_SCARPA_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_SCARPA_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_SCARPA_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_SCARPA_PRODUCTS, "colors").sort(),
    // },
    // menunderarmour: {
    //   gender: getMainCategory(MEN_UNDER_ARMOUR_PRODUCTS, "gender"),
    //   sport: getMainCategory(MEN_UNDER_ARMOUR_PRODUCTS, "sport"),
    //   brand: getMainCategory(MEN_UNDER_ARMOUR_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(MEN_UNDER_ARMOUR_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(MEN_UNDER_ARMOUR_PRODUCTS, "colors").sort(),
    // },
    // womenadidas: {
    //   gender: getMainCategory(WOMEN_ADIDAS_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_ADIDAS_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_ADIDAS_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_ADIDAS_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_ADIDAS_PRODUCTS, "colors").sort(),
    // },
    // womenaltra: {
    //   gender: getMainCategory(WOMEN_ALTRA_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_ALTRA_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_ALTRA_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_ALTRA_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_ALTRA_PRODUCTS, "colors").sort(),
    // },
    // womenasics: {
    //   gender: getMainCategory(WOMEN_ASICS_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_ASICS_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_ASICS_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_ASICS_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_ASICS_PRODUCTS, "colors").sort(),
    // },
    // womenbrooks: {
    //   gender: getMainCategory(WOMEN_BROOKS_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_BROOKS_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_BROOKS_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_BROOKS_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_BROOKS_PRODUCTS, "colors").sort(),
    // },
    // womenlasportiva: {
    //   gender: getMainCategory(WOMEN_LA_SPORTIVA_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_LA_SPORTIVA_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_LA_SPORTIVA_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_LA_SPORTIVA_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_LA_SPORTIVA_PRODUCTS, "colors").sort(),
    // },
    // womennewbalance: {
    //   gender: getMainCategory(WOMEN_NEW_BALANCE_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_NEW_BALANCE_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_NEW_BALANCE_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_NEW_BALANCE_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_NEW_BALANCE_PRODUCTS, "colors").sort(),
    // },
    // womennike: {
    //   gender: getMainCategory(WOMEN_NIKE_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_NIKE_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_NIKE_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_NIKE_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_NIKE_PRODUCTS, "colors").sort(),
    // },
    // womenon: {
    //   gender: getMainCategory(WOMEN_ON_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_ON_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_ON_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_ON_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_ON_PRODUCTS, "colors").sort(),
    // },
    // womenredchili: {
    //   gender: getMainCategory(WOMEN_RED_CHILI_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_RED_CHILI_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_RED_CHILI_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_RED_CHILI_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_RED_CHILI_PRODUCTS, "colors").sort(),
    // },
    // womenreebok: {
    //   gender: getMainCategory(WOMEN_REEBOK_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_REEBOK_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_REEBOK_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_REEBOK_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_REEBOK_PRODUCTS, "colors").sort(),
    // },
    // womensalomon: {
    //   gender: getMainCategory(WOMEN_SALAMON_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_SALAMON_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_SALAMON_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_SALAMON_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_SALAMON_PRODUCTS, "colors").sort(),
    // },
    // womensaucony: {
    //   gender: getMainCategory(WOMEN_SAUCONY_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_SAUCONY_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_SAUCONY_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_SAUCONY_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_SAUCONY_PRODUCTS, "colors").sort(),
    // },
    // womenscarpa: {
    //   gender: getMainCategory(WOMEN_SCARPA_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_SCARPA_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_SCARPA_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_SCARPA_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_SCARPA_PRODUCTS, "colors").sort(),
    // },
    // womenunderarmour: {
    //   gender: getMainCategory(WOMEN_UNDER_ARMOUR_PRODUCTS, "gender"),
    //   sport: getMainCategory(WOMEN_UNDER_ARMOUR_PRODUCTS, "sport"),
    //   brand: getMainCategory(WOMEN_UNDER_ARMOUR_PRODUCTS, "brand").sort(),
    //   sizes: getSubCategory(WOMEN_UNDER_ARMOUR_PRODUCTS, "sizes").sort(
    //     (a, b) => Number(a) - Number(b)
    //   ),
    //   colors: getSubCategory(WOMEN_UNDER_ARMOUR_PRODUCTS, "colors").sort(),
    // },

    // SPORT_COLLECTION
    runningfeatured: {
      gender: getMainCategory(RUNNING_FEATURED_PRODUCTS, "gender"),
      sport: getMainCategory(RUNNING_FEATURED_PRODUCTS, "sport"),
      brand: getMainCategory(RUNNING_FEATURED_PRODUCTS, "brand").sort(),
      sizes: getSubCategory(RUNNING_FEATURED_PRODUCTS, "sizes").sort(
        (a, b) => Number(a) - Number(b)
      ),
      colors: getSubCategory(RUNNING_FEATURED_PRODUCTS, "colors").sort(),
    },
    runningsale: {
      gender: getMainCategory(RUNNING_SALE_PRODUCTS, "gender"),
      sport: getMainCategory(RUNNING_SALE_PRODUCTS, "sport"),
      brand: getMainCategory(RUNNING_SALE_PRODUCTS, "brand").sort(),
      sizes: getSubCategory(RUNNING_SALE_PRODUCTS, "sizes").sort(
        (a, b) => Number(a) - Number(b)
      ),
      colors: getSubCategory(RUNNING_SALE_PRODUCTS, "colors").sort(),
    },
    trainingfeatured: {
      gender: getMainCategory(TRAINING_FEATURED_PRODUCTS, "gender"),
      sport: getMainCategory(TRAINING_FEATURED_PRODUCTS, "sport"),
      brand: getMainCategory(TRAINING_FEATURED_PRODUCTS, "brand").sort(),
      sizes: getSubCategory(TRAINING_FEATURED_PRODUCTS, "sizes").sort(
        (a, b) => Number(a) - Number(b)
      ),
      colors: getSubCategory(TRAINING_FEATURED_PRODUCTS, "colors").sort(),
    },
    trainingsale: {
      gender: getMainCategory(TRAINING_SALE_PRODUCTS, "gender"),
      sport: getMainCategory(TRAINING_SALE_PRODUCTS, "sport"),
      brand: getMainCategory(TRAINING_SALE_PRODUCTS, "brand").sort(),
      sizes: getSubCategory(TRAINING_SALE_PRODUCTS, "sizes").sort(
        (a, b) => Number(a) - Number(b)
      ),
      colors: getSubCategory(TRAINING_SALE_PRODUCTS, "colors").sort(),
    },
    hikingfeatured: {
      gender: getMainCategory(HIKING_FEATURED_PRODUCTS, "gender"),
      sport: getMainCategory(HIKING_FEATURED_PRODUCTS, "sport"),
      brand: getMainCategory(HIKING_FEATURED_PRODUCTS, "brand").sort(),
      sizes: getSubCategory(HIKING_FEATURED_PRODUCTS, "sizes").sort(
        (a, b) => Number(a) - Number(b)
      ),
      colors: getSubCategory(HIKING_FEATURED_PRODUCTS, "colors").sort(),
    },
    hikingsale: {
      gender: getMainCategory(HIKING_SALE_PRODUCTS, "gender"),
      sport: getMainCategory(HIKING_SALE_PRODUCTS, "sport"),
      brand: getMainCategory(HIKING_SALE_PRODUCTS, "brand").sort(),
      sizes: getSubCategory(HIKING_SALE_PRODUCTS, "sizes").sort(
        (a, b) => Number(a) - Number(b)
      ),
      colors: getSubCategory(HIKING_SALE_PRODUCTS, "colors").sort(),
    },
    climbingfeatured: {
      gender: getMainCategory(CLIMBING_FEATURED_PRODUCTS, "gender"),
      sport: getMainCategory(CLIMBING_FEATURED_PRODUCTS, "sport"),
      brand: getMainCategory(CLIMBING_FEATURED_PRODUCTS, "brand").sort(),
      sizes: getSubCategory(CLIMBING_FEATURED_PRODUCTS, "sizes").sort(
        (a, b) => Number(a) - Number(b)
      ),
      colors: getSubCategory(CLIMBING_FEATURED_PRODUCTS, "colors").sort(),
    },
    climbingsale: {
      gender: getMainCategory(CLIMBING_SALE_PRODUCTS, "gender"),
      sport: getMainCategory(CLIMBING_SALE_PRODUCTS, "sport"),
      brand: getMainCategory(CLIMBING_SALE_PRODUCTS, "brand").sort(),
      sizes: getSubCategory(CLIMBING_SALE_PRODUCTS, "sizes").sort(
        (a, b) => Number(a) - Number(b)
      ),
      colors: getSubCategory(CLIMBING_SALE_PRODUCTS, "colors").sort(),
    },
  };

  console.log(filters);
}
