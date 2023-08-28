import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {apiUrl, filterData} from './data'
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const[courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState(filterData[0].title);


  async function fetchData(){
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      // console.log(output);
      setCourses(output.data);
    } 
    catch (error) {
      toast.error(" Something Went wrong!")
    }
    setLoading(false);
  }

  useEffect(() =>{
    fetchData();
  },[]);


  return (
    <div className=" min-h-screen flex flex-col bg-bgDark2">
      <div>
        <NavBar></NavBar>

      </div>
      <div>
        <div>
          <Filter 
          category={category}
          setCategory={setCategory}
          filterData={filterData}
          ></Filter>
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}></Cards>)
          }
        </div>
      </div>
    </div>
  );
};

export default App;
