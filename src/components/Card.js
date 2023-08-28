import React, { useState } from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

function Card(props) {
    let course = props.course;
    let likedCouses = props.likedCouses;
    let setLikedCourses = props.setLikedCourses;
     const description = props.description;

    function likeHandler(){
        if(likedCouses.includes(course.id)){
            setLikedCourses( (prev) => prev.filter( (courseId) => (courseId !== course.id)));
            toast.warning("Like Remove");
        }
        else{
            if(likedCouses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses( (prev) => [...prev, course.id]);
            }
            toast.success("Like Successfully")
        }
    }

  return (
    <div className='w-[300px] bg-bgDark rounded-md oveflow-hidden'>
        <div className='relative'>
            <img className='rounded-t-md' src={course.image.url}></img>
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-4 grid place-items-center'>
                <button onClick={likeHandler}>
                    {
                        likedCouses.includes(course.id) ?
                        (<FcLike fontSize='1.75rem'/>) :
                        (<FcLikePlaceholder fontSize='1.75rem'/>) 
                    }
                </button>
            </div>
        </div>

        <div className='p-4'>
            <h2 className='text-white font-semibold text-lg leading-6'>{course.title}</h2>
            <p className='mt-4 text-white'>{
                course.description.length > 100 ?
                (course.description.substring(0, 100)) + "..." :
                (course.description)
            }</p>
        </div>
    </div>
  )
}

export default Card