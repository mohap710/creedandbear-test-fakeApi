export const advancedQuery = (data) => async (request, response, next) => {

  // Pagination
  const total = data.length;
  const page = parseInt(request.query.page, 10) || 1;
  const limit = parseInt(request.query.limit, 10) || 10;
  const total_pages = Math.ceil(total / limit);
  const firstIndex = (page - 1) * limit;
  let lastIndex = page * limit;
  
  if(page > total_pages){
        response.queryResult = {
            success:false,
            message:"Invalid page"
        }
        return next()
  }
  const result = data.slice(firstIndex, lastIndex);

  response.queryResult = {
    success: true,
    page,
    per_page: limit,
    total,
    total_pages,
    data: result,
  };
  next();
};
