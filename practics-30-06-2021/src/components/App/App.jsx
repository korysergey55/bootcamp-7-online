import AppRoutes from "routes/AppRoutes";
import routes from "routes/main.routes";
import CommonLayout from "../../layouts/CommonLayout";

function App() {
  return (
    <CommonLayout>
      <AppRoutes routes={routes} fallback={<p>Loading...</p>} />
    </CommonLayout>
  );
}

export default App;
