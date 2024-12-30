import Sidebar from '../components/SideBar.js';
import Header from '../components/Header.js';
import IntegrationCard from '../components/IntegrationCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        <div className="container">
          <h2 className="mb-4">Integrations</h2>
          <input type="text" className="form-control mb-4" placeholder="Search connections" />
          <IntegrationCard
          />
        </div>
      </div>
    </div>
  );
}
