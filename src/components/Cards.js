import React, { useState } from 'react'
import Card from './Card';

function Cards(props) {
    let courses = props.courses;
    let category = props.category;
    const [likedCouses, setLikedCourses] = useState([]);

    
    function getCourses(){

        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            // mein sirf specific category ka array data pas krunga
            return courses[category];
        }
    
       
    }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map ((course) => {
                return <Card key={course.id} course={course} likedCouses={likedCouses} 
                    setLikedCourses={setLikedCourses}
                />
            })
        }
    </div>
  )
}

export default Cards;