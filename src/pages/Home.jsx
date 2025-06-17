// import React, { useEffect, useState } from 'react'
import { useEffect } from 'react'
import Workoutdetails from '../components/Workoutdetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'


const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () =>{
      // console.log("Token being sent:", user?.token);

      const response = await fetch("/api/workouts", {
        headers:{
          "Authorization": `Bearer ${user.token}`
        }
      }) 
      const json = await response.json()
   
      if(response.ok){
        dispatch({type: "SET_WORKOUTS", payload:json})
      }
     }

     if(user){
      fetchWorkouts()
     }

  }, [dispatch, user])


  return (
    <div className='home'>
        <div className='workouts'>
            {workouts && workouts.map((workout) => (
              // <p key={workout._id}>{workout.title}</p>
              <Workoutdetails key={workout._id} workout={workout} /> 
            ))

            }
        </div>
        <WorkoutForm/>
    </div>
  )
}

export default Home