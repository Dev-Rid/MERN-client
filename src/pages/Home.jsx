import React, { useEffect, useState } from 'react'
import Workoutdetails from '../components/Workoutdetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () =>{
      const response = await fetch("/api/workouts") 
      const json = await response.json()
   
      if(response.ok){
        dispatch({type: "SET_WORKOUTS", payload:json})
      }
     }

     fetchWorkouts()
  }, [])


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