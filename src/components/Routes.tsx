import { Route } from "wouter";
import IndexPage from "../pages/index";
import WorkersPage from "../pages/workers/WorkersPage";
import FilesPage from "../pages/files/FilesPage";
import InventoryPage from "../pages/inventory/InventoryPage";
import BenefitsPage from "../pages/benefits/BenefitsPage";

export default function Routes() {
  return (
    <>
      <Route path="/" component={IndexPage} />
      <Route path="/workers" component={WorkersPage} />
      <Route path="/files" component={FilesPage} />
      <Route path="/inventory" component={InventoryPage} />
      <Route path="/benefits" component={BenefitsPage} />
    </>
  );
}
