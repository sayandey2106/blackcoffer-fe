import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Dashboard/Main";
import Login from "./components/Login/Login";
import CountryChart from "./components/Dashboard/Country";
import IntensityChart from "./components/Dashboard/IntensityChart";
import RegionChart from "./components/Dashboard/RegionChart";
import RelevanceBubbleChart from "./components/Dashboard/Relevance";
import PieChart from "./components/Dashboard/SectorChart";
import LikelihoodRadarChart from "./components/Dashboard/LikelihoodChart";
import axios from "axios";
import AdminDashboard from "./components/Dashboard/Sidebar";
import TopicsPolarAreaChart from "./components/Dashboard/TopicChart";
const AppRouter = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "https://blackcoffer-node-backend.onrender.com";
      try {
        const response = await axios.get(`${API_URL}/api/data`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);
  return (
    <Router>
      <AdminDashboard />
      <Routes>
        <Route path="/dashboard" element={<Main data={data}/>} />
        <Route path="/country" element={<CountryChart data={data}/>} />
        <Route path="/intensity" element={<IntensityChart data={data}/>} />
        <Route path="/region" element={<RegionChart data={data}/>} />
        <Route path="/relevance" element={<RelevanceBubbleChart data={data}/>} />
        <Route path="/sectorchart" element={<PieChart data={data}/>} />
        <Route path="/likelihood" element={<LikelihoodRadarChart data={data}/>} />
        <Route path="/topic" element={<TopicsPolarAreaChart data={data}/>} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
