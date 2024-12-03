import { PrimeReactProvider } from "primereact/api";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LandingPage } from "./pages/Landing";

function App() {
  return (
    <PrimeReactProvider>
      <div
        className="w-screen h-screen bg-white p-0 m-0 overflow-x-hidden"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/*
              <Route path="/home" element={<Home />}>
                <Route path="reservas" element={<ManageReservations />} />
                <Route path="checkin" element={<CheckInCheckOut />} />
                <Route path="quartos" element={<ManageRooms />} />
                <Route path="servicos" element={<AdditionalServices />} />
                <Route path="pagamentos" element={<PaymentManagement />} />
                <Route path="relatorios" element={<ReportsAndStatistics />} />
                <Route path="perfil" element={<MyProfile />} />
                <Route path="configuracoes" element={<SystemSettings />} />
                <Route path="suporte" element={<HelpAndSupport />} />
              </Route>
            */}
          </Routes>
        </Router>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
