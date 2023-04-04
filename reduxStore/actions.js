const setCurrentPage = (page) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: page,
  };
};

export default setCurrentPage;
