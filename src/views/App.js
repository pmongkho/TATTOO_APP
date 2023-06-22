
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientForm from './screens/ClientForm';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="h-full m-0 p-0">
         <BrowserRouter>
        <Routes>

        <Route path="/" element={<ClientForm />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}

          </Route>

        </Routes>
        <Navbar />

    </BrowserRouter>
{/* <Login /> */}
{/* <Dashboard /> */}
    </div>
  );
}

export default App;
