import app from "./app.js";

app.listen(
  app.get('port'), () =>
  {
    console.log('Server on Port', app.get('port'));
  }
)

export default app;
