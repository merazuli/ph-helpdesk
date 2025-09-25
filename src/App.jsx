import './App.css'
import Footer from './components/Footer'
import Navbar from './components/navbar'
import Toggles_Btns from './components/Toggles_Btns';
import IssueManagement from './components/IssueManagement';
import { Suspense } from 'react';

const fetchIssues = async () => {
  const result = await fetch("/public/data.json")
  return result.json();
}

const fetchPromise = fetchIssues()
function App() {

  return (
    <>
      {/* <Navbar></Navbar> */}

      {/* main  */}

      <Suspense fallback={<h1>Loading.....</h1>}>
        <IssueManagement fetchPromise={fetchPromise}></IssueManagement>
      </Suspense>



      {/* <Footer></Footer> */}


    </>
  )
}

export default App
