import { all, call } from "typed-redux-saga";
import { shopCollectionSagas } from "./shopCollection/shopCollection.saga";
import { userSagas } from "./user/user.saga";
import { searchProductsSagas } from "./searchProducts/searchProducts.saga";
// import { cartSagas } from "./cart/cart.saga";

export function* rootSaga() {
  yield* all([
    call(shopCollectionSagas),
    call(userSagas),
    call(searchProductsSagas),
    // call(cartSagas),
  ]);
}
