// Add data to local storage

const addToDb = (id) => {
  let appliedJobs = [];
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    appliedJobs = JSON.parse(storedJobs);
  }
  const exists = appliedJobs.includes(id);
  if (!exists) {
    appliedJobs.push(id);
  }

  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
};

const getStoredJobs = () => {
  let appliedJobs = [];
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    appliedJobs = JSON.parse(storedJobs);
  }
  return appliedJobs;
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export {
  addToDb,
  getStoredJobs,
  removeFromDb,
  deleteShoppingCart as clearCart,
};
