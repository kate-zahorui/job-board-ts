import { Route, Routes } from "react-router-dom";
import { DetailedJob, JobBoard, NotFound } from "../pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JobBoard />} />
      <Route path="/:jobId" element={<DetailedJob />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
