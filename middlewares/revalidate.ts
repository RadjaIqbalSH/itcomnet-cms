module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    console.log("strapi => ", strapi)
    await next();
    if(ctx.request.method !== "GET") {
      try {
        await fetch("http://127.0.0.1:3000/api/revalidate", {
          headers: {
            secret: "itcomnet",
          }
        })
      } catch (error) {
        // console.log("error")
      }
    }
  };
};